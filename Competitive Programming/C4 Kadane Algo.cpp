//The Question is: -
// https://leetcode.com/problems/maximum-subarray/
#include<iostream>
using namespace std;
int main()
{
	int n,no,cs=0,ms=0;
	cin>>n;
	for(int i=0;i<n;i++)
	{
		cin>>no;
		cs+=no;
		if(cs<0)
		cs=0;
		ms=max(ms,cs);
	}
	cout<<ms;

}

//By Aryan Grover(@aryang23)
