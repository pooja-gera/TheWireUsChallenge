#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> dp;
int maxPath;
int longestIncreasingPath(vector<vector<int>>& matrix) {
        if(matrix.empty()) return 0;
        int m = matrix.size(), n = matrix[0].size();
        maxPath = 0;
        
        dp.assign(matrix.size(), vector<int>(matrix[0].size(), 1));
        
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                dfs(i, j, m, n, matrix);
            }
        }
        return maxPath;
}
    
int dir[4][2] = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};
    
int dfs(int i, int j, int r, int c, vector<vector<int>>& matrix){
        
        if(dp[i][j]!=1) {
            return dp[i][j];
        }
        
        int ans = 1;
        
        for(int k=0; k<4; k++){
            int nr = i + dir[k][0];
            int nc = j + dir[k][1];
            
            if(nr>=0 && nc>=0 && nr<r && nc<c && matrix[nr][nc] < matrix[i][j]){
                ans = max(ans, 1 + dfs(nr, nc, r, c, matrix));
            }    
        }
        maxPath = max(maxPath, ans);
        return dp[i][j] = ans;
}

int main(){
	vector<vector<int> > v = { 
        { 1, 2, 3, 4 }, 
        { 2, 2, 3, 4 }, 
        { 3, 2, 3, 4 }, 
        { 4, 5, 6, 7 }, 
    	}; 
	cout<<longestIncreasingPath(v)<<endl;
}