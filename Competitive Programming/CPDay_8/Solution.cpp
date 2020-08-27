#include <iostream>
#include <vector>
using namespace std;

void solve(int test_id) {
    int n;
    vector<int> v;
    cin >> n;
    for (int i = 1; i <= n; ++i) {
        int x;
        cin >> x;
        v.push_back(x);
    }
    int mn = n;
    int mx = 0;
    int l = 0;
    for (int i = 0; i < (int)v.size(); ++i) {
        if (i && v[i] - v[i - 1] > 2) l = i;
        if (i + 1 == v.size() || v[i + 1] - v[i] > 2) {
            int cur = i - l + 1;
            if (cur < mn)
                mn = cur;
            if (cur > mx)
                mx = cur;
        }
    }
    cout << mn << " " << mx << '\n';
    return;
}

int main() {
    ios_base::sync_with_stdio(false); cin.tie(0); cout.tie(0);
    int tests;
    cin >> tests;
    for (int i = 1; i <= tests; ++i) {
        solve(i);
    }
    return 0;
}