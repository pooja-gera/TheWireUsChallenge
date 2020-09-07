#include <bits/stdc++.h>
#include <stack>
#include <unordered_set>
using namespace std;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	stack<long long int> s ;
	int t;
	cin>>t;
	while( t-- )
	{  	long long int n , q , i;
	    unordered_set< long long int > umap;
	    cin>>n>>q;
	    for( i = 0 ; i < n ; i++ )
	     {  long long int j ; 
	         cin>>j;
	       if( umap.find(j) == umap.end())
	          {  s.push(j); 
	             umap.insert(j);
	          }
	     }
	    while( q-- )
	    {  cin>>i;
	      if( i == 1 )
	      {  long long int l ;
	         cin>>l;
	         for( long long int p = 0 ; p < l ; p++ )
	         {  long long int j;
	             cin>>j;
	            if( umap.find(j) == umap.end() )
	             {  s.push(j); 
	                umap.insert(j);
	             }   
	         }
	      }
	        else if( i == 2 )
	         { long long int r ;
	             cin>>r;
	           for( long long int p = 0 ; p < r ; p++ )
	            { if(!(s.empty()))
	                {
                      umap.erase(s.top());
                      s.pop();
                    }  
	            }     
	          }
	    }
	       while( !(s.empty()) )
	      {   cout<<s.top()<<' ';
	           s.pop();
	      }
	   cout<<endl;
	}   
	return 0;
}
