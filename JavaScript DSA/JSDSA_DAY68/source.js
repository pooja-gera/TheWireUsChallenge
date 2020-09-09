var n,m,ans = "";
n = Number(readline());
m = Number(readline());

var arr = mazePath(0,0,n,m);
print("["+ arr +"]");

function mazePath(sr,sc,n,m){   //sr means source row and sc means source coulmn which is 0,0.
    if(sr==n-1 && sc==m-1){     // if we reach our destination i.e at point n-1,m-1 we will enter our base case
        let arr =[];
        arr.push("");
        return arr;
    }

    let myans=[];
    // this check is mandatory to make sure that we don't go out of bounds of matrix
if(sc+1<=n)                      //check if we are allowed to move horizontal then add 1 in source column
{
    let horizontal = mazePath(sr,sc+1,n,m);    // call the function with new source column
    for(let i=0;i<horizontal.length;i++){
        myans.push("H"+horizontal[i])          // Add H in every path which we get in returned array and store in new array myAns
    }
    }

    if(sr+1 <= m)                //check if we are allowed to move vertically then add 1 in source row
    {
        let vertical = mazePath(sr+1,sc,n,m);  // call the function with new source column
        for(let i=0;i<vertical.length;i++){
            myans.push("V"+vertical[i]);      // Add V in every path which we get in returned array and store in new array myAns
        }
    }
    return myans;
}