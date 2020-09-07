#include <bits/stdc++.h>
 
using namespace std;

typedef long long li;
const int N = 1000 * 1000 + 13;

int n;
int a[N], b[N];
 
void solve() {
	scanf("%d", &n);
	for (int i = 0; i < n; ++i) scanf("%d", &a[i]);
	for (int i = 0; i < n; ++i) scanf("%d", &b[i]);
	
	li need = 0, add = 0, extra = 2e9;
	for (int i = n - 1; i >= 0; --i) {
		if (b[i] < need) {
			puts("NO");
			return;
		}
		
		li val = b[i] - a[i];
		li to_add = min(extra, max(0LL, val - need));
		add += to_add;
		extra = min(extra - to_add, b[i] - need - to_add);
		need = max(0LL, need - val);
	}
	
	puts(add >= need ? "YES" : "NO");
}
 
int main() {
	int t;
	scanf("%d", &t);
	for (int i = 0; i < t; ++i)
		solve();
}