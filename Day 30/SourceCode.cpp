#include <iostream>
using namespace std;

int main() 
{
	int t;
	cin>>t;
	while( t-- )
	{  int n ;
	   cin>>n;
	   int a[n] , i , j ;
	   for( i = 0 ; i < n ; i++ )
	        cin>>a[i];
	   j = 0 ;
	   for( i = 0 ; i < n ; i++ )
	       if( a[i] != a[j] )
	           {   j++;
	               a[j] = a[i];
	           }    
	    
	   n = j + 1 ; 
	   for( i = 0 ; i < n ; i++ )
	      cout<<a[i]<<' ';
	   cout<<endl;   
	}      
	return 0;
}
