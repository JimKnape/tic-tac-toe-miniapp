const cells = document.getElementsByClassName('play');
var moveNum = 0;
var tracker = {
    X: [[], [], []],
    O: [[], [], []]
}

const playMove = function(event) {
  //find current player
  (moveNum % 2 === 0) ? currentPlayer = "X" : currentPlayer = "O";
  event.target.textContent = currentPlayer;

  tracker[currentPlayer][event.target.parentNode.id].push(event.target.id)
  console.log(tracker)
  moveNum++;
}


