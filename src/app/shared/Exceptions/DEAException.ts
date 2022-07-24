export class DEAException extends Error {
  reberString: string;
  ausgabeString: string;
  msg: string;

  constructor(reberString: string, ausgabeString: string, msg: string) {
    super(msg);
    this.reberString = reberString;
    this.ausgabeString = ausgabeString;
    this.msg = msg;

    console.error(msg);
  }
}
