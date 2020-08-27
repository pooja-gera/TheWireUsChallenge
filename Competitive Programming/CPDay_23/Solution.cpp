#include <bits/stdc++.h>
#define int long long
#define MOD 1000000007
#define INF 10000000000000
using namespace std;

int smallestDistancePair(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        int l = nums[1] - nums[0];
        for(int i = 2; i < n; i++){
            if(nums[i] - nums[i-1] < l){
                l = nums[i] - nums[i-1];
            } 
        }
        int r = nums[n-1] - nums[0];
        while(l<r){
            int mid = l + (r - l)/2;
            int count = 0;
            for(int i = 0; i < n; i++){
                int pos = upper_bound(nums.begin(), nums.end(), nums[i] + mid) - nums.begin();
                count += pos - i - 1;
            }
            if(count < k){
                l = mid+1;
            }
            else
                r = mid;
        }
        return l;
}

signed main()
{
    int t;
    cin>>t;
    while(t--){
	int n, k;
	cin>>n>>k;
	vector<int> v;
	for(int i=0; i<n; i++) cin>>v[i];
        cout<<smallestDistancePair(v, k)<<endl;
    }
    return 0;
}
