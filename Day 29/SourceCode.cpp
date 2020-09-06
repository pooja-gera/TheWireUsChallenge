#include <bits/stdc++.h>
using namespace std;


int main() 
{
	int n;
	cin>>n;
	long long int a[n] , s = 0 ;
	for( int i = 0 ; i < n ; i++ )
	{   cin>>a[i];
	    s += a[i] ;
	}
	cout<<s;
	return 0;
}
