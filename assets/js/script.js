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
    questionSessionHandler(index);
    //var questionEl = pageContentEl.createElement("li");

}
var questionSessionHandler = function(index) {

    var thisQuestion = myQuestions[index];
    pageContentEl.innerHTML = "<h1>" + thisQuestion.currentQuestion + "</h1><h4><br>1.  <button id='question-selection' type='submit'>" +
        thisQuestion.a + "</button><br> 2. <button id='question-selection' type='submit'>" +
        thisQuestion.b + "</button><br> 3. <button id='question-selection' type='submit'>" + thisQuestion.c + "</button><br> 4. <button id='question-selection' type='submit'>" +
        thisQuestion.d + "</button> </h4>";

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