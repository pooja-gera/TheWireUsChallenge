#include <bits/stdc++.h>
#include <assert.h>
#define ll long long int
#define vll vector<long long int>
#define vvll vector<vector<long long int>
#define vpll vector<pair<long long int, long long int>>
#define sll set<long long int>
#define mp make_pair
#define pb push_back
#define endl "\n"
#define fastIO ios_base::sync_with_stdio(false); cin.tie(NULL);
#define MOD 1000000007
 
using namespace std;

vll solve(map<ll, vll> keeper) {
    vll ans;
    ll n = keeper.size();
    vector<bool> vis(n, false);
    for(ll i = 0; i < n; i++) {
        if(!vis[i]) {
            ll ctr = 0;
            vis[i] = true;
            stack<ll> wait;
            wait.push(i);
            while(!wait.empty()) {
                ll currNode = wait.top();
                wait.pop();
                ctr++;
                for(auto x : keeper[currNode]) {
                    if(!vis[x]) {
                        vis[x] = true;
                        wait.push(x);
                    }
                }
            } 
            ans.pb(ctr);
        }
    }
    sort(ans.begin(), ans.end());
    return ans;
}
 
int main() {
    fastIO;
    ll t; cin >> t;
    for(ll q = 0; q < t; q++) {
        ll n; cin >> n;
        map<ll, vll> keeper;
        vll vec;
        for(ll i = 0; i < n; i++) keeper[i] = vec;
        ll k; cin >> k;
        for(ll i = 0; i < k; i++) {
            ll src, dest; cin >> src >> dest;
            keeper[src].pb(dest);
            keeper[dest].pb(src);
        }
        vll ans = solve(keeper);
        cout << ans.size() << endl;
        for(auto x : ans) cout << x << " "; cout << endl;
    }
    return 0;
} 