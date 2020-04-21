
var game = new Game();
var board = document.querySelector('.board');
var turn = document.querySelector('.turn');

window.onload = displayXSavedwins();
window.onload = displayOSavedwins();
board.addEventListener('click', playGame);

function playGame(event) {
  var entireBoard = event.target;
  var specificBox = event.target.dataset.index;
  if(entireBoard.innerText === '') {
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
    displayNumWins('.x-wins', game.playerX.wins.length );
    displayWinBoards('.all-boards-x', game.playerX);
    resetBoard();
  } else if(game.win === true && game.oTurn === false) {
      turn.innerText = `${game.playerO.token} Wins!`;
      game.playerO.saveWinsToStorage(game.playerO.token);
      displayNumWins('.o-wins', game.playerO.wins.length );
      displayWinBoards('.all-boards-o',game.playerO);
      resetBoard();
  } else if(game.playCount > 8 && game.win === false) {
      turn.innerText = 'It\'s a draw!';
      resetBoard();
  }
}

function displayNumWins(selectClass, lengthWins) {
  var wins = document.querySelector(selectClass);
  wins.innerText = `${lengthWins} Wins`;
}

function displayWinBoards(section, player) {
  var allBoardsSection = document.querySelector(section);
  allBoardsSection.innerHTML = "";
  for(var i = 0; i < player.wins.length; i++) {
    var miniBoard = `<article class="mini-boards">
                      <article class="mini-box0">${player.wins[i][0]}</article>
                      <article class="mini-box1">${player.wins[i][1]}</article>
                      <article class="mini-box2">${player.wins[i][2]}</article>
                      <article class="mini-box3">${player.wins[i][3]}</article>
                      <article class="mini-box4">${player.wins[i][4]}</article>
                      <article class="mini-box5">${player.wins[i][5]}</article>
                      <article class="mini-box6">${player.wins[i][6]}</article>
                      <article class="mini-box7">${player.wins[i][7]}</article>
                      <article class="mini-box8">${player.wins[i][8]}</article>
                    </article>`;
    allBoardsSection.insertAdjacentHTML('afterbegin', miniBoard);
  }
}

function displayXSavedwins() {
  getLocalstorage(game.playerX);
  displayNumWins('.x-wins', game.playerX.wins.length);
  if(game.playerX.wins.length > 0) {
    displayWinBoards('.all-boards-x', game.playerX);
  }
}

function displayOSavedwins() {
  getLocalstorage(game.playerO);
  displayNumWins('.o-wins', game.playerO.wins.length);
  if(game.playerO.wins.length > 0) {
    displayWinBoards('.all-boards-o', game.playerO);
  }
}

function resetBoard() {
  setTimeout(function() {
    var box = document.querySelectorAll('.box');
    for(var i = 0; i < box.length; i++) {
      box[i].innerText = ''
    }
    game.restartGame();
    changeTurnText();
  }, 2000);
}

function getLocalstorage(player) {
  player.retrieveWinsFromStorage(player.token);
}
