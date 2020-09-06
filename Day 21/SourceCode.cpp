int romanToInt(string s) {
      int n = 0 ;
       for( int i = 0 ; i < s.length(); i++ )
            switch( s[i])
            {  case 'M' : if( s[i-1] == 'C' && i > 0 )
                             n += 900 ;
                          else
                          n += 1000 ;
                          break;
               case 'D' : if( s[i-1] == 'C' && i > 0 )
                             n += 400 ;
                          else
                             n += 500 ;
                          break;
               case 'C' : if( s[i+1] == 'D' || s[i+1] == 'M' && i+1 < s.length())
                           break;
                          else if( s[i-1] == 'X' && i > 0 )
                             n += 90 ;
                          else
                             n += 100;
                          break;
               case 'L' : if( s[i-1] == 'X' && i > 0 )
                              n += 40 ;
                           else
                           n += 50 ;
                          break;
               case 'X' :  if( s[i+1] == 'C' || s[i+1] == 'L' && i+1 < s.length())
                           break;
                          else if( s[i-1] == 'I' && i > 0 )
                             n += 9 ;
                          else
                             n += 10;
                          break;
              case 'V' :  if( s[i-1] == 'I' && i > 0 )
                              n += 4 ;
                           else
                           n += 5 ;
                          break;
             case 'I' :  if( s[i+1] == 'X' || s[i+1] == 'V' && i+1 < s.length())
                           break;
                         else
                             n += 1;
                          break;
            }  
        return n;
    }
