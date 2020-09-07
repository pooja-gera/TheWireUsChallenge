#include <bits/stdc++.h>
using namespace std;

unordered_map<char,string> um;
void helper(string digits,int index,string temp, vector<string> &ans){
	if(index >= digits.size()){
		ans.push_back(temp);
	}
	char c = digits[index];
	for(char &ch: um[c]){
		temp.push_back(ch);
		helper(digits,index+1,temp,ans);
		temp.pop_back();
	}
}
vector<string> letterCombinations(string digits) {
	um['2'] = "abc";
	um['3'] = "def";
	um['4'] = "ghi";
	um['5'] = "jkl";
	um['6'] = "mno";
	um['7'] = "pqrs";
	um['8'] = "tuv";
	um['9'] = "wxyz";
	vector<string> ans;
	if(digits.size() == 0) return ans;
	string temp = "";
	helper(digits,0,temp,ans);
	return ans;
}

int main(){
	string s;
	cin>>s;
	vector<string> sol = letterCombinations(s);
	for(auto &s: sol) cout<<s<<endl;
}