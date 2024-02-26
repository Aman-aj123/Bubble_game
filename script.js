var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble() {
    var bubbles = "";

    for (var i = 0; i <= 123; i++) {
        var numbers = Math.floor(Math.random() * 10)
        bubbles += `<div class="bubbles">${numbers}</div>`
    }

    document.querySelector("#bubble-area").innerHTML = bubbles;

}


function runTimer() {
    var timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerInt)
            document.querySelector("#bubble-area").innerHTML = `<h1 id = "gameOver"> Game Over </h1>`
        }

    }, 1000)
}


function newHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


let clickBubbles = document.querySelector("#bubble-area");

clickBubbles.onclick = function (details) {
    var clickedBubbles = (Number(details.target.textContent));
    if (clickedBubbles === hitrn) {
        increaseScore()
        makeBubble()
        newHit()
    }
}

makeBubble();
runTimer();
newHit();


