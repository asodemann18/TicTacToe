class Game {
  constructor() {
    this.playerX = new Player('X');
    this.playerO = new Player('O');
    this.board = ['-', '-', '-',
                  '-', '-', '-',
                  '-', '-', '-'];
    this.xTurn = true;
    this.oTurn = false;
    this.win = false;
    this.playCount = 0;
  }

  playersMove(space) {
    if(this.xTurn === true) {
      this.board[space] = this.playerX.token;
      this.xTurn = false;
      this.oTurn = true;
      this.playCount++;
      return this.playerX.token;
    } else if(this.oTurn === true) {
        this.board[space] = this.playerO.token;
        this.oTurn = false;
        this.xTurn = true;
        this.playCount++;
        return this.playerO.token;
    }
  }

  horizontalWin() {
    if((this.board[0] === this.board[1] && this.board[1] === this.board[2]) && this.board[0] !== '-') {
      this.win = true;
      this.board[0] === this.playerX.token ? this.playerX.wins.push(this.board) : this.playerO.wins.push(this.board);
    } else if((this.board[3] === this.board[4] && this.board[4] === this.board[5]) && this.board[3] !== '-') {
        this.win = true;
        this.board[3] === this.playerX.token ? this.playerX.wins.push(this.board) : this.playerO.wins.push(this.board);
    } else if((this.board[6] === this.board[7] && this.board[7] === this.board[8]) && this.board[6] !== '-') {
        this.win = true;
        this.board[6] === this.playerX.token ? this.playerX.wins.push(this.board) : this.playerO.wins.push(this.board);
    }
  }

  verticalWin() {
    if((this.board[0] === this.board[3] && this.board[3] === this.board[6]) && this.board[0] !== '-') {
      this.win = true;
      this.board[0] === this.playerX.token ? this.playerX.wins.push(this.board) : this.playerO.wins.push(this.board);
    } else if((this.board[1] === this.board[4] && this.board[4] === this.board[7]) && this.board[1] !== '-') {
        this.win = true;
        this.board[1] === this.playerX.token ? this.playerX.wins.push(this.board) : this.playerO.wins.push(this.board);
    } else if((this.board[2] === this.board[5] && this.board[5] === this.board[8]) && this.board[2] !== '-') {
        this.win = true;
        this.board[2] === this.playerX.token ? this.playerX.wins.push(this.board) : this.playerO.wins.push(this.board);
    }
  }

  diagonalWin() {
    if((this.board[0] === this.board[4] && this.board[4] === this.board[8]) && this.board[4] !== '-') {
      this.win = true;
      this.board[4] === this.playerX.token ? this.playerX.wins.push(this.board) : this.playerO.wins.push(this.board);
    } else if((this.board[2] === this.board[4] && this.board[4] === this.board[6]) && this.board[4] !== '-') {
        this.win = true;
        this.board[4] === this.playerX.token ? this.playerX.wins.push(this.board) : this.playerO.wins.push(this.board);
    }
  }

  noWin() {
    if (this.playCount > 8 && this.win === false) {
      return;
    }
  }

  restartGame() {
    this.win = false;
    this.playCount = 0;
    this.board = ['-', '-', '-',
                  '-', '-', '-',
                  '-', '-', '-'];
  }
}
