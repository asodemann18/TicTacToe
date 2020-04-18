class Game {
  constructor() {
    this.playerX = new Player('X')
    this.playerO = new Player('O')
    this.board = [[0, 0, 0],
                  [0, 0, 0],
                  [0, 0, 0]];
  }

  playersMove(row, column) {
    this.board[row][column] = this.playerX.token;
  }
}



// Two Player instances
// A way to keep track of the data for the game board

// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to save a winning Game’s board data to the correct player’s wins array
// A way to reset the Game’s board to begin a new game
