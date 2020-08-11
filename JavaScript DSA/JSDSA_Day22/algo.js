function getPrimes(limit) {
    // the keys() method returns a new Array Iterator object that contains
    // the keys for each index in the array
    let nums = [...Array(limit).keys()];
    let primes = [];

    for (var i = 2; (i * i) < limit; i++) {
        // changing a number to 1, if it is not prime
        if (nums[i] != "1"){
            for (var j = (i * i); j < limit; j+=i)
                nums[j] = "1";
        }
    }

    for (var i = 0; i < nums.length; i++){
        // since 1 does not get changed to a string, but is also not a prime
        if(nums[i] > 1)
            primes.push(nums[i])
    }
    return primes;
}

console.log(getPrimes(50));