function basicSwap(a, b) {
    console.log("Before swapping: a:", a, "and b: ", b);
    b = b - a;
    a = a + b;
    b = a - b;
    console.log("After swapping: a:", a, "and b: ", b);  
  }


function usingBitManipulation(a, b) {
    console.log("Before swapping (bit manipulation): a: " + a + " and b: " + b);
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    console.log("After swapping (bit manipulation): a: " + a + " and b: " + b);
}

var a = 5;
var b = 7;
basicSwap(a, b);
usingBitManipulation(a, b);