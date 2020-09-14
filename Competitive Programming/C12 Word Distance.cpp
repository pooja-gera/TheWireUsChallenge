//Word Distance
//By Aryan Grover(@aryang23)
#include<iostream>
#include<vector>
#include<climits>
using namespace std;
int main()
{
	int n;
	cin>>n;
	vector<string> v;
	for(int i=0;i<n;i++)
	{
		string s;
		cin>>s;
		v.push_back(s);
	}
	string word1,word2;
	cin>>word1>>word2;
	int w1=-1,w2=-1,ans=INT_MAX;
	for(int i=0;i<n;i++)
	{
		if(v[i]==word1)
		{
			w1=i;
		}
		if(v[i]==word2)
		{
			w2=i;
		}
		if(w1!=-1 and w2!=-1)
		ans=min(ans,abs(w2-w1));
	}
	cout<<ans;
}
