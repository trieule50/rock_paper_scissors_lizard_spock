const userRock = document.querySelector('.rock');
const userScissors = document.querySelector('.scissors');
const userPaper = document.querySelector('.paper');
const userLizard = document.querySelector('.lizard');
const userSpock = document.querySelector('.spock');


let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']

const randomMove = () => {
    return choices[Math.floor(Math.random()*choices.length)]
}

let computerMove = randomMove();

