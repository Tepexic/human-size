# Human Readable Byte Size
JavaScript function that takes a non-negative number of bytes and returns a string with the equivalent number of *kB, MB, GB, TB, PB, EB, ZB,* or *YB*, with at most 1 digit of precision after the decimal point. If the number of bytes is >= 1000 YB, returns the number of YB.

Returns '0kB' is the input is NaN or invalid.

## Install
```
$ npm install byte-to-human
```

## Usage
```
const b2h = require('byte-to-human');

b2h(312500000);
// Returns '312.5MB'

b2h(225);
// Returns '0.2kB'

b2h({ a: "foo", b: 123 }));
// Returns '0kB'

b2h(3125000000000);
// Returns '3.1TB'

b2h(3125000000000000000000000000);
// Returns '3125YB'
```

## Testing
It uses jest v26.3.0. To run tests, clone the repository, run `npm install` and then
```
npm run test
```
Test files are under ./test
