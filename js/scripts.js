// back end logic

function Player (name) {
  this.playerName = name;
  this.turnScore = 0;
  this.totalScore = 0;
}

function Die() {
  this.sides = [1,2,3,4,5,6];
}

Player.prototype.hold = function() {
  this.totalScore += this.turnScore;
  // turnCount++;
  this.turnScore = 0;
}

Die.prototype.roll = function(turnScore, player) {
  var rolledSide = this.sides[Math.floor(Math.random() * this.sides.length)];
  console.log(rolledSide)
  if (rolledSide === 1) {
    player.turnScore = 0;
  } else {
    player.turnScore += rolledSide;
  }
}

Player.prototype.checkScore = function() {
  if (this.totalScore >= 10) {
   return true;
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
    $("form#newPlayers").hide();
    $("#holdBtn").show();
    $("#rollBtn").show();
    $("#newGameBtn").show();
    $("#show-players").show();
    $("#playerName1").text(newPlayer1.playerName);
    $("#playerName2").text(newPlayer2.playerName);


    $("#rollBtn").click(function() {
      var turnPlayer = whichTurn(newPlayer1, newPlayer2, turnCount);
      die.roll(turnCount, turnPlayer);
      if (turnPlayer.turnScore === 0) {
        turnCount++; }
      $("#turnScore1").text(newPlayer1.turnScore);
      $("#turnScore2").text(newPlayer2.turnScore);

    });

    $("#holdBtn").click(function() {
      var turnPlayer = whichTurn(newPlayer1, newPlayer2, turnCount);
      turnPlayer.hold();
      if (turnPlayer.checkScore() === true) {
        alert(turnPlayer.playerName + " " + "wins!");
      }

      turnCount++;
      $("#totalScore1").text(newPlayer1.totalScore);
      $("#totalScore2").text(newPlayer2.totalScore);
      console.log(turnPlayer);
    });
  });
});
