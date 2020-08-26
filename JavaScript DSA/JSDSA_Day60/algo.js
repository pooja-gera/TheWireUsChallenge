// for n disks, total ((2^n) - 1) moves are required
function towerOfHanoi(n, from, to, aux) {
    if (n === 1) {
        console.log("\n Move disk 1 from rod " + from + " to rod " + to);
        return;
    }

    towerOfHanoi(n - 1, from, aux, to);
    console.log("\n Move disk 1 from rod " + from + " to rod " + to);
    towerOfHanoi(n - 1, aux, to, from);
}

// considering only 3 disks on rod A
towerOfHanoi(3, 'A', 'B', 'C');