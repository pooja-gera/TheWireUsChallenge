## WorkBook Special Page And Special Exercise Problem

Mona just got a new math workbook. A workbook contains exercise problems, grouped into chapters. Mona believes a problem to be special if its index (within a chapter) is the same as the page number where it's located. The format of  Mona’s book is as follows:
* There are n chapters in Mona's workbook, numbered from  1 to n .
* Each i chapter has arr[i] problems, numbered from 1 to arr[i] .
* Each page can hold up to  k problems. Only a chapter's last page of exercises may contain fewer than k problems.
* Each new chapter starts on a new page, so a page will never contain problems from more than one chapter.
* The page number indexing starts at 1.
Given the details for the workbook, can you count its number of special problems?
For example, the workbook contains 4 problems for chapter 1, and 2 problems for chapter 2 . Each page can hold problems 3. The first page will hold 3 problems for chapter 1. Problem 1 is on page 1 , so it is special. Page 2 contains only Chapter 1, Problem 4, so no special problem is on page. Chapter 2 problems start on page 3 and there are 2 problems. Since there is no problem 3 on page 3, there is no special problem on that page either. There is 1 special problem in her workbook.

Input:

5 3
4 2 6 1 10

Output:

4

Explanation:
	![](explaination.png)

