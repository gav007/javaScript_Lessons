# Debugging Cheatsheet

## First move
Open DevTools Console.

Windows/Linux: `Ctrl + Shift + J` or `F12`.

## Use console.log

```js
console.log("Button clicked");
console.log(name);
console.log(todos);
```

## Common errors

### Cannot read properties of null
JavaScript could not find the element.

Check:

- Is the ID correct?
- Is the script using `defer`?
- Does the element exist in the HTML?

### x is not defined
You used a variable name that does not exist in that scope.

Check spelling. JavaScript is petty.

### NaN
Means "Not a Number".

Usually you forgot `parseFloat()` or the input was empty.

### Function is not a function
You tried to call something like a function, but it is not one.

Check the variable name and what it stores.

## Debug loop
1. Read the exact error.
2. Find the line number.
3. Log the variables above that line.
4. Fix one thing.
5. Test again.
