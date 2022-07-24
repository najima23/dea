import { Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/dialog/dialog.component';
import * as introJS from 'intro.js';
import { introJsConfig } from './intro.config';
import { cytoscapeConfig, ELEMENT_DATA } from './table.config';
import { StateMachine } from 'xstate';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { CytoGraphService } from './cyto-graph/cyto-graph.service';
import { dialogConfig, CSPEED, SPEED } from '../app.config';
import { DeaService } from './dea.service';

@Component({
  selector: 'app-dea',
  templateUrl: './dea.component.html',
  styleUrls: ['./dea.component.scss'],
})
export class DeaComponent implements OnInit {
  displayedColumns: string[] = ['q0', 'e', 'q1'];
  dataSource = ELEMENT_DATA;
  cyConfig = cytoscapeConfig;
  speed = CSPEED;
  xState: StateMachine<any, any, any, { value: any; context: any }>;
  toggleService!: any;
  reberConstruct: { id: string; s: string; trans: string }[] = [];
  animationObject: any = { current: -1 };
  timer!: Observable<number>;
  endState = new BehaviorSubject('stop');
  errorState: any;

  @Input() reberString = '';
  @Input() ausgabeString = '';

  @ViewChildren('matRows', { read: ElementRef })
  matRows!: QueryList<ElementRef>;
  @ViewChild('tableMain', { read: ElementRef }) tableMain!: ElementRef;

  constructor(
    public dialog: MatDialog,
    private renderer: Renderer2,
    private deaService: DeaService,
    private cytoService: CytoGraphService
  ) {
    this.xState = this.deaService.createReberMachine();
    this.cytoService.errorSate.subscribe((v) => {
      this.errorState = {
        ...v,
        hm: `Das Reberwort ${this.reberString.substring(
          0,
          this.reberConstruct.length - 1
        )}<span class="red">${this.reberString.substring(
          this.reberConstruct.length - 1,
          this.reberConstruct.length
        )}</span>${this.reberString.substring(
          this.reberConstruct.length,
          this.reberString.length
        )} ist an der Stelle ${this.reberString.slice(
          this.reberConstruct.length - 1,
          this.reberConstruct.length
        )} nicht definiert. ${v.msg}`,
      };
    });
  }

  ngOnInit(): void {
    this.toggleService = this.deaService.createDefaultReberFSM();
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, dialogConfig);
  }

  startTour(): void {
    const intro = introJS();
    intro.setOptions(introJsConfig).start();
  }

  generateReberString(): void {
    const { reberConstruct, reberString } = this.deaService.generateReberString();
    this.evaluateString(reberString, 'Korrekt');
    this.reberString = reberString;
    this.reberConstruct = reberConstruct;

    this.onStart();
  }

  generateNonReberString(): void {
    const { reberConstruct, reberString } = this.deaService.generateNonReber();

    this.reberConstruct = reberConstruct;
    this.evaluateString(reberString, 'Falsch');
    this.reberString = reberString;
    this.onStart();
  }

  animateStep() {
    this.cytoService.animateStep(this.reberConstruct[this.animationObject.current].trans, SPEED[this.speed]);
  }

  evaluateString(str: any, initialAusgabeString?: string): void {
    const { reberString, ausgabeString } = this.deaService.evaluateString(str, initialAusgabeString);

    this._resetAnimationObject();
    this.reberString = reberString;
    this.ausgabeString = ausgabeString;
    this.renderer.addClass(this.tableMain.nativeElement, 'active');
    this.reberConstruct = this.deaService.generateReberConstruct(reberString);
  }

  onNext(shouldNotStop = false): void {
    this.renderer.removeClass(this.tableMain.nativeElement, 'active');

    if (this.animationObject.current < this.reberConstruct.length - 1) {
      this.animationObject.current++;
    }

    this.animateStep();
    this.renderTableRows();

    if (!shouldNotStop) {
      this.endState.next('stop');
    }
  }

  renderTableRows() {
    this.matRows.forEach((r) => {
      const id = this.reberConstruct[this.animationObject.current].trans;

      if (id === 'error') {
        return;
      }

      if (id === r.nativeElement.id) {
        this.renderer.addClass(r.nativeElement, 'active');
      } else {
        this.renderer.removeClass(r.nativeElement, 'active');
      }
    });
  }

  onPrevious(): void {
    if (this.animationObject.current < 1) {
      this.renderer.addClass(this.tableMain.nativeElement, 'active');
      this.renderer.removeClass(this.matRows.first.nativeElement, 'active');
      this.cytoService.resetAnimation();

      if (this.animationObject.current !== -1) {
        --this.animationObject.current;
      }
      return;
    }
    --this.animationObject.current;

    this.animateStep();

    this.renderTableRows();

    this.endState.next('stop');
  }

  onStart(): void {
    this.onStop();
  }

  onEnd(): void {
    this.animationObject.current = this.reberConstruct.length - 1;
    this.renderer.removeClass(this.tableMain.nativeElement, 'active');
    this.matRows.forEach((r) => {
      this.renderer.removeClass(r.nativeElement, 'active');
      if (this.reberConstruct[this.animationObject.current].trans === r.nativeElement.id) {
        this.renderer.addClass(r.nativeElement, 'active');
      } else {
        this.renderer.removeClass(r.nativeElement, 'active');
      }
    });
    this.animateStep();
    this.endState.next('stop');
  }

  onStop(): void {
    this._resetAnimationObject();
    this.cytoService.resetAnimation();
    this.renderer.addClass(this.tableMain.nativeElement, 'active');
    this.matRows.forEach((r) => {
      this.renderer.removeClass(r.nativeElement, 'active');
    });
    this.endState.next('stop');
  }

  onPlay(): void {
    this.timer = interval(5000 / this.speed);
    const source = this.timer;

    if (this.animationObject.current === this.reberConstruct.length - 1) {
      this.onStop();
    }

    this.endState.next('start');

    source.pipe(takeWhile(() => this.endState.value !== 'stop')).subscribe(() => {
      this.onNext(true);
      if (this.animationObject.current === this.reberConstruct.length - 1) {
        this.endState.next('stop');
      }
    });
  }

  onPause(): void {
    this.endState.next('stop');
  }

  private _resetAnimationObject() {
    this.animationObject.current = -1;
  }
}
