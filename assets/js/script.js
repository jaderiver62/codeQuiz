var startBtn = document.getElementById("start-btn");
var pageContentEl = document.querySelector("#page-content");
var highScoresEl = document.querySelector("#scores");
var timerEl = document.querySelector("#timer");
var resultDiv = document.querySelector("#result-div");



var index = 0;
var score = 0;

var myQuestions = [{
        currentQuestion: "What are the parameters of the subtr() method?",
        a: "substr(start, stop)",
        b: "substr(start, length)",
        c: "substr(stop, search)",
        d: "substr(length,stop)",
        answer: "substr(start, length)"
    },
    {
        currentQuestion: "Which of the following is a type of error that can occur? ",
        a: "Syntax errors",
        b: "Runtime errors",
        c: "Debugging errors",
        d: "Logic errors",
        answer: "Debugging errors"
    },
    {
        currentQuestion: "Which of the following is the correct syntax for the .getElementsById() method in the supplid HTML? <p id='demo'>Click the button to change the text in this paragraph. </p>",
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
    }
];



var quizStart = function(event) {
    if (index < myQuestions.length) {
        pageContentEl.innerHTML = "";
        event.preventDefault();
        var pageFormEl = document.createElement("div");

        pageFormEl.setAttribute('style', 'display: flex;');
        pageFormEl.setAttribute('style', 'flex-direction:column;');
        pageFormEl.className = "question-content";
        var questionText = document.createTextNode(myQuestions[index].currentQuestion);
        pageFormEl.appendChild(questionText);

        var listEl = document.createElement("UL");
        listEl.setAttribute("style", "list-style-type:none;");
        var listItemEl = document.createElement("LI");

        var buttonEl = document.createElement("button");
        buttonEl.textContent = "1.  " + myQuestions[index].a;
        buttonEl.setAttribute("index-number", index);
        buttonEl.setAttribute("value", myQuestions[index].a);
        listItemEl.appendChild(buttonEl);
        listEl.appendChild(listItemEl);
        buttonEl.addEventListener("click", checkAnswerHandler);

        var listItemEl = document.createElement("LI");
        var buttonEl = document.createElement("button");
        buttonEl.textContent = "2.  " + myQuestions[index].b;
        buttonEl.setAttribute("index-number", index);
        buttonEl.setAttribute("value", myQuestions[index].b);
        listItemEl.appendChild(buttonEl);
        listEl.appendChild(listItemEl);
        buttonEl.addEventListener("click", checkAnswerHandler);

        var listItemEl = document.createElement("LI");
        var buttonEl = document.createElement("button");
        buttonEl.textContent = "3.  " + myQuestions[index].c;
        buttonEl.setAttribute("index-number", index);
        buttonEl.setAttribute("value", myQuestions[index].c);
        listItemEl.appendChild(buttonEl);
        listEl.appendChild(listItemEl);
        buttonEl.addEventListener("click", checkAnswerHandler);


        var listItemEl = document.createElement("LI");
        var buttonEl = document.createElement("button");
        buttonEl.textContent = "4.  " + myQuestions[index].d;
        buttonEl.setAttribute("index-number", index);
        buttonEl.setAttribute("value", myQuestions[index].d);
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
    var timeRemaining = 20;
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

    index++;
    pageContentEl.addEventListener("click", quizStart);
}




function endQuiz() {
    pageContentEl.innerHTML = "!! Insert End Code Here !!";
}
startBtn.onclick = quizTimer;
if (startBtn) {
    startBtn.addEventListener("click", quizStart);
}