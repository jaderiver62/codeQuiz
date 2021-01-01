  var pageContentEl = document.querySelector("#page-content");

  var quizStart = function(event) {
      var targetEl = event.target;
      pageContentEl.innerHTML = "What?";
  }
  pageContentEl.addEventListener("click", quizStart);