const userRock = document.getElementById('rock');
const userScissors = document.getElementById('scissors');
const userPaper = document.getElementById('paper');
const userLizard = document.getElementById('lizard');
const userSpock = document.getElementById('spock');
const results = document.querySelector('.results')


let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']

const randomMove = () => {
    return choices[Math.floor(Math.random()*choices.length)]
}

let computerMove = randomMove();
let userMove;

const gameLogic = (userMove) => {
    if (computerMove === userMove){
        results.innerText = 'Tie!'
    }else if(computerMove === 'rock' && userMove === 'paper'){
        results.innerText =  `You win! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'paper' && userMove === 'rock'){
        results.innerText =  `You lose! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'paper' && userMove === 'scissors'){
    results.innerText =  `You win! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'scissors' && userMove === 'paper'){
        results.innerText =  `You win! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'rock' && userMove === 'scissors'){
        results.innerText =  `You lose! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'scissors' && userMove === 'rock'){
        results.innerText =  `You win Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'lizard' && userMove === 'rock'){
        results.innerText =  `You win! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'rock' && userMove === 'lizard'){
        results.innerText =  `You lose! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'lizard' && userMove === 'spock'){
        results.innerText =  `You lose! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'spock' && userMove === 'lizard'){
        results.innerText =  `You win! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'scissors' && userMove === 'spock'){
        results.innerText =  `You win! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'spock' && userMove === 'scissors'){
        results.innerText =  `You lose! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'scissors' && userMove === 'lizard'){
        results.innerText =  `You lose! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'lizard' && userMove === 'scissors'){
        results.innerText =  `You win! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'lizard' && userMove === 'paper'){
        results.innerText =  `You lose! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'paper' && userMove === 'lizard'){
        results.innerText =  `You win! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'paper' && userMove === 'spock'){
        results.innerText =  `You lose! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'spock' && userMove === 'paper'){
        results.innerText =  `You win! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'rock' && userMove === 'spock'){
        results.innerText =  `You win! Computer chose ${computerMove} and user chose ${userMove}`
    }else if(computerMove === 'spock' && userMove === 'rock'){
        results.innerText =  `You lose! Computer chose ${computerMove} and user chose ${userMove}`
    }
};

userRock.addEventListener('click', function(){
    gameLogic('rock')})
userScissors.addEventListener('click', function(){
    gameLogic('scissors')});
userPaper.addEventListener('click', function(){
    gameLogic('paper')});
userLizard.addEventListener('click', function(){
    gameLogic('lizard')});
userSpock.addEventListener('click', function(){
    gameLogic('spock')});