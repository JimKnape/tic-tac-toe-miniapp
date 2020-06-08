const cells = document.getElementsByClassName('play');
var moveNum = 0;
var tracker = {
    X: [[], [], []],
    O: [[], [], []]
}

//create helper function to check for winner
var checkWinner = function(currentPlayer) {
  for (var i = 0; i < tracker[currentPlayer].length; i++) {
    if (tracker[currentPlayer][i].length === 3) {
      alert(`Player ${currentPlayer} wins!`);
      //update game totals and reset board
      return;
    }
  }
  if (tracker[currentPlayer][1].indexOf(1) !== -1) {
      if ((tracker[currentPlayer][0].indexOf(0) !== -1 && tracker[currentPlayer][2].indexOf(2) !== -1) || (tracker[currentPlayer][0].indexOf(2) !== -1 && tracker[currentPlayer][3].indexOf(0) !== -1)) {
        alert(`Player ${currentPlayer} wins!`);
        //update game totals and reset board?
        return;
      }
    }
    return;
}

const playMove = function(event) {
  //find current player
  (moveNum % 2 === 0) ? currentPlayer = "X" : currentPlayer = "O";
  event.target.textContent = currentPlayer;
  tracker[currentPlayer][event.target.parentNode.id].push(Number(event.target.id))
  //check for winner
  if (moveNum >= 4) {
      checkWinner(currentPlayer);
  }
  moveNum++;
}


