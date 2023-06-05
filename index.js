
function getcompchoice() {
    var items = ["rock", "paper", "scissors"];
    var item = items[Math.floor(Math.random() * items.length)];
    return item;
}

function playround(compsel) {
    var playsel = prompt("Choose rock, paper or scissors!").toLowerCase();
    if (playsel === "rock") {
        if (compsel === "rock") {
            console.log("It's a tie!");
            return 0;
        }
        else if (compsel === "paper") {
            console.log("You lose! Paper beats rock.")
            return -1;
        }
        else {
            console.log("You won! Rock beats scissors.")
            return 1;
        }
    }
    else if (playsel === "paper") {
        if (compsel === "paper") {
            console.log("It's a tie!");
            return 0;
        }
        else if (compsel === "scissors") {
            console.log("You lose! Scissors beat paper.")
            return -1;
        }
        else {
            console.log("You won! Paper beats rock.")
            return 1;
        }
    }
    else {
        if (compsel === "scissors") {
            console.log("It's a tie!");
            return 0;
        }
        else if (compsel === "rock") {
            console.log("You lose! Rock beats scissors.")
            return -1;
        }
        else {
            console.log("You won! Scissors beat paper.")
            return 1;
        }
    }
}

function game() {
    var player = 0;
    var comp = 0;
    for (let i = 0; i < 5; i++) {
        var compchoice = getcompchoice();
        var result = playround(compchoice);
        if (result === 1) {
            player += 1;
        }
        else if (result === -1) {
            comp += 1;
        }
    }
    if (player === comp) {
        console.log("This game is a tie.");
    }
    else if (player > comp) {
        console.log("You won this game.");
    }
    else {
        console.log("You lost this game.");
    }

}

game();
