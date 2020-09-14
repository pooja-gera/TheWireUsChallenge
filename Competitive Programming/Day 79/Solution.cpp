#include<bits/stdc++.h>
using namespace std;
const int N = 1005;
int q, n, P[2][N];
char S[N];
int main()
{
	cin>>q;
	for (; q; q --)
	{
		cin>>S;
		n = strlen(S + 1);
		for (int i = 1; i <= n; i ++)
			for (int w = 0; w <= 1; w ++)
				P[w][i] = P[w][i - 1] + (S[i] == w + '0');
		int Mn = n;
		for (int w = 0; w <= 1; w ++)
			for (int i = 1; i <= n; i ++)
				for (int j = i; j <= n; j ++)
					Mn = min(Mn, P[w][i - 1] + (j - i + 1) - (P[w][j] - P[w][i - 1]) + (P[w][n] - P[w][j]));
		cout<<Mn<<endl;
		memset(S, 0, sizeof(S));
		memset(P, 0, sizeof(P));
	}
	return 0;
}