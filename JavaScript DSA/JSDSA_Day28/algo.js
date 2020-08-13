// this uses half adder logic
function addTwoNumbers(a, b) {
    let carry;
    // iterate till there is no carry
    while(b) {
        // carry contains the common set bits (i.e., 1 in binary)
        // of 'a' and 'b'
        // the carry is shifted by 1 so that adding it to 'a' gives
        // the required sum
        carry = (a & b) << 1;
        // sum of the bits of 'a' and 'b' where at least
        // one of the bits is not set (i.e., the bit is 0 in binary)
        a ^= b;
        b = carry;
    }
    return a;
}

console.log(addTwoNumbers(3, 9));

console.log(addTwoNumbers(-1, 1));

console.log(addTwoNumbers(12936, 24586));