# 09-todo-local-storage · Todo Local Storage

## Goal
Upgrade the todo list so tasks survive page refresh.

## Why this matters
Local storage gives you a simple browser database for beginner projects.

## Concepts you will practise
- localStorage
- JSON.stringify
- JSON.parse
- loading saved data

## How to run it
Open `index.html` in your browser, or use the VS Code Live Server extension.

## Work order
1. Open `script.js`.
2. Find `TODO 1`.
3. Do one TODO at a time.
4. Refresh the browser after each small change.
5. Use DevTools Console when something breaks. It will break, because JavaScript enjoys humbling people.

## Hints
- `document.querySelector("#id")` grabs one element from the page.
- `.addEventListener("click", function () { ... })` runs code when something is clicked.
- `.textContent` changes visible text.
- `.value` reads what is inside an input.
- `console.log(variableName)` lets you inspect what your code is doing.

## Stretch goals
- Add nicer CSS once the JavaScript works.
- Add one extra feature of your own.
- Write a comment above each function explaining what it does in plain English.

## Done checklist
- [ ] The page loads with no console errors.
- [ ] Every TODO is completed.
- [ ] You can explain what every variable stores.
- [ ] You can explain what every function receives and returns.
- [ ] You tested at least one bad-input case.
