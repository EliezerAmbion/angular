// if you put an export or an import in a class, in typescript point of view, it is a module.

export class Mod {
  constructor(private _sample1: number, private _sample2: number) {}

  test() {
    console.log(this._sample1 + this._sample2);
  }
}
