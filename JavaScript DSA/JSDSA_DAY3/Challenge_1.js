var no=prompt("Please provide a number for the no of rows to be print in a pattern...");
var m, n;
for(m=no;m>=1;m--)
{
for(n=1;n<=m;n++)
{
document.write('*');
}
document.write('<br/>');
}
