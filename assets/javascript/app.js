var countDown = 20;
var usersChoice = [false, false, false, false];
var colorQuestion = new question("What is my favorite color?", "blue no yellow", "red", "purple", "black like my soul");

startGame();

conclusionToQuestion();

$("#firstAnswer").on("click", function () {
    buttonSelected(0)
});

$("#secondAnswer").on("click", function () {
    buttonSelected(1)
});

$("#thirdAnswer").on("click", function () {
    buttonSelected(2)
});

$("#fourthAnswer").on("click", function () {
    buttonSelected(3)
});

function startGame() {
    var myTimer = setInterval(() => {

        countDownTimer();
        console.log("myTimer called")
        if (countDown == 0) {
            clearInterval(myTimer)
            conclusionToQuestion();
        }
        console.log(usersChoice);
    }, 1000);
    document.getElementById("theQuestion").innerHTML = colorQuestion.question;
    document.getElementById("firstAnswer").innerHTML = colorQuestion.correctAnswer;
    document.getElementById("secondAnswer").innerHTML = colorQuestion.firstIncorrectAnswer;
    document.getElementById("thirdAnswer").innerHTML = colorQuestion.secondIncorrectAnswer;
    document.getElementById("fourthAnswer").innerHTML = colorQuestion.thirdIncorrectAnswer;

}
function countDownTimer() {
    countDown--;
    document.getElementById("timer").innerHTML = countDown;

};

function conclusionToQuestion() {
    for (var i = 0; i < userChoice.length; i++) {
        if (usersChoice == true) {
            if (userChoice) {

            }
        }
    }
}

function buttonSelected(usersButton) {
    for (var i = 0; i < usersChoice.length; i++) {
        if (i == usersButton) {
            usersChoice[i] = true;
        } else {
            usersChoice[i] = false;
        }
    }
}

function question(question, correctAnswer, firstIncorrectAnswer,
    secondIncorrectAnswer, thirdIncorrectAnswer) {
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.firstIncorrectAnswer = firstIncorrectAnswer;
    this.secondIncorrectAnswer = secondIncorrectAnswer;
    this.thirdIncorrectAnswer = thirdIncorrectAnswer;
}

