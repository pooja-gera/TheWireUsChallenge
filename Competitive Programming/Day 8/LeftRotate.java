import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {



    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        String[] nd = scanner.nextLine().split(" ");

        int n = Integer.parseInt(nd[0]);

        int d = Integer.parseInt(nd[1]);

        int[] a = new int[n];

        String[] aItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            int aItem = Integer.parseInt(aItems[i]);
            a[i] = aItem;
        }
        Rotate(a,d);
        for(int i=0;i<a.length;i++)
        System.out.print(a[i]+" ");
        scanner.close();
    }

    public static int[] Rotate(int []a,int k)
    {
        int temp=0;
        while(k>0)
        {
            for(int i=0;i<a.length-1;i++)
            {
                temp=a[i];
                a[i]=a[i+1];
                a[i+1]=temp;

            }
            k--;
        }
         return a;
    }
}
