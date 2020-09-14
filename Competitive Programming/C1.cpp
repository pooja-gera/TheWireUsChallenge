//Busy Man OR Activity Selection 
//By Aryan Grover(@aryang23)

//https://www.spoj.com/problems/BUSYMAN/

#include<iostream>
#include<algorithm>
#include<vector>
using namespace std;
bool compare(pair<int,int> p1,pair<int,int> p2)
{
	return p1.second<p2.second;
}
int main()
{
	int t,n,s,e;
	cin>>t;
	vector<pair<int,int> > v;
	while(t--)
	{
		cin>>n;
		for(int i=0;i<n;i++)
		{
			cin>>s>>e;
			v.push_back(make_pair(s,e));
		}
		//Sorting
		sort(v.begin(),v.end(),compare);
		int cnt=1;
		int f=v[0].second;
		for(int i=1;i<n;i++)
		{
			if(v[i].first>=f)
			{
				f=v[i].second;
				cnt++;
			}
		}
		cout<<cnt<<endl;
	}
}
