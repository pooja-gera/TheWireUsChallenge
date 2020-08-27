// time complexity O(log n), where n is the exponent
function iterative(a, b, c) {
    var result = 1;

    a = a % c;

    if (a === 0)
        return 0;

    while (b > 0) {
        // if b is odd
        if (b & 1)
            result = (result * a) % c;
        // when b is even
        b >>= 1;
        a = (a * a) % c;
    }
    return result;
}

function recursive(a, b, c) {
    // base case
    if (a === 0)
        return 0;
    if (b === 0)
        return 1;

    var result;
    // if b is even
    if ((b % 2) === 0) {
        result = recursive(a, b / 2, c);
        result = (result * result) % c;
    }

    else {
        result = a % c;
        result = (result * recursive(a, b - 1, c) % c) % c;
    }
    return ((result + c) % c);
}

var A = 3;
var B = 2;
var C = 5;

var iter = iterative(A, B, C);
console.log("Iterative Approach: " + iter);

var rec = recursive(A, B, C);
console.log("Recursive Approac: " + rec);
