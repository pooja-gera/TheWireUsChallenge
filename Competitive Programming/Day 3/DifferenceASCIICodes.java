import java.util.*;
public class Main {
    public static void main(String args[]) {
        // Your Code Here
		Scanner s=new Scanner (System.in);
		String a=s.next();
		int c,n,d,i;
		StringBuilder b=new StringBuilder();
		for(i=0;i<a.length()-1;i++)
		{
		  c=(int)a.charAt(i);	
		  n=(int)a.charAt(i+1);
		  b.append(a.charAt(i));
		  d=n-c;
		  b.append(d);
		  
		}
		b.append(a.charAt(i));
		System.out.print(b);
    }
}