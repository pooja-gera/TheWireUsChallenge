PROBLEM STATEMENT
The ATM Machine.

EXPLANATION
Nikhil would like to withdraw X $US from an ATM. The cash machine will only accept the transaction if X is a multiple of 5, and Nikhil's account balance has enough cash to perform the withdrawal transaction (including bank charges). For each successful withdrawal the bank charges 0.50 $US. Calculate Nikhil's account balance after an attempted transaction.


INPUT REQUIREMENTS
Positive integer 0 < X <= 2000 - the amount of cash which Nikhil wishes to withdraw.
Nonnegative number 0<= Y <= 2000 with two digits of precision - Nikhil's initial account balance.

OUTPUT FORMAT
Output the account balance after the attempted transaction, given as a number with two digits of precision. If there is not enough money in the account to complete the transaction, output the current bank balance.
EXAMPLE 
Input:
30 120.00
Output:
89.50

Input:
42 120.00
Output:
120.00

Input:
300 120.00
Output:
120.00

