//DOM Selector
const cells = document.querySelectorAll(".item");
const statusText = document.querySelector(".status");

const board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function initializeGame() {
  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      updateCells(cell, index);
      switchPlayer();
    });
  });
}

function updateCells(cell, index) {
  board[index] = currentPlayer;
  displayBoard(cell);
  checkWin();
}

function displayBoard(cell) {
  cell.textContent = currentPlayer;
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `${currentPlayer}'s Turn`;
}

function checkWin() {
  let winStatus = false;
  for (let i; i < winCondition.length; i++) {
    const condition = winCondition[i];
    const cellA = board[condition[0]];
    const cellB = board[condition[1]];
    const cellC = board[condition[2]];
    if (cellA == cellB && cellB == cellC) {
      winStatus = true;
      console.log("test");
    }
  }
  if (winStatus) {
    statusText.textContent = `${currentPlayer}'s Win`;
  }
}

function restart() {
  for (let i; i < board.length; i++) {
    board[i] = "";
  }
}
initializeGame();
