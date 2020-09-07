int strStr(string A, string B) {
        int a = A.length() , b = B.length();
        if( b == 0)
           return 0 ;
        if( a == 0)
           return -1 ;
        if( a < b )
             return -1 ;
       int flag , p ;
        for( int i = 0 ; i <= a-b ; i++ )
       {  p = i ;
          for( int j = 0 ; j < b ; j++  )
             {   flag = 0;
                 if( A[p] != B[j] )
                  {   break; }
                 flag = 1 ;
                 p++;
             }
          if( flag == 1 )
              return i ;
       } 
       return -1 ; 
    }
