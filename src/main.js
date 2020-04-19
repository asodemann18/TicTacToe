var board = document.querySelector('.board');
var boxes = document.querySelectorAll('.box');
//console.log(boxes.item(0));
var gameBoard = [boxes.item(0), boxes.item(1), boxes.item(2),
                 boxes.item(3), boxes.item(4), boxes.item(5),
                 boxes.item(6), boxes.item(7), boxes.item(8)];

board.addEventListener('click', playGame);

function playGame(event) {
  var game = new Game();
  var box = event.target;
  console.log(box);

  //box.innerText = game.playersMove(boxes.item(0));
}
