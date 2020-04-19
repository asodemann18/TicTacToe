class Game {
  constructor() {
    this.playerX = new Player('X')
    this.playerO = new Player('O')
    this.board = [[0, 0, 0],
                  [0, 0, 0],
                  [0, 0, 0]];
    this.xTurn = true;
    this.oTurn = false;
  }

  playersMove(row, column) {
    if(this.xTurn === true && this.board[row][column] === 0) {
      this.board[row][column] = this.playerX.token;
      this.xTurn = false;
      this.oTurn = true;
    } else if(this.oTurn === true && this.board[row][column] === 0) {
      this.board[row][column] = this.playerO.token;
      this.oTurn = false;
      this.xTurn = true;
    }
    this.horizontalWin();
  }
//!this.board[i].includes(0)
  horizontalWin() {
    for(var i = 0; i < this.board.length; i++) {
      if((this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]) && !this.board[i].includes(0)) {
        console.log(`${this.board[i][0]} Wins!`);
        return true;
      }
    }
  }
}



// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is

// A way to check the Game’s board data for win conditions

// A way to detect when a game is a draw (no one has won)
// A way to save a winning Game’s board data to the correct player’s wins array (push winning board into this.playerX/0.wins array)
// A way to reset the Game’s board to begin a new game
