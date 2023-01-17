

var questions = [
  {
    questionText: "Commonly used data types DO not include: ",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    questionText: "The condition in an if/ else statement is enclosed with _______. ",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis",
  },
 {
   questionText: "Arrays in JavaScript can be used to store ____________.",
  choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
   answer: "all of the above",
     },
    {
   questionText: "String values must be enclosed within _________ when being assigned to variables.",
  choices: ["commas", "curly brackets", "quotes", "parenthesis"],
   answer: "quotes",
    },
   {
   questionText: "A very useful tool used during development and debugging for printing content to the debugger is: ",
   choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
   answer: "console.log",
   },
];

function checkAnswer(event) {
  if (event.target.matches("button")) {
    feedback.classList.remove("hide");

    if (event.target.textContent === questions[questionIndex].answer) {
      feedback.innerHTML = "Correct!";
    } else {
      var timePenalty = 10;
      if (timerValue < timePenalty) {
        timerValue = 1;
        endQuiz();
      } else {
        timerValue -= 10;
      }
      feedback.innerHTML = "Wrong!";
    }

    questionIndex++;

    if (questionIndex <= questions.length - 1) {
      displayQuestion();
    } else {
      console.log("Quiz is done");
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