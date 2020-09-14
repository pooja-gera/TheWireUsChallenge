//https://leetcode.com/problems/factorial-trailing-zeroes/

//Trailing Zeroes
//By Aryan Grover(@aryang23)

#include <iostream>
using namespace std;
int main() {
    int n,ans=0;
    cin>>n;
    while(n>0)
    {
        n=n/5;
        ans+=n;
    }
    cout<<ans;
}
