#include <iostream>
using namespace std;

int main() {
	int t , n ;
	cin>>t;
     while( t --)
    {  cin>>n;
       int n2 , p ;
       n2 = 0 ;
       p = n ;
           while( n > 0 )
            {  n2*=10 ;
               n2 += n % 10 ;
               n /= 10 ;
            }
            if( n2 == p )
              cout<<"wins"<<endl;
            else
              cout<<"losses"<<endl;
         
    }  
               
	return 0;
}
