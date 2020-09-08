// refer to resources for different approaches
function numberOfZeros(n) {
    var count = 0;

    while (n > 0) {
        count += Math.floor(n / 10);
        n = n / 10;
    }
    return count;
}

var n = 100;
var zeros = numberOfZeros(n);
console.log("Number of zeros: " + zeros);