/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundSocre, activePlayer, gamePlaying,endScore;

init();


// document.querySelector('#current-' + activePlayer).textContent = dice;


document.querySelector('.btn-roll').addEventListener('click', function () {
   
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.getElementById('dice1');
        var diceDOM2 = document.getElementById('dice2');

        diceDOM.style.display = 'block';
        diceDOM2.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        diceDOM2.src = 'dice-' + dice2 + '.png';

        var round = document.querySelector('#current-' + activePlayer);

        if (dice !== 1 && dice2 !== 1 ) {
            //add score
            roundSocre += dice + dice2;
            round.textContent = roundSocre;
        } else {
            //next player
            nextplay();
        }

    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {

        scores[activePlayer] += roundSocre;
        endScore = document.querySelector('.scoreText').value;
        var end;
        if (endScore){
            end = endScore;
        }else { end = 100;}

        if (scores[activePlayer] < end) {
            nextplay();
        } else {
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
            document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';
            gamePlaying = false;
        }
    }
      
  });

document.querySelector('.btn-new').addEventListener('click', init);


  function nextplay() {

    document.querySelector('#current-' + activePlayer).textContent = 0;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    roundSocre = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
     // document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active') toggle = if has class remove else add class
     // document.querySelector('.dice').style.display = 'none';
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';
  }

  function init() {
    scores = [0, 0];
    roundSocre = 0;
    activePlayer = 0;
    gamePlaying = true;
    console.log(endScore);
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
  }