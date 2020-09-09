
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

    // the logic of this program is in the fact that we will have a variable direction and with each 1 we encounter we will add it
    // to direction then take it's mod with 4 so at the end we will have 4 options
    let dir=0;                              
    let n =r;
    r=0,c=0;
    while(r>=0&&c>=0&&r<=n-1&&c<=n-1)
    {
    dir=(dir+arr[r][c])%4;
    if(dir%4==0)                    // Option 1 when dir is 0 
    {
        c++;                        // We move forward in the same row
        if(c>n-1)
        {
            print(r+", " + (c-1));    // Print the Result as soon as we real the out of boundaries of Matrix
    
        }

    }
    else if(dir%4==1)               // Option 2 when dir is 1
    {
    r++;                            // We move downward in the same column            
    if(r>n-1)
    {
        print((r-1)+"," + c);    // Print the Result as soon as we real the out of boundaries of Matrix
    }
    }
    else if(dir%4==2)           // Option 3 when dir is 2
    {
        c--;                    // We move backwards in the same row 
        if(c<0)
        {
            print(r+"," + c+1);         // Print the Result as soon as we real the out of boundaries of Matrix
        }
    }   
    else                            // Option 4 when dir is 3
    {
        r--;                        // We move upwards in same column
        if(r<0)
        {
            print((r+1)+"," + c);       // Print the Result as soon as we real the out of boundaries of Matrix
        }
    }
    }










