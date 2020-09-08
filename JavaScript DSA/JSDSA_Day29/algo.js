function maxArea(h, w, horizontalCuts, verticalCuts) {
    // the (a - b) tells the sort method how to sort the elements
    // here, if the value of (a - b) is negative, a will be ordered before b
    // if the value is 0, order of a and b does not change
    // if the value is positive, b will be ordered before a
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);
    // modulo as given in the hint
    const MOD = 1000000007;
    const hl = horizontalCuts.length;
    const vl = verticalCuts.length;

    // we now have the sorted array and the number of cuts to be made
    // Hmax stores the maximum from (height of the cake - highest point at which a cut is made)
    // and lowest point at which a cut has to be made
    let Hmax = Math.max(h - horizontalCuts[hl - 1], horizontalCuts[0]);

    // similarly, Wmax but for width
    let Wmax = Math.max(w - verticalCuts[vl - 1], verticalCuts[0]);

    // to calculate max height and width after each cut and updating Hmax, Wmin
    for(let i = 1; i < Math.max(hl,vl); i++){
        let hd = horizontalCuts[i] - horizontalCuts[i - 1];
        let vd = verticalCuts[i] - verticalCuts[i - 1];
        if(isNaN(hd)) hd = 0;
        if(isNaN(vd)) vd = 0;

        // maximum height of a piece, after making a cut
        Hmax = Math.max(Hmax, hd);
        // maximum width of a piece, after making a cut
        Wmax = Math.max(Wmax, vd);
    }
    return (Hmax * Wmax) % MOD;
}

console.log(maxArea(5, 4, [1, 2, 4], [1, 3]))