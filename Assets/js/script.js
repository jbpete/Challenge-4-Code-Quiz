var timeEl = document.querySelector(".time")

var gamePoints = 0;

var questionNumber = 0
var questionArrayNumber = 0;
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
}
]

function appendQuestion (array, questionNumber) {
    $("#header").text("Question" + questionNumber);
    $("#points").text("Points:" + gamePoints);
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
    questionNumber++;
    //questionArrayNumber++;
    appendQuestion(questionInfo[0], questionNumber)
    console.log(questionNumber)
    console.log("questionArrayNumber", questionArrayNumber)

})




$("#next_btn").click(function () {

var selectedAnswer = $("input[name='questionStyle']:checked").val()
questionNumber++;

console.log("Question Number",questionNumber)
console.log("Seconds Left", secondsLeft)
console.log("questionArrayNumber", questionArrayNumber)

// if (questionNumber > 3) {
//     console.log("end game")
//     endGame();

if (selectedAnswer === questionInfo[questionArrayNumber].correct) {
    console.log("correct")
    gamePoints += 10;
    questionArrayNumber++;
    console.log("selectedAnswer",selectedAnswer)
    console.log("Correct answer from array", questionInfo[questionArrayNumber].correct)
    appendQuestion(questionInfo[questionArrayNumber], questionNumber)
    console.log(questionNumber)
} else if (selectedAnswer != questionInfo[questionArrayNumber].correct) {
    console.log("incorrect")
    secondsLeft -= 10;
    console.log("selectedAnswer",selectedAnswer)
    console.log("Correct answer from array", questionInfo[questionArrayNumber].correct)
    appendQuestion(questionInfo[questionArrayNumber], questionNumber)
} else if (questionNumber > 3) {
    endGame();
} else {
    console.log('Im at the end of the line buddy')
}
})  


// console.log("question Number",questionNumber)
// console.log("game Points", gamePoints)
// if (questionNumber > 2) {
//     console.log("end game")
//     endGame();
// }
// if (selectedAnswer !== questionInfo[questionNumber].correct) {
//     console.log("incorrect")
//     secondsLeft -= 10;
// } else {
//     console.log("correct")
//     gamePoints += 10;
//     $("#points").text("Points: " + gamePoints);
// }
    
    
    
    
    
    
    
//     console.log(questionNumber)
//     console.log(gamePoints)
//     var selectedAnswer = $("input[type='radio']:checked").val();
//     questionNumber++;
//     appendQuestion(questionInfo[questionNumber], questionNumber + 1)
//     console.log(selectedAnswer)
//     if (questionNumber >= questionInfo.length - 1) {
//         endGame();
//     } else if (selectedAnswer !== questionInfo[questionNumber].correct) {
//         secondsLeft -= 10;
//         console.log('timeScore')
//     } else {
//         gamePoints += 10;
//         $("#points").text("Points: " + gamePoints);
//         console.log('score')
//       }
// })

var name1 = document.getElementById("name")
var email = document.getElementById("email")

$("#submit_btn").click(function () {

    localStorage.setItem("Name", name1.value)
    localStorage.setItem("Email", email.value)
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
    console.log('end game func ran')
}