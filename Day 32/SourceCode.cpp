#include <iostream>
using namespace std;

int main() {
	long int i, m , p , w , s = 0 ,t , a[100] , k ;
	cin>>t;
	while( t-- > 0 )
	{ s = 0 ;
	   cin>>m>>p>>w;
	  for( i = 0 ; i < m ; i++ )
	    {  cin>>a[i];
	       s += a[i];
	    }
    	k = ((w*(m+p)) - s );
	 if( k <= 0 || k%p != 0 )
	    cout<<"-1\n";
	 else 
	    cout<<k/p<<endl;
	}   
	 return 0;
}
