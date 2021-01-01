var pageContentEl = document.querySelector("#page-content");
var highScoresEl = document.querySelector("#scores");
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start-btn");
var buttonTry = document.getElementById("start-btn");

var quizStart = function(event) {
    //  var targetEl = event.target;
    // TO DO : Write questions and function to switch between them
    pageContentEl.innerHTML = "!! Insert Quiz Question Code Here !!";
}

function quizTimer() {
    var timeRemaining = 60;
    var timeInterval = setInterval(function() {
        timerEl.textContent = "Timer: " + timeRemaining;
        if (timeRemaining > 0) {
            timeRemaining--;
        } else {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    pageContentEl.innerHTML = "!! Insert End Code Here !!";
}
startBtn.addEventListener("click", quizStart);
buttonTry.onclick = quizTimer;