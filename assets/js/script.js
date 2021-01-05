var startBtn = document.getElementById("start-btn");
var pageContentEl = document.querySelector("#page-content");
var highScoresEl = document.querySelector("#scores");
var timerEl = document.querySelector("#timer");
var resultDiv = document.querySelector("#result-div");



var index = 0;
var score = 0;
var isWrong = false;

var myQuestions = [{
        currentQuestion: "What are the parameters of the substr() method?",
        a: "substr(start, stop)",
        b: "substr(start, length)",
        c: "substr(stop, search)",
        d: "substr(length,stop)",
        answer: "substr(start, length)"
    },
    {
        currentQuestion: "Which of the following is NOT a type of error that can occur? ",
        a: "Syntax errors",
        b: "Runtime errors",
        c: "Distributing errors",
        d: "Logic errors",
        answer: "Distributing errors"
    },
    {
        currentQuestion: "Which of the following is the correct syntax for the .getElementsById() method?",
        a: "function myFunction() {document.getElementById('#demo').innerHTML ='Hello World'}",
        b: "function myFunction() {document.getElementById(demo).innerHTML = 'Hello World'}",
        c: "function myFunction() {document.getElementById([demo]).innerHTML = 'Hello World'}",
        d: "function myFunction() {document.getElementById('demo').innerHTML ='Hello World'}",
        answer: "function myFunction() {document.getElementById('demo').innerHTML ='Hello World'}"
    },
    {
        currentQuestion: "What does the method closest() do?",
        a: "Traverses the element and its parents in the document tree, and the traversing continues until the first node is found that matches the provided selector string.",
        b: "Used to get the value of an attribute of the particular element.",
        c: "Determines whether or not the specified substring is present in the given string.",
        d: "Used to evaluate the closest expression.",
        answer: "Traverses the element and its parents in the document tree, and the traversing continues until the first node is found that matches the provided selector string."
    }, {
        currentQuestion: "What does the trunc() method return?",
        a: "A decimal",
        b: "An integer",
        c: "A string",
        d: "An array",
        answer: "An integer"
    }
];



var quizStart = function(event) {
    if (index < myQuestions.length) {
        pageContentEl.innerHTML = "";
        event.preventDefault();
        var pageFormEl = document.createElement("div");
        pageFormEl.className = "question-content";
        var questionText = document.createTextNode(myQuestions[index].currentQuestion);
        pageFormEl.appendChild(questionText);

        pageFormEl.setAttribute("style", "font-size: 2.2rem; font-weight: bold;");
        var listEl = document.createElement("UL");
        listEl.setAttribute("style", "list-style-type:none;");
        var listItemEl = document.createElement("LI");

        var buttonEl = document.createElement("button");
        buttonEl.textContent = "1.  " + myQuestions[index].a;
        buttonEl.setAttribute("index-number", index);
        buttonEl.setAttribute("value", myQuestions[index].a);
        buttonEl.className = "btn";
        listItemEl.appendChild(buttonEl);
        listEl.appendChild(listItemEl);

        buttonEl.addEventListener("click", checkAnswerHandler);

        var listItemEl = document.createElement("LI");
        var buttonEl = document.createElement("button");
        buttonEl.textContent = "2.  " + myQuestions[index].b;
        buttonEl.setAttribute("index-number", index);
        buttonEl.setAttribute("value", myQuestions[index].b);
        buttonEl.className = "btn";
        listItemEl.appendChild(buttonEl);
        listEl.appendChild(listItemEl);

        buttonEl.addEventListener("click", checkAnswerHandler);

        var listItemEl = document.createElement("LI");
        var buttonEl = document.createElement("button");
        buttonEl.textContent = "3.  " + myQuestions[index].c;
        buttonEl.setAttribute("index-number", index);
        buttonEl.setAttribute("value", myQuestions[index].c);
        buttonEl.className = "btn";
        listItemEl.appendChild(buttonEl);
        listEl.appendChild(listItemEl);
        buttonEl.addEventListener("click", checkAnswerHandler);


        var listItemEl = document.createElement("LI");
        var buttonEl = document.createElement("button");
        buttonEl.textContent = "4.  " + myQuestions[index].d;
        buttonEl.setAttribute("index-number", index);
        buttonEl.setAttribute("value", myQuestions[index].d);
        buttonEl.className = "btn";
        listItemEl.appendChild(buttonEl);
        listEl.appendChild(listItemEl);
        buttonEl.addEventListener("click", checkAnswerHandler);

        pageFormEl.appendChild(listEl);
        pageContentEl.appendChild(pageFormEl);

    } else {
        endQuiz();
    }

}

function quizTimer() {
    var timeRemaining = 60;
    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time: " + timeRemaining;
        if (timeRemaining > 0) {
            if (isWrong) {
                timeRemaining = timeRemaining - 3;
            } else {
                timeRemaining--;
            }
        } else {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}




function checkAnswerHandler(event) {
    event.preventDefault();
    var selectedAnswer = event.target.getAttribute("value");
    var correctAnswer = myQuestions[index].answer;

    var questionResult = "";

    if (selectedAnswer === correctAnswer) {
        questionResult = "Correct!";
        score++;
    } else {
        questionResult = "Wrong!";
        isWrong = true;
    }
    resultDiv.setAttribute("style", "text-align:center; color: grey; font-style: italic; border-top: 2px solid grey;");
    resultDiv.innerHTML = "<h2>" + questionResult + "</h2>";

    index++;
    pageContentEl.addEventListener("click", quizStart);
}




function endQuiz() {

    setTimeout(function() {
        resultDiv.setAttribute("style", "border: none;")
        resultDiv.innerHTML = "";
    }, 500);
    pageContentEl.innerHTML = "!! Insert End Code Here !!";

}
startBtn.onclick = quizTimer;
if (startBtn) {
    startBtn.addEventListener("click", quizStart);
}