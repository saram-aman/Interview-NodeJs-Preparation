# PostgreSQL Interview Preparation

This document covers essential PostgreSQL concepts and common interview questions to help you prepare for technical interviews.

## 1. PostgreSQL Fundamentals

**Understanding PostgreSQL:**

* PostgreSQL is a powerful, open-source object-relational database system
* Known for its reliability, feature robustness, and performance
* ACID-compliant and highly extensible

**Key Concepts:**

  - Durability: Committed transactions survive permanently

* **Transaction Isolation Levels:**
  PostgreSQL implements four isolation levels (though `Read Uncommitted` behaves as `Read Committed`):
  1. **Read Committed** (Default): A query sees only data committed before the **query** began. Prevents Dirty Reads.
  2. **Repeatable Read**: All queries in a transaction see the data as it was when the **transaction** started. Prevents Non-repeatable Reads.
  3. **Serializable**: The strictest level. Guarantees that the result is the same as if transactions were run one after another. Prevents **Serialization Anomalies** (including Phantom Reads).

* **Data Types:**
  - Numeric: INTEGER, BIGINT, DECIMAL, SERIAL, etc.
  - Character: CHAR, VARCHAR, TEXT
  - Binary: BYTEA
  - Date/Time: DATE, TIME, TIMESTAMP, INTERVAL
  - Boolean: BOOLEAN
  - Enumerated: ENUM
  - JSON/JSONB: For JSON data
  - Geometric: POINT, LINE, CIRCLE, etc.
  - Network Address: INET, CIDR, MACADDR
  - UUID: Universally Unique Identifiers
  - Arrays: Variable-length arrays of any data type
  - Composite: User-defined types
  - Range: Range of values
  - Domain: User-defined type with constraints

* **Schema:**
  - Namespace that contains named database objects
  - Helps organize database objects
  - Can have different access privileges

## 2. Database Design

**Normalization:**

* **1NF:** Atomic values, no repeating groups
* **2NF:** No partial dependencies on composite primary key
* **3NF:** No transitive dependencies
* **BCNF:** Every determinant is a candidate key
* **4NF:** No multi-valued dependencies
* **5NF:** No join dependencies

**Indexing:**

* **B-tree:** Default index type, good for equality and range queries.
* **Hash:** Only for equality comparisons.
* **GIN (Generalized Inverted Index):** For composite values (arrays, JSONB, full-text search). 
    - *Use Case*: Speeding up `@>` (contains) operators on JSONB columns.
* **GiST (Generalized Search Tree):** For geometric data and full-text search.
* **SP-GiST (Space-Partitioned GiST):** For non-balanced data structures.
* **BRIN (Block Range INdex):** For very large tables with natural ordering (e.g., timestamped logs). It stores the min/max value for a range of blocks, making it incredibly small compared to B-tree.

**Partitioning:**

* **Range Partitioning:** Based on ranges of values
* **List Partitioning:** Based on list of values
* **Hash Partitioning:** Based on hash value of partition key
* **Composite Partitioning:** Combining multiple partitioning methods

## 3. Query Optimization

**EXPLAIN and EXPLAIN ANALYZE:**

* **EXPLAIN:** Shows the execution plan
* **EXPLAIN ANALYZE:** Executes the query and shows actual performance
* **Key metrics:**
  - Cost: Estimated cost to run the query
  - Rows: Estimated number of rows
  - Width: Estimated average row width in bytes
  - Actual time: Time to get first/last row
  - Loops: Number of iterations

**Common Optimization Techniques:**

* **Indexing Strategies:**
  - Create indexes on frequently filtered columns
  - Use partial indexes for filtered data
  - Consider multi-column indexes for common query patterns
  - Use covering indexes to avoid table access

* **Query Restructuring:**
  - Use JOINs instead of subqueries when possible
  - Avoid SELECT *
  - Use LIMIT to limit result sets
  - Use appropriate data types

* **Configuration Tuning:**
  - shared_buffers: Memory for caching data
  - work_mem: Memory for sort operations
  - maintenance_work_mem: Memory for maintenance operations
  - effective_cache_size: Estimate of available disk cache

## 4. Advanced Features

**Common Table Expressions (CTEs):**

* WITH clause for temporary result sets
* Can be recursive for hierarchical data
* Improves query readability

**Window Functions:**

* Perform calculations across a set of table rows
* Examples: ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD()
* OVER() clause defines the window frame

**JSON/JSONB Support:**

* JSON: Textual JSON data
* JSONB: Binary JSON data (faster processing)
* Operators: ->, ->>, #>, #>>
* Functions: jsonb_set(), jsonb_insert(), jsonb_path_query()

**Full-Text Search:**

* tsvector: Document type for full-text search
* tsquery: Query type for full-text search
* Operators: @@ (match), @@> (contains), <@ (contained by)
* Functions: to_tsvector(), to_tsquery(), plainto_tsquery()

## 5. Performance and Maintenance

* Autovacuum daemon automates this process

**Database Bloat:**
Bloat occurs when tables or indexes occupy more space than they realistically need. This happens because `VACUUM` marks space as reusable but doesn't usually return it to the OS.
- **Identification**: Use extensions like `pgstattuple` or scripts to find tables with high "dead tuple" ratios.
- **Fix**: `VACUUM FULL` or `REINDEX` (both lock tables) or `pg_repack` (online tool).

**ANALYZE:**
Updates the **statistics** used by the query planner. Without up-to-date stats, the planner might choose a slow Sequential Scan when an Index Scan would be faster.

**Replication:**

* **Streaming Replication:** Asynchronous or synchronous
* **Logical Replication:** Row-level changes
* **Synchronous Commit:** For high availability
* **Cascading Replication:** Replicas can have their own replicas

**Backup and Recovery:**

* **SQL Dump:** pg_dump, pg_dumpall
* **File System Level Backup:** pg_basebackup
* **Point-in-Time Recovery (PITR):** WAL archiving
* **Continuous Archiving:** For high availability

## 6. Security

**Authentication Methods:**

* trust: No password required
* password: Plain text password
* md5: MD5-hashed password
* scram-sha-256: Secure password authentication
* ident: OS user authentication
* peer: OS user authentication (local connections)
* cert: SSL client certificate
* pam: Pluggable Authentication Modules
* ldap: LDAP authentication
* radius: RADIUS authentication

**Row-Level Security (RLS):**

* Restricts access to rows based on policies
* Can be enabled per table
* Policies define access rules

**Encryption:**

* SSL/TLS for network encryption
* pgcrypto extension for data encryption
* Transparent Data Encryption (TDE) with extensions

## 7. Common Interview Questions

### Basic Level:

1. **What is PostgreSQL and what are its key features?**
   - Open-source, ACID-compliant, extensible, supports JSON, full-text search, and advanced data types. In interviews it helps to highlight MVCC-based concurrency, powerful indexing options, and rich extensibility (custom types, functions, and extensions like PostGIS).

2. **Explain the difference between CHAR, VARCHAR, and TEXT data types.**
   - CHAR: Fixed-length, blank-padded
   - VARCHAR: Variable-length with limit
   - TEXT: Variable unlimited length

3. **What is a sequence in PostgreSQL?**
   - Object that generates a sequence of integers, often used for primary keys. From PostgreSQL 10 onward you’ll usually see `GENERATED AS IDENTITY` used instead of manually creating sequences.

### Intermediate Level:

1. **Explain the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.**
   - INNER: Only matching rows
   - LEFT: All from left, matching from right
   - RIGHT: All from right, matching from left
   - FULL: All rows from both tables

2. **What is a Common Table Expression (CTE) and when would you use it?**
   - Temporary result set for complex queries, improves readability, can be recursive.

3. **How do you optimize a slow query in PostgreSQL?**
   - Use EXPLAIN ANALYZE, create appropriate indexes, rewrite query, update statistics. Also check for unnecessary sorts/joins, tune work_mem and effective_cache_size, and consider denormalization or materialized views if the query is inherently heavy but run frequently.

### Advanced Level:

1. **Explain how PostgreSQL handles concurrency control.**
   - Uses MVCC (Multi-Version Concurrency Control) to allow multiple transactions to access the database simultaneously.

2. **What is table partitioning and when would you use it?**
   - Splitting a table into smaller physical pieces. Use for large tables to improve query performance and maintenance.

3. **How does PostgreSQL handle full-text search?**
   - Uses tsvector and tsquery data types, with various functions and operators for searching text.

4. **Explain the difference between JSON and JSONB in PostgreSQL.**
   - JSON: Textual JSON, preserves whitespace and order, slower processing
   - JSONB: Binary JSON, no whitespace, no order, faster processing, supports indexing

5. **What is a materialized view and when would you use it?**
   - Pre-computed query result stored as a table. Use for expensive queries with infrequent updates.

## 8. Practical Scenarios

1. **Design a database schema for an e-commerce platform.**
   - Products, categories, users, orders, order_items, reviews, etc.

2. **How would you handle a database with millions of rows that's performing slowly?**
   - Indexing, partitioning, query optimization, hardware upgrades, read replicas.

3. **Design a high-availability PostgreSQL setup.**
   - Primary-standby replication, connection pooling, monitoring, failover strategy.

4. **How would you migrate data from another database to PostgreSQL?**
   - Use pg_dump/pg_restore, ETL tools, or custom scripts.

5. **Implement a full-text search feature for a blog platform.**
   - Use tsvector/tsquery, create appropriate indexes, implement search ranking.

## 9. Best Practices

1. **Naming Conventions:**
   - Use snake_case for table and column names
   - Be consistent with naming
   - Use meaningful names

2. **Indexing:**
   - Don't over-index
   - Consider query patterns
   - Use partial indexes when appropriate

3. **Query Writing:**
   - Use parameterized queries
   - Avoid SELECT *
   - Use transactions appropriately
   - Consider query performance

4. **Security:**
   - Follow principle of least privilege
   - Use prepared statements
   - Keep software updated
   - Regular backups

5. **Monitoring and Maintenance:**
   - Set up monitoring
   - Regular VACUUM and ANALYZE
   - Monitor long-running queries
   - Regular backups

## 10. Resources

* [PostgreSQL Official Documentation](https://www.postgresql.org/docs/)
* [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
* [Use The Index, Luke - PostgreSQL](https://use-the-index-luke.com/sql/table-of-contents/postgresql)
* [PostgreSQL Exercises](https://pgexercises.com/)
* [PostgreSQL Wiki](https://wiki.postgresql.org/wiki/Main_Page)
