// 11 - Form Validation
// Goal: check user input before accepting a form.

const contactForm = document.querySelector("#contactForm");
const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const messageInput = document.querySelector("#messageInput");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");
const successMessage = document.querySelector("#successMessage");

function isValidEmail(email) {
  // Basic beginner-friendly check. Not perfect, but useful for practice.
  return email.includes("@") && email.includes(".");
}

function clearErrors() {
  // TODO 1: clear all error text and success text.
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  clearErrors();

  let isValid = true;

  // TODO 2: validate name is not empty.
  // TODO 3: validate email using isValidEmail().
  // TODO 4: validate message has at least 10 characters.
  // TODO 5: if isValid stays true, show success message and reset form.
});
