#include <bits/stdc++.h>
using namespace std;
int main() {
    int a[4][4]={{11,12,13,14},
                 {21,22,23,24},
                 {31,32,33,34},
                 {41,42,43,44}};
    int i,j;
    for(i=0;i<4;i++)
    if(i%2==0)
    {
     {for(j=0;j<4;j++)
     cout<<a[j][i]<<",";}
     }
    else
    {
     {for(j=3;j>=0;j--)
    cout<<a[j][i]<<",";}
    }
    cout<<"END";
}


