let score = JSON.parse(localStorage.getItem('score')) ||{
    Wins:0,
    loses:0,
    Ties:0
} ;

updateScoreElement();

let result ='';

document.querySelector('.js-result')
.innerHTML = `${result}`;
document.querySelector('.js-moves')
.innerHTML = (`You picked ${playerMove} and the computer picked ${computerMove}`);




/*
if (!score){
score ={
    Wins:0,
    loses:0,
    Ties:0
}
}
*/


function playGame(playerMove){
const computerMove =pickComputerMove();




if (playerMove == 'rock'){
        if (computerMove ==='rock'){
        result = 'Tie';
    }else if(computerMove === 'paper'){
        result = 'You lose';

    }else if(computerMove === 'scissors'){
        result = 'You Win';
    }

    
    
}
else if (playerMove == 'paper'){
        if (computerMove ==='rock'){
        result = 'You Win';
    }else if(computerMove === 'paper'){
        result = 'Tie';

    }else if(computerMove === 'scissors'){
        result = 'You lose';
    }
    
    

}
else if (playerMove == 'scissors'){
        if (computerMove ==='rock'){
        result = 'You lose';
    }else if(computerMove === 'paper'){
        result = 'You Win';

    }else if(computerMove === 'scissors'){
        result = 'Tie';
    }
    
    
    

}

if (result ==='You Win'){
        score.Wins += 1;
        
    }else if (result ==='You lose'){
        score.loses += 1;
        
    }else if (result ==='Tie'){
        score.Ties += 1;
        
    }

    localStorage.setItem('score',JSON.stringify(score));
    
    updateScoreElement();
    document.querySelector('.js-result')
    .innerHTML = `${result}`;
    document.querySelector('.js-moves')
    .innerHTML = (`You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img   src="images/${computerMove}-emoji.png" class="move-icon" >
Computer`);





}

function pickComputerMove(){
const randomNumber = Math.random();
let computerMove = '';



if (randomNumber >= 0 && randomNumber< 1/3){
    computerMove ='rock';

} else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove ='paper';
}else if (randomNumber >=2/3 && randomNumber <1){
    computerMove ='scissors';
}
return computerMove;


}
function updateScoreElement(){
document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.Wins} losses: ${score.loses} Ties: ${score.Ties}`;

}
