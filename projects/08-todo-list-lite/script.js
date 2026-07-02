// 08 - Todo List Lite
// Goal: create, read, update, and delete tasks in memory.

const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

let todos = [];
let nextId = 1;

function renderTodos() {
  // TODO 1: clear todoList.innerHTML.
  // TODO 2: loop through todos and create <li> elements.
  // TODO 3: each item needs text, a complete button, and a delete button.
  // TODO 4: complete button calls toggleTodo(todo.id).
  // TODO 5: delete button calls deleteTodo(todo.id).
}

function addTodo(text) {
  const newTodo = {
    id: nextId,
    text: text,
    completed: false
  };

  // TODO 6: push newTodo into todos.
  // TODO 7: increase nextId.
}

function toggleTodo(id) {
  // TODO 8: find the todo by id and flip completed true/false.
}

function deleteTodo(id) {
  // TODO 9: filter out the todo with this id.
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = todoInput.value.trim();

  // TODO 10: validate empty input.
  // TODO 11: add the todo, clear input, render todos.
});

renderTodos();
