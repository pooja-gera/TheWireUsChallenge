#include <bits/stdc++.h>
using namespace std;
#define ll long long
const int maxn = 1e5+10;
ll sdiv[maxn];

int main()
{
    int t;
    cin>>t;
    while(t--){
        int L[1005],R[1005];
        int n;
        cin>>n;
        int ind = 0,r_val = 0;
        for(int i = 1;i<=n;i++)
            cin>>L[i];
        for(int i = 1;i<=n;i++)
            cin>>R[i];
        int mx = 0;
        for(int i = 1;i<=n;i++)
        {
            if(L[i]*R[i]>mx)
            {
                mx = L[i]*R[i];
                ind = i;
            }
            if(L[i]*R[i] == mx && R[i]>R[ind])
                ind = i;
        }
        cout<<ind<<endl;
    }
    return 0;
}
