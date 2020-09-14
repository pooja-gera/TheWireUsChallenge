#include <bits/stdc++.h>
#define int long long
#define endl '\n'
#define MOD 1e9 + 7
#define fastIO ios_base::sync_with_stdio(false); cin.tie(0); cout.tie(0);
using namespace std;
const int N = 1e5 + 5;
int n;
int a[N], b[N];
bool ex[N];
 
void solve(){
    cin>>n;
    for(int i=1; i<=n; i++){
        cin>>a[i];
    }
    memset(b, -1, sizeof(b));
    for(int i=1; i<=n; i++){
        if(a[i]!=a[i-1]){
            b[i] = a[i-1];
            ex[b[i]] = true;
        }
    }
    ex[a[n]] = true;
    int m = 0;
    for(int i=1; i<=n; i++){
        while(ex[m]) m++;
        if(b[i]==-1){
            b[i] = m;
            ex[m] = true;
        }
        cout<<b[i]<<' ';
    }
}
 
signed main()
{
    solve();
    return 0;
}