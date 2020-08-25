#include <bits/stdc++.h>
using namespace std;

int main() {
	long int t ;
	cin>>t;
	while ( t-- > 0 )
	{  long int n;
	   cin>>n;
	   long int v[n] , mindiff , diff ;
	   for( int i = 0 ; i < n ; i++ )
	       cin>>v[i];
	   sort( v , v+n );    
	   mindiff = v[0];    
	   for( long int i = 0 ; i < n ; i++ )
	      {  diff = v[i+1] - v[i] ;
	          mindiff = min( mindiff , diff );
	       }
	   cout<<mindiff<<endl;    
	}    
	return 0;
}
