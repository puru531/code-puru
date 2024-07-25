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

Used to expand an array into its all elements, (Unpacking all the array elements at once.)
