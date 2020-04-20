var board = document.querySelector('.board');
//var boxes = document.querySelectorAll('.box');
var game = new Game();

board.addEventListener('click', playGame);

function playGame(event) {
  var entireBoard = event.target;
  var specificBox = event.target.dataset.index
  entireBoard.innerText = game.playersMove(specificBox);
  console.log(game.board);
  console.log(game.playerX.wins);
  console.log(game.playerO.wins);
}
