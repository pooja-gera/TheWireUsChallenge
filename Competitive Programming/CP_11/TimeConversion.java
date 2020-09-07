import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    /*
     * Complete the timeConversion function below.
     */
    static String timeConversion(String s) {
        /*
         * Write your code here.
         */
    char a=s.charAt(8);
    char b=s.charAt(0);
    char c=s.charAt(1);
    if(a=='A')
    {
        if(b=='1'&&c=='2')
        s="00:00:00";
        else
        {
           s=s.substring(0,8); 
        }
    }
    if(a=='P')
    {
      int n=(int)b - 48;
      int m=(int)c - 48;
      if(m>=8)
      {
          s='2'+(char)(m+48)+s.substring(2,8);
      }
      else
      s='1'+(char)(m)+s.substring(2,8);
      
      
    }
    return s;
    }

    private static final Scanner scan = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bw = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = scan.nextLine();

        String result = timeConversion(s);

        bw.write(result);
        bw.newLine();

        bw.close();
    }
}
