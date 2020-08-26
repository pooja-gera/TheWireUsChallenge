
## Day49

**TicTacToe-Part2**

Hope you have completed the previous challenge and ready 
for the next one.So lets contine with our TicTacToe game,part-2 .

Next component will be the main board for our Tic Tac Toe game. 

**Challenge Desription:**

1. First, we will create this component as a stateful component.
Component state will be initialized with three key/value pairs-boxes, history , xIsNext.

2. The boxes item will be an array containing nine items, one item
for each board box. All these items will be null. So, when box is
empty, not “x” or “o”, it will be null. Otherwise, it will be either
“x” or “o”. The history will be an empty array. When player makes a
move, we will push players name to history array.

3. The last one, the *xIsNext*, will be boolean. You need to initialize it as true. 
This will help you determine which player should make a move as next. After this,
create new instance of Storage object (create this object later).Use it  to store game results in localStorage.

4. The board component will contain two click handlers. First will be handleBoxClick 
and it will handle clicking on board boxes. With every click, it will check if
board contains winning combination or if all boxes are clicked. If one of these
conditions is true, the game ends. Otherwise, we will check which player made move,
mark the box and push the move to game history.

5. The second one will be handleBoardRestart. This one will restart the component
state to its initial state. The render method will contain conditions to show status
message-who is winner, game is drawn or who is the next one to move. Next, it will
contain link to scoreboard, the main board with boxes list with history of moves
and button to start new game.

6. For the link to scoreboard, we will use Link from react-router-dom library
that will redirect the user on / (root) view, or page.

See you in the next Challenge

**Continue...**

For References: 

1. https://www.golangprograms.com/tic-tac-toe-cool-math-in-react-js.html
2. https://blog.alexdevero.com/how-to-build-simple-tic-tac-toe-game-with-react/
