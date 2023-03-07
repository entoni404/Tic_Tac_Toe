// Selecting start_page and X,O elements to start the game
let startPage = document.getElementById("start_page");
let characters = document.querySelectorAll(".char_select");

// Change turns - using boolean
// true => X's turn
// false => O's turn
let changeTurn = null;

// Choosing the character
characters.forEach((character) => {
  character.addEventListener("click", () => {
    if (character.id === "X") {
      changeTurn = true;
      //   oTurn.classList.add("fade");
      text.innerHTML = "X Plays";
    } else {
      changeTurn = false;
      //   xTurn.classList.add("fade");
      text.innerHTML = "O Plays";
    }
    startPage.style.display = "none";
    gamePlay.style.display = "flex";
  });
});

// Filling the boxes with the character that has the turn

// Selecting Game play tags
let gamePlay = document.getElementById("game_play");
let text = document.getElementById("text");
let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // if change turn is true , x plays
    if (changeTurn == true) {
      box.innerHTML = '<i class="fa-solid fa-x x"></i>';
      box.style.pointerEvents = "none";
      box.id = "x";
      changeTurn = false;
      text.innerHTML = "O Plays";
      gamePlay.style.background = "#01021862";
    } else {
      box.innerHTML = '<i class="fa-regular fa-circle o"></i>';
      box.style.pointerEvents = "none";
      box.id = "o";
      changeTurn = true;
      text.innerHTML = "X Plays";
      gamePlay.style.background = "#910c0c4f";
    }
    winningFunc();
    drawFunc();
  });
});

// Winner Announcment Function

// Selecting winner tags
let winner = document.getElementById("winner");
let winnerText = document.getElementById("winner_text");

let winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let winningFunc = () => {
  for (let i = 0; i <= 7; i++) {
    let wCombo = winningCombo[i];
    if (
      boxes[wCombo[0]].id === "x" &&
      boxes[wCombo[1]].id === "x" &&
      boxes[wCombo[2]].id === "x"
    ) {
      winner.style.display = "flex";
      gamePlay.style.display = "none";
      winnerText.innerHTML = "X wins the game";
    } else if (
      boxes[wCombo[0]].id === "o" &&
      boxes[wCombo[1]].id === "o" &&
      boxes[wCombo[2]].id === "o"
    ) {
      winner.style.display = "flex";
      gamePlay.style.display = "none";
      winnerText.innerHTML = "O wins the game";
    } else if (
      boxes[wCombo[0]].id === "" ||
      boxes[wCombo[1]].id === "" ||
      boxes[wCombo[2]].id === ""
    ) {
      continue;
    }
  }
};

// Draw function

let drawFunc = () => {
  if (
    boxes[0].id != "" &&
    boxes[1].id != "" &&
    boxes[2].id != "" &&
    boxes[3].id != "" &&
    boxes[4].id != "" &&
    boxes[5].id != "" &&
    boxes[6].id != "" &&
    boxes[7].id != "" &&
    boxes[8].id != ""
  ) {
    winner.style.display = "flex";
    gamePlay.style.display = "none";
    winnerText.innerHTML = "It's a Draw";
  }
};

//Selecting the button to restart the game
let startAgain = document.getElementById("restart");

//Start Over

startAgain.addEventListener("click", () => {
  window.location.reload();
});
