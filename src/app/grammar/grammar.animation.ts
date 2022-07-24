import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export const grammarAnimation = ['', '2', '3'].map((v) =>
  trigger(`onVisible${v}`, [
    transition(':enter', [
      animate(
        '{{speed1}}s 0s ease-in-out',
        keyframes([
          style({ transform: 'translateY(-30%)', color: 'black', opacity: 0 }),
          style({ transform: 'translateY(0%)', color: 'black', opacity: 1 }),
        ])
      ),
      animate(
        '{{speed2}}s 0s ease-in-out',
        keyframes([style({ color: 'blue', 'font-weight': 'bold' }), style({ color: 'black', 'font-weight': 'normal' })])
      ),
    ]),
    transition(':leave', [
      animate(
        '0.2s 0s ease-out',
        keyframes([
          style({ transform: 'translateY(0%)', opacity: 1 }),
          style({ transform: 'translateY(-30%)', opacity: 0 }),
        ])
      ),
    ]),
  ])
);
