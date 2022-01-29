// In OOP, there is a concept called property
// x and y are the fields.
// NOTE: Use camel notation to name your fields.
// NOTE: _x and property x are not the same. You just used _x as a convention for you to use the lower case x in other place.

class Prop {
  // inside the constructor are the fields (_x and _y)
  constructor(private _x: number, private _y: number) {}

  // this is the property
  get x() {
    return this._x;
  }

  set x(value) {
    if (value < 0) {
      throw new Error('Value cannot be less than 0');
    }
    this._x = value;
  }
}

// Now we can use the properties as fields
let prop = new Prop(1, 2);
let x = prop.x; // we have used here the property x
prop.x = 10;
