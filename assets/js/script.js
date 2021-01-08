var startBtn = document.getElementById("start-btn");

var pageContentEl = document.querySelector("#page-content");
var timerEl = document.querySelector("#timer");
var resultDivEl = document.querySelector("#result-div");
var endDivEl = document.querySelector("#end-div");
var link = document.getElementById("scores-link");

var index = 0;
var score = 0;
var isWrong = false;

var theList = [];
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
    }, {
        currentQuestion: "?",
        a: "?",
        b: "?",
        c: "?",
        d: "?",
        answer: "?"
    }, {
        currentQuestion: "?",
        a: "?",
        b: "?",
        c: "?",
        d: "?",
        answer: "?"
    }, {
        currentQuestion: "?",
        a: "?",
        b: "?",
        c: "?",
        d: "?",
        answer: "?"
    }
];



var quizStart = function() {
    pageContentEl.innerHTML = "";
    if (index < myQuestions.length) {

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
        if (timeRemaining > 0 && index < myQuestions.length) {
            if (isWrong) {
                timeRemaining = timeRemaining - 10;
            } else {
                timeRemaining--;
            }
        } else if (timeRemaining === 0) {
            clearInterval(timeInterval);
            endQuiz();
        } else {
            clearInterval(timeInterval);
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
    resultDivEl.setAttribute("style", "text-align: left; color: grey; font-style: italic; border-top: 2px solid grey;");
    resultDivEl.innerHTML = "<h1>" + questionResult + "</h1>";

    index++;
    pageContentEl.addEventListener("click", quizStart);
}




function endQuiz() {

    pageContentEl.innerHTML = "<h1> All Done!</h1><br><h3>Your Final Score is: " + score + " correct answers<br>Final " + timerEl.textContent + "</h3><br><div id='name-form' class='name-form'></div>";
    var nameFormEl = document.getElementById("name-form");
    nameFormEl.innerHTML = "<h3>Enter initals:</h3><div class='text-area-end'><input type='text' id='myText' placeholder='Your Initials' class='text-area-name'><br></div><div><button id='name-btn' class='name-btn'>Submit</button></div><br><br>";
    var input = document.getElementById("myText");
    input.focus();
    input.addEventListener("keyup", function(event) {
        if (event.code === 'Enter') {
            event.preventDefault();
            document.getElementById("name-btn").click();
        }
    });
    var nameBtn = document.getElementById("name-btn");

    nameBtn.addEventListener("click", submitNameHandler);
}

var submitNameHandler = function(event) {
    event.preventDefault();
    var inputResult = document.getElementById("myText").value;

    /*    tasks.push(taskDataObj);*/

    resultDivEl.setAttribute("style", "border-top:'inherit';");
    resultDivEl.innerHTML = "";
    /*    endDivEl.setAttribute("style", " color: green; font-size:2rem;  text-align: center;");
        endDivEl.innerHTML = inputResult;*/
    var scoreObj = {
        scoreName: inputResult,
        scoreNumber: score,
        time: timerEl.textContent
    };
    theList.push(scoreObj);
    saveScore();

}


function displayHighScoreList() {
    pageContentEl.style.display = 'none';
    timerEl.style.display = 'none';
    document.getElementById("scores-link").style.display = 'none';


    var tab = "    ";
    endDivEl.innerHTML = "<h1>High scores</h1><br><h3><ul id='high-score-list' class='high-score-list'></ul></h3><button id='go-back' onClick='window.location.reload();' class='go-back'> Go Back </button><button id='clear-scores' class='clear-scores' onclick='clearScoresHandler()'>Clear high scores</button > ";
    var highScoreListEl = document.querySelector("#high-score-list");


    for (var i = 0; i < theList.length; i++) {

        var scoreListEl = document.createElement("LI");
        scoreListEl.className = "score-el";
        var visualIndex = (i + 1);
        var listDivEl = document.createElement("div");
        listDivEl.setAttribute("style", "padding: 10px 20px; background: rgb(201, 187, 221);");
        var nameRecordEl = theList[i].scoreName;
        var scoreRecordEl = theList[i].scoreNumber;
        var scoreTime = theList[i].time;
        listDivEl.innerHTML = visualIndex + ".  " + nameRecordEl + tab + "-" + tab + scoreRecordEl + tab + "-" + tab + scoreTime;
        scoreListEl.appendChild(listDivEl);
        highScoreListEl.appendChild(scoreListEl);
    }

}

var clearScoresHandler = function() {
    localStorage.clear();
    theList = [];
    saveScore();
    displayHighScoreList();
}



function saveScore() {
    localStorage.setItem("theList", JSON.stringify(theList));
    console.log("Score saved");
    displayHighScoreList();

}

function loadScores() {
    var savedScores = localStorage.getItem("theList");

    if (!savedScores) {
        return false;
    }
    console.log("Saved scores found...");
    theList = JSON.parse(savedScores);
    console.log(theList);

}
startBtn.onclick = quizTimer;

if (startBtn) {
    startBtn.addEventListener("click", quizStart);
}
loadScores();