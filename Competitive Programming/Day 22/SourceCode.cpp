int lengthOfLastWord(string s) {
        int length = 0 ;
        for( int i = 0 ; i < s.length() ; i++ ){
            if( s[i] != ' ')
               length++;
            if( s[i] == ' ' && i+1 == s.length( ) )  
                return (length ) ;
           else if( s[i] == ' ' && s[i+1] != ' ' )
                 length = 0 ;
        }
        return length;
    }

