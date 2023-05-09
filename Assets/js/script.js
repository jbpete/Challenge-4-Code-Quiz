var timeEl = document.querySelector(".time")

var gamePoints = 0;

var questionNumber = 0;

var secondsLeft = 90;
var timerInterval = null;

var questionInfo = [

{
    question: "What is the javascript file extension?",
    a: ".CSS",
    b: ".JS",
    c: ".HTML",
    d: "All of the above",
    correct: "b",
},

{
    question: "What kind of Javascript value is true and false?",
    a: "Boolean",
    b: "String",
    c: "Integer",
    d: "Interval",
    correct: "a",
},

{
    question: "What most accuartely describes the purpose of using Javascript for your application?",
    a: "Javascript determines web-page structure",
    b: "Javascript is used to style your web page and make it pretty",
    c: "Javascript is used to add functionality and logic to your application",
    d: "All of the above",
    correct: "c",
},

{
    question: "Game End"


}
]

function appendQuestion (array, questionNumber) {
    $("#header").text("Question " + questionNumber);
    $("#questions").text(array.question);

    $("#question1").text(array.a);
    $("#question2").text(array.b);
    $("#question3").text(array.c);
    $("#question4").text(array.d);

}

function showPage (pageName) {
    $(".page").hide();
    $(pageName).show();
}


showPage(".one")

$("#start_btn").click(function () {
    showPage(".two")
    setTime()
    questionNumber = 0
    appendQuestion(questionInfo[0], questionNumber + 1)


})



$("#next_btn").click(function () {
    var selectedAnswer = $("input[type='radio']:checked").val();
    questionNumber++;
    appendQuestion(questionInfo[questionNumber], questionNumber + 1)
    console.log(questionNumber)
    console.log(gamePoints)
    if (questionNumber > 2) {
        endGame();
    }
    if (selectedAnswer !== questionInfo[questionNumber].correct) {
        secondsLeft -= 10;
    } else {
        gamePoints += 10;
        $("#points").text("Points: " + gamePoints);
      }
      console.log(gamePoints)
})

var name = document.getElementById("name").innerHTML
var email = document.getElementById("email").innerHTML

$("#submit_btn").click(function () {

    localStorage.setItem("Name", name)
    localStorage.setItem("Email", email)
    localStorage.setItem("Points", gamePoints)

})






function setTime() {
    timerInterval = setInterval( function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining"
        if (secondsLeft <= 0) {
            endGame();

        }

    }, 1000);
}

function endGame() {
    showPage(".three")
    clearInterval(timerInterval)
}