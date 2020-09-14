#include <bits/stdc++.h>
using namespace std;

long long get_node(int v, int power, int part) {
  return v * 1ll * power + part;
}

void solve() {
  int n, u, v; 
  cin>>n>>u>>v;

  int u_power = 1;
  int v_power = 1;

  int u_part = 0;
  int v_part = 0;

  while (u != v) {
    if (u > v) {
      u_part += u_power * (u % 2);
      u_power += u_power;
      u /= 2;
    } else {
      v_part += v_power * (v % 2);
      v_power += v_power;
      v /= 2;
    }
  }

  int left = 2;
  int right = n;
  int result = 1;

  while (left <= right) {
    int middle = (left + right) / 2;

    if (get_node(middle, u_power, u_part) <= n && get_node(middle, v_power, v_part) <= n) {
      result = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  cout<<result<<endl;
}

int main() {
  int cases; cin<<cases;

  for (int i = 0; i < cases; i++) {
    solve();
  }

  return 0;
}