import static java.lang.StrictMath.pow; 
import java.util.Scanner; 
  
class bin_gray 
{ 
    // Function to change Binary to 
    // Gray using recursion 
    int binary_to_gray(int n, int i) 
    {  
        int a, b; 
        int result = 0; 
        if (n != 0)  
        { 
            // Taking last digit 
            a = n % 10;  
              
            n = n / 10; 
              
            // Taking second last digit 
            b = n % 10;  
          
            if ((a & ~ b) == 1 || (~ a & b) == 1)  
            { 
                result = (int) (result + pow(10,i)); 
            } 
              
            return binary_to_gray(n, ++i) + result; 
        } 
        return 0; 
    } 
  
    // Driver Function 
    public static void main(String[] args) 
    { 
        int binary_number; 
        int result = 0; 
        binary_number = 1011101; 
          
        bin_gray obj = new bin_gray(); 
        result = obj.binary_to_gray(binary_number,0); 
          
        System.out.print(result); 
    }  
} 