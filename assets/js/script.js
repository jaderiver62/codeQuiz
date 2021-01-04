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
    buttonEl.textContent = "1.  " + myQuestions[index].a;
    buttonEl.setAttribute("index-number", index);
    buttonEl.setAttribute("value", myQuestions[index].a);
    pageFormEl.appendChild(buttonEl);
    buttonEl.addEventListener("click", checkAnswerHandler);

    var buttonEl = document.createElement("button");
    buttonEl.textContent = "2.  " + myQuestions[index].b;
    buttonEl.setAttribute("index-number", index);
    buttonEl.setAttribute("value", myQuestions[index].b);
    pageFormEl.appendChild(buttonEl);
    buttonEl.addEventListener("click", checkAnswerHandler);

    var buttonEl = document.createElement("button");
    buttonEl.textContent = "3.  " + myQuestions[index].c;
    buttonEl.setAttribute("index-number", index);
    buttonEl.setAttribute("value", myQuestions[index].c);
    pageFormEl.appendChild(buttonEl);
    buttonEl.addEventListener("click", checkAnswerHandler);


    var buttonEl = document.createElement("button");
    buttonEl.textContent = "4.  " + myQuestions[index].d;
    buttonEl.setAttribute("index-number", index);
    buttonEl.setAttribute("value", myQuestions[index].d);
    pageFormEl.appendChild(buttonEl);

    pageContentEl.appendChild(pageFormEl);
    buttonEl.addEventListener("click", checkAnswerHandler);

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
    event.preventDefault();
    var selectedAnswer = event.target.getAttribute("value");
    var correctAnswer = myQuestions[index].answer;

    var questionResult = "";

    if (selectedAnswer === correctAnswer) {
        questionResult = "Correct!";
    } else {
        questionResult = "Wrong!";
    }
    resultDiv.innerHTML = "<h3>" + questionResult + "</h3>";
    /* correctAnswer + ": " + selectedAnswer; */
}



startBtn.onclick = quizTimer;
if (startBtn) {
    startBtn.addEventListener("click", quizStart);
}