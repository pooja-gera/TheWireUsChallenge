import java.util.*;
public class Main {
    public static void main(String args[]) {
    Scanner s=new Scanner(System.in);
	String a=s.next();
	int n=StringtoInt(a,0,0);
	System.out.print(n);
    }
public static int StringtoInt(String a,int i,int n)
{
 if(a.length()==i)
 return n;
 //char k=a.charAt(i);
 int l=(int)a.charAt(i)-48;
 n=n*10+l;
 n=StringtoInt(a,i+1,n);
 return n;	
}	
}