const score = JSON.parse(localStorage.getItem("highScore")) || [];
const highScores = document.getElementById("highscores")
const clearHighScores = document.getElementById("clear")

score.sort((a,b) => b.playerScore - a.playerScore);
//console.log(score)
for (var i = 0; i< score.length; i++) {
var highScore = document.createElement("li");
  highScore.textContent = score[i].playerName + " - " + score[i].playerScore;
  highScores.appendChild(highScore);
}


function clearScores() {
  localStorage.removeItem("highScore");
  highScores.innerHTML = "";
}
clearHighScores.addEventListener("click", clearScores);