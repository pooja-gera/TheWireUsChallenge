// using recursion
function usingRecursion(string1, s1, string2, s2) {
    var result;

    // base case
    if (!s1 || !s2)
        result = 0;
    
    // if the character is same
    else if (string1[s1 - 1] === string2[s2 - 1])
        result = 1 + usingRecursion(string1, s1 - 1, string2, s2 - 1);
    
    else{
        var checkString1 = usingRecursion(string1, s1 - 1, string2, s2);
        var checkString2 = usingRecursion(string1, s1, string2, s2 - 1);

        result = Math.max(checkString1, checkString2);
    }
    return result;
}

// using dynamic programming
function usingDP(string1, s1, string2, s2) {
    var array = new Array(s1 + 1).fill(new Array(s2 + 1));
    var result;
    // to store result for all combinations
    if (array[s1][s2] !== undefined)
        return array[s1][s2];

    if (!s1 || !s2)
        result = 0;
    
    else if (string1[s1 - 1] === string2[s2 - 1])
        result = 1 + usingDP(string1, s1 - 1, string2, s2 - 1);

    else {
        var checkString1 = usingDP(string1, s1 - 1, string2, s2);
        var checkString2 = usingDP(string1, s1, string2, s2 - 1);

        result = Math.max(checkString1, checkString2);
    }
    array[s1][s2] = result;
    return result;
}

var string1 = "ABCDEF";
var string2 = "ACBEDF";
length1 = string1.length;
length2 = string2.length;


recursion = usingRecursion(string1, length1, string2, length2);
console.log("Using recursion: " + recursion);

dp = usingDP(string1, length1, string2, length2);
console.log("\nUsing DP: " + dp);