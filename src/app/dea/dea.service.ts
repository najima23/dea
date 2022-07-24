import { Injectable } from '@angular/core';
import { createMachine, interpret, StateMachine } from 'xstate';
import { StateListener } from 'xstate/lib/interpreter';
import { randomGenChar } from '../shared/helpers/helpers';
import { DEAException } from '../shared/Exceptions/DEAException';

@Injectable({
  providedIn: 'root',
})
export class DeaService {
  genFSM(xState: StateMachine<any, any, any>, listener: any) {
    return interpret(xState).onTransition(listener).start();
  }

  createReberMachine() {
    return createMachine({
      id: 'reber-dea',
      initial: '1',
      states: {
        1: { on: { B: '2', '*': '9' } },
        2: { on: { T: '3', P: '4', '*': '9' } },
        3: { on: { S: '3', X: '6', '*': '9' } },
        4: { on: { T: '4', V: '5', '*': '9' } },
        5: { on: { P: '6', V: '7', '*': '9' } },
        6: { on: { X: '4', S: '7', '*': '9' } },
        7: { on: { E: '8', '*': '9' } },
        8: { type: 'final' },
        9: { type: 'final' },
      },
    });
  }

  createDefaultReberFSM() {
    return this.genFSM(this.createReberMachine(), (state) => {
      if (state.value === '9') {
        throw new Error('Transition nicht erlaubt');
      }
      if (state.value === '8' && !state.changed) {
        throw new Error('Ist bereits zuende');
      }
    });
  }

  generateReberString(): { reberString: any; reberConstruct: any } {
    const newString = [{ id: '2', s: 'B', trans: '1B2' }];
    const deaService = this.createDefaultReberFSM();
    const xState = this.createReberMachine();
    let ah = deaService.send('B');

    while (ah.event !== 8) {
      const prevEvent = ah.value;
      const nextNode: any = xState.states[ah.value.toString()].config.on;

      if (nextNode) {
        const char = randomGenChar(...Object.keys(nextNode).filter((a) => a !== '*'));

        if (char !== undefined) {
          ah = deaService.send(char);
          newString.push({
            id: ah.value.toString(),
            s: char,
            trans: prevEvent + char + ah.value.toString(),
          });
        } else {
          break;
        }
      } else {
        break;
      }
    }

    return {
      reberString: newString.reduce((a, n) => a + n.s, ''),
      reberConstruct: newString,
    };
  }

  generateNonReber() {
    const asw = ['B', 'T', 'P', 'S', 'X', 'V', 'B', 'T', 'P', 'S', 'X', 'E'];
    let hasError = false;
    const { reberConstruct } = this.generateReberString();

    const wrongReberString = reberConstruct.map((a: any) => {
      const rdm = Math.floor(Math.random() * 10);
      if (a.id === '2') {
        return a;
      }

      if (rdm > 3) {
        hasError = true;
      }

      if (!hasError && a.id === '8') {
        return { id: a.id, s: 'P', trans: '1B' };
      }

      return { id: a.id, s: rdm < 3 ? a.s : asw[rdm], trans: '1B' };
    });

    return {
      reberString: wrongReberString.reduce((a: string, n: any) => a + n.s, ''),
      reberConstruct,
    };
  }

  private _validateReberString(str: string) {
    const xState = this.createReberMachine();
    let ausgabeString;

    if (str.slice(-1) === 'E') {
      ausgabeString = 'Korrekt';
    }

    const service = this.genFSM(xState, (state) => {
      if (state.value === '9') {
        throw new DEAException(str, 'Falsch', 'Transition nicht erlaubt');
      }

      if ([...str].filter((s) => s === 'E').length > 1) {
        throw new DEAException(str, 'Falsch', 'Endzustand erreicht');
      }
    });

    for (const char of str) {
      try {
        service.send(char);
      } catch (e) {
        ausgabeString = 'Falsch';
      }
    }

    service.stop();
    return { ausgabeString, reberString: str };
  }

  evaluateString(str: any, initialAusgabeString: string = ''): { ausgabeString: any; reberString: any } {
    let ausgabeString;
    let reberString;

    try {
      const { reberString: r, ausgabeString: a } = this._validateReberString(str);
      ausgabeString = a || initialAusgabeString;
      reberString = r || str;
    } catch (e: any) {
      reberString = e.reberString;
      ausgabeString = e.ausgabeString;
    }
    return { ausgabeString, reberString };
  }

  generateReberConstruct(reberStringParam: string): { id: string; s: string; trans: string; error?: string }[] {
    const xState = this.createReberMachine();
    let reberString = reberStringParam.substring(1);
    let newString: { id: string; s: string; trans: string; error?: string }[];

    if (reberStringParam[0] === 'B') {
      newString = [{ id: '2', s: 'B', trans: '1B2' }];
      let isCorrect = true;

      const service = this.genFSM(xState, (state) => {
        if (state.value === '9') {
          isCorrect = false;
          // throw new Error('Transition nicht erlaubt');
        }

        if (state.value === '8' && !state.changed) {
          isCorrect = false;
          // throw new Error('Ist bereits zuende');
        }
      });

      let ah = service.send('B');

      for (let char of reberString) {
        const prevEvent = ah.value;
        ah = service.send(char);

        if (isCorrect) {
          newString.push({
            id: ah.value.toString(),
            s: char,
            trans: prevEvent + char + ah.value.toString(),
          });
        } else {
          newString.push({ id: 'error', s: char, trans: 'error', error: 'error' });
        }
      }
      let filterOne = true;
      return newString.filter((a) => {
        if (a.id === 'error' && filterOne) {
          filterOne = false;
          return true;
        }

        if (a.id !== 'error') {
          return true;
        }

        return false;
      });
    }
    return [{ error: 'B', id: '', s: '', trans: 'error' }];
  }
}
