const coloums = document.querySelectorAll('.coloum');

coloums.forEach(function (coloum) {

    coloum.addEventListener('click', function (e) {
        if (e.target.className === 'coloum') {
            e.target.style.backgroundColor = 'yellow';
        } else {
            e.target.parentElement.style.backgroundColor = 'yellow';
        };
    });
});

// const wins = [
//     [
//         [1, 0, 0, 0],
//         [0, 1, 0, 0],
//         [0, 0, 1, 0],
//         [0, 0, 0, 1]
//     ],
//     [
//         [0, 0, 0, 1],
//         [0, 0, 1, 0],
//         [0, 1, 0, 0]
//         [1, 0, 0, 0]
//     ],
//     [
//         [1, 0, 0, 0]
//         [1, 0, 0, 0]
//         [1, 0, 0, 0]
//         [1, 0, 0, 0]
//     ],
//     [
//         [0, 0, 0, 1]
//         [0, 0, 0, 1]
//         [0, 0, 0, 1]
//         [0, 0, 0, 1]
//     ],
//     [
//         [1, 1, 1, 1]
//         [0, 0, 0, 0]
//         [0, 0, 0, 0]
//         [0, 0, 0, 0]
//     ],
//     [
//         [0, 0, 0, 0]
//         [0, 0, 0, 0]
//         [0, 0, 0, 0]
//         [1, 1, 1, 1]
//     ],
//     [
//         [0, 0, 0, 0]
//         [0, 0, 0, 0]
//         [1, 1, 1, 1]
//         [0, 0, 0, 0]

//     ],
//     [
//         [0, 0, 0, 0]
//         [1, 1, 1, 1]
//         [0, 0, 0, 0]
//         [0, 0, 0, 0]

//     ]

// ];
// let winner = false;
// function checkWinner() {
//     for (let w = 0; w < wins.length; w++) {
//         for (let i = 0; i < board.length; i++) {
//             for (let j = 0; j < board[i].length; j++) {
//                 if (board[i][j] === wins[w][i][j]) {
//                     winner = true;
//                 } else
//                     winner = false;
//             }
//         }
//     }
//     if (winner) {
//         console.log('winner');
//     } else {
//         console.log('no winner');
//     }
// }

// function chkLine(a, b, c, d) {
//     // Check first cell non-zero and all cells match
//     return ((a != 0) && (a == b) && (a == c) && (a == d));
// }

// function chkWinner(bd) {
//     // Check down
//     for (row = 0; row < 3; row++)
//         for (c = 0; c < 7; c++)
//             if (chkLine(bd[r][c], bd[r + 1][c], bd[r + 2][c], bd[r + 3][c]))
//                 return bd[r][c];

//     // Check right
//     for (r = 0; r < 6; r++)
//         for (c = 0; c < 4; c++)
//             if (chkLine(bd[r][c], bd[r][c + 1], bd[r][c + 2], bd[r][c + 3]))
//                 return bd[r][c];

//     // Check down-right
//     for (r = 0; r < 3; r++)
//         for (c = 0; c < 4; c++)
//             if (chkLine(bd[r][c], bd[r + 1][c + 1], bd[r + 2][c + 2], bd[r + 3][c + 3]))
//                 return bd[r][c];

//     // Check down-left
//     for (r = 3; r < 6; r++)
//         for (c = 0; c < 4; c++)
//             if (chkLine(bd[r][c], bd[r - 1][c + 1], bd[r - 2][c + 2], bd[r - 3][c + 3]))
//                 return bd[r][c];

//     console.log(chkWinner);
// }

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