var startScreen = document.getElementById("start-screen");
var endScreen = document.getElementById("end-screen");
var questionsScreen = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var feedback = document.getElementById("feedback");
var timeContainer = document.getElementById("time");
var finalScore = document.getElementById("final-score");
var userInitials = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var questionIndex = 0;
var timerValue = 120;
var timeInterval;

var questions = [
  {
    questionText: "Commonly used data types DO not include: ",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    questionText:
      "The condition in an if/ else statement is enclosed with _______. ",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ____________.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _________ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is: ",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
];


function starTimer() {
  function subtractTime(params) {
    timerValue -= 1;
    timeContainer.innerText = timerValue;

    if (timerValue === 0) {
      clearInterval(timeInterval);
      endQuiz();
    }

  }

  timeInterval = setInterval(subtractTime, 1000);
}

function checkAnswer(event) {
  if (event.target.matches("button")) {
    feedback.classList.remove("hide");

    if (event.target.textContent === questions[questionIndex].answer) {
      feedback.textContent = "Correct!";
    } else {

      if (timerValue < 10) {
        timerValue = 1;
        return endQuiz();
      }
      timerValue -= 10;
      timeContainer.innerText = timerValue;
      feedback.textContent = "Wrong!";
    }

    questionIndex++;

    if (questionIndex <= questions.length - 1) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
}

function displayQuestion() {
  choices.innerHTML = "";

  questionTitle.textContent = questions[questionIndex].questionText;

  var choiceOne = document.createElement("button");
  choiceOne.textContent = questions[questionIndex].choices[0];
  choices.appendChild(choiceOne);

  var choiceTwo = document.createElement("button");
  choiceTwo.textContent = questions[questionIndex].choices[1];
  choices.appendChild(choiceTwo);

  var choiceThree = document.createElement("button");
  choiceThree.textContent = questions[questionIndex].choices[2];
  choices.appendChild(choiceThree);

  var choiceFour = document.createElement("button");
  choiceFour.textContent = questions[questionIndex].choices[3];
  choices.appendChild(choiceFour);
}

function startQuiz() {
  questionsScreen.classList.remove("hide");
  startScreen.classList.add("hide");
  questionIndex = 0;
  displayQuestion();
  starTimer();
}

function endQuiz() {
  questionsScreen.classList.add("hide");
  feedback.classList.add("hide");
  endScreen.classList.remove("hide");
  clearInterval(timeInterval);
  finalScore.innerText = timerValue;
}

// saved to local storage

function savedToLS() {
  const score = JSON.parse(localStorage.getItem("highScore")) || [];
  const scoreObject = {
    playerName: userInitials.value,
    playerScore: timerValue,
  };
  //console.log(score, scoreObject);
  score.push(scoreObject);

  localStorage.setItem("highScore", JSON.stringify(score));
  location.replace("./highscores.html")
}

startBtn.addEventListener("click", startQuiz);
choices.addEventListener("click", checkAnswer);

submitBtn.addEventListener("click", savedToLS);
