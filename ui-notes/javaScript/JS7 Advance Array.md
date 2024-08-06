# Working with Arrays

## Slice and Splice

- Slice: It returns a new array with the elements from the start index to the end index.
- Splice: It returns the removed elements from the array.

## slice()

```js run
//slice

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.slice(4)); // [5, 6, 7, 8, 9, 10] --> start index 4 to end, index 4 is included
console.log(arr.slice(4, 7)); // [5, 6, 7] --> start index 4 to end index 7, index 7 is not included
console.log(arr.slice(-4)); // [7, 8, 9, 10] --> start index -4 to end, index -4 is included
console.log(arr.slice(-4, -1)); // [7, 8, 9] --> start index -4 to end index -1, index -1 is not included
console.log(arr.slice()); // copy of the array
console.log(arr.slice(0)); // copy of the array
console.log(arr.slice(0, arr.length)); // copy of the array
console.log(arr.slice(-1)); // [10] --> last element
```

## splice()

```js run
//splice --> 2nd argument is the number of elements to remove

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.splice(4)); // [5, 6, 7, 8, 9, 10] --> these items are removed from array,  start index 4 to end, index 4 is included
console.log(arr); // [1, 2, 3, 4] --> original array

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.splice(4, 3)); // [5, 6, 7] --> 3 items are removed from array, start index 4 to end index 7, index 7 is not included
console.log(arr); // [1, 2, 3, 4, 8, 9, 10] --> original array

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.splice(-4)); // [7, 8, 9, 10] --> last 4 items are removed from array.
console.log(arr); // [1, 2, 3, 4, 5, 6] --> original array

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.splice(-4, 3)); // [7, 8, 9] --> last 3 items are removed from array.
console.log(arr); // [1, 2, 3, 4, 5, 6, 10] --> original array

//splice with 3rd argument
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.splice(4, 3, 11, 12, 13)); // [5, 6, 7] --> 3 items are removed from array, start index 4 to end index 7, index 7 is not included and 11, 12, 13 are added
```

## reverse()

- It reverses the array in place. It mutates the original array.

```js run
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.reverse()); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(arr); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

## concat()

- It is used to merge two or more arrays. It does not mutate the original array.

```js run
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const concatArr = arr1.concat(arr2);
console.log(concatArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//same as : const concatArr = [...arr1, ...arr2];
```

## join()

- It is used to join the elements of an array into a string. It does not mutate the original array.
- It returns a string.

```js run
const arr = [1, 2, 3, 4, 5];
console.log(arr.join("-")); // 1-2-3-4-5
console.log(arr.join()); // 1,2,3,4,5 -->default separator is comma
console.log(arr.join("")); // 12345
```

## at()

- It is used to get the element at a specific index.
- It returns undefined if the index is out of range.
- We can use negative index to get the element from the end of the array.

```js run
const arr = [1, 2, 3, 4, 5];
console.log(arr.at(2)); // 3
console.log(arr.at(5)); // undefined
console.log(arr.at(-1)); // 5
```

## forEach() --> Looping through an array

- It is used to loop through the array.
- It takes a callback function as an argument.
- The callback function takes three arguments: element, index, and the array itself.
- It does not return anything.
- It does not mutate the original array.
- foreach() is not suitable for breaking the loop. If you want to break the loop, you should use for loop.

```js run
const arr = [1, 2, 3, 4, 5];

arr.forEach((element, index, array) => {
  console.log(`Element at index ${index} is ${element}`);
  element = element * 2; // This will not change the original array
  console.log(`Modified element: ${element}`);
  console.log(`Original array: ${array}`);
});

/*
Element at index 0 is 1
Modified element: 2
Original array: 1,2,3,4,5

Element at index 1 is 2
Modified element: 4
Original array: 1,2,3,4,5
...
*/

console.log(`Final array: ${arr}`); // Final array: 1, 2, 3, 4, 5 -->  The original array remains unchanged
```

```js run
//program to find the sum of all elements in an array using forEach
const arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach((element) => {
  sum += element;
});
console.log(`Sum of all elements: ${sum}`); // Sum of all elements: 15

//OR
let sum = 0;
arr.forEach((element) => (sum += element));
console.log(`Sum of all elements: ${sum}`); // Sum of all elements: 15

//OR
let sum = 0;
arr.forEach(function (element) {
  sum += element;
});
console.log(`Sum of all elements: ${sum}`); // Sum of all elements: 15
```

## map() filter() reduce()

### map()

- Unlike forEach(), It is used to create a new array by applying a function to each element of the array.
- It returns a new array and does not mutate the original array.
- In arguments, we can pass the element, index, and the array itself.

```js run
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((element) => element * 2);
console.log(newArr); // [2, 4, 6, 8, 10]
console.log(arr); // [1, 2, 3, 4, 5] --> original array remains unchanged

//with three arguments
const newArr = arr.map((element, index, array) => {
  console.log(`Element at index ${index} is ${element}`);
  console.log(`Original array: ${array}`);
  return element * 2;
});
```

### filter()

- It is used to create a new array with elements that pass the test implemented by the provided function. (filter out the elements based on the condition)
- It returns a new array and does not mutate the original array.
- In arguments, we can pass the element, index, and the array itself.

```js run
const arr = [1, 2, 3, 4, 5];
const newArr = arr.filter((element) => element % 2 === 0);
console.log(newArr); // [2, 4]
```

### reduce()

- It is used to reduce the array to a single value.
- It takes a callback function as an argument.
- The callback function takes four arguments: accumulator, element, index, and the array itself.
- The accumulator is the value that is returned by the function.
- The accumulator stores the accumulated value.
- The initial value of the accumulator is the first argument of the reduce() method.
- If the initial value is not provided, the first element of the array is used as the initial value.
- It does not mutate the original array.

```js run
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, element, index) => {
  console.log(`Accumulator at index ${index} is ${accumulator}`);
  return accumulator + element;
}, 0); // 0 is the initial value of the accumulator
console.log(sum); // 15
/*
Accumulator at index 0 is 0
Accumulator at index 1 is 1
Accumulator at index 2 is 3
Accumulator at index 3 is 6
Accumulator at index 4 is 10
*/
```

```js run
//program to sort the array in ascending order using reduce
const arr = [5, 2, 8, 1, 4];
const sortedArr = arr.reduce((accumulator, element) => {
  if (accumulator.length === 0) {
    accumulator.push(element);
  } else {
    let i = 0;
    while (i < accumulator.length && element > accumulator[i]) {
      i++;
    }
    accumulator.splice(i, 0, element);
  }
  return accumulator;
}, []);
console.log(sortedArr); // [1, 2, 4, 5, 8]
```

## chaining methods

```js run

```

## find() findIndex()

## some() every()
