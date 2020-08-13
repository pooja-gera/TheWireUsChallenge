//Code for basic challenge
var N = Number(readline());   // taking number of elemnts as input
print(1<<N); // bitwise left shift (Refer to resources)
print(N>>2);  // bitwise right shift

if(N&1){        // bitwise AND
    print("odd");
} else{
    print("Even");
}

// Code for Bonus Challenge ---- 

var N = Number(readline());   // taking number of elemnts as input
var arr = [];

//taking N elements one in each line as an input
for(let i = 0; i < N; i++){
    let c = Number(readline());
    arr.push(c);
}

var z= "";
for(let i = 0;i<N;i++){
    z+=arr[i]+" ";
}
print("Input Array - "+z);

var ans = arr[0];

// Refer to resources for truth table of XOR
for(let i=1;i<N;i++){
    ans = ans ^ arr[i];     // Bitwise XOR operstor
}

print(ans);
