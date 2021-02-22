// constants

// Board
const columnEls = document.querySelectorAll('.column');
const positions = document.getElementsByClassName('pos');
const playerOne = document.querySelector('.player-1');
const playerTwo = document.querySelector('.player-2');
const playAgain = document.querySelector('.start');

console.log(positions);

const players = {

}



let gameTokens = [];


// Init

init();

function init() {
    columnEls.forEach(function (column) {

        gameTokens.push([]);

        column.addEventListener('click', function (e) {
            if (e.target.className === 'column') {
                e.target.style.backgroundColor = 'grey';
            } else {
                e.target.parentElement.style.backgroundColor = 'grey';
            };
        });
    });
}
console.log(init)

let startGame = function init() {
    console.log('Start the game');
}
playAgain.addEventListener('click', startGame);

