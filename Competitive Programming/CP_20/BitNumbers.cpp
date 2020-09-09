
#include <bits/stdc++.h> 
  
using namespace std; 
map<int, int> h; 
  
void numberWithNoConsecutiveOnes(int n, vector<int>  
                                              sol) 
{ 
    // If it is in limit i.e. of n lengths in  
    // binary 
    if (sol.size() <= n) { 
        int ans = 0; 
        for (int i = 0; i < sol.size(); i++) 
            ans += pow((double)2, i) *  
                   sol[sol.size() - 1 - i]; 
        h[ans] = 1; 
  
        // Last element in binary 
        int last_element = sol[sol.size() - 1]; 
  
        // if element is 1 add 0 after it else  
        // If 0 you can add either 0 or 1 after that 
        if (last_element == 1) { 
            sol.push_back(0); 
            numberWithNoConsecutiveOnes(n, sol); 
        } else { 
            sol.push_back(1); 
            numberWithNoConsecutiveOnes(n, sol); 
            sol.pop_back(); 
            sol.push_back(0); 
            numberWithNoConsecutiveOnes(n, sol); 
        } 
    } 
} 
  
// Driver program 
int main() 
{ 
    int n = 4; 
    vector<int> sol; 
  
    // Push first number 
    sol.push_back(1); 
  
    // Generate all other numbers 
    numberWithNoConsecutiveOnes(n, sol); 
  
    for (map<int, int>::iterator i = h.begin(); 
                            i != h.end(); i++) 
        cout << i->first << " "; 
    return 0; 
} 