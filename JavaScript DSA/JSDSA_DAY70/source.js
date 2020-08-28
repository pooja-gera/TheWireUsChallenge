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

function floodFill()