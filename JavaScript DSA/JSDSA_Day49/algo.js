function coinChangeBottomUp(coins, amount) {
    if (!amount || !coins.length) {
        return 0;
    }
    // General idea is to build up an array with amounts 1..amount with fewest coins
    // in the beginning, it's very logical, [1] = 1, [2] = 1 as we can use coin 1 and 2
    // We should consider all coins less than or equal to the amount we have. To tell if 
    // we have the smallest amount of coins we should check if using the coin is a smaller 
    // amount than what we recorded at amount - x
    
    let out = [0]; // to record amounts smaller than amount and eventually, amount too
    let i, l;      // to loop over coins
    let index = 1; // to fill out array, it represents the increasing amounts we're recording
    
    while (!out[amount]) {
        out[index] = Infinity; // Convenient initial value
        for (i = 0, l = coins.length; i < l; i++) {
            
            // only look at coins that fit in the current amount
            if (coins[i] <= index) {
                // What's better: What we currently have, or using this coin (that's that 1 below) + 
                // what we calculated for the current amount minus the current coin? 
                // (that's out[index - coins[i]])
                                
                out[index] = Math.min(out[index], 1 + out[index - coins[i]]);
            } 
            
        }
        index++;   
    }
    
    return out[amount] === Infinity ? -1 : out[amount];   
}


function coinChangeTopDown(coins, amount) {
    // memoization
    const memo = new Map();
    
    function permute(left) {
        if(memo.has(left)) return memo.get(left)
        if(left === 0) return 0;
        let min = Infinity;
        
        for(let coin of coins) {
            if(left-coin >= 0) min = Math.min(min, permute(left-coin));
        }
        memo.set(left, min+1);
        return min + 1;
    }
    const result = permute(amount);
    return result === Infinity ? -1 : result;
}

const coins = [1, 2, 5];
const amount = 11;
var topDown = coinChangeTopDown(coins, amount);
console.log(topDown);

var bottomUp = coinChangeBottomUp(coins, amount);
console.log(bottomUp);