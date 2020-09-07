#include <iostream>
using namespace std;

int main() {
	int t; 
	cin>>t;
	while( t-- )
	{  int n ;
	   int a[1000];
	   int count[1001];
	   for( int i = 1 ; i <= 1000 ; i++ )
	        count[i] = 0 ;
	   cin>>n;
	   for( int i = 0 ; i < n ; i++)
	      { cin>>a[i];
	        count[a[i]]++;
	      }  
	   if( n < 4 )
	      cout<<"-1"<<endl;
	   else
	   {  int a1 = 0 ;
	      int a2 = 0 ;
	      for(int i = 0 ; i < n ; i++ )
	         if( count[a[i]] > 1 )
	          if( a[i] > a1 )
	           {  a2 = a1 ;
	              a1 = a[i];
	           }
	          else if(a[i]>a2 && a[i] != a1 )
	                  a2 = a[i];
	     if( a1 > 0 && count[a1] >= 4 )
	        cout<<a1*a1<<endl;
	     else if( a1 > 0 && a2 > 0 )   
	        cout<<a1*a2<<endl;
	     else
	        cout<<"-1"<<endl;
	   }      
	}
	return 0;
}
