// back end logic

function Player (name, playerScore) {
  this.playerName = name;
  this.turnScore = 0;
}

// front end logic

$(document).ready(function() {
  $("form#newPlayers").submit(function(event) {
    event.preventDefault();

    var player1 = $("input#player1").val();
    var player2 = $("input#player2").val();

    var newPlayer1 = new Player(player1)
    var newPlayer2 = new Player(player2)
  });
});
