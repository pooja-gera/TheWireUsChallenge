#include <iostream>
using namespace std;
long long int gcd( long long  int a , long long  int  b )
{  if( b==0 )return a;
   else return gcd( b , a%b );
}

int main() {
	int t ;
	long long int a , b ;
	cin>>t;
	while( t -- )
	  {  cin>>a>>b;
	     long long int g = gcd(a,b);
	     long long int l = ( a * b )/ g ;
	     cout<<g<<' '<<l<<endl;
	  }   
	return 0;
}

