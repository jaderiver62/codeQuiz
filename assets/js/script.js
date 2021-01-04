var startBtn = document.getElementById("start-btn");
var pageContentEl = document.querySelector("#page-content");
var highScoresEl = document.querySelector("#scores");
var timerEl = document.querySelector("#timer");
var resultDiv = document.querySelector("#result-div");



var index = 0;
var score = 0;

var myQuestions = [{
        currentQuestion: "What is this question?",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        answer: "a"
    },
    {
        currentQuestion: "What is this question?",
        a: "meow1",
        b: "meow2",
        c: "meow3",
        d: "meow4",
        answer: "meow4"
    },
    {
        currentQuestion: "What is this question?",
        a: "ameow",
        b: "bmeow",
        c: "cmeow",
        d: "dmeow",
        answer: "cmeow"
    }
];



var quizStart = function(event) {
        pageContentEl.innerHTML = "";
        event.preventDefault();
        var pageFormEl = document.createElement("div");
        pageFormEl.className = "question-content";

        var buttonEl = document.createElement("button");
        buttonEl.textContent = "1.   " + myQuestions[index].a;
        buttonEl.setAttribute("index-number", index);
        pageFormEl.appendChild(buttonEl);
        pageContentEl.appendChild(pageFormEl);
        buttonEl.addEventListener("click", checkAnswerHandler);

    }
    /*    var thisQuestion = myQuestions[index];*/


/*pageContentEl.innerHTML = "<h1>" + thisQuestion.currentQuestion;
pageFormEl.innerHTML = "</h1><h4> <br> <input type = 'button' value = > 1. " +
    thisQuestion.a + "</input><br><button id='answer-b' type='submit'>2.  " +
    thisQuestion.b + "</button><br><button id='answer-c' type='submit'>3.  " +
    thisQuestion.c + "</button><br><button id='answer-d' type='submit'>4.  " +
    thisQuestion.d + "</button></h4>";}*/



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

function checkAnswerHandler(event) {
    event.preventDefault();
    var selectedAnswer = event.target.getAttribute("index-number");
    var correctAnswer = myQuestions[index].answer;
    pageContentEl.innerHTML = correctAnswer + ": " + selectedAnswer;
}

startBtn.onclick = quizTimer;
if (startBtn) {
    startBtn.addEventListener("click", quizStart);
}