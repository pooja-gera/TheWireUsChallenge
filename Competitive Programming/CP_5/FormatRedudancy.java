import java.util.*;
public class Main {
    public static void main(String args[]) {
    Scanner s=new Scanner(System.in);
	String a=s.next();
	String r=addStar(a,0,"");
	System.out.print(r);

    }
public static String addStar(String a,int i,String r)
{
 if(i==a.length())	
 return r;
 if(i==0)
 r=r+a.charAt(0);
 else
 if(a.charAt(i)==a.charAt(i-1))
 {
	 r=r+"*";
	 r=r+a.charAt(i);
 }
 else
 r=r+a.charAt(i);
 r=addStar(a,i+1,r);
 return r;
}	
}