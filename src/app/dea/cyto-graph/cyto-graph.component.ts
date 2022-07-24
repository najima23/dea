import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import * as cytoscape from 'cytoscape';
import { disableScroll, enableScroll } from '../../../utils/helpers';
import { CytoGraphService } from './cyto-graph.service';

@Component({
  selector: 'app-cyto-graph',
  template: '<div id="cy"></div>',
  styles: [
    '#cy { height: calc(100% - 70px);\n' +
      '        width: 100%;\n' +
      '        position: absolute;\n' +
      '        left: 0;\n' +
      '        top: 0; }',
  ],
})
export class CytoGraphComponent implements OnChanges {
  cy!: any;
  @Input() public cyConfig: any;
  @Input() public zoom: { min: number; max: number } = { min: 0.1, max: 1.5 };

  @Output() selectNode: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('mouseenter', ['$event'])
  mouseEnter(): void {
    disableScroll();
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeave(): void {
    enableScroll();
  }

  constructor(private renderer: Renderer2, private el: ElementRef, private cytoService: CytoGraphService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  public render(): void {
    const cyContianer = this.renderer.selectRootElement('#cy');

    // @ts-ignore
    this.cy = cytoscape({
      container: cyContianer,
      ...this.cyConfig,
    });

    this.cy.userZoomingEnabled(false);
    this.cytoService.setInstance(this.cy);
  }
}
