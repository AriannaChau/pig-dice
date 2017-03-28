// back end logic

function Player (name, playerScore) {
  this.playerName = name;
  this.turnScore = 0;
}

function Die() {
  this.sides = [1,2,3,4,5,6];
}

Player.prototype.hold = function(turnScore, playerScore, turnCount) {
  playerScore += turnScore;
  turnCount++;
}

Die.prototype.roll = function(turnCount, turnScore) {
  var rolledSide = this.sides[Math.floor(Math.random() * this.sides.length)];
  console.log(rolledSide)
  if (rolledSide === 1) {
    turnScore = 0
    turnCount++;
  } else {
    turnScore += rolledSide;
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
    var die = new Die();
    console.log(die.roll());
    var player1 = $("input#player1").val();
    var player2 = $("input#player2").val();

    newPlayer1 = new Player(player1)
    newPlayer2 = new Player(player2)


    $("button#submit").hide();
    $("#rollBtn").show();
    $("#show-players").show();
    $("#playerName1").text(newPlayer1.playerName);
    $("#playerName2").text(newPlayer2.playerName);
    $("#turnScore1").text(newPlayer1.turnScore)
    $("#turnScore2").text(newPlayer2.turnScore)
  });

  $("#rollBtn").click(function() {
    var turnPlayer = whichTurn(player1, player2, turnCount);
    die.roll(turnCount, turnPlayer.turnScore);
    console.log(turnPlayer)
  });

});
