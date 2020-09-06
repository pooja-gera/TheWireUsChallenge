#include <bits/stdc++.h>
#include<string>
#include <unordered_map>
using namespace std;

int main() {
	// your code goes here
	int t;
	cin>>t;
	while( t-- )
	{  long int n , i  ;
	   cin>>n;
	   string f[n] , l[n] ;
	   std::unordered_map< std::string , int > m;
	   for(  i = 0 ; i < n  ; i++ )
	      {   cin>>f[i]>>l[i];
	   	      if( m.find(f[i]) == m.end() )
	   	         m.insert({f[i],1});
	   	      else 
	   	        m[f[i]]++;
	   	          
	     }    
	           
	   for( i = 0 ; i < n ; i++ )
	   {  if( m[f[i]] == 1 )
	            cout<<f[i];
	      else
	           cout<<f[i]<<' '<<l[i];
	      cout<<endl;    
	   }    
	}   
	return 0;
}
