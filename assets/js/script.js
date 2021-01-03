var pageContentEl = document.querySelector("#page-content");
var highScoresEl = document.querySelector("#scores");
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start-btn");


var myQuestions = [question1 = {
        currentQuestion: "What is this question?",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        answer: "a"
    },
    question2 = {
        currentQuestion: "What is this question?",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        answer: "b"
    },
    question3 = {
        currentQuestion: "What is this question?",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        answer: "c"
    }
];



var quizStart = function(event) {

    var index = 0;
    while (index < 2) {
        var thisQuestion = myQuestions[index];
        pageContentEl.innerHTML = thisQuestion.currentQuestion + "<br>1.  " + thisQuestion.a + "<br>2.  " + thisQuestion.b + "<br>3.  " + thisQuestion.c + "<br>4.  " + thisQuestion.d;
        var questionEl = pageContentEl.createElement("li");
        index++;

    }
}

var checkAnswerHandler = function() {

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
questionButton.addEventListener("click", checkAnswerHandler);