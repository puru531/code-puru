# Numbers, Dates, Intl and Timers

## Converting and checking numbers

In JavaScript, by default numbers are always floating point numbers. There is no separate integer type. So, 1 and 1.0 are the same number.

```js
console.log(1 === 1.0); // true
```

Numbers are stored in 64-bit format IEEE-754, also known as "double precision". This format stores numbers in binary form, which can only represent numbers as a sum of fractions of powers of 2. So they are composed of 0 and 1 bits only.

```js
console.log(0.1 + 0.2); // 0.30000000000000004 --> because of the binary representation, 0.1 + 0.2 is not exactly 0.3. It's a tiny bit more than that.

console.log(0.1 + 0.2 === 0.3); // false --> error in javascript floating point representation
```

Converting strings to numbers

```js
let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123
console.log(typeof num); // number
```

Using `+` operator to convert strings to numbers

Just like `Number(str)`, the unary plus `+str` converts `str` to a number.

```js
//conversion
let str = "123";
let num = +str; // becomes a number 123
```

Parsing numbers from strings

```js
console.log(Number.parseInt("100px")); // 100 --> parseInt will read from the beginning of the string until it encounters a character that is not a number, and then return the number value it has reached. If the first character is not a number, then it will return NaN.

//using a second argument to specify the base, second argument is the base for the numeral system
console.log(Number.parseInt("100px", 10)); // 100

//parseFloat
console.log(Number.parseFloat("12.5em")); // 12.5

//parseInt and parseFloat ignore leading and trailing whitespaces
console.log(Number.parseInt("12.3")); // 12
console.log(Number.parseInt("12.3.4")); // 12
console.log(Number.parseInt("  12.3  ")); // 12

//parseInt and parseFloat will return NaN if the first character can't be converted to a number
console.log(Number.parseInt("a123")); // NaN

//parseInt and parseFloat will return NaN if the string is empty
console.log(Number.parseInt("")); // NaN

//parseInt and parseFloat will return NaN if the string has only whitespaces
console.log(Number.parseInt("  ")); // NaN

//parseInt and parseFloat can be used without class name
console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5em")); // 12.5
```

#### isNaN

```js
//isNaN --> checks if a value is not a number
console.log(isNaN("12")); // false
console.log(isNaN("12px")); // true
console.log(isNaN(23 / 0)); // false --> Infinity is a special numeric value that represents mathematical infinity
```

#### isFinite

```js
//isFinite --> checks for a regular number
console.log(isFinite("12")); // true
console.log(isFinite("12px")); // false
console.log(isFinite(23 / 0)); // false
```

#### isInteger

```js
// isInteger --> checks if a number is an integer
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(1.0)); // true
console.log(Number.isInteger(1.1)); // false
console.log(Number.isInteger("1")); // false
```

## Math and rounding

```js
//Math.sqrt --> returns the square root of a number
console.log(Math.sqrt(9)); // 3
```

```js
// Square and cubic roots
console.log(16 ** (1 / 2)); // 4 --> 4 is the square root of 16
console.log(8 ** (1 / 3)); // 2 --> 2 is the cubic root of 8

//Square root of negative numbers
console.log(Math.sqrt(-1)); // NaN
```
