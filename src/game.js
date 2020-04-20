class Game {
  constructor() {
    this.playerX = new Player('X')
    this.playerO = new Player('O')
    this.board = ["-", "-", "-",
                  "-", "-", "-",
                  "-", "-", "-"]
    this.xTurn = true;
    this.oTurn = false;
    this.win = false;
    this.playCount = 0;
  }

  playersMove(space) {
    if(this.xTurn === true && (this.board[space] !== this.playerX.token || this.board[space] !== this.playerX.token)) {
      this.board[space] = this.playerX.token;
        this.xTurn = false;
        this.oTurn = true;
        this.playCount++;
        this.horizontalWin();
        this.verticalWin();
        this.diagonalWin();
        this.noWin();
        return this.playerX.token;
    } else if(this.oTurn === true && (this.board[space] !== this.playerX.token || this.board[space] !== this.playerX.token)) {
        this.board[space] = this.playerO.token;
        this.oTurn = false;
        this.xTurn = true;
        this.playCount++;
        this.horizontalWin();
        this.verticalWin();
        this.diagonalWin();
        this.noWin();
        return this.playerO.token;
    }
    // this.horizontalWin();
    // this.verticalWin();
    // this.diagonalWin();
    // this.noWin();
  }

  horizontalWin() {
      if((this.board[0] === this.board[1] && this.board[1] === this.board[2]) &&
          this.board[0] !== "-") {
        console.log(`${this.board[0]} Wins!`);
        this.win = true;
        this.board[0] === this.playerX.token ? this.playerX.wins.push(this.board) : this.playerO.wins.push(this.board);
        this.restartGame();
      } else if((this.board[3] === this.board[4] && this.board[4] === this.board[5]) &&
                 this.board[3] !== "-") {
        console.log(`${this.board[3]} Wins!`);
        this.win = true;
        this.board[3] === this.playerX.token ? this.playerX.wins.push(this.board) : this.playerO.wins.push(this.board);
        this.restartGame();
      } else if((this.board[6] === this.board[7] && this.board[7] === this.board[8]) &&
                 this.board[6] !== "-") {
        console.log(`${this.board[6]} Wins!`);
        this.win = true;
        this.board[6] === this.playerX.token ? this.playerX.wins.push(this.board) : this.playerO.wins.push(this.board);
        this.restartGame();
      }
  }

  verticalWin() {
      if((this.board[0] === this.board[3] && this.board[3] === this.board[6]) &&
          this.board[0] !== "-") {
        console.log(`${this.board[0]} Wins!`);
        this.win = true;
        this.board[0] === this.playerX.token ? this.playerX.wins.push(this.board) : this.playerO.wins.push(this.board);
        this.restartGame();
      } else if((this.board[1] === this.board[4] && this.board[4] === this.board[7]) &&
                 this.board[1] !== "-") {
        console.log(`${this.board[1]} Wins!`);
        this.win = true;
        this.board[1] === this.playerX.token ? this.playerX.wins.push(this.board) : this.playerO.wins.push(this.board);
        this.restartGame();
      } else if((this.board[2] === this.board[5] && this.board[5] === this.board[8]) &&
                 this.board[2] !== "-") {
        console.log(`${this.board[2]} Wins!`);
        this.win = true;
        this.board[2] === this.playerX.token ? this.playerX.wins.push(this.board) : this.playerO.wins.push(this.board);
        this.restartGame();
      }
  }

  diagonalWin() {
      if((this.board[0] === this.board[4] && this.board[4] === this.board[8]) &&
          this.board[4] !== "-") {
        console.log(`${this.board[4]} Wins!`);
        this.win = true;
        this.board[4] === this.playerX.token ? this.playerX.wins.push(this.board) : this.playerO.wins.push(this.board);
        this.restartGame();
      } else if((this.board[2] === this.board[4] && this.board[4] === this.board[6]) &&
                 this.board[4] !== "-") {
        console.log(`${this.board[4]} Wins!`);
        this.win = true;
        this.board[4] === this.playerX.token ? this.playerX.wins.push(this.board) : this.playerO.wins.push(this.board);
        this.restartGame();
      }
  }

  noWin() {
      if (this.playCount > 8 && this.win === false) {
        console.log("It's a Draw!");
        this.restartGame();
      }
  }

  restartGame() {
    this.win = false;
    this.playCount = 0;
    this.board = ["-", "-", "-",
                  "-", "-", "-",
                  "-", "-", "-"]
  }
}


// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to save a winning Game’s board data to the correct player’s wins array (push winning board into this.playerX/0.wins array)
// A way to reset the Game’s board to begin a new game
