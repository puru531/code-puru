# A closer look at functions

## Default parameters

We can set default values for parameters in a function. If a parameter is not provided, the default value will be used.

```js run
function greet(greeting, name = "friend") {
  //if name is not provided, it will be "friend"
  return `${greeting}, ${name}!`;
}
greet("Hello"); // "Hello, friend!"
greet("Hello", "reader"); // "Hello, reader!"
```

## How passing arguments works : value vs reference

When we pass a primitive value to a function, we pass a copy of the value. This means that if we change the value inside the function, the changes will not be reflected outside the function.

```js run
function changeValue(value) {
  value = 2;
}
let value = 1;
changeValue(value);
console.log(value); // 1
```

When we pass an object to a function, we pass a reference to the object. This means that if we change the object inside the function, the changes will be reflected original object outside the function.

JavaScript does not have pass-by-reference. Even though objects are passed by reference, the reference itself is passed by value. This means that when we pass an object to a function, we pass a copy of the reference to the object. This is why we can change the object inside the function and the changes will be reflected outside the function.

```js run
function changeValue(obj) {
  obj.value = 2;
}
let obj = { value: 1 };
changeValue(obj);
console.log(obj.value); // 2
```

## Fisrt-Class and Higher-Order Functions

JavaScript treats functions as first-class citizens. This means that functions can be assigned to variables, passed as arguments, and returned from other functions.

### First-Class Functions

```js run
const add = (a, b) => a + b; // function assigned to a variable

const counter = {
  value: 0,
  // function assigned to an object as a method
  increment: function () {
    this.value++;
  },
};

// function passed as an argument in another function
const greet = (name) => `Hello, ${name}!`;
const greetUser = (greet, name) => greet(name); // greet is a function passed as an argument to greetUser function and then called and returned inside greetUser function

// function returned from another function
const createAdder = (a) => (b) => a + b;
const addFive = createAdder(5); // createAdder returns a function that adds 5 to a number
addFive(3); // 8 - addFive is a function that adds 5 to a number

//call methods on functions
const someObject = { value: 20 };
counter.increment().bind(someObject);
```

### Higher-Order Functions

A higher-order function is a function that takes a function as an argument or returns a function or both. This is possible because functions are first-class citizens in JavaScript. Higher-order functions are used to abstract over actions, create reusable code, and create more readable code.

A function that is passed as an argument to another function is called a **callback function**.

Function accepting a callback function :

```js run
// Function that takes another function as an argument
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher order function
const transformer = function (str, fn) {
  console.log(fn(str));

  console.log(`Transformed by: ${fn.name}`); // function name property
};

transformer("JavaScript is the best", upperFirstWord); // Output: "JAVASCRIPT is the best" and "Transformed by: upperFirstWord"
transformer("JavaScript is the best", oneWord); // Output: "javascriptisthebest" and "Transformed by: oneWord"
```

Function that returns another function :

```js run
// Function that returns another function
function createMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}

// Example usage
const multiplyByThree = createMultiplier(3);
console.log(multiplyByThree(5)); // Output: 15
```

Function that takes a function as an argument and returns another function :

```js run
// Function that takes a function as an argument and returns another function
function createOperation(operation) {
  return function (a) {
    return function (b) {
      return operation(a, b);
    };
  };
}

// Example usage
const add = (x, y) => x + y;
const addOperation = createOperation(add);
const addFive = addOperation(5);
console.log(addFive(10)); // Output: 15
console.log(addOperation(5)(10)); // Output: 15
```

## The call, apply, and bind methods

Call, apply, and bind are methods that allow us to set the value of this in a function.
