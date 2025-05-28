# SQL Interview Preparation

This document outlines key concepts and common interview questions related to SQL, designed to help you prepare for technical interviews.

## 1. SQL Fundamentals

* **Basic Queries:**
    * SELECT statements.
    * WHERE clauses.
    * ORDER BY, GROUP BY.
    * HAVING clauses.
* **Data Types:**
    * Numeric types.
    * Character types.
    * Date/Time types.
    * Binary types.
* **Operators:**
    * Comparison operators.
    * Logical operators.
    * LIKE, IN, BETWEEN.
    * NULL handling.
* **Functions:**
    * Aggregate functions.
    * String functions.
    * Date functions.
    * Mathematical functions.
* **Interview Questions:**
    * "What's the difference between WHERE and HAVING?"
      - Answer: WHERE filters rows before grouping, HAVING filters after. WHERE works on individual rows, HAVING on grouped results.

    * "Explain different types of JOIN operations."
      - Answer: INNER JOIN matches records, LEFT/RIGHT JOIN includes unmatched from one side, FULL JOIN includes all records.

    * "What are aggregate functions and when to use them?"
      - Answer: Functions like COUNT, SUM, AVG process multiple rows. Used with GROUP BY for summarizing data.

    * "How do you handle NULL values in SQL?"
      - Answer: Use IS NULL/IS NOT NULL for comparison, COALESCE/ISNULL for default values, NULL-safe operators when needed.

    * "Explain the order of execution in SQL queries."
      - Answer: FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY. Understanding order crucial for query optimization.

## 2. Database Design

* **Normalization:**
    * First Normal Form (1NF).
    * Second Normal Form (2NF).
    * Third Normal Form (3NF).
    * BCNF.
* **Keys:**
    * Primary Keys.
    * Foreign Keys.
    * Composite Keys.
    * Unique Keys.
* **Relationships:**
    * One-to-One.
    * One-to-Many.
    * Many-to-Many.
* **Constraints:**
    * NOT NULL.
    * UNIQUE.
    * CHECK.
    * DEFAULT.
* **Interview Questions:**
    * "What is database normalization and why is it important?"
      - Answer: Process of organizing data to minimize redundancy. Reduces data anomalies, ensures data integrity, optimizes database structure.

    * "Explain the different types of keys in SQL."
      - Answer: Primary key uniquely identifies records, foreign key references other tables, composite key combines multiple columns.

    * "What are the different types of relationships?"
      - Answer: One-to-one (1:1), one-to-many (1:N), many-to-many (M:N). Implemented through foreign keys and junction tables.

    * "How do you implement a many-to-many relationship?"
      - Answer: Create junction/bridge table with foreign keys to both tables. Each record represents one relationship instance.

    * "What are database constraints and their importance?"
      - Answer: Rules enforcing data integrity. Ensure data accuracy, consistency, and maintain relationships between tables.

## 3. Advanced Queries

* **Subqueries:**
    * Correlated subqueries.
    * Nested subqueries.
    * EXISTS clause.
* **Common Table Expressions (CTE):**
    * WITH clause.
    * Recursive CTEs.
* **Window Functions:**
    * ROW_NUMBER.
    * RANK, DENSE_RANK.
    * LAG, LEAD.
* **Set Operations:**
    * UNION.
    * INTERSECT.
    * EXCEPT.
* **Interview Questions:**
    * "What are window functions and their uses?"
      - Answer: Perform calculations across row sets. Useful for ranking, running totals, comparing rows to previous/next values.

    * "Explain the difference between UNION and UNION ALL."
      - Answer: UNION removes duplicates, UNION ALL keeps them. UNION ALL performs better as no duplicate checking needed.

    * "How do CTEs work and when to use them?"
      - Answer: Temporary named result sets. Improve readability, enable recursive queries, can reference multiple times in query.

    * "What are correlated subqueries?"
      - Answer: Subqueries referencing outer query columns. Executed for each outer query row, useful for row-by-row processing.

    * "Explain the difference between RANK and DENSE_RANK."
      - Answer: RANK leaves gaps in sequence for ties, DENSE_RANK doesn't. Both assign same rank to tied values.

## 4. Performance and Optimization

* **Indexes:**
    * B-tree indexes.
    * Clustered vs Non-clustered.
    * Covering indexes.
    * Index strategies.
* **Query Optimization:**
    * Execution plans.
    * Statistics.
    * Query tuning.
* **Partitioning:**
    * Range partitioning.
    * List partitioning.
    * Hash partitioning.
* **Caching:**
    * Query cache.
    * Buffer pool.
    * Execution plan cache.
* **Interview Questions:**
    * "How do indexes improve query performance?"
      - Answer: Create sorted data structure for faster searches. Reduce disk I/O, improve WHERE clause and JOIN operations.

    * "What is query optimization and how to achieve it?"
      - Answer: Process of improving query speed/efficiency. Use indexes, optimize JOIN order, minimize subqueries, analyze execution plans.

    * "Explain different types of indexes."
      - Answer: Clustered defines physical order, non-clustered creates separate structure. Covering includes all needed columns.

    * "What is database partitioning and its benefits?"
      - Answer: Dividing tables into smaller parts. Improves query performance, easier maintenance, better data management.

    * "How do you identify and fix slow queries?"
      - Answer: Use execution plans, profiling tools, monitor statistics. Optimize indexes, rewrite queries, update statistics.

## 5. Transactions and Concurrency

* **ACID Properties:**
    * Atomicity.
    * Consistency.
    * Isolation.
    * Durability.
* **Transaction Isolation Levels:**
    * Read Uncommitted.
    * Read Committed.
    * Repeatable Read.
    * Serializable.
* **Locking:**
    * Shared locks.
    * Exclusive locks.
    * Deadlocks.
* **Concurrency Issues:**
    * Dirty reads.
    * Non-repeatable reads.
    * Phantom reads.
* **Interview Questions:**
    * "What are ACID properties in databases?"
      - Answer: Atomicity (all or nothing), Consistency (valid states), Isolation (concurrent transactions), Durability (permanent changes).

    * "Explain different isolation levels."
      - Answer: Control transaction visibility. Higher levels provide more consistency but less concurrency, affect performance.

    * "How do you handle deadlocks?"
      - Answer: Detect through timeout/dependency analysis. Prevent with consistent access order, minimize transaction duration.

    * "What are the different types of locks?"
      - Answer: Shared locks for reading, exclusive for writing. Row-level, page-level, table-level affect concurrency granularity.

    * "Explain optimistic vs pessimistic locking."
      - Answer: Optimistic assumes no conflicts, checks at commit. Pessimistic locks resources immediately, ensures exclusive access.

## 6. Data Warehousing

* **Dimensional Modeling:**
    * Fact tables.
    * Dimension tables.
    * Star schema.
    * Snowflake schema.
* **ETL Process:**
    * Extraction.
    * Transformation.
    * Loading.
* **OLAP Operations:**
    * Roll-up.
    * Drill-down.
    * Slice and dice.
* **Data Marts:**
    * Dependent.
    * Independent.
* **Interview Questions:**
    * "What is dimensional modeling?"
      - Answer: Design technique for data warehouses. Uses fact tables for metrics, dimension tables for descriptive attributes.

    * "Explain the ETL process."
      - Answer: Extract data from sources, Transform to desired format, Load into warehouse. Ensures data quality and consistency.

    * "What's the difference between OLTP and OLAP?"
      - Answer: OLTP for daily transactions, OLAP for analysis. Different optimization goals, data structures, query patterns.

    * "Explain star schema vs snowflake schema."
      - Answer: Star has denormalized dimensions, snowflake normalizes them. Star simpler/faster, snowflake saves space.

    * "What are slowly changing dimensions?"
      - Answer: Track historical changes in dimension attributes. Different types handle changes through various strategies.

## 7. Security and Administration

* **User Management:**
    * Authentication.
    * Authorization.
    * Roles and privileges.
* **Backup and Recovery:**
    * Full backups.
    * Incremental backups.
    * Point-in-time recovery.
* **Auditing:**
    * Audit trails.
    * Logging.
    * Monitoring.
* **Security Best Practices:**
    * Encryption.
    * Access control.
    * SQL injection prevention.
* **Interview Questions:**
    * "How do you prevent SQL injection?"
      - Answer: Use parameterized queries, input validation, stored procedures. Never concatenate user input into SQL strings.

    * "Explain different backup strategies."
      - Answer: Full backup copies everything, differential since last full, incremental since last backup. Balance recovery time/space.

    * "How do you manage database permissions?"
      - Answer: Create roles with specific privileges, assign users to roles. Follow principle of least privilege.

    * "What is database auditing and why is it important?"
      - Answer: Tracks database access and changes. Essential for security, compliance, troubleshooting, user accountability.

    * "How do you ensure database security?"
      - Answer: Implement authentication, encryption, access controls. Regular security audits, updates, monitoring for suspicious activity.