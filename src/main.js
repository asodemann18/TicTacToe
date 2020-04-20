var game = new Game();
var board = document.querySelector('.board');
var turn = document.querySelector('.turn')

board.addEventListener('click', playGame);

function playGame(event) {
  var entireBoard = event.target;
  var specificBox = event.target.dataset.index;
  if(entireBoard.innerText === "") {
    entireBoard.innerText = game.playersMove(specificBox);
    game.horizontalWin();
    game.verticalWin();
    game.diagonalWin();
    game.noWin();
    changeTurnText();
    changeWinText();
    console.log(game.playerX.wins);
    console.log(game.playerO.wins);
    //console.log(game.xTurn);
    console.log(game.win);
    console.log(game.playCount);
  }
}

function changeTurnText() {
  game.xTurn === true ? turn.innerText = `It's ${game.playerX.token}'s Turn` : turn.innerText = `It's ${game.playerO.token}'s Turn`;
   }

function changeWinText() {
  if(game.win === true && game.xTurn === false) {
      turn.innerText = `${game.playerX.token} Wins!`;
  } else if(game.win === true && game.oTurn === false) {
      turn.innerText = `${game.playerO.token} Wins!`;
  } else if(game.playCount > 8 && game.win === false) {
      turn.innerText = "It's a draw!";
  }
}
