//Unique Character Strings
//By Aryan Grover(@aryang23)
#include <iostream>
#include<vector>
#include<climits>
using namespace std;
int Fun(vector<string> v,int i,string s)
{
    //Base Case
    if(i==v.size())
    {
        if(s.length()>26)
        return 0;
        int freq[26]={0};
        for(int k=0;k<s.length();k++)
        {
            if(freq[s[k]-'a']==1)
            {
                return 0;
            }
            freq[s[k]-'a']++;
        }
        return s.length();
    }
    //We can include the ith string
    int op1=INT_MIN,op2=INT_MIN;
    if(s.length()+v[i].length()<=26)
    {
        op1=Fun(v,i+1,s+v[i]);
    }
    //We can exclude it
    op2=Fun(v,i+1,s);
    return max(op1,op2);  
}
int uniqueString(vector<string> v)
{
    string s="";
    return Fun(v,0,s);
}
using namespace std;
int main() {
    // cout<<"Hello World!";
    vector<string> v;
    int n;
    cin>>n;
    for(int i=0;i<n;i++)
    {
        string s;
        cin>>s;
        v.push_back(s);
    }
    cout<<uniqueString(v)<<endl;
}
