#include <bits/stdc++.h>
using namespace std;

int main()
 {
	string s[500];
	int n;
	cin>>n;
	for( int i = 0 ; i < n ; i++ )
	  cin>>s[i];
	sort( s , s+n);
	int p = 0 ;
	for( int i = 0 ; i < n ; i++ )
	{  p++;
	   if( i+1 < n && s[i+1] == s[i] )
	      continue;
	   cout<<s[i]<<' '<<p<<endl; 
	   p = 0 ;
	}   
	return 0;
}
