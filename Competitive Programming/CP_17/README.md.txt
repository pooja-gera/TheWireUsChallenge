Hey Coders!!

We are back with another challenge.

You have to generate a power set in lexographical order .

The idea is to sort array first. After sorting, one by one fix characters and recursively generates all subsets starting from them. After every recursive call, we remove last character so that next permutation can be generated.


Example:

Input : abc
Output : a ab abc ac b bc c

Happy Coding!!