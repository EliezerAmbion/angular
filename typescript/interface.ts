// In interface, you should use pascal naming convention. The first letter of every word should be in uppercase.
// With an interface, you are defining the shape of an object.

interface Point {
  x: number;
  y: number;
}

let drawPoint = (point: Point) => {
  // ...
};

drawPoint({
  x: 1,
  y: 2,
});
