import java.util.*;
public class Main {
    public static void main(String args[]) {
	Scanner s=new Scanner(System.in);
	String a=s.next();
	System.out.print(a.charAt(0));
	for(int i=1;i<a.length();i++)
	{
		if(a.charAt(i)<='Z'&& a.charAt(i)>='A')
		{System.out.print("\n"+ a.charAt(i));}

		else
		{System.out.print(a.charAt(i));}
	}
}	
}