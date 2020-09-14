//https://leetcode.com/problems/maximum-subarray/


#include<iostream>
using namespace std;
int maxSumSubMatrix(int **arr,int n,int m)
{
	//Col Wise Addition First
	for(int i=n-1;i>=0;i--)
	{
		for(int j=m-2;j>=0;j--)
		{
			arr[i][j]+=arr[i][j+1];
		}
	}
	
	//Row Wise Addition 
	for(int i=m-1;i>=0;i--)
	{
		for(int j=n-2;j>=0;j--)
		{
			arr[j][i]+=arr[j+1][i];
		}
	}
	int result=INT_MIN;
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<m;j++)
		{
			result=max(result,arr[i][j]);
		}
	}
	return result;
}
int main()
{
	int n,m;
	cin>>n>>m;
	int *arr=new int*[n];
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<m;j++)
		{
			cin>>a[i][j];
		}
	}
	cout<<maxSumSubMatrix(arr,n,m)<<endl;
	
}
//By Aryan Grover(@aryang23)
