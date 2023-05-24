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

function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  if (document.getElementById(index).innerHTML === "X") {
    fillButton(1, "X");
  } else if (index === 2) {
    fillButton(2, "O");
  } else if (index === 3) {
    fillButton(3, "O");
  } else if (index === 4) {
    fillButton(4, "O");
  } else if (index === 5) {
    fillButton(5, "O");
  } else if (index === 6) {
    fillButton(6, "O");
  } else if (index === 7) {
    fillButton(7, "O");
  } else if (index === 8) {
    fillButton(8, "O");
  } else if (index === 9) {
    fillButton(9, "O");
  }
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
