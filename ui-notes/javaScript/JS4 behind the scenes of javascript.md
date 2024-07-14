# Behind the scenes of Javascript

Javascript is a high-level, prototype-based object-oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage-collected programming language with first-class functions and non-blocking event loop consurrency model.

**High-level** : Developers do not have to manage resources manually, like garbage collection, memory allocation, but it cannot be as fast/optimized as low level languages.
<br><br>
**Garbage-collected** : Cleans memory automatically
<br><br>
**Interpreted or just-in-time compiled** : Javascript engine interprets the code to machine code (0s and 1s) and executes it immediately.
<br><br>
**Multi-paradigm** : Paradigm : An approach of structuring code which will direct your coding style and technique. There are three paradigms and javascript supports all of them: <br> 1. Procedural programming, 2. Object-oriented programming, 3. Functional programming
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
**Optimization** : In the beginning un-optimized machine code is generated in order to start execution ASAP, but in background the code is being optimized and re-compiled during the already running program execution.

## The JavaScript Runtime in the Browser

JS Runtime has JS Engine which consist of Heap and Call Stack, Web APIs and Callback Queue. <br>
Web API is responsible for functionalities provided to the engine, accessible on window object. (DOM, Timers, Fetch API, ...) <br>
Callback queue contains the queue of callback functions from the DOM event listeners. (onClick, timer, data, ...). When call stack is empty, the item in the callback queue is pushed in the call stack for execution. This process is called **Event Loop**.

## Execution Context and the Call Stack

When code finishes compiling, A **Global Execution Context** is created for the top level code (Code which is not inside any function).
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
**Lexical Scoping** : Scoping is controlled by the pplacement of the function and blocks in the code. <br>
**Scope**: Space or environment in which a certain variable is declared (variable environment in case of funtions). There a global scop, function scope, and block scope. <br>
**Scope of a varible**: Region of our code where a certain variable can be accessed. <br>

## The 3 types of scope

**Global Scope** : Outside of any function or block. Variables declared in global scope are accessible everywhere. <br>
**Function Scope** : Varibled are accessible only inside the function which are declared inside a function. NOT outside. Also called local scope. <br>
**Block Scope (ES6)** : Variables declared inside a block (curly braces), are only accessible inside that block and its child blocks. HOWEVER, this only applies to **let** and **const** variables. Functions are also block scoped (only in strict mode). **var** is function scoped.

```js run
'use strict'

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName); //even if this variable is declared below, we weill be able to access it because function is called after variable declaration and varibale is available in global scope by that time.

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`; //can access variables of parent scope
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true; //var, cann be accessible outside
            const str = `Oh, you're a millenial, ${firstName}`;
            console.log(str);
        }
        //console.log(str); //ReferenceError: because const is not accessible outside its scope.
        console.log(millenial); //accessible, because var is function scoped.

    }
    return age;
}

cont firstName = 'Puru';
calcAge(1998);
```

## Variable Environment : Hoisting and the TDZ

### Hoisting in Javascript

**Hoisting** : Makes some types of variable accessible/usable in the code before they are actually declared, "Varibales lifted to the top of their scope". <br>
Before execution, code is scanned for variable declarations, and for each variables, a new property is created in the variable environment object.

```
function declarations
    Hoisted? : YES, we can use function even before it is declared because it is present in execution context before execution starts.
    Initial Value : Actual function
    Scope : Block (in strict mode)

var variables
    Hoisted? : YES
    Initial Value : undefined
    Scope : Function

let and const variables
    Hoisted? : NO, technically yes, but not in practice.
    Initial Value : <uninitalized>, TDZ(Temporal Dead Zone)
    Scope : Block

function expression and arrows : Depends how they are created, if using var or let/const, these functions are variables and they behave exact same way as variables.
```

### Variable Hoisting example

```js run
console.log(me); // undefinded
console.log(job); // ReferenceError : cannot access 'job' before initialization
console.log(year); // not executed after error.

var me = "Puru"; //available in window object also
let job = "Programmer"; //not available in window object
const year = 1998; //not available in window object
```

### Function Hoisting Example

```js run
//accessing before functions are defined.
console.log(addDecl(2, 2)); // 4
console.log(addExpr(2, 2)); // ReferenceError : cannot access 'addExpr' before initialization
console.log(addArrow(2, 2)); // not executed after error.

//function declaration
function addDecl(a, b) {
  return a + b;
}

//function expression
const addExpr = function (a, b) {
  return a + b;
};

//Arrow function
const addArrow = (a, b) => a + b;

// ----------------------------------------------------------------
//what if we change const to var and acess it before they are defined

console.log(addExprWithVar(2, 2)); //TypeError : addExprWithVar is not a function
//because var is hoisted, but it is hoisted with default value as undefined and not a function, we are getting error as "addExprWithVar is not a function".

//same with addArrowWithVar

//function expression
var addExprWithVar = function (a, b) {
  return a + b;
};

//Arrow function
var addArrowWithVar = (a, b) => a + b;
```

## The 'this' keyword

Special variavble that is created for every execution context (every function). Takes the value of (point to) the "owner" of the function in which the 'this' keyword is used. <br>
'this' is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called. <br>

### Four ways in which functions can be called (other ways are call, bind, apply)

- **Method** : 'this' keyword points to the Object on which the method is called.

```js run
const obj1 = {
  name: "Puru",
  year: 1998,
  calcAge: function () {
    return 2037 - this.year; //here 'this' points to object which is calling this method (see below)
  },
};
```

- **Simple Function call** : 'this' keyword is undefined. (ONLY valid for STRICT MODE). <br>
  If not in scrict mode it points to global variable object (window object in browser).

- **Arrow functions** : 'this' keyword point 'this' of surrounding function or parent function (lexical this).

- **Event listener** : 'this' keyword points to DOM element that the handler is attached to.

NOTE : 'this' does NOT point to the function itself, and also NOT the its variable environment.

```js run global
console.log(this); //gives window object when not in strict mode
```

```js run global
"use strict";
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //undefined in regular function call
};
calcAge(2010);
```

```js run global
"use strict";
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); //window object (lexical this), this keyword of parent scope.
};
calcAgeArrow(2010);
```

**'this' keyword points to the object that is calling the method, not in which the method is written**

```js run
const obj1 = {
  name: "Puru",
  year: 1998,
  calcAge: function () {
    return 2037 - this.year; //here 'this' points to object which is calling this method
  },
};

const obj2 = {
  year: 2017;
}

obj2.calcAge = obj1.calcAge; //method borrowing
obj2.calcAge(); // 2037 - 2017 = 20 --> because this keyword points to obj2 so year will be 2017.


const f = obj1.calcAge;
f(); // this keyword is undefined here as this is a regular function call, no more inside any object. TypeError : Cannot read property 'year' of indefined at calcAge
```

**'this' keyword in Regular functions vs. Arrow function**

```js run
const obj1 = {
  firstName: "Puru",
  year: 1998,
  calcAge: function () { //regular function
    return 2037 - this.year;
  },
  greet : () => console.lg(`Hey ${this.firstName}!`); //arrow function
};

obj1.greet(); // Hey undefined, arrow function does not have their own this keyword, they take surrounding / lexical this. which is window object in this case, so window.firstName is undefined.

```
