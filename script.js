let userScore = 0;
let computorScore = 0;
const userScore_span = document.getElementById("user-score");
const computorScore_span = document.getElementById("comp-score");
const scoreBoard = document.querySelector(".score-board");
const results = document.querySelector(".results > p");
const rock = document.querySelector("#r");
const paper = document.querySelector("#p");
const scissors = document.querySelector("#s");

const getComputerChoice = function () {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};
function convertWord(letter) {
  if (letter === "r") return "ROCK";
  if (letter === "p") return "Paper";
  return "SCISSORS";
}
function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computorScore_span.innerHTML = computorScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  results.innerHTML = `${convertWord(
    user
  )}${smallUserWord} beats  ${convertWord(comp)}${smallCompWord},you WIN`;
}
function lose(user, comp) {
  computorScore++;
  userScore_span.innerHTML = userScore;
  computorScore_span.innerHTML = computorScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  results.innerHTML = `${convertWord(
    user
  )}${smallUserWord} loses to  ${convertWord(comp)}${smallCompWord},you LOST`;
}
function draw(user, comp) {
  //userScore++;
  userScore_span.innerHTML = userScore;
  computorScore_span.innerHTML = computorScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  results.innerHTML = `${convertWord(
    user
  )}${smallUserWord} draws with ${convertWord(comp)}${smallCompWord},It a tie`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;

    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
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
