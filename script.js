let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>{ 
  const options = ['rock', 'paper', 'scissors'];
  const ranIdx = Math.floor(Math.random()*3);
  return options[ranIdx];
}

const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user");
const comp_score = document.querySelector("#comp");


const drawGame = () => {
  msg.innerText = "Game was draw, Play again!";
  msg.style.backgroundColor = "rgb(17, 3, 61)";
}

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin) {
    userScore++;
    user_score.innerText = userScore;
    msg.innerText = `You Win!, Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
  else {
    compScore++;
    comp_score.innerText = compScore;
    msg.innerText = `You lose!,  ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}
const playGame = (userChoice) => {
  console.log("User choice=", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer choice=", compChoice);

  if(userChoice === compChoice){
    drawGame();
  } 
  else{
    let userWin = true;
    if(userChoice === "rock") {
      userWin = compChoice ==="paper" ? false : true;
    }
    else if(userChoice === "paper"){
      userWin = compChoice === "scissors" ? false : true;
    }
    else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}

choices.forEach((choice)=> {
  console.log(choice);
  choice.addEventListener("click", () =>
  {
    const userChoice = choice.getAttribute("id")
    playGame(userChoice);
  })
});
