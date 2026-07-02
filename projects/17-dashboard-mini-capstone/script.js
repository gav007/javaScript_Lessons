// 17 - Mini Dashboard Capstone
// Goal: combine DOM, forms, arrays, filtering, and localStorage.

const STORAGE_KEY = "js-foundations-dashboard";

const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const categorySelect = document.querySelector("#categorySelect");
const filterSelect = document.querySelector("#filterSelect");
const taskList = document.querySelector("#taskList");
const summaryText = document.querySelector("#summaryText");
const clearBtn = document.querySelector("#clearBtn");

let tasks = [];

function saveTasks() {
  // TODO 1: save tasks to localStorage as JSON.
}

function loadTasks() {
  // TODO 2: load tasks from localStorage or return [] if nothing exists.
}

function getVisibleTasks() {
  const filter = filterSelect.value;

  // TODO 3: if filter is "all", return all tasks.
  // TODO 4: otherwise return only matching category tasks.
}

function renderSummary() {
  // TODO 5: show total tasks, completed tasks, and remaining tasks.
}

function renderTasks() {
  // TODO 6: render visible tasks into taskList.
  // TODO 7: each task should have complete and delete buttons.
  renderSummary();
}

function addTask(text, category) {
  const newTask = {
    id: Date.now(),
    text: text,
    category: category,
    completed: false
  };

  // TODO 8: push, save, render.
}

function toggleTask(id) {
  // TODO 9: find task, flip completed, save, render.
}

function deleteTask(id) {
  // TODO 10: filter out task, save, render.
}

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // TODO 11: validate input and call addTask().
});

filterSelect.addEventListener("change", renderTasks);

clearBtn.addEventListener("click", function () {
  // TODO 12: clear tasks, save, render.
});

tasks = loadTasks();
renderTasks();
