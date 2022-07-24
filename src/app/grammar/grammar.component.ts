import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { codeSttring } from './utils/helpers';
import { ExpressionGrammarModel, RuleSetInterface } from './grammar.model';
import { grammarGraphConfig } from './cyto-graph/config';
import { SPEED } from '../app.config';
import { Observable } from 'rxjs';
import * as introJS from 'intro.js';
import { GrammarGraphService } from './cyto-graph/grammar-graph.service';
import { GrammarService } from './grammar.service';
import { grammarAnimation } from './grammar.animation';
import { GrammarIntroConfig } from './utils/introJS';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss'],
  animations: grammarAnimation,
})
export class GrammarComponent implements OnInit, AfterViewInit {
  modes: any = ['Ableitung', 'Ableitungsbaum (falls Zeit bleibt)'];
  mode: any = 'Ableitung';
  code = codeSttring;
  expressionGrammar = new ExpressionGrammarModel('');
  cyConfig: any;
  state: string = 'stop';
  SPEED = SPEED;
  speed = 2;
  timer!: Observable<number>;
  rules: RuleSetInterface[] = [];

  @ViewChild('listElement') listElement!: ElementRef<any>;

  constructor(private grammarGraphService: GrammarGraphService, private grammerService: GrammarService) {}

  ngOnInit(): void {
    this.grammerService.state.subscribe((v) => {
      this.state = v;
    });
  }

  ngAfterViewInit() {
    this.grammerService.animatedRulesStream.subscribe((v) => {
      this.rules = v;

      if (this.listElement) {
        const element = this.listElement.nativeElement;
        const parent = element.parentNode;
        const children = element.children;
        parent.scrollTop = children[children.length - 1].offsetTop - 20;
      }
    });
  }

  ngOnSpeedChange(v: number) {
    this.grammerService.speed.next(v);
    this.speed = v;
  }

  generateExpression(isCorrect = true) {
    if (isCorrect) {
      this.expressionGrammar.generateCorrectExpression();
      this.cyConfig = grammarGraphConfig;
    } else {
      this.expressionGrammar.generateWrongExpression();
    }

    this.grammerService.init(this.expressionGrammar.ruleSet);

    this.onBegin();
  }

  startTour(): void {
    const intro = introJS();
    intro.setOptions(GrammarIntroConfig).start();
  }

  onNext(shouldNotStop = false): void {
    this.grammerService.onNext();
  }

  onPrevious(): void {
    this.grammerService.onPrevious();
  }

  onBegin(): void {
    this.grammerService.onBegin();
  }

  onEnd(): void {
    this.grammerService.onEnd();
  }

  onStop(): void {
    this.grammerService.onReset();
  }

  onPlay(): void {
    if (this.state === 'start') {
      return;
    }
    this.grammerService.onPlay();
  }

  onReset(): void {
    this.grammerService.onReset();
  }

  onPause(): void {
    this.grammerService.onPause();
  }

  onManualExpressionChange(exp: string) {
    this.grammerService.onReset();
    this.expressionGrammar.Expression = exp;
    this.grammerService.init(this.expressionGrammar.ruleSet);
  }
}
