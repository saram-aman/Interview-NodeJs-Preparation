# SQL Interview Preparation

This document outlines key concepts and common interview questions related to SQL, designed to help you prepare for technical interviews.

## 1. Basic SQL Queries

* **SELECT Statement:**
    * Retrieving data from tables.
    * Selecting specific columns.
    * Using `WHERE` clauses for filtering.
    * Using `ORDER BY` for sorting.
    * Using `LIMIT` or `TOP` for limiting results.
    * Using `DISTINCT` to remove duplicates.
* **FROM Clause:**
    * Specifying the table(s) to retrieve data from.
* **WHERE Clause:**
    * Filtering rows based on conditions.
    * Using comparison operators (`=`, `!=`, `>`, `<`, `>=`, `<=`).
    * Using logical operators (`AND`, `OR`, `NOT`).
    * Using `IN`, `BETWEEN`, `LIKE`, `IS NULL`, `IS NOT NULL`.
* **ORDER BY Clause:**
    * Sorting results in ascending or descending order.
* **GROUP BY and HAVING Clauses:**
    * Grouping rows based on column values.
    * Filtering grouped rows using `HAVING`.
* **Aggregate Functions:**
    * `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`.
* **Interview Questions:**
    * "Write a SQL query to select all columns from a table named 'employees'."
    * "Write a SQL query to select employees whose salary is greater than 50000."
    * "Write a SQL query to sort employees by their last name in ascending order."
    * "Write a SQL query to find the average salary of employees."
    * "Write a SQL query to find the number of employees in each department."
    * "Write a SQL query to find the departments with more than 10 employees."

## 2. Joins

* **INNER JOIN:**
    * Retrieving rows with matching values in both tables.
* **LEFT JOIN (LEFT OUTER JOIN):**
    * Retrieving all rows from the left table and matching rows from the right table.
* **RIGHT JOIN (RIGHT OUTER JOIN):**
    * Retrieving all rows from the right table and matching rows from the left table.
* **FULL JOIN (FULL OUTER JOIN):**
    * Retrieving all rows when there is a match in either the left or right table.
* **CROSS JOIN:**
    * Retrieving the Cartesian product of rows from both tables.
* **Self Join:**
    * Joining a table to itself.
* **Interview Questions:**
    * "Explain the difference between INNER JOIN and LEFT JOIN."
    * "Write a SQL query to join two tables and retrieve data from both."
    * "When would you use a RIGHT JOIN?"
    * "What is a CROSS JOIN, and when is it used?"
    * "How do you perform a self-join?"

## 3. Subqueries

* **Subqueries in WHERE Clause:**
    * Using a subquery to filter rows.
* **Subqueries in SELECT Clause:**
    * Using a subquery to retrieve a single value.
* **Correlated Subqueries:**
    * Subqueries that depend on the outer query.
* **Interview Questions:**
    * "Write a SQL query using a subquery to find employees who have the same salary as the highest-paid employee in their department."
    * "Explain the difference between a correlated and non-correlated subquery."
    * "When would you use a subquery in the SELECT clause?"

## 4. Database Design and Normalization

* **Normalization:**
    * 1NF, 2NF, 3NF, BCNF.
    * Reducing data redundancy and improving data integrity.
* **Primary Keys, Foreign Keys, and Unique Keys:**
    * Understanding their roles and constraints.
* **Indexes:**
    * Improving query performance.
    * Types of indexes.
* **Data Types:**
    * Understanding common data types (e.g., INT, VARCHAR, DATE, DECIMAL).
* **Interview Questions:**
    * "What is database normalization, and why is it important?"
    * "Explain the different normal forms (1NF, 2NF, 3NF)."
    * "What are primary keys, foreign keys, and unique keys?"
    * "How do indexes improve query performance?"
    * "When would you use a composite primary key?"

## 5. Transactions and ACID Properties

* **Transactions:**
    * Grouping multiple SQL statements into a single unit of work.
* **ACID Properties:**
    * Atomicity, Consistency, Isolation, Durability.
* **COMMIT and ROLLBACK:**
    * Committing or rolling back transactions.
* **Isolation Levels:**
    * Understanding different isolation levels.
* **Interview Questions:**
    * "What are transactions, and why are they used?"
    * "Explain the ACID properties."
    * "What is the difference between COMMIT and ROLLBACK?"
    * "What are isolation levels, and why are they important?"

## 6. Window Functions

* **RANK(), DENSE_RANK(), ROW_NUMBER():**
    * Assigning ranks to rows.
* **LEAD(), LAG():**
    * Accessing rows before or after the current row.
* **PARTITION BY Clause:**
    * Dividing the result set into partitions.
* **Interview Questions:**
    * "Explain the difference between RANK(), DENSE_RANK(), and ROW_NUMBER()."
    * "When would you use LEAD() or LAG()?"
    * "How do you use PARTITION BY with window functions?"

## 7. Common Table Expressions (CTEs)

* **WITH Clause:**
    * Defining temporary result sets.
    * Improving query readability.
* **Recursive CTEs:**
    * Handling hierarchical data.
* **Interview Questions:**
    * "What are CTEs, and why are they used?"
    * "How do you define a CTE?"
    * "When would you use a recursive CTE?"

## 8. Performance Optimization

* **Query Optimization:**
    * Analyzing query execution plans.
    * Rewriting queries for better performance.
* **Indexing Strategies:**
    * Choosing appropriate indexes.
* **Database Tuning:**
    * Configuring database parameters.
* **Interview Questions:**
    * "How do you analyze query performance?"
    * "What are some common indexing strategies?"
    * "How do you optimize slow-running queries?"

## 9. Stored Procedures and Functions

* **Stored Procedures:**
    * Precompiled SQL code.
* **User-Defined Functions (UDFs):**
    * Custom functions.
* **Triggers:**
    * Automated actions in response to database events.
* **Interview Questions:**
    * "What are stored procedures, and why are they used?"
    * "How do you create a user-defined function?"
    * "What are triggers, and when are they used?"

## 10. Data Manipulation Language (DML) and Data Definition Language (DDL)

* **DML:**
    * `INSERT`, `UPDATE`, `DELETE`.
* **DDL:**
    * `CREATE`, `ALTER`, `DROP`, `TRUNCATE`.
* **Interview Questions:**
    * "What is the difference between DML and DDL?"
    * "Write a SQL query to insert a new row into a table."
    * "Write a SQL query to update an existing row."
    * "Write a SQL query to delete a row."
    * "Write a SQL query to create a new table."
    * "Write a SQL query to alter a table."