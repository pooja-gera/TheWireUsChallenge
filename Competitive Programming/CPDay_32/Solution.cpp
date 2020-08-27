#include <bits/stdc++.h>
#define int long long
#define endl '\n'
#define pb push_back
#define MOD 1e9 + 7
#define fastIO ios_base::sync_with_stdio(false); cin.tie(0); cout.tie(0);
using namespace std;
const int N = 1e5 + 5;
int arr[N];
 
void solve(int test){
    int n;
    cin>>n;
    for(int i=0; i<n; i++) cin>>arr[i];
    vector<int> ans;
 
    for(int i=0; i<n; i++){
        if(i==0||i==n-1||(arr[i-1]<arr[i]!=arr[i]<arr[i+1])) ans.pb(arr[i]);
    }
    cout<<ans.size()<<endl;
    for(auto x:ans) cout<<x<<' ';
    cout<<endl;
}
 
signed main()
{
    int t;
    cin>>t;
    for(int i=1; i<=t; i++){
        solve(i);
    }
    return 0;
}