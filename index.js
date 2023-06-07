const optionBtn = document.querySelectorAll('div.buttons button');
optionBtn.forEach(button => { button.addEventListener('click', game) });
const element = document.getElementById("restart");
element.addEventListener("click", res);
const uelement = document.getElementById("u_score");
const celement = document.getElementById("c_score")


function res(e) {
    document.getElementById("result").innerHTML = " ";
    document.getElementById("u_score").innerHTML = 0;
    document.getElementById("c_score").innerHTML = 0;
    document.getElementById("c_img").src = "./monitor.png";
    document.getElementById("u_img").src = "./user.png";
}

function getcompchoice() {
    var items = ["rock", "paper", "scissors"];
    var item = items[Math.floor(Math.random() * items.length)];
    return item;
}

function playround(playsel, compsel) {
    if (playsel === "rock") {
        document.getElementById("u_img").src = "./stone.png";
        if (compsel === "rock") {
            document.getElementById("c_img").src = "./stone.png";
            document.getElementById("result").innerHTML = "It's a tie!";
            return 0;
        }
        else if (compsel === "paper") {
            document.getElementById("c_img").src = "./paper.png";
            document.getElementById("result").innerHTML = "You lose! Paper beats rock.";
            return -1;
        }
        else {
            document.getElementById("c_img").src = "./scissors.png";
            document.getElementById("result").innerHTML = "You won! Rock beats scissors.";
            return 1;
        }
    }
    else if (playsel === "paper") {
        document.getElementById("u_img").src = "./paper.png";
        if (compsel === "paper") {
            document.getElementById("c_img").src = "./paper.png";
            document.getElementById("result").innerHTML = "It's a tie!";
            return 0;
        }
        else if (compsel === "scissors") {
            document.getElementById("c_img").src = "./scissors.png";
            document.getElementById("result").innerHTML = "You lose! Scissors beat paper.";
            return -1;
        }
        else {
            document.getElementById("c_img").src = "./stone.png";
            document.getElementById("result").innerHTML = "You won! Paper beats rock.";
            return 1;
        }
    }
    else {
        document.getElementById("u_img").src = "./scissors.png";
        if (compsel === "scissors") {
            document.getElementById("c_img").src = "./scissors.png";
            document.getElementById("result").innerHTML = "It's a tie!";
            return 0;
        }
        else if (compsel === "rock") {
            document.getElementById("c_img").src = "./stone.png";
            document.getElementById("result").innerHTML = "You lose! Rock beats scissors.";
            return -1;
        }
        else {
            document.getElementById("c_img").src = "./paper.png";
            document.getElementById("result").innerHTML = "You won! Scissors beat paper.";
            return 1;
        }
    }
}

function change_user_score(n) {
    document.getElementById("u_score").innerHTML = n;
}

function change_comp_score(n) {
    document.getElementById("c_score").innerHTML = n;
}

function game(e) {
    playerChoice = e.target.parentNode.value;
    console.log(playerChoice);
    let uscore = parseInt(uelement.textContent);
    let cscore = parseInt(celement.textContent);
    if (uscore < 5 && cscore < 5) {
        let temp = playround(playerChoice, getcompchoice());
        if (temp === 1) {
            uscore++;
            change_user_score(uscore);
        }
        if (temp === -1) {
            cscore++;
            change_comp_score(cscore);
        }
        if (uscore === 5 || cscore === 5) {
            if (cscore > uscore) {
                document.getElementById("result").innerHTML = "Alas! You have lost this game.";
            }
            else {
                document.getElementById("result").innerHTML = "Congrats! You have won this game.";
            }
        }
    }

}

