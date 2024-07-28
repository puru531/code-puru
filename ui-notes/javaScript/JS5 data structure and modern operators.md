# Built-in Data Structure, Modern Operators and Strings

## Destructuring Arrays

It is an ES6 feature, it a way of unpacking values from an array or an object into separate variables.

```js run
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring
const [x, y, z] = arr; //single elements saved to individual variables. and original array is not affected
```

```js run
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [first, second] = restaurant.categories; //takes in order : first = 'Italian', second= 'Pizzeria'
let [first2, , third] = restaurant.categories; //will skip the second one
console.log(first, third);

// swap two values using this
[first, second] = [second, first];

//function returning an array can be destructured
console.log(restaurant.order(2, 0));
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main); //Garlic Bread, Pizza
```

### Destructuring in nested array (array inside an array)

```js run
const nested = [2, 4, [3, 9]];
const [i, , j] = nested;
console.log(i, j); // 2, [3,9]

//destructuring inner array
const [p, , [q, r]] = nested;
console.log(p, q, r); //2,3,9
```

### Setting default values while destructuring

We can set default value to the variables while destructuring

```js run
const [p, q, r] = [8, 9];
console.log(p, q, r); // 8,9, undefined
//In order to not get undefined for values which are not found, we can set default values
const [p = 1, q = 3, r = 2] = [8, 9];
console.log(p, q, r); // 8,9,2
```

## Destructuring Objects

```js run
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours : {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  };

  //ES6 Creating methods inside objects
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
  },

  orderPizza(mainIngredient, ...OtherIngredients) {
    console.log(mainIngredient);
    console.log(OtherIngredients);
  }
};
```

To destructure objects we use { }, we need to write exact property name to extract varibles from object, Order of property does not matter in objects like Arrays <br>

```js run
const { name, openingHours, categories } = restaurant; //this creates three new variables

//if we want to keep different variable name from property name
const { name: restaurantName, openingHours: hours, categories } = restaurant;
console.log(restaurantName, hours, categories);
```

### setting default values :

```js run
const { menu = [], starterMenu: starters = [] } = restaurant; // if the property is not present, then default value is set
```

### mutating variables

```js run
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//if variable is already declared then we cannot use const or let, and if we just keep {a, b} = obj;, it will throw error because JS understands it as code block and expects some code, so we need to wrap in ()
({ a, b } = obj);
```

### Destructuring nested objects

```js run
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const {
  fri: { open: o, close: c },
} = openingHours;
//first desturcturing 'fri', which gives {open: 11, close: 23}, further we destructure this and then set another variable name.
```

### Destructuring function parameters

```js run
function orderDelivery({
  starterIndex = 1,
  mainIndex = 2,
  time = "20:00",
  address,
}) {
  console.log(starterIndex, mainIndex, time, address);
}

const obj = {
  starterIndex: 2,
  mainIndex: 4,
  time: "22:00",
  address:
    "Flat 202 (front side), Plot no. 179, TNGOs Conly, Gachibowli, Hyderabad",
};
orderDelivery(obj);
```

## The Spread operator (...)

Used to expand all iterables into its all its elements, (Unpacking all the array elements at one.)<br>
Iterables : arrays, string, map, sets. (except objects)

### Spread in Arrays

```js run
const arr = [5, 6, 7];
//if we want ro add few items in starting and then all items of arr :
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; //wrong way

//using spread operator
const goodNewArr = [1, 2, ...arr];
const arrCopy = [...arr]; //here items returned by ...arr will not point to same object or arr, instead it is a new array and point to different memory reference.

const arr1 = [2, 5, 6];
const arr2 = [5, 6, 9, 5];
const combinedArr = [...arr1, ...arr2];

//String
const name = "Purushottam";
const letters = [...name, " ", "K."];

//should be used to build a new array or pass arguments to functions
console.log(...name);
console.log(`${...name} Kumar`); //this will throw error

//spread in function arguments

function orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
  }

  orderPast(['a', 'b', 'c']);
```

### Spread in objects

Since ES2018 spread operator also works for objects even though objects are not iterables.

```js run
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours : {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  };
};


const newRestaurant = {...restaurant, founder: 'Puru', foundedIn: 2025}; //new object
```

## The Rest Operator (...)

Does opposite of the **Spread operator**, spread expands the array, Rest collects multiple elements and pack them into an array. It is used in the **Left** side of assignment operator unlike Spread Operator in the Right.

### REST pattern in Arrays

```js run
//SPREAD because in right side of assignment operator (=), Although sometime can be in lef side, together with destructuring
const arr = [1, 3, [4, 5]];

//REST because on the left of assignment operator
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];
/*
this will save 1 in variable a, 2 in variable b, and rest all items in array 'others'
 a = 1
 b = 2
 others = [3,4,5,6,7]
*/
```

```js run
const arr1 = [2, 5, 6, 7];
const arr2 = [5, 6, 9, 5];
//Rest pattern must be the last element, There can only be one REST pattern in a destructuring assignment
const [a, , b, ...others] = [...arr1, arr2];
/*
 a= 2
 b= 6
 others = [7,5,6,9,5]
*/
```

```js run
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 6, 7, 8);
add(6, 2, 6, 8, 7, 8, 9, 6, 5, 4, 4);
const x = [6, 5, 9, 7];
add(...x);
```

### REST pattern in Objects

```js run
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const { sat, ...weekdays } = openingHours;
/*
sat = {
    open: 0,
    close: 24
  }

weekdays = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  }
}
*/
```

## Short Circuiting ( && and || )

&& and || can use any data type, return any data type, Short circuiting.

```js run
// short circuiting with OR (||)
//if the first operand is truthy then it will immediately return it, without checking the next. If all operands are falsy then it returns the last operand
console.log(3 || "Puru"); //3
console.log("" || "Puru"); //Puru
console.log(true || 0); //true
console.log(undefined || null); //null //if all falsy then last one is returned
console.log(undefined || null || false); //false //if all falsy then last one is returned
console.log(undefined || 0 || "" || "hello" || 23 || null); //hello
```

```js run
// short circuiting with AND (&&)
//If first operand is falsy then it immediately returns it. Otherwise if the first operand is truthy then it will check for next one, Once it finds falsy value, that one is returned, otherwise in case of all truthy last operand is returned.
console.log(0 && "Puru"); //0
console.log(3 && "Puru"); //Puru
console.log("" && "Puru"); //''
console.log(true && 0); //0
console.log("Puru" && undefined && null); //undefined
```

## The Nullish Coalescing Operator (??)

In short circuitin with OR ( || ), we have a problem that it considers 0 as a false value but sometimes we want zero as a value.

```js run
const count = 0;
const totalCount = count || 10; //0  --> here we want totalCount to be 0 but, it getting set as 10
```

Nullish Coalescing operator solves this problem. It checks only **null** or **undefined** and (0 or '') is considred as a value.

```js run
const count = 0;
const totalCount = count || 10; //0
const totalCount = newValue || 10; //10
```

## Logical Assigment Operators

Introduced in ES2021

```js run
const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};
// OR assignment operator ( ||= )
rest1.numGuest ||= 10;
rest2.numGuest ||= 10;

//same as :
rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;

//Nullish coalescing assignment operator ( ??= )
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// AND assignment operator ( &&= )
rest1.numGuest &&= 10; //only works when property is available, for false values it does not add/change property
rest2.numGuest &&= 10;
```
