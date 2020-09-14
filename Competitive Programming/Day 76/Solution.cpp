#include<bits/stdc++.h>
using namespace std;
#define fast ios_base::sync_with_stdio(0);cin.tie(NULL);

long long numzero(long long num)
{
    long long count = 0;
    while(num>=5)
    {
        count += num/5;
        num /=5;
    }
    return count;
}

int main()
{
    fast
    int n;
    cin>>n;
    long long start=1, end =LLONG_MAX, ans = -1;
    while(start<= end)
    {
        long long mid = (start + end) / 2;
        long long zeros = numzero(mid);
        if(zeros == n)
        {
            ans = mid;
            end = mid - 1;
            continue;
        }
        if(zeros<n)
            start = mid+1;
        else
            end = mid - 1;
    }
    if(ans == -1)
        cout<<"No solution";
    else
        cout<<ans;
}