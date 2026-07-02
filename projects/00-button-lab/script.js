// 00 - Button Lab
// Goal: practise the core DOM pattern: select -> listen -> change.

// Step 1: select the HTML elements you need.
const message = document.querySelector("#message");
const helloBtn = document.querySelector("#helloBtn");
const countBtn = document.querySelector("#countBtn");
const toggleBtn = document.querySelector("#toggleBtn");
const resetBtn = document.querySelector("#resetBtn");
const hintBox = document.querySelector("#hintBox");

// Step 2: create a variable to remember the click count.
let clickCount = 0;

// TODO 1: when helloBtn is clicked, change message.textContent.
helloBtn.addEventListener("click", function () {
  // Example: message.textContent = "Hello Gav, JavaScript is awake.";
  message.textContent = "HELLO GAV, JAVASCRIPT AWAKE!";
});

// TODO 2: when countBtn is clicked, add 1 to clickCount and display it.
countBtn.addEventListener("click", function () {
  clickCount = clickCount + 1;
  message.textContent = `Clicked ${clickCount} times.`;
});

// TODO 3: when toggleBtn is clicked, toggle the "hidden" class on hintBox.
toggleBtn.addEventListener("click", function () {
  hintBox.classList.toggle("hidden");
});

// TODO 4: reset the count, message, and hint box.
resetBtn.addEventListener("click", function () {
  clickCount = 0;
  message.textContent = "Press a button and make JavaScript change me.";
  hintBox.classList.add("hidden");
});
