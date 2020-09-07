#include<bits/stdc++.h>
#define ll long long
using namespace std;
   
ll maxi= -1e9;
 
bool visit[1000005];
vector<ll>adj[100006];
   
ll a[100005];
void bfs(ll s)
{        
	queue<ll>qu;
        qu.push(s);
    
        while(!qu.empty()){
            ll s=qu.front();
            qu.pop();
            int siz=adj[s].size();
        
            for(int i=0;i<siz;i++)
            {
     
                ll num=adj[s][i];
                if(visit[num]!=true){
                visit[num]=true;
                if(maxi<a[s]-a[num])
                maxi=a[s]-a[num];
                if(a[s]>a[num])
                a[num]=a[s];
                qu.push(adj[s][i]);
                }
                
            }
            
        }
}

int main() {
        ll n,m,c=0,s=1,i;
        cin>>n;
        
        for(i=1;i<=n;i++) visit[i]=false;
        
	for(i=1;i<=n;i++) cin>>a[i];

        for(i=1;i<=n;i++)
        {
	    cin>>m;
            
            if(m==-1)
            s=i;
            else{
            
            adj[m].push_back(i);}
            
        }
      
        visit[s]=true;
        
         bfs(s);
         
         cout<<maxi<<endl;
       
        return 0;
    }
 