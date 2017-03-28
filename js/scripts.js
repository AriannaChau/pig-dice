// back end logic

function Player (name, playerScore) {
  this.playerName = name;
  this.turnScore = 0;
}

function Die() {
  this.sides = [1,2,3,4,5,6];
}

Player.prototype.hold = function() {

}

Die.prototype.roll = function(turnCount, turnScore) {
var rolledSide = return this.sides[Math.floor(Math.random() * this.sides.length)];
  if (rolledSide === 1) {
    turnScore = 0
    turnCount++;
  } else {

  }
}


// front end logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var die = new Die();
    console.log(die.roll());
    var player1 = $("input#player1").val();
    var player2 = $("input#player2").val();

    var newPlayer1 = new Player(player1)
    var newPlayer2 = new Player(player2)
  });

});
