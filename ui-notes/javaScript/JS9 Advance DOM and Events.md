# Advance DOM and Events

## How DOM works and organized internally

DOM : Interface between JavaScript and Browser.

- Allow us to interact with the Browser.
- We can write JavaScript to create, modify, delete HTML elements; change styles, classes, attributes; and listen to events.
- DOM tree is generated from the HTML document, which we can then interact with using JavaScript.
- DOM is very complex API that contains many methods and properties to interact with the DOM tree.
- DOM is a tree-like structure where each node represents an object.

### How DOM is organized internally

```
    -------------
    |EventTarget|
    -------------
       |
       |
       |
    -------  --------
    | Node|  |Window|
    -------  --------
       |
       |
       |
    ---------
    |Element|
    ---------
       |
       |
       |
    ------------
    |HTMLElement|
    ------------
       |
       |
       |
    ----------------
    |HTMLDivElement|
    ----------------
EVENTTARGET : A special Node type that can be targetted by events. It is the parent of Node and Window. It has methods like addEventListener(), removeEventListener(), dispatchEvent(), etc.
NODE :  textContent, parentNode, childNodes, etc. are properties and methods of Node
ELEMENT : innerHTML, classList, etc. + all Node properties and methods
HTMLElement : click(), focus(), etc. + all Element properties and methods
HTMLDivElement : all HTMLElement properties and methods + specific properties and methods of HTMLDivElement

WINDOW : It is the global object in the browser. It is the parent of all objects in the browser. It has methods like alert(), setTimeout(), setInterval(), etc. many unrelated to the DOM.
```

- Every single node of the DOM tree is of the type Node.
- Each node is represented by an object.
- The Node object has many properties and methods. (e.g. `parentNode, childNodes, firstChild, lastChild, nextSibling, previousSibling, textContent, cloneNode() etc.`)
- There are different types of nodes (child-types of Node):

  - **Element nodes:** Represent HTML elements. (e.g. `<p>, <div>, <h1>`, etc.) Ech element has many methods : `innerHTML, textContent,children, parentElement, classList, querySelector(), querySelectorAll(), getAttribute(), setAttribute(), removeAttribute(),  append(), remove(), insertAdjacentHTML(), closest(), matches(), scrollIntoView(), etc.`<br>

    Element type has internally HTMLElement child type. And that HTML has One different type HTMLElement for each HTML element. (e.g. HTMLDivElement, HTMLParagraphElement, HTMLAnchorElement, etc.), which has many methods and properties specific to that element. like `<a>` has `href, target, etc.` and `<image>` has `src, alt, etc.`

  - **Text nodes:** Contain text. (e.g. `<p>`**Hello World**`</p>`)
  - **Comment nodes:** Represent comments. (e.g. `<!-- some comment -->`)
  - **Document nodes:** Represent the entire document. special type of node that represents the entire document. contains methods like `querySelector(), querySelectorAll(), getElementById(), getElementsByClassName(), getElementsByTagName(), etc.`

    \*\*querySelector() is available both in document and element.

- **Inheritance:** All the child types will also get access to the properties and methods of the parent type. (e.g. HTMLElement has access to all the properties and methods of Element and Node.)

## Selecting, Creating, and Deleting Elements

### Selecting Elements

Selecting entire document of the page:

```js run
console.log(document.documentElement); // <html>...</html>
```

Selecting the head and body elements:

```js run
console.log(document.head); // <head>...</head>
console.log(document.body); // <body>...</body>
```

#### Selecting elements by their tag name:

```js run
const allParagraphs = document.getElementsByTagName("p"); // HTMLCollection of all <p> elements in the document (eg. HTMLCollection(3) [p, p, p]). It is live collection. It means if we add or remove any element from the collection, it will automatically update the collection.
console.log(allParagraphs);
```

#### Selecting elements by their ID:

```js run
const myId = document.getElementById("my-id"); // <p id="my-id">...</p> (element with id "my-id")
```

#### Selecting elements by their class name:

```js run
const myClass = document.getElementsByClassName("my-class"); // HTMLCollection of all elements with class "my-class"
```

#### querySelector and querySelectorAll

```js run
console.log(document.querySelector("p")); // <p>...</p> (first <p> element in the document)
console.log(document.querySelectorAll("p")); // NodeList of all <p> elements in the document (eg. NodeList(3) [p, p, p])

console.log(document.querySelector(".my-class")); // <p class="my-class">...</p> (first element with class "my-class")
console.log(document.querySelectorAll(".my-class")); // NodeList of all elements with class "my-class"

console.log(document.querySelector("#my-id")); // <p id="my-id">...</p> (element with id "my-id")
console.log(document.querySelectorAll("#my-id")); // NodeList of all elements with id "my-id" (eg. NodeList(1) [p#my-id.my-class])

console.log(document.querySelector("p.my-class")); // <p class="my-class">...</p> (first <p> element with class "my-class")
console.log(document.querySelectorAll("p.my-class")); // NodeList of all <p> elements with class "my-class"

console.log(document.querySelector("p#my-id")); // <p id="my-id">...</p> (element with id "my-id")
console.log(document.querySelectorAll("p#my-id")); // NodeList of all <p> elements with id "my-id"

console.log(document.querySelector("p.my-class#my-id")); // <p id="my-id" class="my-class">...</p> (element with id "my-id" and class "my-class")
console.log(document.querySelectorAll("p.my-class#my-id")); // NodeList of all <p> elements with id "my-id" and class "my-class"
```

### HTMLCollection vs NodeList:

- HTMLCollection is live collection. It means if we add or remove any element from the collection, it will automatically update the collection.
- NodeList is not live collection. It means if we add or remove any element from the collection, it will not automatically update the collection.
- NodeList is more powerful than HTMLCollection. NodeList has more methods and properties than HTMLCollection.
- NodeList is returned by querySelectorAll() and HTMLCollection is returned by getElementsByTagName(), getElementsByClassName(), etc.

### Creating and inserting Elements

```js run
// Create a new element
const message = document.createElement("div"); // <div></div>

// Add a class to the element
message.classList.add("message"); // <div class="message"></div>

// Add text to the element
// message.textContent = "Hello World"; // <div class="message">Hello World</div>

// Add HTML to the element
message.innerHTML = "<h1>Hello World</h1>"; // <div class="message"><h1>Hello World</h1></div>

// Insert the element into the DOM
document.body.prepend(message); // <body><div class="message"><h1>Hello World</h1></div>...</body> --> prepend() will insert the element as the first child of the parent element.
document.body.append(message); // <body>...<div class="message"><h1>Hello World</h1></div></body> ---> append() will insert the element as the last child of the parent element.

/*
NOTE: If we try to insert the same element again, it will move the element to the new position instead of creating a new element. This is because an element can only exist in one place in the DOM tree at a time. 
*/

// If we want same element to be inserted at multiple places, we need to clone the element.
document.body.append(message.cloneNode(true)); // <body>...<div class="message"><h1>Hello World</h1></div><div class="message"><h1>Hello World</h1></div></body>

const header = document.querySelector(".header");
header.before(message);
/*
<body> 
  <div class="message"><h1>Hello World</h1></div>
  <header>...</header>
</body> 

--> before() will insert the element before the given element as sibling.
*/

header.after(message);
/*
<body> 
  <header>...</header>
  <div class="message"><h1>Hello World</h1></div>
</body>

after() will insert the element after the given element as sibling.
*/
```

### Deleting Elements

```js run
/*
<body> 
  <header>...</header>
  <div class="message"><h1>Hello World</h1></div>
  <button class="btn-close-msg">Close Message</button>
</body>
*/

const message = document.querySelector(".message");
message.remove(); // <body> <header>...</header> <button class="btn-close-msg">Close Message</button> </body> --> remove() will remove the element from the DOM tree.

//Deleting message div on button click
const btnCloseMsg = document.querySelector(".btn-close-msg");
btnCloseMsg.addEventListener("click", function () {
  message.remove(); // new method to remove the element from the DOM tree.

  // message.parentElement.removeChild(message); // old method to remove the element from the DOM tree.
});
```

## Styles, Attributes, and Classes

### Styles

#### Setting Inline Styles

```js run
/*
<body> 
  <header>...</header>
  <div class="message"><h1>Hello World</h1></div>
  <button class="btn-close-msg">Close Message</button>
</body>
*/
const message = document.querySelector(".message");

message.style.backgroundColor = "blue"; // <div class="message" style="background-color: blue;"><h1>Hello World</h1></div> --> style property is used to set the inline styles of the element.
message.style.width = "120px"; // <div class="message" style="background-color: blue; width: 120px;"><h1>Hello World</h1></div>
```

#### Getting Inline Style Values

```js run
/*
<body>
  <header>...</header>
 <div class="message" style="background-color: blue; width: 120px;"><h1>Hello World</h1></div>
  <button class="btn-close-msg">Close Message</button>
</body>
*/
const message = document.querySelector(".message");
console.log(message.style.backgroundColor); // blue --> style property is used to get the inline styles of the element.
console.log(message.style.height); // "" --> If the style is not set inline, it will return an empty string.
```

#### Getting Computed Styles

```js run
//html
/*
<body>
  <header>...</header>
 <div class="message" style="background-color: blue; width: 120px;"><h1>Hello World</h1></div>
  <button class="btn-close-msg">Close Message</button>
</body>
*/
//css
/*
.message {
  height: 150px;
}
*/
const message = document.querySelector(".message");
console.log(getComputedStyle(message).height); // 150px --> getComputedStyle() method is used to get the computed styles of the element.

// getComputedStyle() method returns a CSSStyleDeclaration object that contains all the computed styles of the element.

//increase the height of the message div by 40px
message.style.height = `${parseFloat(getComputedStyle(message).height) + 40}px`; // <div class="message" style="background-color: blue; width: 120px; height: 190px;"><h1>Hello World</h1></div>
```

### CSS Variables / Custom Properties

Set the value of the CSS variable.

```js run
//css file
/*
:root {
  --primary-color: blue;
}
.message {
  background-color: var(--primary-color);
}
*/

document.documentElement.style.setProperty("--primary-color", "orangered"); // Set the value of the CSS variable --primary-color to orangered in the root element (html element).
```

### insertAdjacentHTML

- insertAdjacentHTML is a method that allows you to insert HTML into a specific position in the DOM.
- It takes two arguments:
  - The position where you want to insert the HTML.
  - The HTML you want to insert.

```js run
const div = document.createElement("div");
div.innerHTML = "<h1>Hello World</h1>";
document.body.insertAdjacentHTML("afterbegin", div.outerHTML);
/*
body
  div
    h1
      Hello World
*/
```

element.outerHTML returns the HTML of the element including the element itself.

```js run
const div = document.createElement("div");
div.innerHTML = "<h1>Hello World</h1>";
console.log(div.outerHTML); // <div><h1>Hello World</h1></div>
```

Visual representation of the positions:

```html
<!------- beforebegin ------->
<p>
  <!------- afterbegin ------->
  some text
  <!------- beforeend ------->
</p>
<!------- afterend ------->
```
