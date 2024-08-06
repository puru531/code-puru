# Advance DOM and Events

## insertAdjacentHTML

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
