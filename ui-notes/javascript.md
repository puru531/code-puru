# Basics

## Type Conversion and Coersion

### Type Conversion

Conversion done explicitely by user :

```
//String + number = string
const inputYear = '1997';
console.log(inputYear + 18); //by default JS will not add but concatenate (converting number (18) to string when other part is also string)

//converting string into number
console.log(Number(inputYear)); //--> Conversion
console.log(Number(inputYear) + 18);

console.log(Number("Puru")); //will give NaN (Not a number) which means invalid number as 'Puru' is not a number (typeof NaN is number)

```

### Type Coersion

Automatically done by JavaScript

```
console.log("I'm " + 23 + " years old"); //23 will be automatically converted to string
console.log('23'+'10'+3); // (+) converted number to string
console.log('23'-'10'-3); // (-) converted string to number
console.log('23'*3); // (*) converted string to number
console.log('23'/2); // (/) converted string to number
```

```
let n = '1' + 1; // 11
n = n - 1; //11-1
console.log(n);   //10
```

```
console.log(2+3+4+'5');  // (2+3+4)+'5' --> 9+'5' --> 95
console.log('10'-'4'-'3'-2+'5');  //(10-4-3-2)+'5' --> 1+'5' --> 15
```

## Truthy and Falsy Values

**5 falsy values :** 0, ' ', undefined, null, NaN

```
console.log(Boolean(0)); //false
console.log(Boolean('')); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false
```

**Truthy values :**

```
console.log(Boolean({}));
console.log(Boolean(24));
console.log(Boolean('ahsg'));
```

## Equality Operators: == vs. ===

=== is strict equality operator, becuase it does not perform type coersion

```
console.log(2 === 2); //true
console.log(2 === '2'); //false
```

== is loose equality operator, becuase it does perform type coersion

```
console.log(2 == 2); //true
console.log(2 == '2'); //true
```

## Statements and Expressions

Statement doesn't produce a value. ends witha ;
Expressions produce a value. In string literals, we can only inser expressions and not statements.

## Ternary Operator

```
const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink juice');
```

# Intermediate

## use strict

helps us to avoid possible errors.

```
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true; //spelling mistack, s is not after driver, but it will not throw an error, just silently fails
if(hasDriversLicense) console.log('I can drive'); //will not printed because variable is still false and we didn't get error also.

// If we use 'use strict', we can avoid this error.
```

## Functions

### Function Fundamentals

Function declaration :

```
//a function is a piece of code that can be re-used multiple times
function logger() {
    console.log('My name is Purushottam');
}

```

Calling / running / invoking function

```
//we can call same function multiple times
logger();
logger();
logger();
```

Functions can also recieve (parameters) and return data:

```
function fruitProcessor(apples, oranges) {  //function recieving value - apples and oranges are 'parameters'
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; // function returning value
}
```

Passing values to the function (arguments) and and recieving returned values

```
const juice1 = fruitProcessor(5, 2); //passing values to function, 5, 2 and arguments;
//returned value from the function is stored in juice1 variable

console.log(juice1); //Juice with 5 apples and 2 oranges.

//And, we can call that function multiple times with different arguments:
const juice2 = fruitProcessor(3, 6);
const juice3 = fruitProcessor(15, 12);
```

### Function Declarations vs Expressions

Function declaration :

```
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

//calling
const age1 = calcAge1(1999);
console.log(age1);
```

Function expression :

```
//An Anonymous function stored in a variable
const calcAge2 = function (birthYear) {
    return 2037-birthYear;
}

const age2 = calcAge2(1999);
console.log(age2)
```

Difference :
We can call function declaration function before it is defined.

```
console.log(calcAge3(1999)); // this will work even if we are calling function before it is initialized.

function calcAge3(birthYear) {
    return 2037 - birthYear;
}

```

Calling a function exoression before it is initialized will cause a error.

```
console.log(calcAge4(1999)); //ReferenceError : Cannot access 'calcAge4' before initialization.

const calcAge4 = function (birthYear) {
    return 2037-birthYear;
}

```

### Arrow Functions

```
const calcAge5 = birthYear => 2037 - birthYear; // parentheses and return keywords are not need for one liner function

const age5 = calcAge5(1999);
console.log(age5);

//when more lines of code is needed then parentheses and return keywords are needed.
const yearUntilRetirement = (birthYear, firstName) => { // when parameters are more than one, they should be enclosed in parentheses
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} will retire in ${retirement} years`;
}

console.log(yearsUntilRetiment(1999, 'Abc')); //Abc will retire in 22 years
```

Note : Arrow function does not get 'this' keyword.

### Function calling other functions

```
function getGreetingMessage(name) {
    return `Hello ${name}!`;
    console.log(name); //this will not execute as function has already exited at return
}

function greet(name) {
    const message = getGreetingMessage(name);
    console.log(message);
}
```

## Arrays

### Array methods

```
arr.push(someValue); //adds element at the end of the array
arr.unshift(someValue); //adds element at the beginning of the array

   //push() and unshift() methods returns length of modified array
   arr = [1,2,3,4,5];
   const len = arr.push(8);
   console.log(len); //6

arr.pop(); //removes last element of the array
arr.shift(); //removes first element of the array

   //pop() and shift() return the removed element
   arr = [1,2,3,4,5];
   const poppedElement = arr.pop();
   console.log(poppedElement); //5

arr.indexOf(3); //Knowing position of an element in an array, if it is not there, it will return -1
arr.includes(3); //Knowing if an element is present in an array or not, returns true,/fals, (strict equality, no type coersion)
```

## Objects

A data structure which combines key-value pairs in one variable.

```
//Object literal syntax
const obj1 = {
    firstName: "Purushottam",
    lastName: "Kumar",
    age: 2024 - 2015,
    friends: ['Motu', 'Lambu', 'Kullu']
}
```

Each key in the object is called a property. So, we can say tha object obj1 has 4 properties.

Retrieving and changing data in objects:

```
console.log(obj1)//whole object, order does not matter in objects

//Dot notation (.) :
console.log(obj1.firstName) //Purushottam
console.log(obj1.job)//undefined
obj1.job = 'Programmer'; //adding new property
console.log(obj1.job)//Programmer

//Bracket notation :
console.log(obj1['firstName'])//Purushottam
obj1['location'] = 'India'; //adding new property


//we can use expressions in bracket notation
const nameKey = 'Name';
console.log(obj1['first' + nameKey]) //Purushottam
```

### Object Methods

As functions are just values, we can store them in Objects as key value pairs.

```
const obj2 = {
    firstName: "Purushottam",
    lastName: "Kumar",
    birthYear: 2010,
    job: 'Programmer',
    friends: ['Motu', 'Lambu', 'Kullu'],
    hasDriversLicense: true,

    //function inside object
    calcAge: function () {
        console.log(this); //whole obj2 object
        this.age = 2037 - this.birthYear; //this means same object
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.age} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
}

//Accessing the method inside the object
obj2.calcAge();
//or
obj2['calcAge']();
console.log(obj2.age);
console.log(obj2.getSummary());
```

## Loops

### For loop

for loop keeps running while the condition is true \
Best for use when number of iteration is know

```
    //initial;  condition; increment
for(let num = 1; num <= 10; num++) {
    if(num === 5) {
        continue; //will skip fifth iteration
    }
    if(num === 9) {
        break;  //will break the loop at 9 and not execute further
    }
    console.log(num);
}
```

```
//loop inisde a loop
for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`----------- Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}
```

### While loop

Best in use when we do not depend on any counter, and it is not known that how many times the loop is going to run. \
In while loop we only specify condition, unlike we specify initial and increment/decrement too in for loop

```
let rep=0; //initial is declared outside
while (rep <= 10) {
    console.log(`Lifting weight repetition ${rep}`);

    rep++; //increment/decrement done at the end
}
```

```
let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);

    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is about to end...');
}

```

# DOM and Event Fundamentals

DOCUMENT OBJECT MODEL : Structured representation of HTML documnents. Allows Javascript to access html elements and styles to manipulate them. <br>
Dom is automatically created by the browser as soon as the HTML page loads. Stored in a tree structure.
<br>
DOM and DOM methods are part of web API, libraries that browsers implement and we can access from Javascript code.

### Selecting and manipulating Elements

```
//select the element
document.querySelector('.message'); //selecting a element having class name message.
document.getElementById('id1'); //selects elemnet by id.
document.getElementByClassname('modal'); //selects elemnet by class.
document.getElementByTagName('h1'); //selects elemnet by tag name.

//get and set the text content
document.querySelector('.message').textContent; //getting text inside the element.
document.querySelector('.message').textContent = 'Some other text'; //setting text inside the element.

//get and set the value
console.log(document.querySelector('.message').value) //getting value inside the element (input element).
document.querySelector('.message').value = 'Some other text'; //setting value inside the element (input element).

```

### Handling Click Events

With an eventlistener we can wait for a certain action (keyboard keypress, mouse click, mouse hover, etc.) to happen and react to it.

```
//Listening to click of a button, addEventListener takes two arguments 1. type of event to listen to, 2. function : which contains what we want to do on that event.

document.querySelector('.btn').addEventListener('click', function() {
    console.log('button clicked');
})
```

### Manipulating CSS Styles

```
//Style attributes are camelCase.
document.querySelector('body').style.backgroundColor = 'green';
document.querySelector('.number').style.width = '30rem';
```

NOTE : querySelector selects only the first element, event if there are multiple elements with same class :

```
html :
<button class="btn">Button1</button>
<button class="btn">Button2</button>
<button class="btn">Button3</button>

js :
document.querySelector('.btn')  // this will select : <button class="btn">Button1</button> only

//To select all : querySelectorAll
document.querySelectorAll('.btn'); //give NodeList containing all elements.
```

### Manipulate classes

```
document.querySelector('.modal').classList; //returns array of classes available in the element

//Remove classes from an element
document.querySelector('.modal').classList.remove('hidden'); //will remove the hidden class.
document.querySelector('.modal').classList.remove('hidden', 'anyOther'); //will remove both classes

//Add classes
document.querySelector('.modal').classList.add('hidden');
```

### Handling keyboard Keypress Event

Keyboard events are global events and they do not occur on any specific element, so we listen to the whole document.

```
//three types of events for the keyboard : keydown, keyup, keypress
keydown : emits event as soon as we press the key
keyup : emits as we leave pressing the key
keypress : emits for evry press or if we keep pressing the key.

// eventObj = after any action, we get an event object which contains all information about object.{key, code, location, ctrlKey, altKey, etc..}

document.addEventListener('keydown', function(eventObj) {
    if(eventObj.key === 'Escape') {
        console.log('Esc key was pressed);
    }
});
```

# Behind the scenes of Javascript

Javascript is a high-level, prototype-based object-oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage-collected programming language with first-class functions and non-blocking event loop consurrency model.

**High-level** : Developers do not have to manage resources manually, like garbage collection, memory allocation, but it cannot be as fast/optimized as low level languages.
<br><br>
**Garbage-collected** : Cleans memory automatically
<br><br>
**Interpreted or just-in-time compiled** : Javascript engine interprets the code to machine code (0s and 1s) and executes it immediately.
<br><br>
**Multi-paradigm** : Paradigm : An approach of structuring code which will direct your coding style and technique. There are three paradigms and javascript supports all of them:  <br> 1. Procedural programming, 2. Object-oriented programming, 3. Functional programming
<br><br>
**Prototype-base object oriented** : Almost everything in Javascript is object except for primitive values (numbers, string, etc...). Instance of a class inherits all the properties and methods of the class, called prototype inheritance. 
<br><br>
**First-class functions** : Functions are treated just as regular variables. We can pass functions as arguments to other functions and return functions from other functions.
<br><br>
**Dynamic** : Javascript is synamically typed language, we don't assign data types to variables, instead they are known or decided at runtime, when Javascript engine runs our code. Data type can easily be changed as we re-assign the variables.
<br><br>
**Single-threaded & Non-blocking event loop** : Javascript runs in one single thread, so it can only one thing at a time. In case of long running tasks, JS has non-blocking behaviour, by using Event Loop.
<br>
Event loop : takes long running tasks, executes them in the 'background' and puts them back in the main thread once they are finished. 

## The JavaScript engine
A JS Engine is a computer program that executes JS code. Every browser has its own JS engine, but most well known engine is Google's V8 engine.
<br><br>
Any Javascript engine always contains a **Call Stack** and a **Heap**.
<br>
Call Stack : Our Code is executed in Call Stack using **Execution Context**.
<br>
Heap : Heap is an unstructured memory pool which stores all the objects that our application needs.

### Compilation vs Interpretation
Computer's processor only understand binary/machine code (0s and 1s). And therefore every single program need to be converted to machine code. And this can happen using compilation or interpretation.
<br><br>
**Compilation** : Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer. <br>
**Interpretation** : Interpreter runs through the source coode and executed it line by line.<br>
JS used to be an Interpreted language, but now with modern JS it uses mix of Compilation and Interpretation, called **Just-In-Time (JIT) Compilation**.
<br>
**Just-In-Time (JIT) Compilation**: Entire code is converted into machine code at once, then executed immediately.

### Steps of Just-in-time compilation 
**Parsing** : To read the code. During the parsing process the code is parsed into **Abstract Syntax Tree (AST)** . This works by splitting each line of code that are meaningful to the language (const, function, etc...) and then saving all these pieces into the tree in a structured format.<br><br>
**Compilation** : Takes the generated AST and compiles it into machine code. <br><br>
**Execution** : Machine code generated above is executed right away. <br><br>
**Optimization** : In the beginning un-optimized  machine code is generated in order to start execution ASAP, but in background the code is being optimized and re-compiled during the already running program execution.

## The JavaScript Runtime in the Browser
JS Runtime has JS Engine which consist of Heap and Call Stack, Web APIs and Callback Queue. <br>
Web API is responsible for functionalities provided to the engine, accessible on window object. (DOM, Timers, Fetch API, ...) <br>
Callback queue contains the queue of callback functions from the DOM event listeners. (onClick, timer, data, ...). When call stack is empty, the item in the callback queue is pushed in the call stack for execution. This process is called **Event Loop**.

## Execution Context and the Call Stack
When code finishes compiling, A  **Global Execution Context** is created for the top level code (Code which is not inside any function).
<br>
**Execution Context** : Environment in which a piece of JS code is executed. Storess all the necessary information for some code to be executed.
<br>
In any JS code no matter how big it is, there is only one Global Execution Context, which is default context, created for code that not inside any function (top-level).
<br>
For each function call a new execution context is created containing all the necessary information that is required to run that function.

## What is inside Execution Context ?
**Variable Environment** : Stores all the variables and their values (let, const and var declarations), Functions, and Arument objects which needs to be passed to the function.
<br>
**Scope Chain** : Consists of references to variables that are located outside of the current function.
<br>
**This** : Stores the value of this keyword.
<br><br>
NOTE: <br>
All therese are generated in creation phase, right before execution. <br>
Arrow function does not have aruments object and **this** keyword.

## Scope And The Scope Chain
**Scoping** : How our program's variables are organized and accessed. Where fo variable live? or Where can we access a certain varible and where not ? <br>
**Lexical Scoping** : Scoping where the scope of a variable is determined by where it is written in the code. <br>