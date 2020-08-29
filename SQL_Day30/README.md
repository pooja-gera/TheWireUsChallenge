## SQL Challenge - Book Issue
## DAY THIRTY
## Challenge Master - Aishwarya

Write an SQL Query to display the Book_ID, Book_name and Quantity_issued for all books which have been issued. 

HINT: (The query will require contents from both the tables)

#### Table: BOOKS
![Test Image1](book.png)

#### Table: ISSUED
![Test Image2](iss.png)


Give the ouput of the following queries based on the above tables:

- SELECT COUNT(*) FROM BOOKS;

- SELECT MAX(PRICE) FROM BOOKS WHERE QUANTITY >= 15;

- SELECT BOOK_NAME, AUTHOR_NAME FROM BOOKS WHERE PUBLISHERS = "EPBZ";

- SELECT COUNT (DISTINCT PUBLISHERS) FROM BOOKS WHERE PRICE >= 400;
