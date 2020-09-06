#include <bits/stdc++.h>
#include <stack>
using namespace std;

struct books
{  int ex ;
   string name ;
};

int main()
 {
	long long int n , x ; 
	string nm;
	stack<books> s;
	stack<int> p ;
	books b ;
	cin>>n;
	
	while( n-- )
	{   cin>>x;
	    if( x == -1 )
	      {  b = s.top();
	         cout<<p.top()<<" "<<b.name<<endl;
	         s.pop();
	         p.pop();
	      }
	    else 
	    {   cin>>nm;
	        if( x != 0 )  
	       {  
	        if( s.empty() || s.top().ex >= x )
	        {   b.ex = x ;
	            b.name = nm;
	            s.push(b);
	            p.push(0);
	        } 
	        else 
	          p.top()++;
	        }    
	     }   
	}    
	return 0;
}
