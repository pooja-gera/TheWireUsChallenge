import java.util.*;
public class Main {
    public static void main(String args[]) {
    Scanner s=new Scanner(System.in);
	
	  String a=s.next();	
	  RemovePi(a,0);
	  System.out.println();	
	
    }

	public static void RemovePi(String a,int i)
	{
		if(i==a.length())
		return;

		if(a.charAt(i)=='p' && a.length()-1>i)
		{ if(a.charAt(i+1)=='i')
		  {System.out.print("3.14");
           RemovePi(a,i+2);}

		   else
		   {System.out.print("p");
		    RemovePi(a,i+1);}
		  

		}
		else
		{
			System.out.print(a.charAt(i));
			RemovePi(a,i+1);
		}
	}
}