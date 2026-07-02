// 01 - Counter Lab
// Goal: practise variables, functions, and repeated UI updates.

const countDisplay = document.querySelector("#countDisplay");
const statusText = document.querySelector("#statusText");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");
const plusFiveBtn = document.querySelector("#plusFiveBtn");
const resetBtn = document.querySelector("#resetBtn");

let count = 0;

function updateScreen() {
  // TODO 1: show the current count in countDisplay.
  // countDisplay.textContent = count;
  countDisplay.textContent = count;
  // TODO 2: if count is 10 or more, show a warning message.
  // if (count >= 10) { ... } else { ... }
  if (count >= 10) {
    statusText.textContent = "This is getting serious now!";
  } else if (count <= 0) {
    statusText.textContent = "Getting cool now, pump up the jam!";
  } else {
    statusText.textContent = "Cool Beans Bruh";
  }
}

minusBtn.addEventListener("click", function () {
  // TODO 3: decrease count by 1, then call updateScreen().
  count = count - 1;
  updateScreen();
});

plusBtn.addEventListener("click", function () {
  // TODO 4: increase count by 1, then call updateScreen().
  count = count + 1;
  updateScreen();
});

plusFiveBtn.addEventListener("click", function () {
  // TODO 5: increase count by 5, then call updateScreen().
  count = count + 5;
  updateScreen();
});

resetBtn.addEventListener("click", function () {
  // TODO 6: set count back to 0, then call updateScreen().
  count = 0;
  updateScreen();
});

updateScreen();
