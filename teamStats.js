const team = {
  _players: [
    {firstName: 'Mama', lastName: "de Weger", age: 61},
    {firstName: 'Jeroentje', lastName: 'Fiene', age: 35},
    {firstName: 'Daantje', lastName: 'Fiene', age: 37}
  ],
  _games: [
    {opponent: 'Ajax', teamPoints: 10, opponentPoints: 4},
    {opponent: 'Feyenoord', teamPoints: 2, opponentPoints: 6},
    {opponent: 'Barcelona', teamPoints: 24, opponentPoints: 2}
  ],
  get players(){
      return this._players;
  },
  get games(){
    return this._games;
  },

  //adding players
  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },

  // adding games
  addGame(newOpponentName, newTeamPoints, newOpponentsPoints){
    let game = {
      opponentName: newOpponentName,
      teamPoints: newTeamPoints,
      opponentsPoints: newOpponentsPoints
    };
    this.games.push(game);
  }
};
//test log players
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
//testlog games
team.addGame("Titans", 100, 98);
console.log(team.games);