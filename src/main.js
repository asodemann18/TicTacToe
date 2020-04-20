var game = new Game();
var board = document.querySelector('.board');
var turn = document.querySelector('.turn')

board.addEventListener('click', playGame);

function playGame(event) {
  var entireBoard = event.target;
  var specificBox = event.target.dataset.index
  if(entireBoard.innerText === "") {
    entireBoard.innerText = game.playersMove(specificBox);
    changeTurnText();
    game.horizontalWin();
    game.verticalWin();
    game.diagonalWin();
    game.noWin();
    console.log(game.board);
    console.log(game.playerX.wins);
    console.log(game.playerO.wins);
  }
}
function changeTurnText() {
  if(game.xTurn === true) {
    turn.innerText = `It's ${game.playerX.token}'s Turn`
  } else {
    turn.innerText = `It's ${game.playerO.token}'s Turn`
  }
}
