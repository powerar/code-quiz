var questionContentEl = document.querySelector("#button");

var questions = [
    {q: "Commonly used data types DO NOT include:", 1: "strings", 2: "booleans", 3: "alerts", 4: "numbers"},
    {q: "What is the proper keyword for declaring a variable?", 1: "for", 2: "=", 3: "var", 4: "declare"},
    {q: "", a1: "", a2: "", a3: "", a4: ""},
    {q: "", a1: "", a2: "", a3: "", a4: ""},
]

var questionIndex = 0;

var questionEl = document.querySelector(".card-text-center");
var cardContainer = document.querySelector(".card-container");


var removeQuestion = function(event) {
    console.log(questionIndex);
    var deleteTitle = document.querySelector(".card-title");
    deleteTitle.remove();
    var deleteText = document.querySelector(".card-text");
    deleteText.remove();
    var deleteButton = document.querySelector(".btn");
    deleteButton.remove();
    nextQuestion();
};

var nextQuestion = function() {  
    debugger;
    console.log(questionIndex);
    for (i = 0; i < questions.length; i++) {
        var questionCard = document.querySelector("#question-card");
        var questionContent = document.createElement("h5");
        questionContent.className = "card-title";
        questionContent.innerHTML =  questions[i].q
        questionCard.appendChild(questionContent);
        
        for (i = 1; i < questions.length + 1; i++) {
            var questionAnswers = document.createElement("btn");
            questionAnswers.className = "btn btn-primary";
            questionAnswers.innerHTML = "<a href='#'>" + "</a>"
            questionAnswers.id = "answer";
            questionAnswers.textContent = questions[questionIndex][i];
            questionCard.appendChild(questionAnswers);
            var answer = document.querySelector("#answer");
            answer.addEventListener("click", removeQuestion);
        }
    } 
};

questionContentEl.addEventListener("click", removeQuestion);




