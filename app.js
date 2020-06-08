const cells = document.getElementsByClassName('play');

console.log(cells)

const playMove = function(event) {
  event.target.textContent = "X";
  console.log(event.target)
}


