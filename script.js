'use strict';

let randomNumber;

window.addEventListener("load", event => {
    event.preventDefault();
    randomNumber = Math.floor((Math.random() * 20) + 1);
});
document.querySelector(".btn.again").addEventListener("click", event => {
    event.preventDefault();
    randomNumber = Math.floor((Math.random() * 20) + 1);
    document.querySelector(".guess").value = "";
    document.querySelector(".message").innerHTML = "Start guessing...";
    document.querySelector(".btn.check").disabled = false;
    document.querySelector(".btn.check").style.cursor = "pointer";
    document.querySelector(".guess").disabled = false;
    document.querySelector(".number").innerHTML = "?";
    document.querySelector(".number").style.width = "150px";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".score").textContent = 20
});

document.querySelector(".btn.check").addEventListener("click", event => {
    event.preventDefault();
    let inputNumber = document.querySelector(".guess").value;
    let numScore = document.querySelector(".score").textContent;
    if (inputNumber == "") {
        document.querySelector(".message").innerHTML = "Enter your number !";
        document.querySelector(".score").textContent = --numScore;
        if (+numScore === 0) {
            document.querySelector(".message").innerHTML = "You lost the game";
            document.querySelector(".btn.check").disabled = true;
            document.querySelector(".btn.check").style.cursor = "text";
            document.querySelector(".guess").disabled = true;
        }
    } else if (+inputNumber < 1 || +inputNumber > 20) {
        document.querySelector(".message").innerHTML = "Between 1 and 20";
        document.querySelector(".score").textContent = --numScore;
        if (+numScore === 0) {
            document.querySelector(".message").innerHTML = "You lost the game";
            document.querySelector(".btn.check").disabled = true;
            document.querySelector(".btn.check").style.cursor = "text";
            document.querySelector(".guess").disabled = true;
        }
    }
    else if (+inputNumber < randomNumber) {
        document.querySelector(".message").innerHTML = "Too low!";
        document.querySelector(".score").textContent = --numScore;
        if (+numScore === 0) {
            document.querySelector(".message").innerHTML = "You lost the game";
            document.querySelector(".btn.check").disabled = true;
            document.querySelector(".btn.check").style.cursor = "text";
            document.querySelector(".guess").disabled = true;
        }
    }
    else if (+inputNumber > randomNumber) {
        document.querySelector(".message").innerHTML = "Too high!";
        document.querySelector(".score").textContent = --numScore;
        if (+numScore === 0) {
            document.querySelector(".message").innerHTML = "You lost the game";
            document.querySelector(".btn.check").disabled = true;
            document.querySelector(".btn.check").style.cursor = "text";
            document.querySelector(".guess").disabled = true;
        }
    }
    else if (+inputNumber === randomNumber) {
        document.querySelector(".message").innerHTML = "Correct Number!";
        document.querySelector(".btn.check").disabled = true;
        document.querySelector(".btn.check").style.cursor = "text";
        document.querySelector(".guess").disabled = true;
        document.querySelector(".number").innerHTML = randomNumber;
        document.querySelector(".number").style.width = "300px";
        document.querySelector("body").style.backgroundColor = "rgb(96, 179, 71)";

        if (+document.querySelector(".highscore").textContent < +numScore) {
            document.querySelector(".highscore").innerHTML = numScore;
        }

    }
});
