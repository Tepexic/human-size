# Human Readable Size
JavaScript function that takes a non-negative number of bytes and returns a string with the equivalent number of *kB, MB, GB, TB, PB, EB, ZB,* or *YB*, with at most 1 digit of precision after the decimal point. If the number of bytes is >= 1000 YB, returns the number of YB.

Returns '0kB' is the input is NaN or invalid.

## Examples
```
humanSize(312500000) // Returns '312.5MB'
humanSize(225) // Returns '0.2kB'
humanSize({ a: "foo", b: 123 })) // Returns '0kB'
humanSize(3125000000000) // Returns '3.1TB'
humanSize(3125000000000000000000000000) // Returns '3125YB'
```

## Project setup
Clone this project and then run
```
npm install
```

## Dependencies
 - jest v26.3.0

## Testing
Run
```
npm run test
```
Test files are under ./test
