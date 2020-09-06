const $submitButton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");

var guessnumber = Math.round(Math.random() * 100)
console.log(guessnumber);
var lives = 10;
var message;
$submitButton.onclick = () => {
    let userIn = document.getElementById("number_input").value;
    lives--;
    if (userIn == guessnumber) {
        location.href = "./win.html";
    } else if (lives <= 0) {
        location.href = "./loose.html";
    } else if (userIn > guessnumber) {
        message = `OOps your guess is too high..! you have ${lives}  remanining`;
    } else if (userIn < guessnumber) {
        message = `OOps your guess is too low..! you have ${lives} remanining`;
    }
    $message.style.display = "inherit";
    $message.innerHTML = message;
    $lives.innerHTML = lives;
}