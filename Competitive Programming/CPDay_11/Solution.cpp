#include<bits/stdc++.h>
using namespace std;
int main()
{
	int q;
	cin>>q;
	for (; q; q --)
	{
		int n, a, Mx = 0;
		cin>>n;
		map < int , int > MP;
		for (int i = 0; i < n; i ++)
			cin>>a;
			MP[a] ++;
		for (auto X : MP)
			Mx = max(Mx, X.second);
		cout<<n - Mx<<endl;
	}
	return 0;
}