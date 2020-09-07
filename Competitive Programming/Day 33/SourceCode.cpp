#include <iostream>
using namespace std;

int main() {
	int t ; 
	cin>>t;
	while(t--)
	{  long long a , b , s = 0 , m , n = 1 , p ;
	  cin>>a>>b;
	  while( a > 0 || b > 0) 
	    {  p =  (a%10) + (b%10) ;
	      if( p >= 10 )
	         p-=10;
	      s += ( p*n );
	      a/=10; b/=10;
	      n*=10;
	    }  
	  cout<<s<<endl; 
	}     
	return 0;
}
