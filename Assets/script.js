var startButton = document.querySelector("#start");
var startTimer = document.querySelector("#start")
var pageOne = document.querySelector("#pageOne")
var pageTwo = document.querySelector("#pageTwo")
var pageTwoAnswers = document.querySelector("#pageTwoOptions")
var pageThree = document.querySelector("#pageThree")
var pageThreeAnswers = document.querySelector("#pageThreeOptions")
var pageFour = document.querySelector("#pageFour")



startButton.addEventListener("click", startQuiz) 
startTimer.addEventListener("click", startTimer) 

function startQuiz () {
    pageOne.classList.add("hide");
    pageTwo.classList.remove("hide");
}

function startTimer() {
    var time = 0;
    var interval; 
    var offset;

    function update() {
        time += delta ();
        var formattedTime = timeFormatter(time);

    }
    function delta () {
        var now = Date.now();
        var timePassed =  now - offset;
        offset = now;
        return timePassed;
    }
    function timeFormatter (timeInMilliseconds) {
        var time = new Date(timeInMilliseconds);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getUTCMilliseconds().toString();
    }

    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }
    if (seconds.length < 2) {
        seconds = "0" + seconds;
    }

    return minutes + " : " + seconds + " . " + milliseconds;
    
    this.isOn = false;

    this.start = function() {
        if (!this.isOn) {
            interval = setInterval(update, 10);
            offset = Date.now();
            this.isOn = true;
        }
    }
    this.stop = function () {
        if (this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };

    this.reset = function() {
        time = 0;
    };


  }

  


pageTwoAnswers.addEventListener("click", nextPage2)

function nextPage2 () {
    pageTwo.classList.add("hide");
    pageThree.classList.remove("hide");
}


pageThreeAnswers.addEventListener("click", nextPage3)

function nextPage3 () {
    pageThree.classList.add("hide");
    pageFour.classList.remove("hide");
}



var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

init();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}







function init() {
  renderTodos();
}

function storeTodos() {
  localStorage.setItem("nameEntry", JSON.stringify(todos));
}

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
});

// When a element inside of the todoList is clicked...
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
});
