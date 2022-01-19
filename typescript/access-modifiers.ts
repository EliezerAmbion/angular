// In typescript, we have three(3) access modifiers.
// Private, Public, Protected
// NOTE: By default, all members are public.
// Public, Private are the most common

// e.g:
class Sample {
  private x: number;
  private y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  getValue() {
    // ...
  }
}

// The code above is redundant, the solution here is to prefix the constructor w/ access modifier.
// And you can get rid of this.x and this.y.

// e.g:
class Sample2 {
  constructor(private x?: number, private y?: number) {}

  getValue() {
    // ...
  }
}

// Now it is cleaner
