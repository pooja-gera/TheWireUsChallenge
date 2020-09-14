//Spiral Print

// https://leetcode.com/problems/spiral-matrix/
#include<iostream>
using namespace std;
void spiralPrint(int a[][1000],int n,int m)
{
	int sr=0,sc=0,ec=m-1,er=n-1;
	while(sr<=er and sc<=ec)
	{
		for(int i=sc;i<=ec;i++)
		{
			cout<<a[sr][i]<<" ";
		}
		sr++;
        
     
             for(int i=sr;i<=er;i++)
            {
                cout<<a[i][ec]<<" ";
            }
            ec--;
        //Bottom Row
        if(sr<er)
        {
            for(int i=ec;i>=sc;i--)
            {
                cout<<a[er][i]<<" ";
            }
            er--;
        }
        if(sc<ec)
        {
		for(int i=er;i>=sr;i--)
		{
			cout<<a[i][sc]<<" ";
		}
		sc++;
        }
	}
}
int main()
{
	
	int m,n;
	cin>>n>>m;
	int val=1;
	int a[1000][1000]={0};
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<m;j++)
		{
			a[i][j]=val;
			val++;
            cout<<a[i][j]<<" ";
		}
        cout<<endl;
	}
    
	spiralPrint(a,n,m);
}
//We have to apply the if condition because in diff n and m it is printing middle row and middle col twice as once for sr and next time for er so we can check if(sr>er) then only print otherwise leave it


/*
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
*/


//By Aryan Grover (@aryang23)
