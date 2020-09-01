
IMPLEMENTATION:

var exist = function(board, word) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] == word[0]) {
                if (snake(board, word, row, col)) return true
            }
        }
    }
    return false
};

var snake = function(board, word, row, col) {
    if (board[row][col] == word[0]) {
        if (word.length == 1) return true
        let saved = board[row][col]
        board[row][col] = null
        if (row + 1 < board.length && snake(board, word.slice(1), row + 1, col)) return true
        if (row - 1 >= 0 && snake(board, word.slice(1), row - 1, col)) return true  
        if (col + 1 < board[0].length && snake(board, word.slice(1), row, col + 1)) return true
        if (col - 1 >= 0 && snake(board, word.slice(1), row, col - 1)) return true
        board[row][col] = saved
    }
    return false
}