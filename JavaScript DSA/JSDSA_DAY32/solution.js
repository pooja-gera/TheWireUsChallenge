IMPLEMENTATION:

let a[][] = { { 1, 2, 3, 4 }, 
                      { 5, 6, 7, 8 }, 
                      { 9, 10, 11, 12 }, 
                      { 13, 14, 15, 16 } }; 

printMatrix(a);//Printing the original array

//Calling the rotate90Clockwise method and logging the result in console
rotate90Clockwise(a);
printMatrix(a);//Printing the changed array

function rotate90Clockwise(arr) 
{ 
  
    // Traverse each cycle 
    for (let i = 0; i < N / 2; i++) 
    { 
        for (let j = i; j < N - i - 1; j++) 
        { 
  
            // Swap elements of each cycle 
            // in clockwise direction 
            let temp = a[i][j]; 
            a[i][j] = a[N - 1 - j][i]; 
            a[N - 1 - j][i] = a[N - 1 - i][N - 1 - j]; 
            a[N - 1 - i][N - 1 - j] = a[j][N - 1 - i]; 
            a[j][N - 1 - i] = temp; 
        } 
    }
 
} 

function printMatrix(arr) 
{ 
    for (let i = 0; i < N; i++) 
    { 
        for (let j = 0; j < N; j++) 
        console.log( arr[i][j] + " "); 
        console.log("\n"); 
    } 
} 
