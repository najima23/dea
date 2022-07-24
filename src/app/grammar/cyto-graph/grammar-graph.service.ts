import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GrammarGraphService {
  cy: any;
  previousElements: any = [];
  lastNode: any = null;
  errorSate = new BehaviorSubject({ state: false, msg: '' });

  constructor() {}

  public setInstance(instance: any): void {
    this.cy = instance;
  }

  public resetAnimation() {
    for (const c of this.cy.edges().toArray()) {
      const se = c.connectedNodes().toArray();
      const node1 = se[0] && se[0];
      const node2 = se[1] ? se[1] : se[0];

      if (node1.id() !== 'start') {
        node1.style({
          lineColor: 'black',
          color: 'black',
          'border-width': '1px',
          'border-color': 'black',
        });
      }
      node2.style({
        lineColor: 'black',
        'border-width': '1px',
        color: 'black',
        'border-color': 'black',
      });
      c.style({
        lineColor: '#ccc',
        opacity: 1,
        width: '3px',
        color: 'black',
        'border-color': 'black',
      });
    }

    this.errorSate.next({ state: false, msg: '' });
  }

  public animateStep(str: string, speed = 1000): void {
    speed = speed / 15;

    if (str !== 'error') {
      this.errorSate.next({ state: false, msg: '' });
      for (const c of this.cy.edges().toArray()) {
        const se = c.connectedNodes().toArray();
        const node1 = se[0] && se[0];
        const node2 = se[1] ? se[1] : se[0];

        if (node1.id() + c.data('label') + node2.id() !== str) {
          setTimeout(() => {
            if (node1.id() !== 'start') {
              node1.style({
                lineColor: 'black',
                color: 'black',
                'border-width': '1px',
                'border-color': 'black',
              });
            }
            node2.style({
              lineColor: 'black',
              'border-width': '1px',
              color: 'black',
              'border-color': 'black',
            });
            c.style({
              lineColor: '#ccc',
              opacity: 1,
              width: '3px',
              color: 'black',
              'border-color': 'black',
            });
          }, speed / 1.5);
        }

        setTimeout(() => {
          if (node1.id() + c.data('label') + node2.id() === str) {
            node1.animate({
              style: {
                lineColor: '#3f51b5',
                color: '#3f51b5',
                'border-color': '#3f51b5',
              },
            });
            this.previousElements.push(node1);
          }
        }, speed / 3);

        setTimeout(() => {
          if (node1.id() + c.data('label') + node2.id() === str) {
            c.animate({
              style: {
                lineColor: '#3f51b5',
                width: '4px',
                color: '#3f51b5',
                'border-color': '#3f51b5',
              },
            });
            this.previousElements.push(c);
          }
        }, (speed * 2) / 3);

        setTimeout(() => {
          if (node1.id() + c.data('label') + node2.id() === str) {
            if (node2.id() === '8') {
              node2.animate({
                style: {
                  lineColor: 'green',
                  'border-width': '4px',
                  color: 'green',
                  'border-color': 'green',
                },
              });
            } else {
              this.lastNode = node2;
              node2.animate({
                style: {
                  lineColor: '#ff4081',
                  'border-width': '4px',
                  color: '#ff4081',
                  'border-color': '#ff4081',
                },
              });
            }
            this.previousElements.push(node2);
          }
        }, +speed);
      }
    } else {
      const lastFEdges = this.lastNode.connectedEdges(`edge[source = "${this.lastNode.id()}"]`).toArray();
      console.log(lastFEdges);

      this.lastNode.animate({
        style: {
          lineColor: 'red',
          'border-width': '5px',
          color: 'red',
          'border-color': 'red',
        },
      });

      lastFEdges[0].style({
        lineColor: 'green',
        opacity: 0.2,
        width: '3px',
        color: 'black',
        'border-color': 'black',
      });

      lastFEdges[1].style({
        lineColor: 'green',
        width: '3px',
        opacity: 0.2,
        color: 'black',
        'border-color': 'black',
      });

      this.errorSate.next({
        state: true,
        msg: `Nur die Uebergaenge <span class="green">${lastFEdges[0].data(
          'label'
        )}</span> und <span class="green">${lastFEdges[1].data('label')}</span> sind definiert.`,
      });
    }
  }
}
