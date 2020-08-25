#include <iostream>
using namespace std;

int main() {
	int t;
	cin>>t;
	while(t--)
	{  string s , b ;
	   cin>>s;
	   long long int a[26] , j = 0 ;
	   for( long long int i = 0 ; i < 26 ; i++ )
	       a[i] = 0 ;
	   for( long long int i = 0 ; i < s.length() ; i++ )
	      switch(s[i])
	      {  case 'a' : if(!a[0])
	                    {  a[0]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	         case 'b' : if(!a[1])
	                    {  a[1]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	         case 'c' : if(!a[2])
	                    {  a[2]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	        case 'd' : if(!a[3])
	                    {  a[3]++;
	                       b[j++] = s[i];
	                    } 
	                    break;  
	       case 'e' : if(!a[4])
	                    {  a[4]++;
	                       b[j++] = s[i];
	                    } 
	                    break;             
	        case 'f' : if(!a[5])
	                    {  a[5]++;
	                       b[j++] = s[i];
	                    } 
	                    break;                 
	       case 'g' : if(!a[6])
	                    {  a[6]++;
	                       b[j++] = s[i];
	                    } 
	                    break;             
	       case 'h' : if(!a[7])
	                    {  a[7]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	      case 'i' : if(!a[8])
	                    {  a[8]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	      case 'j' : if(!a[9])
	                    {  a[9]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	       case 'k' : if(!a[10])
	                    {  a[10]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	       case 'l' : if(!a[11])
	                    {  a[11]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	      case 'm' : if(!a[12])
	                    {  a[12]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	      case 'n' : if(!a[13])
	                    {  a[13]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	      case 'o' : if(!a[14])
	                    {  a[14]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	      case 'p' : if(!a[15])
	                    {  a[15]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	      case 'q' : if(!a[16])
	                    {  a[16]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	      case 'r' : if(!a[17])
	                    {  a[17]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	      case 's' : if(!a[18])
	                    {  a[18]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	     case 't' : if(!a[19])
	                    {  a[19]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	      case 'u' : if(!a[20])
	                    {  a[20]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	     case 'v' : if(!a[21])
	                    {  a[21]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	     case 'w' : if(!a[22])
	                    {  a[22]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	     case 'x' : if(!a[23])
	                    {  a[23]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	     case 'y' : if(!a[24])
	                    {  a[24]++;
	                       b[j++] = s[i];
	                    } 
	                    break;
	    case 'z' : if(!a[25])
	                    {  a[25]++;
	                       b[j++] = s[i];
	                    } 
	                    break;             
	      }                    
	  for( long long int i = 0 ; i < j ; i++ )
	      cout<<b[i];
	  cout<<endl;    
	}
	return 0;
}
