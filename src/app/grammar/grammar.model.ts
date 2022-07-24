export interface FourTuple {
  V: string[];
  SIG: string[];
  R: {
    A: string[];
    O: string[];
    Z: string[];
  };
  start: string;
}

export class RuleSetInterface {
  expIndex: number | null;
  rule: string;
  prevExp: string;
  afterExp: string;

  constructor(props?: RuleSetInterface) {
    this.expIndex = props?.expIndex || 0;
    this.rule = props?.rule || '';
    this.prevExp = props?.prevExp || '';
    this.afterExp = props?.afterExp || '';
  }
}

export interface GrammarModel {
  Expression: string;
  Valid: boolean;
  Rule: FourTuple;
  ruleSet: RuleSetInterface[];
}

export class ExpressionGrammarModel implements GrammarModel {
  private _expression: string = '';
  private _valid: boolean = false;
  private readonly _rule: FourTuple = {
    V: [],
    SIG: [],
    R: {
      A: [],
      O: [],
      Z: [],
    },
    start: '',
  };
  private _ruleSet: RuleSetInterface[] = [];
  public value: null | string | number = null;

  constructor(exp: string) {
    this.Expression = exp;
    this._rule = {
      V: ['A', 'O', 'Z'],
      SIG: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '*', '-', '/', '(', ')'],
      R: {
        A: ['A O A', '( A )', 'Z'],
        O: ['+', '*', '-', '/'],
        Z: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      },
      start: 'A',
    };
  }

  get Expression(): string {
    return this._expression;
  }

  get Rule(): FourTuple {
    return this._rule;
  }

  get Valid(): boolean {
    return this._valid;
  }

  private _setRuleSet(oldExp: string) {
    let exp1 = oldExp.slice();
    let exp2 = exp1.replace(/ /g, '');
    let exp = exp2.split('').join(' ');
    let rules = [];
    let hasChanged = true;
    const { O, Z } = this._rule.R;

    let j = 0;
    while (exp.length > 0 && j < 1000 && exp !== 'A' && hasChanged) {
      let i = 0;
      let startExp = exp.slice();
      for (let char of exp) {
        if (Z.includes(char)) {
          const rule1 = new RuleSetInterface();
          const rule2 = new RuleSetInterface();

          rule1.expIndex = i;
          rule1.prevExp = exp;
          exp = exp.substring(0, i) + 'Z' + exp.substring(i + 1);
          rule1.afterExp = exp;
          rule1.rule = `Z → ${char}`;

          rule2.expIndex = i;
          rule2.prevExp = exp;
          exp = exp.substring(0, i) + 'A' + exp.substring(i + 1);
          rule2.afterExp = exp;
          rule2.rule = `A → Z`;

          rules.push(rule1);
          rules.push(rule2);
        } else if (O.includes(char)) {
          const rule1 = new RuleSetInterface();

          rule1.expIndex = i;
          rule1.prevExp = exp;
          exp = exp.substring(0, i) + 'O' + exp.substring(i + 1);
          rule1.afterExp = exp;
          rule1.rule = `O → ${char}`;

          rules.push(rule1);
        }
        i++;
      }

      if (exp.indexOf('A O A') > -1) {
        const m = exp.indexOf('A O A');
        const rule1 = new RuleSetInterface();

        rule1.expIndex = exp.indexOf('A O A');
        rule1.prevExp = exp;
        exp = exp.substring(0, m) + 'A' + exp.substring(m + 5, exp.length);
        rule1.afterExp = exp;
        rule1.rule = `A → A O A`;

        rules.push(rule1);
      }

      if (exp.indexOf('( A )') > -1) {
        const m = exp.indexOf('( A )');
        const rule1 = new RuleSetInterface();

        rule1.expIndex = exp.indexOf('( A )');
        rule1.prevExp = exp;
        exp = exp.substring(0, m) + 'A' + exp.substring(m + 5, exp.length);
        rule1.afterExp = exp;
        rule1.rule = `A → ( A )`;

        rules.push(rule1);
      }
      j++;

      if (startExp === exp) {
        hasChanged = false;
      }
    }

    if (this.isExpressionValid(oldExp) && this.isExpressionValid(oldExp) !== 0) {
      this._ruleSet = rules.reverse();
    } else {
      this._ruleSet = rules.map((rule: RuleSetInterface) => ({
        prevExp: rule.afterExp,
        afterExp: rule.prevExp,
        expIndex: rule.expIndex,
        rule: rule.rule.split('').reverse().join('').replace(') A (', '( A )'),
      }));
    }
  }

  get ruleSet() {
    return this._ruleSet;
  }

  set Expression(exp: string) {
    this._expression = exp;

    try {
      this.value = this.isExpressionValid(exp);
      this._setRuleSet(exp);
    } catch {
      this._setRuleSet(exp);
      this.value = null;
      this._expression = exp;
    }
  }

  private static _isNegNumber(exp: string): boolean {
    if (exp.indexOf('-') === 0) {
      return true;
    }
    return !!exp.match(/\(\s*-\s*/gm);
  }

  public isExpressionValid(exp: string): number {
    let result;

    const matchDoubleD = exp.match(/[0-9]\s*[0-9]/gm);

    if (matchDoubleD || ExpressionGrammarModel._isNegNumber(exp)) {
      this._valid = false;
    } else {
      try {
        result = eval(exp);
        this.value = Number.parseFloat(result);
        this._valid = true;
      } catch {
        this._valid = false;
      }
    }

    return result;
  }

  private _hasNonTerminalChar(exp: string) {
    return [...exp].some((r) => this._rule.V.indexOf(r) >= 0);
  }

  private _hasTerminalChar(exp: string) {
    return [...exp].some((r) => this._rule.SIG.indexOf(r) >= 0);
  }

  private _hasElementOfKind(exp: string, kind: string[]) {
    return [...exp].some((r) => kind.indexOf(r) >= 0);
  }

  private _getCorrectExpression(): string {
    let exp = this._rule.start;

    while (this._hasNonTerminalChar(exp)) {
      if (exp.includes('A')) {
        let r =
          Math.random() * (500 / exp.length) > 5
            ? Math.round(Math.random() * (this._rule.R.A.length - 1))
            : this._rule.R.A.length - 1;
        let t = this._rule.R.A[r];
        exp = exp.replace('A', t);
      }

      if (exp.includes('O')) {
        let r = Math.round(Math.random() * (this._rule.R.O.length - 1));
        let t = this._rule.R.O[r];
        exp = exp.replace('O', t);
      }

      if (exp.includes('Z')) {
        let r = Math.round(Math.random() * (this._rule.R.Z.length - 1));
        let t = this._rule.R.Z[r];
        exp = exp.replace('Z', t);
      }
    }

    return exp;
  }

  private _getWrongExpression(): string {
    let correctExp = Array.from(this._getCorrectExpression().replace(/ /g, ''));
    let indexOfExp = Math.round(Math.random() * (correctExp.length - 1));

    if (this._rule.R.Z.includes(correctExp[indexOfExp])) {
      if (Math.random() * 10 > 5) {
        correctExp[indexOfExp] = ['(', ')'][Math.round(Math.random())];
      } else {
        correctExp[indexOfExp] = this._rule.R.O[Math.round(Math.random() * (this._rule.R.O.length - 1))];
      }
    } else if (this._rule.R.O.includes(correctExp[indexOfExp])) {
      if (Math.random() * 10 > 5) {
        correctExp[indexOfExp] = ['(', ')'][Math.round(Math.random())];
      } else {
        correctExp[indexOfExp] = this._rule.R.Z[Math.round(Math.random() * (this._rule.R.Z.length - 1))];
      }
    } else if (['(', ')'].includes(correctExp[indexOfExp])) {
      if (Math.random() * 10 > 5) {
        correctExp[indexOfExp] = this._rule.R.Z[Math.round(Math.random() * (this._rule.R.Z.length - 1))];
      } else {
        correctExp[indexOfExp] = this._rule.R.O[Math.round(Math.random() * (this._rule.R.O.length - 1))];
      }
    }

    return correctExp.join(' ');
  }

  public generateCorrectExpression(): void {
    const exp = this._getCorrectExpression();
    this.Expression = exp;
  }

  public generateWrongExpression(): void {
    const exp = this._getWrongExpression();
    this.Expression = exp;
  }
}
