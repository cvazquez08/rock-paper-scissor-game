let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");


function getComputerChoice(){
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

function convertToWord(choice){
  if(choice === "rock") return "Rock";
  if(choice === "paper") return "Paper";
  return "Scissors"
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} You Win!`
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function () { document.getElementById(userChoice).classList.remove('green-glow') }, 1000)
}
function lose(userChoice, computerChoice){
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord} You Lose!`
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function () { document.getElementById(userChoice).classList.remove('red-glow') }, 1000)
  
}
function draw(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} It's a draw!`
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(function () { document.getElementById(userChoice).classList.remove('gray-glow') }, 1000)
}

function game(userChoice){
 const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice){
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
    draw(userChoice, computerChoice);
      break;
  }

}

function main(){

  rock_div.addEventListener('click', function() {
    game("rock");
  })
  paper_div.addEventListener('click', function() {
   game("paper")
  })
  scissor_div.addEventListener('click', function() {
    game("scissor")
  })

}

main();