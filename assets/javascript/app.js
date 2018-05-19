window.onload = function () {
    var countDown = 10;
    var usersChoice = [false, false, false, false];
    var numberCorrect = 0;
    var colorQuestion = new question("What is my favorite color?", "blue no yellow", "red", "purple", "black like my soul");
    var strongestAvenger = new question("Who is the strongest avenger?", "hulk", "batman", "thor", "thanos");
    var dna = new question("What does DNA stand for?", "Deoxyribonuleic acid", "Data numeric architecture", "dihydrogen nitirc acid", "Danina's nice aadvark")
    var arrayOfQuestions = [colorQuestion, strongestAvenger, dna];
    var questionTheUserIsOn = arrayOfQuestions.length - 1;


    $("#startButton").click(function () {
        $("#startButton").hide();
        $("#gameContent").show();
        shuffleArray(arrayOfQuestions);
        startRound(arrayOfQuestions[questionTheUserIsOn]);
    });


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

    $("#playAgain").on("click", function () {
        console.log("yes it was clicked")
        countDown = 11;
        usersChoice = [false, false, false, false];
        numberCorrect = 0;
        questionTheUserIsOn = arrayOfQuestions.length - 1;
        shuffleArray(arrayOfQuestions);
        startRound(arrayOfQuestions[questionTheUserIsOn]);

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
        toggle(4);
        console.log("toggle4 called")
        for (var i = 0; i < array.length; i++) {
            console.log("array for numberCorrect " + array[i][1])
            console.log("usersChoice " + usersChoice[i])
            if (array[i][1] == true && usersChoice[i] == true) {
                numberCorrect++;
                console.log("number correct added " + numberCorrect)
            }
        }
        usersChoice = [false, false, false, false];
        if (questionTheUserIsOn > 0) {
            questionTheUserIsOn--;
            countDown = 11;
            startRound(arrayOfQuestions[questionTheUserIsOn]);
            console.log(questionTheUserIsOn)
            console.log("numebr correct: " + numberCorrect)
        } else {
            document.getElementById("results").innerHTML = ("<p> you missed " + (arrayOfQuestions.length - numberCorrect) + " </p> <p> You guessed " + numberCorrect + " out of "
                + arrayOfQuestions.length + " correct! </p>");
            $("#myModal").modal();
        }
    }

    function countDownTimer() {
        countDown--;
        console.log(countDown)
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
        toggle(usersButton);
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

    function toggle(chosenButton) {
        switch (chosenButton) {
            case 0:
                document.getElementById("firstAnswer").style.backgroundColor = "#00b300";
                document.getElementById("secondAnswer").style.backgroundColor = "#1a75ff";
                document.getElementById("thirdAnswer").style.backgroundColor = "#1a75ff";
                document.getElementById("fourthAnswer").style.backgroundColor = "#1a75ff";
                break;
            case 1:
                document.getElementById("firstAnswer").style.backgroundColor = "#1a75ff";
                document.getElementById("secondAnswer").style.backgroundColor = "#00b300";
                document.getElementById("thirdAnswer").style.backgroundColor = "#1a75ff";
                document.getElementById("fourthAnswer").style.backgroundColor = "#1a75ff";
                break;
            case 2:
                document.getElementById("firstAnswer").style.backgroundColor = "#1a75ff";
                document.getElementById("secondAnswer").style.backgroundColor = "#1a75ff";
                document.getElementById("thirdAnswer").style.backgroundColor = "#00b300";
                document.getElementById("fourthAnswer").style.backgroundColor = "#1a75ff";
                break;
            case 3:
                document.getElementById("firstAnswer").style.backgroundColor = "1a75ff";
                document.getElementById("secondAnswer").style.backgroundColor = "#1a75ff";
                document.getElementById("thirdAnswer").style.backgroundColor = "#1a75ff";
                document.getElementById("fourthAnswer").style.backgroundColor = "#00b300";
                break;
            default:
                document.getElementById("firstAnswer").style.backgroundColor = "1a75ff";
                document.getElementById("secondAnswer").style.backgroundColor = "#1a75ff";
                document.getElementById("thirdAnswer").style.backgroundColor = "#1a75ff";
                document.getElementById("fourthAnswer").style.backgroundColor = "#1a75ff";
                console.log("the default was used")


        }
    }
}
