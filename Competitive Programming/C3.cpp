//The Question Link is: -
// https://leetcode.com/problems/target-sum/

#include<iostream>
using namespace std;
int main()
{
	int a[]={1,3,5,7,10,11,12,13};
	int s=16;
	int n=sizeof(a)/sizeof(int);
	int i=0,j=n-1,cnt=0;
	while(i<j)
	{
		int csum=a[i]+a[j];
		if(csum==s)
		{
			cout<<a[i]<<" and "<<a[j]<<endl;
			i++;
			j--;
		}
		else if(csum>s)
		{
			j--;
		}
		else
		i++;
	}
//	cout<<cnt;
}

//By Aryan Grover(@aryang23)
