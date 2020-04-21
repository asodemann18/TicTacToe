
var game = new Game();
var board = document.querySelector('.board');
var turn = document.querySelector('.turn')

window.onload = displayXSavedwins();
window.onload = displayOSavedwins();
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
    changeWinStats();
  }
}

function changeTurnText() {
  game.xTurn === true ? turn.innerText = `It's ${game.playerX.token}'s Turn` : turn.innerText = `It's ${game.playerO.token}'s Turn`;
}

function changeWinStats() {
  if(game.win === true && game.xTurn === false) {
      turn.innerText = `${game.playerX.token} Wins!`;
      game.playerX.saveWinsToStorage(game.playerX.token);
      displayWins('.x-wins', game.playerX.wins.length );
      displayXboards();
      resetBoard();
  } else if(game.win === true && game.oTurn === false) {
      turn.innerText = `${game.playerO.token} Wins!`;
      game.playerO.saveWinsToStorage(game.playerO.token);
      displayWins('.o-wins', game.playerO.wins.length );
      resetBoard();
  } else if(game.playCount > 8 && game.win === false) {
      turn.innerText = "It's a draw!";
      resetBoard();
  }
}

function displayWins(selectClass, lengthWins) {
  var wins = document.querySelector(selectClass);
  wins.innerText = `${lengthWins} Wins`;
}

function displayXboards() {
  var allBoardsSection = document.querySelector('.all-boards');
  for(var i = 0; i < game.playerX.wins.length; i++) {
    var miniBoard = `<article class="mini-boards">
        <article class="mini-box0">${game.playerX.wins[i][0]}</article>
        <article class="mini-box1">${game.playerX.wins[i][1]}</article>
        <article class="mini-box2">${game.playerX.wins[i][2]}</article>
        <article class="mini-box3">${game.playerX.wins[i][3]}</article>
        <article class="mini-box4">${game.playerX.wins[i][4]}</article>
        <article class="mini-box5">${game.playerX.wins[i][5]}</article>
        <article class="mini-box6">${game.playerX.wins[i][6]}</article>
        <article class="mini-box7">${game.playerX.wins[i][7]}</article>
        <article class="mini-box8">${game.playerX.wins[i][8]}</article>
      </article>`
    }
  allBoardsSection.insertAdjacentHTML('beforeend', miniBoard);
}


function displayXSavedwins() {
  storage(game.playerX);
  displayWins('.x-wins', game.playerX.wins.length );
}

function displayOSavedwins() {
  storage(game.playerO);
  displayWins('.o-wins', game.playerO.wins.length );
}

function resetBoard() {
  setTimeout(function() {
    var box = document.querySelectorAll('.box');
    for(var i = 0; i < box.length; i++) {
      box[i].innerText = ""
    }
    game.restartGame();
    changeTurnText();
  }, 2000);
}

function storage(player) {
    player.retrieveWinsFromStorage(player.token);
}
