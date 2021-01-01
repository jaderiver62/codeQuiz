var pageContentEl = document.querySelector("#page-content");
var highScoresEl = document.querySelector("#scores");
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start-btn");

var myQuestions = [question1 = {
    currentQuestion: "What is this question?",
    a: "a",
    b: "b",
    c: "c",
    answer: "a"
}, question2 = {
    currentQuestion: "What is this question?",
    a: "a",
    b: "b",
    c: "c",
    answer: "b"
}, question3 = {
    currentQuestion: "What is this question?",
    a: "a",
    b: "b",
    c: "c",
    answer: "c"
}];



var quizStart = function(event) {
    //  var targetEl = event.target;
    // TO DO : Write questions and function to switch between them
    // pageContentEl.innerHTML = 

    pageContentEl.innerHTML = "<h3>" + myQuestions[0].currentQuestion + "</h3>" +
        "<br>" + myQuestions[0].a + "<br>" + myQuestions[0].b + "<br>" + myQuestions[0].c;
}

function quizTimer() {
    var timeRemaining = 60;
    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time: " + timeRemaining;
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
startBtn.onclick = quizTimer;