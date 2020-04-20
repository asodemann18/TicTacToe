var game = new Game();
var board = document.querySelector('.board');
var turn = document.querySelector('.turn')
//set title to say whose turn it is
//grab game column s

board.addEventListener('click', playGame);

function playGame(event) {
  var entireBoard = event.target;
  var specificBox = event.target.dataset.index
  if(entireBoard.innerText === "") {
    entireBoard.innerText = game.playersMove(specificBox);
    game.horizontalWin();
    game.verticalWin();
    game.diagonalWin();
    game.noWin();
    console.log(game.board);
    console.log(game.playerX.wins);
    console.log(game.playerO.wins);
  }
}
