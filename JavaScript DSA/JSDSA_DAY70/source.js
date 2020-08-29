let r,c;
r = Number(readline());
c = Number(readline());
var arr = [];

for (let i = 0; i < r; ++i) {             // initailizing a 2D Array----
 arr[i] = [];
}


    for(let i=0;i<r;i++){                  // filling the matrix with user input
        let s = readline();                 // taking multiple inputs in single line separated by space
        let arr1 = s.split(" ");            //storing them in an array
        for(let j=0;j<c;j++){
            arr[i][j] = arr1[j];            //storing them in our array 
        }
    }
    var visited = [];
    for (let i = 0; i < r; ++i) {             // initailizing a 2D Array----
        visited[i] = [];
       }
    for(let i=0;i<arr.length;i++){
       for(let j=0;j<arr[0].length;j++){
           visited[i][j] = false;
       }  
    }

floodFill(arr,0,0,"",visited);


// here psf is path so far to take count of the path we are following
// Visisted is a boolean 2D matrix of same size as is our input matrix to take count of the places we have visited in following our path so we don't get 
// stuck in an infinite loop

function floodFill(maze,row,col,psf,visited){   
    if(col<0 || row<0 || col>=arr[0].length || row>=arr.length || maze[row][col]==1 || visited[row][col] == true ){
        return;
    }
     else if(col==arr[0].length-1 && row==arr.length-1) {
        print(psf);
        return;
     }
     // when we visit a cell we will mark it as true in our visited array to not visit it again in our single path
      visited[row][col] = true;
      //Since we have 4 directions meaning 4 choices to make at each step so we make 4 recursion calls
     
      floodFill(maze, row - 1, col, psf + "t", visited); // to move up i.e top 

      floodFill(maze, row, col - 1, psf + "l", visited); // to move left i.e l
      
      floodFill(maze, row + 1, col, psf + "d", visited); // to mode down
      
      floodFill(maze, row, col + 1, psf + "r", visited); // to move right
      // After we get one of our path we mark all the visited cells as false to find another path
      visited[row][col] = false;   
}