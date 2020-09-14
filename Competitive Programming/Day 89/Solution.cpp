#include <bits/stdc++.h>
#define int long long
using namespace std;

bool canJump(vector<int>& nums) {
        int lastPos = nums.size()-1;
        for(int i=nums.size()-1; i>=0; i--){
            if(i+nums[i]>=lastPos){
                lastPos = i;
            }
        }
        return lastPos == 0;
}

signed main()
{
    vector<int> arr{4, 5, 2, 25};
    if(canJump(arr)) cout<<"True";
    else cout<<"False";
    return 0;
}
