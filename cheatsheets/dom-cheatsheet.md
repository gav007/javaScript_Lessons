# DOM Cheatsheet

## The core pattern

```js
const button = document.querySelector("#myButton");
const message = document.querySelector("#message");

button.addEventListener("click", function () {
  message.textContent = "Changed by JavaScript";
});
```

Plain English:

1. Grab the button.
2. Grab the message.
3. When the button is clicked, change the message.

## Common selectors

```js
document.querySelector("#idName");       // one element by ID
document.querySelector(".className");    // first element by class
document.querySelectorAll("button");     // all buttons
```

## Common changes

```js
element.textContent = "New text";
element.innerHTML = "<strong>New HTML</strong>";
element.classList.add("hidden");
element.classList.remove("hidden");
element.classList.toggle("hidden");
```

## Inputs

```js
const input = document.querySelector("#nameInput");
const value = input.value.trim();
```

## Forms

```js
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
```

`event.preventDefault()` stops the browser refreshing the page when the form submits.
