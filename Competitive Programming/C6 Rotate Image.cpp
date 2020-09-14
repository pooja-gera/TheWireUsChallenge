//By Aryan Grover(@aryang23)

//Rotate Image
//Reverse Rows and then Take Transpose
//Or First Transpose then Reverse Cols
//2 Implementations with stl and without stl

// https://leetcode.com/problems/rotate-image/

#include<iostream>
#include<algorithm>
using namespace std;

void solvewostl(int a[][1000],int n)
{
	//Reverse Rows and then Take Transpose
	for(int r=0;r<n;r++)
	{
		int sc=0;
		int ec=n-1;
		while(sc<ec)
		{
			swap(a[r][sc],a[r][ec]);
			sc++;
			ec--;
		}
	}
	//Now Transpose
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<n;j++)
		{
			if(i<j)
			{
				swap(a[i][j],a[j][i]);
			}
		}
	}
}
void rotatestl(int a[][1000],int n)
{
    //Same thing using STL Reverse method
    for(int i=0;i<n;i++)
    {
        reverse(a[i],a[i]+n);
    }
    //Now Transpose
    for(int i=0;i<n;i++)
	{
		for(int j=0;j<n;j++)
		{
			if(i<j)
			{
				swap(a[i][j],a[j][i]);
			}
		}
	}
}
int main()
{
	int n;
	int a[1000][1000];
	cin>>n;
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<n;j++)
		{
			cin>>a[i][j];
		}
	}
    rotatestl(a,n);
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            cout<<a[i][j]<<" ";
        }
        cout<<endl;
    }
}

//By Aryan Grover(@aryang23)

