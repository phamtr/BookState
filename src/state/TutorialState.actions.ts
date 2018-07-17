const prefix = "[Tutorial]";

export class AddTutorial {
  static readonly type = `${prefix} Add Tutorial`;

  constructor(public payload: string) { }
}
