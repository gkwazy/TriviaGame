var countDown = 5;
var usersChoice = [false, false, false, false];
var numberCorrect = 0;
var colorQuestion = new question("What is my favorite color?", "blue no yellow", "red", "purple", "black like my soul");
var strongestAvenger = new question("Who is the strongest avenger?", "thor", "batman", "hulk", "thanos");
var dna = new question("what does DNA stand for?", "Deoxyribonuleic acid", "Data numeric architecture", "dihydrogen nitirc acid", "Danina's nice aadvark")
var arrayOfQuestions = [colorQuestion, strongestAvenger, dna];
var questionTheUserIsOn = arrayOfQuestions.length - 1;

shuffleArray(arrayOfQuestions);
startRound(arrayOfQuestions[questionTheUserIsOn]);

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


function startRound(array) {
    console.log("round started")
    var roundArray = [array.correctAnswer, array.firstIncorrectAnswer, array.secondIncorrectAnswer, array.thirdIncorrectAnswer];
    shuffleArray(roundArray);
    console.log(array);
    console.log(roundArray)
    var myTimer = setInterval(() => {
        countDownTimer();
        console.log("myTimer called")
        if (countDown == 0) {
            clearInterval(myTimer)
            endOfRound(roundArray);
        }
        console.log(usersChoice);
    }, 1000);

    document.getElementById("theQuestion").innerHTML = array.question;
    document.getElementById("firstAnswer").innerHTML = roundArray[0][0];
    document.getElementById("secondAnswer").innerHTML = roundArray[1][0];
    document.getElementById("thirdAnswer").innerHTML = roundArray[2][0];
    document.getElementById("fourthAnswer").innerHTML = roundArray[3][0];

}

function endOfRound(array) {
    for (var i = 0; i < array; i++) {
        if (array[i][1] == true && usersChoice == true)
            numberCorrect++;
    }
    if (questionTheUserIsOn >= 0) {
        questionTheUserIsOn--;
        countDown = 6;
        startRound(arrayOfQuestions[questionTheUserIsOn]);
    } else {
        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
        })

    }
}

function countDownTimer() {
    countDown--;
    document.getElementById("timer").innerHTML = countDown;

};

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
    this.correctAnswer = [correctAnswer, true];
    this.firstIncorrectAnswer = [firstIncorrectAnswer, false];
    this.secondIncorrectAnswer = [secondIncorrectAnswer, false];
    this.thirdIncorrectAnswer = [thirdIncorrectAnswer, false];

}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

