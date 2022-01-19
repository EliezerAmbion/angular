// type assertion is to assert what type should you use.

// in here, if you press the .(dot), typescript intellisense will suggest all the things you can do with a string.
let message: string = 'abc'; // you have asserted that the type is a string.
let endsWithC = message.endsWith('c');
console.log(endsWithC);
