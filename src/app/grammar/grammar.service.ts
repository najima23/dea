import { Injectable } from '@angular/core';
import { startWith, switchMap, takeWhile, tap } from 'rxjs/operators';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';

import { RuleSetInterface } from './grammar.model';
import { SPEED } from '../app.config';

type StateType = 'stop' | 'start';

@Injectable({
  providedIn: 'root',
})
export class GrammarService {
  rules: RuleSetInterface[] = [];
  animatedRulesStream: Subject<any> = new Subject();
  timer!: Observable<number>;
  speed: BehaviorSubject<number> = new BehaviorSubject<number>(2);
  state: BehaviorSubject<StateType> = new BehaviorSubject<StateType>('stop');
  currentIndex: number = -1;

  constructor() {
    this.speed.subscribe((v) => {
      this.timer = interval(SPEED[v]);
    });
  }

  init(rules: RuleSetInterface[]) {
    this.rules = rules;
  }

  onPlay() {
    this.speed
      .pipe(
        switchMap((val) => interval(SPEED[val])),
        takeWhile(() => this.state.value === 'start'),
        tap((n) => {})
      )
      .subscribe(() => {
        setTimeout(() => {
          if (this.currentIndex === this.rules.length - 1) {
            this.onEnd();
          } else {
            this.onNext();
          }
        });
      });
    this.state.next('start');
  }

  onPause() {
    this.state.next('stop');
  }

  onReset() {
    this.currentIndex = -1;
    this.state.next('stop');
    this.animatedRulesStream.next([]);
  }

  onNext() {
    if (this.currentIndex < this.rules.length - 1) {
      this.currentIndex++;
    }

    if (this.currentIndex === -1) {
      this.currentIndex++;
    }

    this.animatedRulesStream.next(this.rules.slice(0, this.currentIndex + 1));
  }

  onPrevious() {
    if (this.currentIndex > -1) {
      this.currentIndex--;
    }

    this.animatedRulesStream.next(this.rules.slice(0, this.currentIndex + 1));
  }

  onBegin() {
    this.onReset();
  }

  onEnd() {
    this.state.next('stop');
    this.animatedRulesStream.next(this.rules);
    this.currentIndex = this.rules.length - 1;
  }
}
