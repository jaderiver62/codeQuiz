var pageContentEl = document.querySelector("#page-content");
var highScoresEl = document.querySelector("#scores");
var timerEl = document.querySelector("timer");
var quizStart = function(event) {
    var targetEl = event.target;
    pageContentEl.innerHTML = "!! Insert Quiz Questions Here !!";
}
pageContentEl.addEventListener("click", quizStart);