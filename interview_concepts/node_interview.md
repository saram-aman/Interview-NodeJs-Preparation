# Node.js Interview Preparation

This document outlines key concepts and common interview questions related to Node.js, designed to help you prepare for technical interviews.

## 1. Buffers

**What are Buffers?**

* Buffers are a way to represent a fixed-size chunk of memory outside of the V8 JavaScript heap. They're used to handle binary data, such as images, audio, and network streams.
* JavaScript strings are encoded in UTF-8, which is fine for text, but binary data requires a different representation.
* Buffers are part of Node.js's core and are essential for working with file systems, network protocols, and other I/O operations.

**Key Concepts:**

* **Allocation:** `Buffer.alloc(size)`, `Buffer.allocUnsafe(size)`, `Buffer.from(array)`, `Buffer.from(string)`. Understand the differences between `alloc` (zero-filled) and `allocUnsafe` (faster, but potentially contains old data).
* **Reading and Writing:** `buffer.readUInt8(offset)`, `buffer.writeUInt16LE(value, offset)`, etc. Know how to read and write different data types at specific offsets.
* **Encoding:** Understand how to convert between Buffers and strings using different encodings (e.g., UTF-8, ASCII, base64).
* **Slicing and Concatenation:** `buffer.slice()`, `Buffer.concat()`. Be able to manipulate Buffers efficiently.

**Interview Questions:**

* "What are Buffers and why are they needed in Node.js?"
  - Answer: Buffers are raw memory allocations outside V8's heap, used for handling binary data like files, network packets, and images efficiently in Node.js.

* "Explain the difference between `Buffer.alloc()` and `Buffer.allocUnsafe()`."
  - Answer: Buffer.alloc() initializes memory with zeros making it safe but slower, while Buffer.allocUnsafe() is faster but may contain old memory data.

* "How do you convert a Buffer to a string and vice versa?"
  - Answer: Use buffer.toString(encoding) to convert Buffer to string, and Buffer.from(string, encoding) to convert string to Buffer. Default encoding is UTF-8.

* "Describe a scenario where you would use Buffers."
  - Answer: When reading files, handling network protocols, or processing images where raw binary data needs to be manipulated directly.

* "How do you manipulate buffer data?"
  - Answer: Use methods like write(), read(), slice(), copy(), and concat() to modify buffer contents. Access individual bytes using array notation.

* "How do you handle large files using buffers and streams?"
  - Answer: Use streams with appropriate buffer sizes to process large files in chunks, preventing memory overflow and improving performance.

## 2. Security

**Key Areas:**

* **Input Validation:** Sanitize user input to prevent injection attacks (SQL injection, cross-site scripting (XSS)).
* **Authentication and Authorization:** Implement secure authentication (e.g., using JWTs, OAuth) and authorization mechanisms.
* **HTTPS:** Use HTTPS to encrypt communication between the client and server.
* **Password Hashing:** Store passwords securely using strong hashing algorithms (e.g., bcrypt, scrypt).
* **CORS (Cross-Origin Resource Sharing):** Configure CORS to control which origins can access your API.
* **Security Headers:** Use security headers (e.g., `Strict-Transport-Security`, `X-Frame-Options`) to enhance security.
* **Dependencies:** Keep your dependencies up to date to patch security vulnerabilities.
* **Avoiding common vulnerabilities:** Understand and avoid common vulnerabilities such as CSRF, and others found in the OWASP top 10.

**Interview Questions:**

* "How do you prevent SQL injection and XSS attacks in Node.js?"
  - Answer: Use parameterized queries for SQL, and sanitize/escape user input. For XSS, use content security policies and HTML escape functions.

* "What are JWTs and how are they used for authentication?"
  - Answer: JSON Web Tokens are encoded strings containing user data and signatures, used to maintain stateless authentication between client and server.

* "How do you implement secure password storage in Node.js?"
  - Answer: Hash passwords using bcrypt or Argon2 with unique salts. Never store plain passwords. Use environment variables for sensitive data.

* "What is CORS and how do you configure it?"
  - Answer: Cross-Origin Resource Sharing controls which domains can access your API. Configure using cors middleware with specific origin, methods, and headers.

* "What are security headers and why are they important?"
  - Answer: HTTP headers like HSTS, CSP protect against various attacks. They enforce HTTPS, prevent clickjacking, and control resource loading.

* "How do you keep your Node.js application secure?"
* "How do you handle user authentication and authorization?"
* "What are some common security vulnerabilities in Node.js applications, and how can they be mitigated?"

## 3. Use of Multi-Core or Single-Core Systems

**Single-Threaded Nature of Node.js:**

* Node.js runs on a single thread, which allows for high concurrency but can lead to performance bottlenecks for CPU-bound tasks.
* The event loop handles asynchronous I/O operations efficiently, but CPU-intensive tasks block the event loop.

**Multi-Core Utilization:**

* **Child Processes:** Use the `child_process` module to spawn separate processes and distribute CPU-bound tasks across multiple cores.
* **Clustering:** Use the `cluster` module to create multiple worker processes that share the same port, allowing you to take advantage of multi-core systems.
* **Worker Threads:** Use the `worker_threads` module to run JavaScript code in parallel threads within the same Node.js process. This is good for CPU-intensive JavaScript operations.

**Interview Questions:**

* "Explain the single-threaded nature of Node.js and its implications."
  - Answer: Node.js runs on single thread using event loop. Great for I/O operations, but CPU-intensive tasks can block execution.

* "How can you utilize multi-core systems in Node.js?"
  - Answer: Use cluster module to create worker processes, or worker_threads for CPU-intensive tasks. Child_process module spawns separate processes.

* "What is the difference between child processes and worker threads?"
  - Answer: Child processes have separate memory and run independently. Worker threads share memory and are lighter, better for CPU-intensive tasks.

* "When would you use the `cluster` module?"
  - Answer: Use cluster to create multiple processes sharing same port, improving performance and utilizing all CPU cores for better scalability.

* "How do you handle CPU-bound tasks in Node.js?"
  - Answer: Offload to worker threads, use child processes, or break into smaller chunks to prevent blocking the event loop.

* "Explain the event loop, and how it relates to single threaded applications."

## 4. Timing Functions

**Key Functions:**

* `setTimeout(callback, delay)`: Executes a callback function after a specified delay.
* `setInterval(callback, interval)`: Repeatedly executes a callback function at a specified interval.
* `clearTimeout(timeoutId)`: Cancels a timeout.
* `clearInterval(intervalId)`: Cancels an interval.
* `setImmediate(callback)`: Executes a callback function at the end of the current event loop cycle.
* `process.nextTick(callback)`: Executes a callback function before the next event loop cycle.
* `performance.now()`: provides high resolution timing.

**Understanding the Event Loop:**

* Timing functions are closely related to the Node.js event loop. Understand how `setTimeout`, `setInterval`, `setImmediate`, and `process.nextTick` are scheduled and executed in the event loop.

**Interview Questions:**

* "Explain the differences between `setTimeout`, `setInterval`, `setImmediate`, and `process.nextTick`."
  - Answer: setTimeout delays execution, setInterval repeats execution, setImmediate runs after I/O, nextTick runs before next event loop iteration.

* "How do you cancel a timeout or interval?"
  - Answer: Use clearTimeout(timeoutId) for timeouts and clearInterval(intervalId) for intervals, storing and passing the returned IDs.

* "Describe a scenario where you would use each of these timing functions."
  - Answer: setTimeout for delays, setInterval for polling, setImmediate for I/O callbacks, nextTick for immediate async execution.

* "How do timing functions interact with the Node.js event loop?"
* "What is the difference between microtasks and macrotasks?"
* "When would you use `performance.now()`?"

## 5. Streams

**Understanding Streams:**

* Streams are a fundamental concept in Node.js for handling sequential data. They allow you to process data in chunks, without loading the entire dataset into memory.
* Types: Readable, Writable, Duplex, Transform.
* Piping: Efficiently connecting Readable streams to Writable streams.

**Use Cases:**

* File I/O, network communication, handling large datasets.

**Interview Questions:**

* "What are streams in Node.js, and why are they important?"
  - Answer: Streams handle data in chunks, enabling efficient memory usage. Perfect for large files, network communication, and real-time data.

* "Explain the different types of streams."
  - Answer: Readable streams provide data, Writable consume data, Duplex do both, Transform modifies data while streaming.

* "How does piping work?"
  - Answer: Pipe connects readable to writable stream, automatically handling data flow and backpressure. Use pipe() method.

* "How would you handle a large file using streams?"
  - Answer: Create readable stream from file, pipe through transform if needed, then to writable stream. Handles memory efficiently.

* "When would you use a transform stream?"

## 6. Event Emitter

**Understanding the Event Emitter:**

* The `EventEmitter` class is a core component of Node.js that enables objects to emit and listen for events.
* It's used extensively in the Node.js core and in many third-party modules.

**Use Cases:**

* Handling asynchronous events, building custom event-driven systems.

**Interview Questions:**

* "What is the `EventEmitter` in Node.js?"
  - Answer: Core class enabling event-driven architecture. Objects emit named events that cause listeners to execute callbacks.

* "How do you emit and listen for events?"
  - Answer: Use emitter.on() to listen for events, emitter.emit() to trigger events. Can pass data as arguments.

* "Describe a scenario where you would use the `EventEmitter`."
  - Answer: Custom event handling, like chat applications, logging systems, or any pub/sub pattern implementation.

* "How do you handle errors in event emitters?"

## 7. File System (fs) Module

**Understanding the fs Module:**

* The `fs` module provides APIs for interacting with the file system.
* Synchronous vs. asynchronous methods.

**Key Operations:**

* Reading and writing files, creating and deleting directories, checking file existence.

**Interview Questions:**

* "How do you read and write files in Node.js?"
  - Answer: Use fs.readFile/writeFile for async operations, fs.readFileSync/writeFileSync for sync. Use streams for large files.

* "What are the differences between synchronous and asynchronous file system operations?"
  - Answer: Sync operations block execution until complete. Async use callbacks/promises, allowing other code to run meanwhile.

* "How do you handle file system errors?"
  - Answer: Use try-catch for sync operations, error-first callbacks or catch blocks with promises for async operations.

* "How do you efficiently read large files?"

## 8. Networking (http, https, net) Modules

**Understanding Networking:**

* Node.js is well-suited for building network applications.
* The `http`, `https`, and `net` modules provide APIs for creating HTTP servers, making HTTP requests, and working with TCP sockets.

**Key Concepts:**

* HTTP requests and responses, TCP sockets, server-side vs. client-side networking.

**Interview Questions:**

* "How do you create an HTTP server in Node.js?"
  - Answer: Use http.createServer(), pass callback handling requests/responses. Listen on port. Use Express for more features.

* "How do you make HTTP requests using the `http` or `https` module?"
  - Answer: Use http.get() for GET requests, http.request() for other methods. Handle response in callback or promise.

* "What are TCP sockets, and how are they used in Node.js?"
  - Answer: Low-level networking interface for custom protocols. Create with net.createServer() and net.connect() for client-server communication.

* "How do you handle different HTTP methods?"

## 9. Express.js (or other frameworks)

**Understanding Frameworks:**

* Express.js is a popular framework for building web applications and APIs in Node.js.
* Understanding routing, middleware, and request/response handling.

**Key Concepts:**

* Routing, middleware, RESTful APIs, templating engines.

**Interview Questions:**

* "What are the benefits of using Express.js?"
  - Answer: Simplified routing, middleware support, easy request handling, template engine integration, and large ecosystem of plugins.

* "Explain the concept of middleware."
  - Answer: Functions that access request/response objects, can modify them, and control request flow. Execute in order defined.

* "How do you define routes in Express.js?"
  - Answer: Use app.get(), post(), etc., with path and callback. Support parameters, query strings, and multiple handlers.

* "What are RESTful APIs?"

## 10. Database Interaction:

**Understanding Database Interaction:**

* Node.js is often used to build backend applications that interact with databases.
* Understanding how to connect to databases (e.g., MongoDB, PostgreSQL, MySQL) and perform CRUD operations.

**Key Concepts:**

* Database drivers, ORMs (Object-Relational Mappers), query building.

**Interview Questions:**

* "How do you connect to a database from Node.js?"
  - Answer: Use appropriate driver (mongoose for MongoDB, pg for PostgreSQL). Create connection pool, handle connection events.

* "What are ORMs, and why are they used?"
  - Answer: Object-Relational Mappers convert between database and code objects. Provide abstraction, validation, and query building.

* "How do you perform CRUD operations in Node.js?"
  - Answer: Use database driver or ORM methods. Create with insert/save, read with find/select, update with update/save, delete with remove/delete.

* "How do you prevent SQL injection when working with databases?"

## 11. Error Handling:

**Understanding Error Handling:**

* Robust error handling is crucial for building reliable Node.js applications.
* Understanding how to handle synchronous and asynchronous errors.

**Key Concepts:**

* `try...catch` blocks, error-first callbacks, promises, `async/await`, unhandled promise rejections, uncaught exceptions.

**Interview Questions:**

* "How do you handle errors in asynchronous Node.js code?"
* "What are error-first callbacks?"
* "How do you handle unhandled promise rejections and uncaught exceptions?"
* "What are best practices for error logging?"

### 12. Testing:

**Understanding Testing:**

* Writing unit tests and integration tests is essential for ensuring code quality.
* Understanding testing frameworks (e.g., Jest, Mocha).

**Key Concepts:**

* Unit testing, integration testing, test-driven development (TDD).

**Interview Questions:**

* "What testing frameworks have you used?"
* "How do you write unit tests and integration tests in Node.js?"
* "What are the benefits of testing?"
* "How do you mock dependencies in your tests?"

