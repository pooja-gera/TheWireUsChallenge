
IMPLEMENTATION:

function maxProfitWithKTransactions(price, k) {
    if(!prices.length) return 0;
    const profits = [];
    for(let i=0; i<=k; i++){
        const row = new Array(prices.length).fill(0);
        profits.push(row);
    }
    for(let i=1; i<= k; i++){
        let maxSoFar = -Infinity;
        for(let j=1, j< prices.length; j++){
            maxSoFar = Math.max(maxSoFar, profits[i - 1][j - 1] - prices[j - 1]);
            profits[i][j] = Math.max(profits[i][j-1], maxSoFar + prices[j]);
        }
    }

    return profits[k][prices.length - 1];
}
