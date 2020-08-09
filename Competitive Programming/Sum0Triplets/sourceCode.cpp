//Easiest Approach - Run three nested loops 
//Time Complexity = O(n^3) and Space Complexity = O(1)

#include<iostream>
using namespace std;

bool triplets(int n, int a[]){
    for(int i=0;i<n-2;i++){
        for(int j=i+1;j<n-1;j++){
            for(int k=j+1;k<n;k++){
                if(a[i]+a[j]+a[k]==0){
                    cout<<"("<<a[i]<<","<<a[j]<<","<<a[k]<<")\n";
                    return true;
                }
            }
        }
    }
    return false;
}

int main()
{
    int a[] = {3,-3,7,-8,0,1};
    int n = sizeof(a)/sizeof(a[0]);
    bool x = triplets(n,a);
    if(x){
        return 0;
    }
    else{
        cout<<"The triplets do not exist";
        return 0;
    }
    
}