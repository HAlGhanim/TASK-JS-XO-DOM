// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
const winConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let currentPlayer = "X";
let turns = 0;
let gameOver = false; //This variable will be set to true if the game is over and its also there to enable the tie condition to work

function changePlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function clickButton(index) {
  //the if condition checks if the button is empty and if the game isn't over
  //If I remove the !gameOver condition it will still detect a winner but it won't prevent me from filling the empty buttons even after the game is over
  //The only way that removing the !gameOver condition isn't an issue is if I have the restartGame function making it so that the buttons are emptied
  if (!gameOver && document.getElementById(index).innerHTML === "") {
    if (currentPlayer === "X") {
      fillButton(index, currentPlayer);
      document.getElementById(index).classList.add("green");
    } else {
      fillButton(index, currentPlayer);
      document.getElementById(index).classList.add("red");
    }
    turns++;
    if (!checkWinner(currentPlayer)) {
      changePlayer();
    }
  }
}

function checkWinner(player) {
  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    const first = document.getElementById(a).innerHTML;
    const second = document.getElementById(b).innerHTML;
    const third = document.getElementById(c).innerHTML;

    if (first === player && second === player && third === player) {
      gameOver = true;
      winningAlert(player);
      restartGame();
      return true;
      // break; //Commented this because the restartGame function will reset the game so there is no need to break out of the loop
    }
  }
  if (turns === 9 && !gameOver) {
    alert("It's a tie!");
    restartGame();
    return true;
  }

  return false;
}
function restartGame() {
  numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numArray.forEach((element) => {
    fillButton(element, "");
    document.getElementById(element).classList.remove("green");
    document.getElementById(element).classList.remove("red");
  });
  turns = 0;
  gameOver = false;
  currentPlayer = "X";
}
/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
