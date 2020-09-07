
import java.util.*; 
import java.lang.*; 
  
public class ConstructTriangle 
{ 
    // Function to generate Special Triangle. 
    public static void printTriangle(int[] A) 
    { 
        // Base case 
        if (A.length < 1) 
            return; 
  
        // Creating new array which contains the 
        // Sum of consecutive elements in 
        // the array passes as parameter. 
        int[] temp = new int[A.length - 1]; 
        for (int i = 0; i < A.length - 1; i++) 
        { 
            int x = A[i] + A[i + 1]; 
            temp[i] = x; 
        } 
  
        // Make a recursive call and pass 
        // the newly created array 
        printTriangle(temp); 
  
        // Print current array in the end so 
        // that smaller arrays are printed first 
        System.out.println(Arrays.toString(A)); 
    } 
  
    // Driver function 
    public static void main(String[] args) 
    { 
        int[] A = { 1, 2, 3, 4, 5 }; 
        printTriangle(A); 
    } 
} 
