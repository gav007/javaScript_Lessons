// 15 - Tic Tac Toe
// Goal: practise arrays, turns, and win conditions.

const board = document.querySelector("#board");
const statusText = document.querySelector("#statusText");
const resetBtn = document.querySelector("#resetBtn");

let cells = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

const winningLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function renderBoard() {
  board.innerHTML = "";

  // TODO 1: loop through cells with forEach.
  // TODO 2: create a button for each cell.
  // TODO 3: button text should be cell value.
  // TODO 4: clicking the button should call handleMove(index).
}

function handleMove(index) {
  // TODO 5: ignore click if gameOver is true or the cell already has a value.
  // TODO 6: place currentPlayer into cells[index].
  // TODO 7: check winner.
  // TODO 8: swap player if no winner.
  // TODO 9: render board again.
}

function checkWinner() {
  // TODO 10: loop through winningLines.
  // TODO 11: if three matching non-empty cells are found, return the winning player.
  // TODO 12: if all cells are filled and no winner, return "draw".
  // TODO 13: otherwise return null.
}

resetBtn.addEventListener("click", function () {
  // TODO 14: reset cells, currentPlayer, gameOver, status text, and render.
});

renderBoard();
