'use strict';
// declaring the variables
let score, roundScore, activePlayer, dice;

score = [0,0];
roundScore = 0;
activePlayer = 0;

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn--roll').addEventListener('click',function() {
    // Generate a random number
    let dice = Math.floor(Math.random() * 6) + 1;

    // Display the number generated on the dice
    let diceDOM = document.querySelector('.dice');

    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // Display the number generated in 'current' only if it's not the number 1
    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current--'+ activePlayer).textContent = roundScore;
    }
    else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';

        document.querySelector('.player player--0').classList.toggle('player--active');
        document.querySelector('.player player--1').classList.toggle('player--active');

        document.querySelector('.dice').style.display = 'none'; 
    }
})

// dice = Math.floor(Math.random() * 6) + 1;
// document.querySelector('#current--0').textContent = dice;
// document.querySelector('.dice').style.display = 'none';