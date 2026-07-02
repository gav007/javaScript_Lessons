// 04 - Mini Calculator
// Goal: practise functions with parameters and return values.

const firstNumberInput = document.querySelector("#firstNumber");
const secondNumberInput = document.querySelector("#secondNumber");
const result = document.querySelector("#result");
const operationButtons = document.querySelectorAll("[data-operation]");

function add(a, b) {
  // TODO: return a + b;
}

function subtract(a, b) {
  // TODO
}

function multiply(a, b) {
  // TODO
}

function divide(a, b) {
  // TODO: guard against b being 0.
}

function calculate(operation, a, b) {
  // TODO: use if/else if to choose which function to call.
}

operationButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const firstNumber = parseFloat(firstNumberInput.value);
    const secondNumber = parseFloat(secondNumberInput.value);
    const operation = button.dataset.operation;

    // TODO 1: check Number.isNaN(firstNumber) or Number.isNaN(secondNumber).
    // TODO 2: calculate the answer.
    // TODO 3: display the answer.
  });
});
