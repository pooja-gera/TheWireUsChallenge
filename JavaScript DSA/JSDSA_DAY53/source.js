var n = readline();
var t1 = readline();  // source tower
var t2 = readline();  // destination tower
var t3 = readline();  // helper tower
toh(n,t1,t2,t3);

function toh(n,src,dest,help) {
    
    if(n==0){
        return;
    }

    toh(n-1,src,help,dest); // Move (n-1)th disk from source to helper with help of destination
    
    print(n + "[" + t1 + "->"+t2+"]");  // Print the path

    toh(n-1,help,dest,src);     // Move (n-1)th disk from helper to destination with help of source
}