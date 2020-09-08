function GCD(a, b){
    // euclidean algorithm
    // the gcd of two numbers does not change if the 
    // larger number is replaced by its difference with the smaller number
    if (b == 0)
        return a;
    
    // the recursive function will run until it finds the GCD
    return GCD(b, (a % b));
}

console.log(GCD(12345678, 987654))