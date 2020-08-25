var n = readline();
print("Output -- ")
printNum(n);

function printNum(n) {
    if(n==1){       // Base case The Recursion will break here
        print(n);
        return;
    }

    print(n);  // Pre-recursion Call will print in decreasing order.
    
    printNum(n-1);  // recursion call to n-1 
    
    print(n);  // Post recursion call will print numbers in incresing order.
}