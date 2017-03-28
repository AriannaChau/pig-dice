// back end logic

function Player (name) {
  this.playerName = name;
  this.turnScore = 0;
  this.playerScore = 0;
}

function Die() {
  this.sides = [1,2,3,4,5,6];
}

Player.prototype.hold = function(turnScore, playerScore, turnCount) {
  playerScore += turnScore;
  turnCount++;
}

Die.prototype.roll = function(turnCount, player) {
  var rolledSide = this.sides[Math.floor(Math.random() * this.sides.length)];
  console.log(rolledSide)
  if (rolledSide === 1) {
    player.turnScore = 0;
    turnCount++;
  } else {
    player.turnScore += rolledSide;
  }
}


var whichTurn = function(player1, player2, turnCount) {
  if (turnCount % 2 === 0) {
    return player2;
  } else {
    return player1;
  }
}

// front end logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var player1 = $("input#player1").val();
    var player2 = $("input#player2").val();
    var die = new Die();
    var newPlayer1 = new Player(player1);
    var newPlayer2 = new Player(player2);
    var turnCount = 1;


    $("button#submit").hide();
    $("#rollBtn").show();
    $("#show-players").show();
    $("#playerName1").text(newPlayer1.playerName);
    $("#playerName2").text(newPlayer2.playerName);
    $("#turnScore1").text(newPlayer1.turnScore);
    $("#turnScore2").text(newPlayer2.turnScore);


    $("#rollBtn").click(function() {
      var turnPlayer = whichTurn(newPlayer1, newPlayer2, turnCount);
      die.roll(turnCount, turnPlayer);
      console.log(turnPlayer);
    });
  });


});
