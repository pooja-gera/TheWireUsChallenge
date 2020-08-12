function fittingShelves(w, m ,n){
    // we store the number of each type of shelf used in
    // numM for m and numN for n
    var numM = 0;
    var numN = 0;
    var remaining = w;

    // p and q are number of shelves of length m and n respectively
    // r is the remainder uncovered wall length
    var p = 0;
    var q = 0;
    var r = 0;
    while(w >= n){
        p = w / m;
        r = w % m;
        if(r <= remaining){
            numM = p;
            numN = q;
            remaining = r;
        }

        q += 1;
        w -= n;
    }
    console.log(numN, numM, remaining);
}

fittingShelves(24, 3, 5);