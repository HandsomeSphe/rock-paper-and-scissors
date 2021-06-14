let userScore = 0;
let computorScore = 0;
const userScore_span = document.getElementById("user-score");
const computorScore_span = document.getElementById("comp-score");
const scoreBoard = document.querySelector(".score-board");
const results = document.querySelector(".results");
const rock = document.querySelector("#r");
const paper = document.querySelector("#p");
const scissors = document.querySelector("#s");

const getComputerChoice = function () {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};
function win() {
  userScore++;
  userScore_span.innerHTML = userScore;
}
function lose() {
  console.log("LOST");
}
function draw() {
  console.log("DRAW");
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win();
      break;

    case "sr":
    case "rp":
    case "ps":
      lose();
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
      break;
  }
}
rock.addEventListener("click", () => {
  game("r");
});

scissors.addEventListener("click", () => {
  game("s");
});

paper.addEventListener("click", () => {
  game("p");
});
