// 13 - Fetch JSON Users
// Goal: fetch data from an API and display it.

const loadBtn = document.querySelector("#loadBtn");
const statusText = document.querySelector("#statusText");
const userList = document.querySelector("#userList");

async function loadUsers() {
  try {
    statusText.textContent = "Loading users...";
    userList.innerHTML = "";

    // TODO 1: fetch data from https://jsonplaceholder.typicode.com/users
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // TODO 2: check response.ok. If false, throw an Error.

    // TODO 3: convert response to JSON with await response.json().

    // TODO 4: render users as cards.

    statusText.textContent = "Users loaded.";
  } catch (error) {
    statusText.textContent = "Something went wrong while loading users.";
    console.error(error);
  }
}

loadBtn.addEventListener("click", loadUsers);
