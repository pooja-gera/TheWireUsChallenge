#include <iostream>
using namespace std;
int main() {
	 int x;
   float y ;
   cin>>x;
  cin>>y;
  if( x>0 && x<=2000 && y>=0 && y<=2000.00 )
  { if( x%5 == 0 )
     if( x + 0.50 < y )
	y = y - x - 0.50 ;
   cout<<y;
  }
  return 0;
}
