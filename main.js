// constants

//-------- Board elements --------//
const boardEl = document.querySelector('.board')
const columnEls = document.querySelectorAll('.column');
const positions = document.getElementsByClassName('.pos');
const playerOneEl = document.querySelector('#player-1');
const playerTwoEl = document.querySelector('#player-2');
const playAgain = document.querySelector('.start');
let winningCombos = [
    [0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10],
    [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24],
    [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31],
    [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3],
    [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22],
    [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18],
    [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],
    [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15],
    [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24],
    [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10],
    [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17],
    [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31],
    [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18],
    [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],
    [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25],
    [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32],
    [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4],
    [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
    [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25],
    [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30],
    [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28],
    [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31],
    [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]
];

let currentPlayer = 1;
let gameTokens = [];
let playerOne, playerTwo, playerTwoColor, playerOnecolor;
let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]
console.log(currentPlayer);




boardEl.addEventListener('click', function (e) {
    if (e.target.className !== 'pos') {
        return
    }
    // console.log(e.target.id)
    let row
    // console.log(row);
    let column = parseInt(e.target.id) % 7;
    // console.log(column);

    // row that is the most bottom that is zero
    for (let i = board.length - 1; i >= 0; i--) {
        if (board[i][column] === 0) {
            row = i
            break
        }
    }


    board[row][column] = currentPlayer
    currentPlayer *= -1;
    console.log(board);
    render()
})

// function takeSpace(e) {
//     if (e.target.className !== 'pos') {
//         return
//     }
//     console.log('this is e ', e.target)
//     let click = parseInt(e.target.id);
//     let bottomSpace = click % 7 + 35;
//     let secondSpace = click % 7 + 28;
//     let thirdSpace = click % 7 + 21;
//     let fourthSpace = click % 7 + 14;
//     let fifthSpace = click % 7 + 7;
//     let topSpace = click % 7;

//     if (board[Math.floor(bottomSpace / 7)][bottomSpace % 7] == 0) {
//         board[Math.floor(bottomSpace / 7)][bottomSpace % 7] = 1;
//     } else if (grid[Math.floor(secondSpace / 7)][secondSpace % 7] == 0) {
//         board[Math.floor(secondSpace / 7)][secondSpace % 7] = 1;
//     } else if (grid[Math.floor(thirdSpace / 7)][thirdSpace % 7] == 0) {
//         board[Math.floor(thirdSpace / 7)][thirdSpace % 7] = 1;
//     } else if (grid[Math.floor(fourthSpace / 7)][fourthSpace % 7] == 0) {
//         board[Math.floor(fourthSpace / 7)][fourthSpace % 7] = 1;
//     } else if (grid[Math.floor(fifthSpace / 7)][fifthSpace % 7] == 0) {
//         board[Math.floor(fifthSpace / 7)][fifthSpace % 7] = 1;
//     } else if (grid[Math.floor(topSpace / 7)][topSpace % 7] == 0) {
//         board[Math.floor(topSpace / 7)][topSpace % 7] = 1;
//     } else {
//         alert('TAKEN!')
//     }
//     console.log(board);

//     function changeColor(e) {
//         let column = e.target.columnEls;
//         let row = [];

//         for (let i = 5; i > -1; i--) {
//             if (positions[i].children[column].style.backgroundColor == 'whitesmoke') {
//                 row.push(positions[i].children[column]);
//                 if (currentPlayer === 1) {
//                     row[0].style.backgroundColor = playerOnecolor;
//                 }
//             }
//         }
//     }
// }




//--------- Initialize the game ---------//
function loadPage() {
    let startGame = function init() {

    }

    playAgain.addEventListener('click', startGame);
    if (!playerOne) {
        playerOne = prompt('Enter Player 1. RED');
        playerOneEl.textContent = playerOne;
    }
    if (!playerTwo) {
        playerTwo = prompt('Enter Player 2. YELLOW');
        playerTwoEl.textContent = playerTwo;

    }

    playerOnecolor = 'red';
    playerTwoColor = 'yellow';

}
loadPage();

function init() {
    board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];

    render();
}

function render() {
    board.forEach(function (column, i) {
        column.forEach(function (row, j) {
            if (board[i][j] == 1) {
                let idx = i * 7 + j;
                document.getElementById(`${idx}`).style.backgroundColor = 'red';
            } else if (board[i][j] == -1) {
                let idx = i * 7 + j;
                document.getElementById(`${idx}`).style.backgroundColor = 'yellow';
            } else if (board[i][j] == 0) {
                let idx = i * 7 + j;
                document.getElementById(`${idx}`).style.backgroundColor = 'white';
            }
        })
    })
}
render();


boardEl.addEventListener('click', function init() {
    let newBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ]; {
        board.push(newBoard);
    }
})



function chkLine(a, b, c, d) {
    // Check first cell non-zero and all cells match
    return ((a != 0) && (a == b) && (a == c) && (a == d));
}

function chkWinner(bd) {
    // Check down
    for (row = 0; row < 3; row++)
        for (c = 0; c < 7; c++)
            if (chkLine(bd[r][c], bd[r + 1][c], bd[r + 2][c], bd[r + 3][c]))
                return bd[r][c];

    // Check right
    for (r = 0; r < 6; r++)
        for (c = 0; c < 4; c++)
            if (chkLine(bd[r][c], bd[r][c + 1], bd[r][c + 2], bd[r][c + 3]))
                return bd[r][c];

    // Check down-right
    for (r = 0; r < 3; r++)
        for (c = 0; c < 4; c++)
            if (chkLine(bd[r][c], bd[r + 1][c + 1], bd[r + 2][c + 2], bd[r + 3][c + 3]))
                return bd[r][c];

    // Check down-left
    for (r = 3; r < 6; r++)
        for (c = 0; c < 4; c++)
            if (chkLine(bd[r][c], bd[r - 1][c + 1], bd[r - 2][c + 2], bd[r - 3][c + 3]))
                return bd[r][c];

    console.log(chkWinner);
}

// alert(chkWinner(winningCombos));


// function findWinner() {
//     let squares = document.querySelectorAll('#pos');
//     for (let i = 0; i < winningCombos.length; i++) {
//         let square = winningCombos[i];
//         if (square.every((e) => squares[e].contains('playerOneEl'))) {
//             alert(`${playerOne} has won`)
//         } else if (
//             square.every((e) => squares[e].contains('playerTwoEl'))
//         ) {
//             alert(`${playerTwo} has won`)

//         }
//     }
// } console.log(findWinner);
// findWinner();