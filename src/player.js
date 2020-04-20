class Player {
  constructor(token, id) {
    this.id = id || Date.now();
    this.token = token;
    this.wins = [];
  }

  saveWinsToStorage() {
    localStorage.setItem(JSON.stringify(this.token), JSON.stringify(this.wins));
  }
  //
  // retrieveWinsFromStorage() {
  //
  // }
}
