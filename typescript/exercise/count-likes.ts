export class CountLikes {
  constructor(public _likes: number, public _isClicked: boolean = false) {}

  count() {
    if (this._isClicked === false) {
      this._likes++;
    } else {
      this._likes--;
    }

    this._isClicked = !this._isClicked;
  }
}
