#include <bits/stdc++.h>
#define int long long
#define INF 10000000000000000
#define MOD 1000000007
using namespace std;

signed main(){
    int t, n, k, num, ans;
    cin>>t;
    while(t--){
        cin>>n>>k;
        ans = 0;
        for(int i = 0;i<n;i++){
            cin>>num;
            ans+=max((int)0, num - k);
        }
        cout<<ans<<endl;
    }
    return 0;
} 