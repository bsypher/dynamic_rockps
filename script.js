const buttons = document.querySelectorAll('button');

const result = document.querySelector('#result');
const score = document.querySelector('#score');
const victor = document.querySelector('#victor');

var userScore= 0;
var cpuScore= 0;


buttons.forEach((button) =>{

	button.addEventListener('click', (e) =>{
		if(userScore < 5 && cpuScore < 5){
			result.textContent = playRound(button.id, computerPlay());
			score.textContent = displayScore();
		}

	})
});

function computerPlay() {
      let result = Math.floor(Math.random() * 3);
      if (result === 0) {
        return 'rock';
      } else if (result === 1) {
        return 'paper';
      } else {
        return 'scissors';
      }
    }



function displayScore(){
	if(cpuScore === 5 || userScore === 5){
		victor.textContent = displayVictor();
	}
	return "User: " + userScore + " points and CPU: " + cpuScore + " points";
}

function displayVictor(){
	if(cpuScore > userScore){
		alert('You lose!!');
	}
	else if (userScore> cpuScore)
	alert ('You win');

}

function playRound(playerSelection, computerSelection) {
	
	if (playerSelection === 'rock'){
	if (computerSelection === 'paper'){
		cpuScore++;
		return 'You lose';
}   else if(computerSelection === 'rock'){	
			return 'Tie';
}		else{
		userScore++;
		return 'Win';
	}
}

if (playerSelection === 'paper'){
	if (computerSelection === 'scissors'){
		cpuScore++;
		return 'You lose';
}   else if(computerSelection === 'paper'){	
			return 'Tie';
}		else{
		userScore++;
		return 'Win';
	}
}
	if (playerSelection === 'rock'){
	if (computerSelection === 'paper'){
		cpuScore++;
		return 'You lose';
}   else if(computerSelection === 'rock'){	
			return 'Tie';
}		else{
		userScore++;
		return 'Win';
	}
}

	if (playerSelection === 'scissors'){
	if (computerSelection === 'rock'){
		cpuScore++;
		return 'You lose';
}   else if(computerSelection === 'scissors'){	
			return 'Tie';
}		else{
		userScore++;
		return 'Win';
	}
}
}