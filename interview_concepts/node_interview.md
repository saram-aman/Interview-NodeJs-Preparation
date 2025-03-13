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
* "Explain the difference between `Buffer.alloc()` and `Buffer.allocUnsafe()`."
* "How do you convert a Buffer to a string and vice versa?"
* "Describe a scenario where you would use Buffers."
* "How do you manipulate buffer data?"
* "How do you handle large files using buffers and streams?"

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
* "What are JWTs and how are they used for authentication?"
* "How do you implement secure password storage in Node.js?"
* "What is CORS and how do you configure it?"
* "What are security headers and why are they important?"
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
* "How can you utilize multi-core systems in Node.js?"
* "What is the difference between child processes and worker threads?"
* "When would you use the `cluster` module?"
* "How do you handle CPU-bound tasks in Node.js?"
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
* "How do you cancel a timeout or interval?"
* "Describe a scenario where you would use each of these timing functions."
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
* "Explain the different types of streams."
* "How does piping work?"
* "How would you handle a large file using streams?"
* "When would you use a transform stream?"

## 6. Event Emitter

**Understanding the Event Emitter:**

* The `EventEmitter` class is a core component of Node.js that enables objects to emit and listen for events.
* It's used extensively in the Node.js core and in many third-party modules.

**Use Cases:**

* Handling asynchronous events, building custom event-driven systems.

**Interview Questions:**

* "What is the `EventEmitter` in Node.js?"
* "How do you emit and listen for events?"
* "Describe a scenario where you would use the `EventEmitter`."
* "How do you handle errors in event emitters?"

## 7. File System (fs) Module

**Understanding the fs Module:**

* The `fs` module provides APIs for interacting with the file system.
* Synchronous vs. asynchronous methods.

**Key Operations:**

* Reading and writing files, creating and deleting directories, checking file existence.

**Interview Questions:**

* "How do you read and write files in Node.js?"
* "What are the differences between synchronous and asynchronous file system operations?"
* "How do you handle file system errors?"
* "How do you efficiently read large files?"

## 8. Networking (http, https, net) Modules

**Understanding Networking:**

* Node.js is well-suited for building network applications.
* The `http`, `https`, and `net` modules provide APIs for creating HTTP servers, making HTTP requests, and working with TCP sockets.

**Key Concepts:**

* HTTP requests and responses, TCP sockets, server-side vs. client-side networking.

**Interview Questions:**

* "How do you create an HTTP server in Node.js?"
* "How do you make HTTP requests using the `http` or `https` module?"
* "What are TCP sockets, and how are they used in Node.js?"
* "How do you handle different HTTP methods?"

## 9. Express.js (or other frameworks)

**Understanding Frameworks:**

* Express.js is a popular framework for building web applications and APIs in Node.js.
* Understanding routing, middleware, and request/response handling.

**Key Concepts:**

* Routing, middleware, RESTful APIs, templating engines.

**Interview Questions:**

* "What are the benefits of using Express.js?"
* "Explain the concept of middleware."
* "How do you define routes in Express.js?"
* "How do you handle request parameters and query strings?"
* "What are RESTful APIs?"

## 10. Database Interaction:

**Understanding Database Interaction:**

* Node.js is often used to build backend applications that interact with databases.
* Understanding how to connect to databases (e.g., MongoDB, PostgreSQL, MySQL) and perform CRUD operations.

**Key Concepts:**

* Database drivers, ORMs (Object-Relational Mappers), query building.

**Interview Questions:**

* "How do you connect to a database from Node.js?"
* "What are ORMs, and why are they used?"
* "How do you perform CRUD operations in Node.js?"
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

