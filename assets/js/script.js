var pageContentEl = document.querySelector("#page-content");
var highScoresEl = document.querySelector("#scores");
var timerEl = document.querySelector("#timer");
var startBtn = document.getElementById("start-btn");
var pageFormEl = document.querySelector("#page-form");
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
    event.preventDefault();
    var thisQuestion = myQuestions[index];
    pageContentEl.innerHTML = "<h1>" + thisQuestion.currentQuestion;
    pageFormEl.innerHTML = "</h1><h4><br><button id='question-selection' type='submit'>1.  " +
        thisQuestion.a + "</button><br><button id='question-selection' type='submit'>2.  " +
        thisQuestion.b + "</button><br><button id='question-selection' type='submit'>3.  " +
        thisQuestion.c + "</button><br><button id='question-selection' type='submit'>4.  " +
        thisQuestion.d + "</button></h4>";
    pageContentEl.appendChild(pageFormEl);
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

function checkAnswerHandler(event) {
    /*
        var answerToCheck = document.getElementById("question-selection");
        var footEl = document.getElementsByTagName("footer");
        if (answerToCheck.matches(myQuestions[index].answer)) {
            footEl.textContent = "Correct!";
        } else { footEl.textContent = "Wrong!"; }
        index++;
        if (timeRemaining > 0 && index <= myQuestions.length) {
            quizStart(onchange);
        } else {
            endQuiz();
        }*/
    event.preventDefault;
    console.log(event);
    pageContentEl.innerHTML = "What?"
}

startBtn.onclick = quizTimer;
if (pageFormEl) {
    pageFormEl.addEventListener("click", checkAnswerHandler, true);
}
if (startBtn) { startBtn.addEventListener("click", quizStart, true); }