IMPLEMENTATION:

let num = Number(readLine()); //taking the number if elements from the user as input
var arr = [];

//Taking the user input of different elements of array

for(let i=0; i<num; i++){
 let c = Number(readLine());
 arr.push(c);
}

//Processing the input array from the user
let z= "";
for(let i = 0;i<N;i++){
    z+=arr[i]+" ";
}

//Logging the input array from the user
console.log(z);
var x1,v1,x2,v2;
x1 = arr[0];
v1 = arr[1];
x2 = arr[2];
v2 = arr[3];

//Calling the frogsJumpsAndMeet method and logging the result in console
console.log(frogsJumpsAndMeet(x1, v1, x2, v2));

function frogsJumpsAndMeet(x1, v1, x2, v2){
   if((((x2-x1)*(v2-v1)) < 0) && (((x2-x1)%(v2-v1)) == 0)){
            return "YES";
        }
   return "NO";
}