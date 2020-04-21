class Player {
  constructor(token, id) {
    this.id = id || Date.now();
    this.token = token;
    this.wins = [];
  }

  saveWinsToStorage(token) {
    var wins = JSON.stringify(this.wins);
    localStorage.setItem(`${token} wins`, wins);
  }

  retrieveWinsFromStorage(token) {
    var getWins = localStorage.getItem(`${token} wins`);
    this.wins = JSON.parse(getWins);
  }
}
