# System Design Interview Preparation (Senior Level - 6+ Years Experience)

This guide covers advanced system design concepts, distributed system patterns, and real-world design scenarios expected from a senior software engineer.

## 1. Fundamental Concepts

### Scalability (Horizontal vs. Vertical)
- **Vertical Scaling (Scaling Up):** Adding more power (CPU, RAM) to an existing server. Limited by hardware caps and single point of failure.
- **Horizontal Scaling (Scaling Out):** Adding more servers to the pool. Requires a load balancer and stateless application design.

### Availability vs. Reliability
- **Availability:** Percentage of time the system is operational (e.g., 99.999% "five nines"). Measured by `Uptime / (Uptime + Downtime)`.
- **Reliability:** Probability that the system will perform its intended function without failure over a period. Measured by Mean Time Between Failures (MTBF).

### Maintainability
- The ease with which a system can be modified to correct faults, improve performance, or adapt to a changed environment. Key factors: Operability, Simplicity, Evolvability.

---

## 2. Distributed Systems Theory

### CAP Theorem
In a distributed data store, you can only provide two of the following three guarantees:
1.  **Consistency:** Every read receives the most recent write or an error.
2.  **Availability:** Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
3.  **Partition Tolerance:** The system continues to operate despite an arbitrary number of messages being dropped or delayed by the network between nodes.

> [!NOTE]
> Network partitions are inevitable in distributed systems, so we usually must choose between **CP** (Consistency and Partition Tolerance) and **AP** (Availability and Partition Tolerance).

### PACELC Theorem
An extension of CAP:
- If there is a **P**artition, how does the system trade off **A**vailability and **C**onsistency?
- **E**lse (no partition), how does the system trade off **L**atency and **C**onsistency?

### Distributed Consensus
- **Paxos/Raft:** Protocols used to achieve agreement among a cluster of nodes. Used by systems like Zookeeper (Paxos-variant) and Etcd (Raft).

---

## 3. Data Management at Scale

### SQL vs. NoSQL
- **SQL (Relational):** ACID compliance, structured data, complex joins. Best for transactional systems (FinTech, E-commerce).
- **NoSQL (Non-Relational):** Flexible schema, horizontal scaling.
    - **Key-Value:** Redis, DynamoDB.
    - **Document:** MongoDB, CouchDB.
    - **Column-Family:** Cassandra, HBase.
    - **Graph:** Neo4j.

### Sharding (Horizontal Partitioning)
- Splitting data across multiple databases.
- **Strategies:** Range-based, Hash-based (Consistent Hashing), Directory-based.
- **Challenges:** Hotspot keys, Resharding, Join complexity.

### Consistent Hashing
- Minimizes data movement when nodes are added or removed from a cluster.
- Mapping keys and nodes to a virtual ring.

### Replication
- **Single Leader:** All writes go to one node; reads from many. (Example: MySQL Master-Slave).
- **Multi-Leader:** Writes can happen on multiple nodes. Good for multi-region setups.
- **Leaderless:** Writes are sent to all nodes (quorum-based). (Example: Cassandra, DynamoDB).

---

## 4. Communication Patterns

### REST vs. gRPC vs. GraphQL
- **REST:** Standard, resource-oriented, human-readable (JSON).
- **gRPC:** Protocol Buffers (binary), high performance, bidirectional streaming, strongly typed.
- **GraphQL:** Client specifies exactly what data it needs, single endpoint, avoids over-fetching/under-fetching.

### Message Queues & Event Streaming
- **Point-to-Point:** Single consumer (RabbitMQ).
- **Pub/Sub:** Multiple subscribers (Kafka, Google Pub/Sub).
- **Kafka Internals:** Topics, Partitions, Consumer Groups, Offsets, Log Compaction.

---

## 5. Senior-Level Interview Questions & Answers

### Q1: How do you handle the "Thundering Herd" problem in caching?
**A:** The Thundering Herd (or Cache Stampede) occurs when many requests for a cached item expire simultaneously, causing all requests to hit the database at once.
- **Solutions:**
    - **Locking/Mutex:** Only the first request fetches from DB; others wait for the cache to be repopulated.
    - **Probabilistic Early Recomputation:** Recompute the cache item before it actually expires based on a probability function.
    - **External Recomputation:** A background worker updates the cache periodically, so it never "expires" for the API.

### Q2: How do you implement Distributed Locking?
**A:** Distributed locks are needed when multiple processes need to access a shared resource.
- **Redis (Redlock):** Acquiring locks across N independent Redis nodes.
- **Zookeeper:** Using ephemeral sequential nodes.
- **Etcd:** Using leases and keep-alive.
- **Critical Considerations:** Fencing tokens (to handle process pauses/GC), lock timeouts, and network partitions.

### Q3: Explain Idempotency and how to implement it in a Distributed System.
**A:** Idempotency ensures that performing an operation multiple times has the same result as performing it once.
- **Implementation:**
    - **Unique Request IDs:** Client sends a `UUID` with the request. The server stores it in a DB (or cache like Redis) and checks if it has already processed that ID.
    - **Database Constraints:** Using unique keys.
    - **Distributed Transactions (Sagas):** Using a compensating transaction pattern for multi-step processes.

### Q4: How would you design a system for 99.999% availability?
**A:** Five nines means only ~5 minutes of downtime *per year*.
- **Key Strategies:**
    - **Redundancy:** No single point of failure (Multiple AZs, Multiple Regions).
    - **Active-Active setup:** Traffic is routed to all healthy instances.
    - **Automated Failover:** Health checks and circuit breakers.
    - **Error Budgeting:** SRE principles.
    - **Chaos Engineering:** Regularly testing failure scenarios.

### Q5: What is the "Dual Write" problem and how do you solve it?
**A:** Occurs when you need to update a database and send a message to Kafka/RabbitMQ. If one succeeds and the other fails, the system is inconsistent.
- **Solution: Outbox Pattern.**
    1. Write both the data and the message (in an "Outbox" table) to the DB in a single ACID transaction.
    2. A separate relay process (Change Data Capture - CDC) polls the Outbox table and publishes messages to the queue.

---

## 6. Real-World Design Scenarios

### Designing a Global Rate Limiter
- **Requirements:** Limit requests per user/IP across multiple servers.
- **Algorithms:** Token Bucket, Leaky Bucket, Fixed Window Counter, Sliding Window Log, Sliding Window Counter.
- **Implementation:** Use **Redis** with `INCR` and `EXPIRE`. To handle high load, use **Redis Cluster** or local caching with periodic sync.

### Designing a Distributed ID Generator (Unique IDs at scale)
- **Problem:** UUIDs are large and not sortable. DB Auto-increment doesn't scale across multiple masters.
- **Solutions:**
    - **Twitter Snowflake:** 64-bit ID (Timestamp + WorkerID + Sequence). Time-ordered and compact.
    - **Database Ticket Servers:** Centralized DB to provide ranges of IDs.

### Designing a News Feed System (Facebook/Twitter style)
- **Fan-out on Write (Push):** When a user posts, update the feeds of all followers. Fast reads, slow writes for "celebrities".
- **Fan-out on Load (Pull):** Aggregate feeds only when the user requests it. Slow reads, fast writes.
- **Hybrid Approach:** Push for normal users, Pull for celebrities.
- **Storage:** Use a NoSQL DB for feed storage and a Message Queue for processing feed updates.

---

## 7. Advanced Performance Optimization

### L4 vs L7 Load Balancing
- **L4 (Transport Layer):** Routes based on IP and Port. Very fast, but can't see the application content (headers, cookies).
- **L7 (Application Layer):** Routes based on HTTP headers, URLs, Content. Allows for SSL termination, session persistence, and path-based routing.

### Data Compression & Serialization
- Moving from JSON to binary formats like **Protocol Buffers (Protobuf)** or **Avro** significantly reduces network overhead and improves parsing speed.

### Monitoring & Observability
- **Metrics:** Counters, Gauges, Histograms (Prometheus).
- **Logging:** Structured logging (ELK stack).
- **Tracing:** Distributed tracing to track requests across microservices (Jaeger, Zipkin, OpenTelemetry).
