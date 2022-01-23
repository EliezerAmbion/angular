// in oop, you refer to the members as fields and functions as methods.

class Point {
  x: number;
  y: number;

  draw() {
    // ...
  }
}

// When dealing an object of a custom type, we need to explicitly allocate memory to it.
// You initialize it by the new operator.
// As you can see you have repeated Point.
// Typescript compiler can infer it, you can get rid of (: Point)
let point1: Point = new Point();
point1.draw();

// As you can see, if you hover over point2, typescript inferred the Point class to it.
let point2 = new Point();
point2.x = 1;
point2.x = 2;
point2.draw();

// Both point1 and point2 is an object.
// An object is an instance of a class.
// As a metaphor, think of the concept of a human. A human can be a class,
// but when we create instances of this class, like eli, bea, ethan - these are all objects.
