export class CountLikes {
  constructor(
    private _likesCount: number,
    private _isClicked: boolean = false
  ) {}

  count() {
    if (this._isClicked === false) {
      this._likesCount++;
    } else {
      this._likesCount--;
    }

    this._isClicked = !this._isClicked;
  }

  get likesCount() {
    return this._likesCount;
  }

  get isClicked() {
    return this._isClicked;
  }
}
