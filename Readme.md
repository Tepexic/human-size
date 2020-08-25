# Human Readable Size
JavaScript function that takes a non-negative number of bytes and returns a string with the equivalent number of ‘kB’, ‘MB’, ‘GB’, ‘TB’, ‘PB’, ‘EB’, ‘ZB’, or ‘YB’, with at most 1 digit of precision after the decimal point. If the number of bytes is >= 1000 YB, returns the number of YB.

Returns '0kB' is the input is NaN or invalid.

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
