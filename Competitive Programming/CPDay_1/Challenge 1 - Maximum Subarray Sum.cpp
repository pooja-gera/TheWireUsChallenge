#include <bits/stdc++.h>
#define int long long
using namespace std;

int subSum(int arr[], int n){
    int currSum = 0, max_so_far = INT_MIN; /// Declaring currentSum and maxSum so far = -infinity (Because the no can be negative)

    ///Iterating over every number
    for(int i=0; i<n; i++){
        currSum += arr[i]; ///Adding the no to the currSum
        max_so_far = max(max_so_far, currSum); /// Checking if the sum calculated so far can be max or not
        if(currSum < 0) currSum = 0; /// Whenever currentSum hits negative, it becomes redundant for us to count it in max_so_far
    }

    return max_so_far;
}

signed main()
{
    int arr[9] = {-2,1,-3,4,-1,2,1,-5,4};
    cout<<"Largest maximum subarray sum : "<<subSum(arr, 9)<<endl;
    return 0;
}
