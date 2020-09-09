var n,m,ans = "";
n = Number(readline());
m = Number(readline());

printMazePath(0,0,n,m,ans);


function printMazePath(sr,sc,n,m,ans){
    if(sr==n-1 && sc==m-1){     // Print ans when we read our destination
        print(ans);
        return;
    }

    if(sr+1<n)       // Check if moving horizontal is possible

    printMazePath(sr+1,sc,n,m,"H"+ans);   // call the function with new source column and add H in ans
    
    if(sc+1<m)            // Check if moving vertical is possible
    
    printMazePath(sr,sc+1,n,m,"V"+ans);  // call the function with new source row and add V in ans
}