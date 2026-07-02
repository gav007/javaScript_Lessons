// 09 - Todo Local Storage
// Goal: save and load tasks with localStorage.

const STORAGE_KEY = "js-foundations-todos";

const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const clearBtn = document.querySelector("#clearBtn");

let todos = [];

function saveTodos() {
  // TODO 1: convert todos to a JSON string.
  // TODO 2: save it with localStorage.setItem(STORAGE_KEY, jsonString).
}

function loadTodos() {
  // TODO 3: get saved data with localStorage.getItem(STORAGE_KEY).
  // TODO 4: if there is saved data, parse it with JSON.parse().
  // TODO 5: return an empty array if nothing is saved.
}

function renderTodos() {
  // TODO 6: render tasks like the previous project.
}

function addTodo(text) {
  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false
  };

  // TODO 7: push, save, render.
}

function deleteTodo(id) {
  // TODO 8: filter, save, render.
}

function toggleTodo(id) {
  // TODO 9: update, save, render.
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = todoInput.value.trim();

  // TODO 10: validate, add, clear input.
});

clearBtn.addEventListener("click", function () {
  // TODO 11: clear todos array, remove localStorage item, render.
});

todos = loadTodos();
renderTodos();
