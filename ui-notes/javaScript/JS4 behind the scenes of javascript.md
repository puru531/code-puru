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

```
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
