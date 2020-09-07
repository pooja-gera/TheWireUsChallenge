#include <bits/stdc++.h>
#define int long long
using namespace std;

int maxProfit(int prices[], int n){
    int profit = 0; /// Declaring profit = 0 (Because nothing is considered)

    ///Iterating over every number
    for(int i=1; i<n; i++){
        if(prices[i]>prices[i-1]) profit +=  prices[i] - prices[i - 1]; ///Adding up profit of every consecutive prices
    }

    return profit;
}

signed main()
{
    int arr[6] = {7,1,5,3,6,4};
    cout<<"Maximum profit obtained : "<< maxProfit(arr, 6)<<endl;
    return 0;
}
