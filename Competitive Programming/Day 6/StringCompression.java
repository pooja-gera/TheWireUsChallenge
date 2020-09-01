import java.util.*;
public class Main {
    public static void main(String args[]) {
    Scanner s=new Scanner(System.in);
	String a=s.next();
	int i,c=1;
	for( i=1;i<a.length();i++)
	{
      if(a.charAt(i)==a.charAt(i-1))
	  c++;
	  else
	  {
	   System.out.print(a.charAt(i-1));
	   if(c!=1)
	   System.out.print(c);
	   c=1;}
	}
    System.out.print(a.charAt(i-1));
    if(c!=1)
	System.out.print(c);
    }
}