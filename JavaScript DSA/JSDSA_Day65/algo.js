function nextEmptySpot(board) {
    // iterate over the whole board and find
    // the first empty position (i.e., with value zero)
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] === 0) 
                return [i, j];
        }
    }
    // if the board is full and there is no empty position
    return [-1, -1];
}

function checkRow(board, row, value){
    // iterates over the given row and check if the value is
    // already present in that row
    for(var i = 0; i < board[row].length; i++) {
        if(board[row][i] === value) {
            return false;
        }
    }
    // if it is not present, return true
    return true;
}

function checkColumn(board, column, value){
    // iterates over the given column and check if the value is
    // already present in that column
    for(var i = 0; i < board.length; i++) {
        if(board[i][column] === value) {
            return false;
        }
    }
    // if it is not present, return true
    return true;
};

// to check in each square block (the 9 square block)
function checkSquare(board, row, column, value){
    boxRow = Math.floor(row / 3) * 3;
    boxCol = Math.floor(column / 3) * 3;
    
    // iterate over the square block and check if the value
    // is already in that block
    for (var r = 0; r < 3; r++){
        for (var c = 0; c < 3; c++){
            if (board[boxRow + r][boxCol + c] === value)
                return false;
        }
    }
    return true;
};

// function to check if all the conditions are satisfied
function checkValue(board, row, column, value) {
    if(checkRow(board, row, value) &&
      checkColumn(board, column, value) &&
      checkSquare(board, row, column, value)) {
        return true;
    }
    return false; 
};

function solve(board) {  
    let emptySpot = nextEmptySpot(board);
    let row = emptySpot[0];
    let col = emptySpot[1];

    // there is no more empty spots
    if (row === -1){
        return board;
    }

    // try all the numbers from 1 to 9 and check if any of it is valid
    for(let num = 1; num <= 9; num++){
        if (checkValue(board, row, col, num)){
            board[row][col] = num;
            solve(board);
        }
    }

    // in case there is no valid number, reset that position to zero
    // and step back (backtrack) to try a different possibility
    if (nextEmptySpot(board)[0] !== -1)
        board[row][col] = 0;

    return board;
}

// initialize the board
var board = [
    [0, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 9, 9, 0, 0, 5],
    [0, 0, 0, 0, 0, 0, 0, 7, 9]
];

var solved = solve(board);
console.log(solved);