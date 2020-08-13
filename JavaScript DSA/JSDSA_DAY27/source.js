
let n,m;
n = Number(readline());
m = Number(readline());
var arr = [];

for (let i = 0; i < n; ++i) {             // initailizing a 2D Array----
 arr[i] = [];
}


    for(let i=0;i<n;i++){                  // filling the matrix with user input
        for(let j=0;j<m;j++){
            arr[i][j] = Number(readline());
        }
    }
               
     let s = "";       
    
     for(let i=0;i<n;i++)  // loop to print the wave pattern row wise -
        {
            if(i%2==0)            //if number of row is even move from left to right
            {
                for(let j=0;j<m;j++)
                    s = s+arr[i][j]+" ";        
            }
            else                 //if number of row is odd move from right to left
            {
                for(let j=m-1;j>=0;j--)
                    s = s+arr[i][j]+" ";
            }
            
        }

        print(s);
        let z = "";
    
    for(let j=0;j<m;j++)              //if number of column is even move from top to bottom
    {
        if(j%2==0)
        {
            for(let i=0;i<n;i++)
                z= z+arr[i][j]+" ";
        }
        else                          //if number of column is odd move from bottom to top                  
        {
            for(let i=n-1;i>=0;i--)
                z= z+arr[i][j]+" ";
        }
    }
                print(z);
