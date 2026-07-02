# JavaScript Basics Cheatsheet

## Variables

```js
let count = 0;        // can change
const name = "Gav";   // should not be reassigned
```

## Strings

```js
const message = `Hello ${name}`;
```

## Numbers

```js
const total = 10 + 5;
const price = parseFloat("12.50");
```

## Arrays

```js
const tasks = ["Revise DOM", "Build counter"];
tasks.push("Build todo list");
```

## Objects

```js
const task = {
  id: 1,
  text: "Revise events",
  completed: false
};
```

## Functions

```js
function add(a, b) {
  return a + b;
}

const answer = add(2, 3);
```

Parameters are the inputs. `return` is the output.

## If statements

```js
if (score >= 80) {
  console.log("Pass");
} else {
  console.log("Keep practising");
}
```

## Loops

```js
items.forEach(function (item) {
  console.log(item);
});
```
