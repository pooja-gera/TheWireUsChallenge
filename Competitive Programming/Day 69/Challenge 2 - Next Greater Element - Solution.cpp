#include <bits/stdc++.h>
#define int long long
using namespace std;

vector<int> replaceElements(vector<int> &arr){
    int n = arr.size();
    if(arr.size() == 0) return {}; /// If arr is empty, no solution possible

    vector<int> res(n); ///Result array which store indexes of next higher elements and initializing with -1
    stack<int> s; /// Using a stack to process the latest appropriate value

    for(int i=n-1; i>=0; i--){
        while (!s.empty() && s.top() <= arr[i]) /// Popping till we get greater element of top or stack gets empty.
            s.pop();

        if(s.empty()) res[i] = -1; /// If stack gets empty, there's no number greater than it on right side
        else res[i] = s.top(); /// Topmost element is greater than current number

        s.push(arr[i]);
    }

    return res;
}

signed main()
{
    vector<int> arr{4, 5, 2, 25};
    cout<<"Next greater elements : "<<endl;
    vector<int> res = replaceElements(arr);

    for(int &c: res){
        cout<<c<<' ';
    }

    return 0;
}
