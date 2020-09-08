// the key to solve this problem is that each of the 4
// nucleotides can be stored in 2 bits. So the 10-letter-long
// sequence can be converted to a 20-bit-long integer.

function repeatedDNASequences(string) {
    const done = new Set();
    const result = new Set();

    const map = { A: 1, C: 2, G: 3, T: 4};
    let multiple = 2;
    let hash = 0;

    for (let i = 0; i < 9; i++) {
        hash += map[string[i]] * multiple;
        multiple *= 10;
    }

    hash += map[string[i]] * multiple;
    done.add(hash);

    for (let i = 10; i < string.length; i++){
        hash = ((hash - map[s-[i - 10]]) / 10) + map[s[i]] * multiple;
        if (done.has(hash))
            result.add(s.slice(i - 9, i + 1));
        else
            done.add(hash);
    }

    return Array.from(result);
}


function repeatedDNASequencesAnother(string) {
    // stores every dna of length 10
    let done = new Set();
    // stores the solution
    let result = new Set();

    // search from the start of the string and get every substring with length 10
    for (let i = 0; i < string.length - 9; i++) {
        const s = string.substring(i, i + 10);

        if (done.has(s))
            result.add(s);
        else
            done.add(s);
    }
    return Array.from(result);
}