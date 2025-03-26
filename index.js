var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImages1 = "dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImages1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImages2 = "dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomDiceImages2);

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw!";
}

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}

if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}