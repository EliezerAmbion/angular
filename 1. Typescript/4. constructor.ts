// Every class can have a constructor which is basically a method that is called
// when we create an instance of that class.

class PointClass {
  x: number;
  y: number;

  // NOTE: once you make a parameter optional, all the other parameters on the right side of that parameter
  // should be optional too.
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    // ...
  }
}

let point3 = new PointClass(1, 2);
point3.draw();

// if you don't know the initial values of the parameters, you can set the parameters optional.
// You can do that by adding a question mark(?) in the constructor's parameters.
let point4 = new PointClass();
point4.draw();
