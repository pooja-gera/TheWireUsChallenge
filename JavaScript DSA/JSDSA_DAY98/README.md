## Word search

### Challenge
Given a 2D board and a word, find if the word exists in the grid.
The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
Constraints:
* board and word consists only of lowercase and uppercase English letters.
* 1 <= board.length <= 200
* 1 <= board[i].length <= 200
* 1 <= word.length <= 10^3

Example:
board =
[
  ['W','I','R','E'],
  ['S','F','E','S'],
  ['A','D','U','S']
]

Given word = "WIREUS", return true.
Given word = "SURE", return true.
Given word = "ABCB", return false.



