var startBtn = document.getElementById("start-btn");

var pageContentEl = document.querySelector("#page-content");
var timerEl = document.querySelector("#timer");
var resultDivEl = document.querySelector("#result-div");
var endDivEl = document.querySelector("#end-div");
var link = document.getElementById("scores-link");

var index = 0;
var score = 0;
var isWrong = false;
// using a boolean variable to tell the timer when an answer is wrong so that the 10pt penalty takes place

var theList = [];
// this is the stored data of scores
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
        currentQuestion: "Which of the following is true of radio buttons?",
        a: "All radio buttons in a group should have unique names",
        b: "All radio buttons should have the same name but unique IDs",
        c: "To clear a radio button set it's checked property to true",
        d: "Radio buttons control the layout settings",
        answer: "All radio buttons should have the same name but unique IDs "
    }, {
        currentQuestion: "An alert() call does which of the following?",
        a: "Issues a print request for the current web page",
        b: "Finds all errors on the webpage and prints them to the console.log",
        c: "Displays a dialog box with an 'ok' and 'cancel' button",
        d: "None of the above",
        answer: "None of the above"
    }, {
        currentQuestion: "What is a valid way to read numbers from a string in Javascript?",
        a: "var myString = string.parsify(numbers);",
        b: "var numbers = string.split('numbers');",
        c: "var numbers = parseInt(string);",
        d: "var numbers = findNum(string);",
        answer: "var numbers = parseInt(string);"
    }, {
        currentQuestion: "What are variables used for in JavaScript Programs?",
        a: "Storing numbers, dates, or other values",
        b: "Varying randomly",
        c: "Causing high-school algebra flashbacks",
        d: "None of the above",
        answer: "Storing numbers, dates, or other values"
    }, {
        currentQuestion: " _____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        a: "Server-side",
        b: "Client-side",
        c: "Local",
        d: "None of the above",
        answer: "Client-side"
    }
];
// This ia an array that holds the questions for the quiz 


// The below function initializes the quiz and one-by-one gives options to the user to input their selections
var quizStart = function(event) {
    if (event.target.matches(".start-btn")) {
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
            // This feels a bit clunky and I am working on a more elegant and dynamic way of accompling this.
            //(i.e. a method that takes an input and creates each question option.)
        } else {
            endQuiz();
            // once we have answered all the questions in the array we end the quiz
        }
    }

}


function quizTimer() {
    // this method times the user and docks ten points if they answer a question incorrectly.
    var timeRemaining = 60;
    // the user gets 60 seconds
    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time: " + timeRemaining;
        if (timeRemaining > 0 && index < myQuestions.length) {
            // these are conditions to keep ghoing - we want the quiz to end if the user rund out of time or is the user answers all of the questions
            if (isWrong) {
                timeRemaining = timeRemaining - 10;
                // penalty of 10 points for an incorrect answer
            } else {
                timeRemaining--;
                // the time is counting down
            }
            // these ar conditions for the quiz ending
        } else if (timeRemaining <= 0) {
            // time runs out
            clearInterval(timeInterval);
            endQuiz();
        } else {
            clearInterval(timeInterval);
            // index runs out
        }
    }, 1000);
}


function checkAnswerHandler(event) {
    // when a user answers a question is is checked by this function
    isWrong = false;
    // resets the boolean since this is a new question being answered - nothing new if it's the first one.
    event.preventDefault();
    var selectedAnswer = event.target.getAttribute("value");
    var correctAnswer = myQuestions[index].answer;
    // get the selcted answer and the actual answer
    var questionResult = "";

    if (selectedAnswer === correctAnswer) {
        questionResult = "Correct!";
        score++;
    } else {
        questionResult = "Wrong!";
        isWrong = true;
    }
    // process the new information from the user
    resultDivEl.setAttribute("style", "text-align: left; color: grey; font-style: italic; border-top: 2px solid grey;");
    resultDivEl.innerHTML = "<h1>" + questionResult + "</h1>";

    index++;
    // increment the index so we can keep going
    pageContentEl.addEventListener("click", quizStart);
}




function endQuiz() {
    // the process for ending the quiz
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
    //I was having problems with my computer not letting me write in the text area nor use enter to submit.  I added this code to fix thatbundleRenderer.renderToStream
    var nameBtn = document.getElementById("name-btn");

    nameBtn.addEventListener("click", submitNameHandler);
}

var submitNameHandler = function(event) {
    // this is what heppens when the user submits their info to be saved with their score
    event.preventDefault();
    var inputResult = document.getElementById("myText").value;

    /*    tasks.push(taskDataObj);*/

    resultDivEl.setAttribute("style", "border-top:'inherit';");
    // reset this element 
    resultDivEl.innerHTML = "";
    /*    endDivEl.setAttribute("style", " color: green; font-size:2rem;  text-align: center;");
        endDivEl.innerHTML = inputResult;*/
    var timeArray = timerEl.textContent.split(" ");

    var scoreTimeEl = parseInt(timeArray[1]);
    // remove unused part of this string to extract the numbers and parse them from string so that I can sort them!
    var scoreObj = {
        scoreName: inputResult,
        scoreNumber: scoreTimeEl
    };
    // this is the object i create for score listings.  I originally included the 3 of correctly answered questions, but that became obsolete.
    theList.push(scoreObj);
    // push to my arrray
    saveScore();
    // save info in localStorage;
}


function displayHighScoreList() {
    // a method completely to show the high score list
    pageContentEl.style.display = 'none';
    resultDivEl.style.display = 'none';
    timerEl.style.display = 'none';
    // had to hide some things to focus on others but didn't want to delete so we can re-use them
    document.getElementById("scores-link").style.display = 'none';

    /*id = 'score-header'
    class = 'score-header'*/
    var tab = "    ";
    endDivEl.innerHTML = "<h1>  &nbsp; &nbsp &nbsp; &nbsp;High scores</h1><br><h2><ul id='high-score-list' class='high-score-list'></ul> &nbsp; &nbsp; &nbsp; &nbsp; <button id='go-back' onClick='window.location.reload();' class='go-back'> Go Back </button>&nbsp; &nbsp; &nbsp;<button id='clear-scores' class='clear-scores' onclick='clearScoresHandler()'>Clear high scores</button></h2> ";
    var highScoreListEl = document.querySelector("#high-score-list");
    theList.sort(function(scoreA, scoreB) {
        return scoreB.scoreNumber - scoreA.scoreNumber
    });
    // sorting the array so that the scores are highest score to lowest when displayed.
    for (var i = 0; i < theList.length; i++) {

        var scoreListEl = document.createElement("LI");
        scoreListEl.className = "score-el";
        var visualIndex = (i + 1);
        var listDivEl = document.createElement("div");
        listDivEl.setAttribute("style", "padding: 10px 20px; background: rgb(201, 187, 221);");
        var nameRecordEl = theList[i].scoreName;
        var scoreRecordEl = theList[i].scoreNumber;
        listDivEl.innerHTML = visualIndex + ".  " + nameRecordEl + tab + "-" + tab + scoreRecordEl;
        scoreListEl.appendChild(listDivEl);
        highScoreListEl.appendChild(scoreListEl);
    }
    // displays the contents of the array

}

var clearScoresHandler = function() {
    // removes all the info in the localStorage
    localStorage.clear();
    theList = [];
    saveScore();
    displayHighScoreList();
    // goes back to display high scores to show the deletion worked
}



function saveScore() {
    // saving in localStorage
    localStorage.setItem("theList", JSON.stringify(theList));
    console.log("Score saved");
    displayHighScoreList();

}

function loadScores() {
    // loads the high scores in local storage so we can see them! 
    var savedScores = localStorage.getItem("theList");

    if (!savedScores) {
        return false;
    }
    console.log("Saved scores found...");
    theList = JSON.parse(savedScores);
    console.log(theList);

}
startBtn.onclick = quizTimer;
// starts the timer when the quiz is started
if (startBtn) {
    startBtn.addEventListener("click", quizStart);
}
// starts the quiz when the button is clicked
loadScores();