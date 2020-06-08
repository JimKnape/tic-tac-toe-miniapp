//Model
var moveNum = 0;
var tracker = {
    X: [[], [], []],
    O: [[], [], []]
}
var gameCount = {X: 0, O: 0}

//////////////////////////////////////////////
//controllers
var setScore = function(currentPlayer) {
  gameCount[currentPlayer]++
}

var newTracker = function() {
    tracker = {
        X: [[], [], []],
        O: [[], [], []]
    }
}

var resetBoard = function(){
    var plays = document.getElementsByClassName('play');
    newTracker();
    Array.from(plays).forEach(play => {
      play.textContent = '';
      play.addEventListener('dblclick', playMove, false);
    })
};


var checkWinner = function(currentPlayer) {
    var hasWinner= false;
    for (var i = 0; i < tracker[currentPlayer].length; i++) {
    if (tracker[currentPlayer][i].length === 3) {
      alert(`Player ${currentPlayer} wins!`);
      hasWinner = true;
    }
  }
  if (tracker[currentPlayer][1].indexOf(1) !== -1) {
      if ((tracker[currentPlayer][0].indexOf(0) !== -1 && tracker[currentPlayer][2].indexOf(2) !== -1) || (tracker[currentPlayer][0].indexOf(2) !== -1 && tracker[currentPlayer][2].indexOf(0) !== -1)) {
        alert(`Player ${currentPlayer} wins!`);
        hasWinner = true;
      }
    }
    return hasWinner;
}

const playMove = function(event) {  
  //find current player
  (moveNum % 2 === 0) ? currentPlayer = "X" : currentPlayer = "O";
  event.target.textContent = currentPlayer;
  tracker[currentPlayer][event.target.parentNode.id].push(Number(event.target.id))
  //check for winner
  if (moveNum >= 4) {
      if (checkWinner(currentPlayer)) {
          setScore(currentPlayer);
          renderScore();
          resetBoard();
          return;
      }
  }
  moveNum++;
  //remove the event listener
  this.removeEventListener('dblclick', playMove);
}

/////////// renders /////////////////////////////////////////////////////////\

resetBoard();

//render game count
var renderScore = function() {
  var xGameScore = document.getElementById('xscore');
  var oGameScore =  document.getElementById('oscore');
  xGameScore.textContent = gameCount.X;
  oGameScore.textContent = gameCount.O;
}



