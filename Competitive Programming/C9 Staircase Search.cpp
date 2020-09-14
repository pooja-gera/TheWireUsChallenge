//Staircase Search


//By Aryan Grover(@aryang23)
#include<iostream>
using namespace std;
int main()
{
	int n;
    cin>>n;
	int a[n][n];
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<n;j++)
		{
			cin>>a[i][j];
		}
	}
	int k;
	cin>>k;
	int i=0,j=n-1;
	bool success=true;
    /*Condition is if element is found or out of the loop*/
	while(i!=n-1 or j!=n-1)
	{
		if(a[i][j]==k)
		{
			success=false;
			break;
		}
		else if(a[i][j]>k)
		{
			j--;
		}
		else if(a[i][j]<k)
		{
			i++;
		}
	}
	if(success==false)
	cout<<"YES"<<endl;
	else
	cout<<"NO"<<endl;
}


//By Aryan Grover(@aryang23)
