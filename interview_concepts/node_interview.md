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
  - Answer: Use parameterized queries for SQL, and sanitize/escape user input. For XSS, use content security policies and HTML escape functions, avoid dangerouslySetInnerHTML on the frontend, and prefer well-maintained template engines or frameworks that escape output by default.

* "What are JWTs and how are they used for authentication?"
  - Answer: JSON Web Tokens are encoded strings containing user data and signatures, used to maintain stateless authentication between client and server.

* "How do you implement secure password storage in Node.js?"
  - Answer: Hash passwords using bcrypt or Argon2 with unique salts. Never store plain passwords. Use environment variables for sensitive data.

* "What is CORS and how do you configure it?"
  - Answer: Cross-Origin Resource Sharing controls which domains can access your API. Configure using cors middleware with specific origin, methods, and headers.

* "What are security headers and why are they important?"
  - Answer: HTTP headers like HSTS, CSP protect against various attacks. They enforce HTTPS, prevent clickjacking, and control resource loading.
* "How do you keep your Node.js application secure?"
  - Answer: Follow OWASP best practices: validate and sanitize user input, use HTTPS everywhere, store secrets in environment variables or secret managers, and regularly patch Node and dependencies. Add security headers, rate limiting, and logging/alerts so you can detect and respond to suspicious behavior early.
* "How do you handle user authentication and authorization?"
  - Answer: Use well-tested libraries for JWT or session-based auth, hash passwords with bcrypt/Argon2, and store refresh tokens securely (often in httpOnly cookies). Apply authorization checks in middleware or route guards based on roles/permissions, and always enforce those checks on the server, not just in the UI.
* "What are some common security vulnerabilities in Node.js applications, and how can they be mitigated?"
  - Answer: Common issues include injection attacks (SQL/NoSQL/command), XSS, CSRF, insecure deserialization, and using vulnerable packages. Mitigate them with parameterized queries, output encoding/escaping, CSRF tokens and SameSite cookies, safe JSON parsing, dependency scanning (npm audit/Snyk), and least-privilege access to databases and services.

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

| Feature | **Cluster Module** | **Worker Threads** |
| :--- | :--- | :--- |
| **Model** | Multi-process | Multi-thread |
| **Memory** | Separate memory space | Shared memory (`SharedArrayBuffer`) |
| **Communication** | IPC (Inter-Process Communication) | MessageChannel / `postMessage` |
| **Use Case** | Horizontal scaling (handling more requests) | CPU-intensive JavaScript tasks |
| **Overhead** | High (full new instance of V8/Node) | Low (shares V8 instance) |
| **Port Sharing**| Always (shares same server port) | No (typically orchestrated by main thread) |

* "Explain the event loop, and how it relates to single threaded applications."
  - Answer: The event loop is a mechanism that allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible. Since modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.

**Event Loop Phases (Detailed Breakdown):**
1. **Timers:** Executes callbacks scheduled by `setTimeout()` and `setInterval()`.
2. **Pending Callbacks:** Executes I/O callbacks deferred to the next loop iteration (e.g., some TCP errors).
3. **Idle, Prepare:** Used internally by Node.js.
4. **Poll:** Retrieves new I/O events; executes I/O related callbacks (nearly all with the exception of close callbacks, the ones scheduled by timers, and `setImmediate()`).
5. **Check:** `setImmediate()` callbacks are invoked here.
6. **Close Callbacks:** Executes close events (e.g., `socket.on('close', ...)`.

*Note: `process.nextTick()` is NOT technically part of the event loop. It's processed after the current operation finishes, regardless of the current phase of the event loop.*

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
  - Answer: Timers (`setTimeout`/`setInterval`) are checked in the timers phase, `setImmediate` callbacks run in the check phase, and `process.nextTick` runs before the loop continues to the next phase. Understanding these phases explains why `nextTick` can starve I/O if overused, while `setImmediate` tends to be fairer.
* "What is the difference between microtasks and macrotasks?"
  - Answer: Microtasks (like resolved Promises and `process.nextTick`) run immediately after the current JavaScript stack before the event loop proceeds, while macrotasks (timers, I/O callbacks, `setImmediate`) are scheduled in specific event loop phases. This difference affects execution order and is crucial when reasoning about race conditions.
* "When would you use `performance.now()`?"
  - Answer: Use `performance.now()` when you need high‑resolution timing for profiling or benchmarking specific code paths; it gives sub‑millisecond timestamps relative to the process start and is preferred over `Date.now()` for measuring short durations.

## 5. Streams

**Understanding Streams:**

* Streams are a fundamental concept in Node.js for handling sequential data. They allow you to process data in chunks, without loading the entire dataset into memory.
* Types: 
  - **Readable**: Source of data (e.g., `fs.createReadStream`).
  - **Writable**: Destination for data (e.g., `fs.createWriteStream`).
  - **Duplex**: Both Readable and Writable (e.g., a TCP socket).
  - **Transform**: A type of Duplex stream where the output is computed from the input (e.g., `zlib.createGzip`).
* **Piping**: `stream.pipe(destination)` connects a readable stream to a writable one.
* **Pipeline**: `stream.pipeline` (or `stream/promises` variant) is preferred for production as it cleans up all involved streams if one fails and provides better error handling than `pipe`.

**Backpressure in Streams:**
Backpressure occurs when the data producer is faster than the consumer. If the consumer (Writable stream) buffer fills up, it returns `false` on a `.write()` call. The producer should then stop writing until the consumer emits the `'drain'` event.
* `pipe()` handles backpressure and `'drain'` events automatically.

**Code Example (Pipeline with Error Handling):**
```javascript
const { pipeline } = require('stream/promises');
const fs = require('fs');
const zlib = require('zlib');

async function compressFile(input, output) {
  try {
    await pipeline(
      fs.createReadStream(input),
      zlib.createGzip(),
      fs.createWriteStream(output)
    );
    console.log('Compression successful');
  } catch (err) {
    console.error('Pipeline failed', err);
  }
}
```

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
  - Answer: Use a transform stream when you need to modify or inspect data as it flows, such as compressing with gzip, encrypting/decrypting, filtering log lines, or parsing CSV/JSON records without loading the entire file into memory.

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
  - Answer: Always listen for the special `error` event and emit proper Error objects so problems can be logged or recovered from; an unhandled `error` event will crash the process. You can centralize this by having a top-level error listener or by wrapping emitters so that errors are converted into rejected promises or passed into your application’s error-handling middleware.

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
  - Answer: Use fs.createReadStream() to read files in chunks, pipe to writable streams, set highWaterMark for buffer size. Avoid fs.readFile() for large files as it loads entire file into memory.
  
* "What is the difference between fs.promises and callback-based fs methods?"
  - Answer: fs.promises provides promise-based API using async/await, while callback-based methods use error-first callbacks. fs.promises is cleaner and more modern.
  
* "How do you watch for file changes in Node.js?"
  - Answer: Use fs.watch() or fs.watchFile(). fs.watch() uses OS native events and is more efficient. fs.watchFile() polls files and is less efficient but more compatible.
  
* "How do you copy or move files efficiently?"
  - Answer: Use streams for large files (createReadStream + createWriteStream), or fs.copyFileSync/copyFile for small files. For moving, use fs.rename() which is atomic.

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
  - Answer: Check req.method property, use switch statement or if-else. In Express, use app.get(), app.post(), app.put(), app.delete() methods. Can also use app.all() for all methods.
  
* "How do you parse request bodies in Node.js?"
  - Answer: For JSON: use body-parser middleware or express.json(). For form data: body-parser.urlencoded(). For raw data: req.on('data') events. Always validate and sanitize input.
  
* "What is HTTP keep-alive and how does Node.js handle it?"
  - Answer: Keep-alive reuses TCP connections for multiple requests. Node.js http module supports it by default. Use agent: {keepAlive: true} in http.request() for client connections.
  
* "How do you handle file uploads in Node.js?"
  - Answer: Use multiparty, formidable, or multer middleware. Stream uploads to disk or cloud storage. Validate file types and sizes. Handle progress events for large files.
  
* "What are HTTP status codes and when to use them?"
  - Answer: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Server Error). Use appropriate codes to indicate request/response status.
  
* "How do you implement request timeouts in Node.js?"
  - Answer: Use req.setTimeout() or socket.setTimeout() on server. For client requests, use AbortController or timeout in http.request options. Handle timeout errors appropriately.

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
  - Answer: REST (Representational State Transfer) APIs use HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources. Stateless, cacheable, uniform interface. URLs represent resources, not actions.
  
* "How do you implement authentication in Express.js?"
  - Answer: Use passport.js, JWT tokens, session-based auth, or OAuth. Store tokens securely (httpOnly cookies), validate on protected routes, use middleware to check authentication.
  
* "What is middleware in Express and how does it work?"
  - Answer: Middleware functions execute between request and response. They can modify req/res objects, end request-response cycle, call next() to pass control. Execute in order defined.
  
* "How do you handle routing in Express.js?"
  - Answer: Define routes with app.METHOD(path, handler). Use router for modular routing. Support route parameters, query strings, and route middleware. Use app.use() for middleware.
  
* "What is the difference between app.use() and app.get() in Express?"
  - Answer: app.use() applies middleware to all HTTP methods and paths matching the pattern. app.get() only handles GET requests for specific path. app.use() is for middleware, app.get() for routes.
  
* "How do you serve static files in Express?"
  - Answer: Use express.static() middleware with directory path. Can serve multiple static directories. Configure caching headers and security for static assets.
  
* "How do you implement API versioning in Express?"
  - Answer: Use URL path versioning (/api/v1/users), header versioning, or query parameter versioning. Use router for each version, maintain backward compatibility when possible.
  
* "What are template engines and when to use them?"
  - Answer: Template engines (EJS, Handlebars, Pug) render HTML with dynamic data. Use for server-side rendering. For APIs, use JSON responses instead.
  
* "How do you implement rate limiting in Express?"
  - Answer: Use express-rate-limit middleware. Configure max requests per window, store limits in memory or Redis. Apply different limits for different routes.

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
  - Answer: Always use parameterized queries or prepared statements from your driver/ORM instead of building SQL strings manually. Combine that with strict input validation and least-privilege DB users so even if a query is abused, the damage is limited, and consider using query builders that escape values safely by default.

## 11. Error Handling:

**Understanding Error Handling:**

* Robust error handling is crucial for building reliable Node.js applications.
* Understanding how to handle synchronous and asynchronous errors.

**Key Concepts:**

* `try...catch` blocks, error-first callbacks, promises, `async/await`, unhandled promise rejections, uncaught exceptions.

**Interview Questions:**

* "How do you handle errors in asynchronous Node.js code?"
  - Answer: Use try-catch with async/await, or .catch() with promises. For callbacks, use error-first callback pattern. Always handle errors explicitly to prevent unhandled rejections.
  
* "What are error-first callbacks?"
  - Answer: Node.js convention where callback functions receive error as first parameter: function(err, result). If err is null/undefined, operation succeeded; otherwise, err contains error details.
  
* "How do you handle unhandled promise rejections and uncaught exceptions?"
  - Answer: Use process.on('unhandledRejection') and process.on('uncaughtException') handlers. For promises, always use .catch() or try-catch with async/await. Log errors and gracefully shut down if necessary.
  
* "What are best practices for error logging?"
  - Answer: Use structured logging (winston, pino), include context (user ID, request ID, stack traces), log levels (error, warn, info), send to centralized logging service, and avoid logging sensitive data.
  
* "How do you create custom error classes in Node.js?"
  - Answer: Extend Error class, add custom properties, use constructor with message parameter. Helps distinguish error types and provides better error handling.
  
* "What is the difference between operational errors and programmer errors?"
  - Answer: Operational errors are expected runtime errors (network failures, invalid input). Programmer errors are bugs (null reference, type errors). Handle operational errors, fix programmer errors.
  
* "How do you propagate errors in async code?"
  - Answer: Throw errors in async functions, reject promises, pass errors to error-first callbacks. Use proper error propagation to maintain error context.

### 12. Testing:

**Understanding Testing:**

* Writing unit tests and integration tests is essential for ensuring code quality.
* Understanding testing frameworks (e.g., Jest, Mocha).

**Key Concepts:**

* Unit testing, integration testing, test-driven development (TDD).

**Interview Questions:**

* "How do you write unit tests and integration tests in Node.js?"
  - Answer: Use a test runner like Jest, Mocha, or the built‑in `node:test` module; write unit tests that isolate a single function or module, and integration tests that exercise multiple components together (e.g., hitting real HTTP endpoints or databases). Organize tests in a clear structure (e.g., `__tests__` or `test` folders) and run them in CI.
* "What are the benefits of testing?"
  - Answer: Tests catch regressions early, document expected behavior, make refactoring safer, and improve confidence when shipping changes. In Node backends specifically, they help you lock down critical flows like authentication, billing, and data migrations.
* "How do you mock dependencies in your tests?"
  - Answer: Use tools like Jest’s `jest.mock`, Sinon, or the `node:test` mocking APIs to replace real modules (databases, HTTP clients, queues) with fakes or stubs. Good mocking isolates the unit under test while still letting you write a few integration tests that hit real services in controlled environments.
* "What is the built-in `node:test` runner?"
  - Answer: Introduced in Node.js 18, it's a stable, built-in runner that eliminates the need for third-party tools like Jest/Mocha for many projects. It supports subtests, mocking, TAP output, and integrates well with coverage tools.
  - Usage: `node --test`

---

## 13. Event Loop & Concurrency Deep Dive

### Overview
Understanding the Node.js event loop is critical for diagnosing performance issues, avoiding blocking operations, and explaining Node’s concurrency model in interviews.

### Key Concepts
- **Phases:** timers → pending callbacks → idle/prepare → poll → check → close callbacks.
- **Microtasks vs. Macrotasks:** `process.nextTick` and resolved promises run before returning to the loop; timers/setImmediate scheduled for later phases.
- **Libuv Thread Pool:** Handles file system I/O, DNS, compression; configurable via `UV_THREADPOOL_SIZE`.
- **Backpressure:** Coordinating producers/consumers in streams and sockets to prevent buffer bloat.

### Advanced Topics
- **Async Hooks / Diagnostics Channel:** Trace async resource lifecycles for performance debugging.
- **Observing Event Loop Lag:** `perf_hooks.monitorEventLoopDelay()` or `event-loop-lag` packages measure blocking time.
- **Priority Inversions:** Overusing `process.nextTick` can starve I/O; prefer `setImmediate` for fairness.
- **Worker Threads + Event Loop:** Each worker has its own loop; shared memory via `SharedArrayBuffer`.

### Sample Interview Questions
- **Q:** Walk through what happens when `setTimeout`, `setImmediate`, and `process.nextTick` are scheduled together.
  - **A:** `process.nextTick` runs immediately after current stack before event loop continues; timers run in timers phase once delay elapses; `setImmediate` runs in check phase after poll. Ordering depends on whether timer delay has elapsed.
- **Q:** How do you detect and mitigate event loop blocking?
  - **A:** Monitor latency (e.g., `libuv` metrics), refactor CPU-heavy work into worker threads, stream large processing, or move to separate services.

---

## 14. Asynchronous Patterns & APIs

### Overview
Node offers multiple async paradigms; being fluent in all of them showcases versatility.

### Key Concepts
- **Callbacks:** Error-first convention (`function(err, result)`), `fs.readFile`.
- **Promises:** Native promises, `util.promisify`, chaining, `Promise.allSettled`.
- **Async/Await:** Syntactic sugar over promises, error handling with `try/catch`.
- **Event Emitters:** Pub/sub semantics; ensures listeners and cleanup.
- **Streams:** Backpressure-aware async data flow.

### Advanced Topics
- **AbortController:** Cancel HTTP requests, database calls, or custom async tasks.
- **Async Local Storage:** Maintain request context across async boundaries for logging/tracing.
- **Concurrency Control:** Limit parallel tasks with queues (p-limit, BullMQ) or semaphores.
- **Patterns:** Fan-out/fan-in, pipeline, circuit breakers (opossum library), retries with exponential backoff.

### Sample Interview Questions
- **Q:** How do you convert a callback API to promises?
  - **A:** Use `util.promisify` or wrap in new Promise, resolving/rejecting based on callback arguments.
- **Q:** What happens if you forget to `await` an async call?
  - **A:** Function returns unresolved promise; caller may proceed before completion leading to race conditions and unhandled rejections.

---

## 15. Package Management & Tooling

### Overview
Demonstrating mastery of Node’s ecosystem—including packages, build tools, and configuration—shows readiness for production work.

### Key Concepts
- **npm vs. Yarn vs. pnpm:** Installation strategies, lockfiles, workspace support.
- **Semantic Versioning:** `^`, `~`, exact versions; dependency ranges.
- **Scripts & Tooling:** npm scripts, npx, concurrently, cross-env.
- **Module Systems:** CommonJS vs. ES Modules (`type: module`, dynamic import).

### Advanced Topics
- **Monorepos:** npm workspaces, pnpm workspaces, Turborepo, Nx for orchestrating builds/tests.
- **Tree Shaking / Bundling:** Rollup, esbuild, webpack when targeting browser bundles or serverless functions.
- **Security Scans:** `npm audit`, `snyk`, dependency review workflows.
- **Environment Management:** `.env`, dotenv, Vault/KMS integrations; per-environment configs.

### Sample Interview Questions
- **Q:** How do you structure a monorepo with shared Node packages?
  - **A:** Use workspaces to hoist dependencies, maintain per-package scripts, leverage build tools (Turborepo/Nx) for caching and task pipelines.
- **Q:** What steps do you take when `npm audit` flags a vulnerability?
  - **A:** Assess severity, bump dependency (direct or via resolutions), test for regressions, and document in release notes.

---

## 16. Performance, Monitoring & Scaling

### Overview
High-performing Node services require profiling, observability, and horizontal/vertical scaling strategies.

### Key Concepts
- **Profiling Tools:** `node --inspect`, Chrome DevTools, Clinic.js (Doctor, Flame, Bubbleprof), `0x`.
- **Caching Strategies:** In-memory (LRU), Redis, CDN, HTTP cache headers.
- **Scalability:** Clustering, load balancers, stateless design, connection pooling.
- **Observability:** Structured logging (pino, winston), metrics (Prometheus), tracing (OpenTelemetry).

### Advanced Topics
- **Backpressure Management:** Pause/resume streams, limit queue lengths, adapt rate-limiting.
- **Health Checks:** Liveness/readiness endpoints, application-level circuit breakers.
- **Autoscaling:** Metrics-based scale-out in Kubernetes, AWS ECS/Fargate, serverless warm starts.
- **Cost Optimization:** Efficient GC tuning, native addons for hot paths, right-sizing containers.

### Sample Interview Questions
- **Q:** How would you diagnose high CPU usage in a Node service?
  - **A:** Capture CPU profile with `clinic flame` or DevTools, analyze hotspots, inspect synchronous loops or heavy JSON parsing, offload to worker threads.
- **Q:** What strategies ensure horizontal scalability?
  - **A:** Stateless services, shared caches, database connection pools, message queues, cluster mode, and readiness probes to ensure healthy workers.

---

## 17. Testing & Quality at Scale

### Overview
Go beyond unit tests to show comprehensive quality practices.

### Key Concepts
- **Test Pyramid:** Unit, integration, contract, end-to-end.
- **Mocking & Stubs:** Sinon, jest mocks, nock for HTTP.
- **Fixtures & Factories:** seeding test databases, FactoryGirl-equivalents.
- **Coverage & CI:** Istanbul/nyc, GitHub Actions, GitLab CI.

### Advanced Topics
- **Contract Testing:** Pact or Schemathesis for API compatibility.
- **Property-Based Testing:** fast-check to explore edge cases.
- **Test Containers:** Spin up disposable DBs/services (testcontainers-node) for realistic integration tests.
- **Chaos Engineering:** Inject failures/timeouts to validate resilience.

### Sample Interview Questions
- **Q:** How do you test code that interacts with third-party APIs?
  - **A:** Use nock/MSW to mock requests, contract tests to ensure schema alignment, and sandbox keys for integration environments.
- **Q:** Explain your CI pipeline for Node apps.
  - **A:** Lint (ESLint), type check (TypeScript), run tests with coverage, build artifacts, scan dependencies, and deploy with gated approvals.

---

## 18. Deployment & DevOps

### Overview
Interviewers expect familiarity with deploying Node in modern infrastructures.

### Key Concepts
- **Process Managers:** PM2, forever, systemd for restarts/logging.
- **Containerization:** Docker best practices (multi-stage builds, non-root users, health checks).
- **Serverless:** AWS Lambda, Azure Functions; cold starts, bundling, observability.
- **Configuration Management:** Twelve-Factor principles, feature flags.

### Advanced Topics
- **CI/CD Pipelines:** Blue/green, canary deploys, GitOps.
- **Secrets Management:** AWS KMS, HashiCorp Vault, environment-specific encryption.
- **Edge Deployment:** Cloudflare Workers, Vercel Edge, Deno Deploy for low latency APIs.
- **Rollback Strategies:** Versioned artifacts, database migrations with back-out plans.

### Sample Interview Questions
- **Q:** How do you containerize a Node.js API securely?
  - **A:** Use slim base image, install deps with `npm ci`, run as non-root, set NODE_ENV=production, add health checks and proper logging.
- **Q:** Describe a blue/green deployment for a Node service.
  - **A:** Deploy new version (green) alongside current (blue), route small traffic, monitor metrics, switch traffic fully, keep blue ready for rollback.

---

## 19. System Design & Scenario Questions

### Overview
Node interviews often include system design discussions; prepare with concrete patterns.

### Topics & Talking Points
- **Real-time Chat/Collaboration:** WebSockets (Socket.IO), pub/sub (Redis, Kafka), presence tracking.
- **API Gateways:** Rate limiting, caching, auth, schema validation (AJV, Zod).
- **Task Queues:** BullMQ, RabbitMQ, AWS SQS for background processing.
- **File Upload Pipelines:** Streaming uploads to S3/GCS, virus scanning, resumable uploads, signed URLs.
- **GraphQL Services:** Apollo Server, schema stitching, persisted queries.

### Sample Design Prompts
- **Design a real-time notification system**
  - Discuss: WebSocket servers, horizontal scaling with Redis adapter, reconnection strategies, delivery guarantees.
- **Build a high-throughput REST API**
  - Discuss: clustering, load balancing, caching layers, DB connection pooling, observability stack, graceful degradation.

Preparing detailed architectures, trade-offs, and failure-handling strategies for these scenarios significantly boosts interview confidence.

---

## 20. Additional Core Modules & APIs

### Path Module
- **path.join()**: Join path segments properly across platforms
- **path.resolve()**: Resolve absolute path
- **path.basename(), path.dirname(), path.extname()**: Extract path components
- **path.normalize()**: Normalize path strings

**Interview Questions:**
- "Why should you use path.join() instead of string concatenation for paths?"
  - Answer: path.join() handles platform-specific separators (Windows vs Unix), prevents double slashes, and normalizes paths correctly. String concatenation can break across platforms.

### URL Module
- **url.parse()**, **url.format()**: Parse and format URLs
- **URLSearchParams**: Work with query strings
- **URL class**: Modern URL API

**Interview Questions:**
- "How do you parse query strings in Node.js?"
  - Answer: Use URLSearchParams, url.parse() with querystring module, or URL class. URLSearchParams is most modern and recommended.

### Crypto Module
- **Hashing**: crypto.createHash() for SHA-256, MD5, etc.
- **Encryption**: crypto.createCipher(), crypto.createDecipher()
- **HMAC**: crypto.createHmac() for message authentication
- **Random bytes**: crypto.randomBytes() for secure random data
- **Sign/Verify**: crypto.createSign(), crypto.createVerify()

**Interview Questions:**
- "How do you generate secure random tokens in Node.js?"
  - Answer: Use crypto.randomBytes() to generate cryptographically secure random bytes, then encode to hex/base64. Avoid Math.random() for security-sensitive operations.
  
- "What is HMAC and when would you use it?"
  - Answer: HMAC (Hash-based Message Authentication Code) verifies data integrity and authenticity. Use for API signatures, JWT tokens, or verifying data hasn't been tampered.

### Process Module
- **process.env**: Environment variables
- **process.argv**: Command line arguments
- **process.exit()**: Exit process
- **process.nextTick()**: Schedule callback
- **process.on()**: Event listeners (uncaughtException, unhandledRejection)
- **process.cwd()**: Current working directory
- **process.memoryUsage()**: Memory statistics

**Interview Questions:**
- "How do you access environment variables in Node.js?"
  - Answer: Use process.env object. Access like process.env.PORT. Use dotenv package for .env files. Always validate required environment variables at startup.
  
- "What is process.nextTick() and how does it differ from setImmediate()?"
  - Answer: process.nextTick() schedules callback to run before event loop continues (microtask queue). setImmediate() schedules for next event loop iteration (macrotask queue). nextTick has higher priority.

### OS Module
- **os.platform()**: Operating system platform
- **os.arch()**: CPU architecture
- **os.cpus()**: CPU information
- **os.totalmem()**, **os.freemem()**: Memory information
- **os.hostname()**: Hostname
- **os.networkInterfaces()**: Network interfaces

**Interview Questions:**
- "How do you get system information in Node.js?"
  - Answer: Use os module for CPU, memory, platform info. Use process for Node.js specific info. Useful for monitoring, logging, or platform-specific code.

---

## 21. WebSockets & Real-Time Communication

### Socket.IO
- **Real-time bidirectional communication**
- **Fallback mechanisms** (long polling if WebSockets unavailable)
- **Rooms and namespaces** for organizing connections
- **Events and acknowledgments**
- **Scaling with Redis adapter**

**Interview Questions:**
- "How do you implement real-time features in Node.js?"
  - Answer: Use Socket.IO or native WebSocket (ws library). Socket.IO provides fallbacks, rooms, and easier API. Native WebSocket is lighter but requires manual fallback handling.
  
- "How do you scale Socket.IO applications?"
  - Answer: Use Redis adapter to share state across multiple servers. Use sticky sessions or configure load balancer for WebSocket connections. Separate WebSocket servers if needed.
  
- "What is the difference between Socket.IO and native WebSockets?"
  - Answer: Socket.IO provides automatic reconnection, fallbacks, rooms, and simpler API. Native WebSocket (ws) is lighter, standard protocol, but requires more manual handling.

### Native WebSockets (ws library)
- **Lightweight WebSocket implementation**
- **Server and client support**
- **Connection management**
- **Message framing**

**Interview Questions:**
- "When would you choose native WebSockets over Socket.IO?"
  - Answer: When you need minimal overhead, standard protocol, don't need fallbacks, or have specific WebSocket requirements. Better for high-performance scenarios.

---

## 22. GraphQL in Node.js

### Apollo Server
- **GraphQL server implementation**
- **Schema definition and resolvers**
- **Subscriptions for real-time data**
- **Data sources and caching**
- **Error handling and validation**

**Interview Questions:**
- "What are the advantages of GraphQL over REST?"
  - Answer: Clients request only needed data (no over/under-fetching), single endpoint, strong typing, better for mobile apps, self-documenting schema. More flexible but requires more setup.
  
- "How do you implement GraphQL subscriptions in Node.js?"
  - Answer: Use Apollo Server with PubSub for subscriptions. Define subscription in schema, implement resolver with async iterator. Use WebSockets for real-time updates.
  
- "How do you handle N+1 query problems in GraphQL?"
  - Answer: Use DataLoader to batch and cache database queries. DataLoader batches requests within single frame, reducing database calls significantly.

### Schema Design
- **Types, interfaces, unions**
- **Queries, mutations, subscriptions**
- **Input types and scalars**
- **Directives for schema customization**

---

## 23. Microservices Architecture with Node.js

### Service Communication
- **HTTP/REST APIs**: Direct service calls
- **Message queues**: RabbitMQ, Kafka for async communication
- **gRPC**: High-performance RPC framework
- **Service discovery**: Consul, Eureka, Kubernetes services

**Interview Questions:**
- "How do you handle service-to-service communication in microservices?"
  - Answer: Use REST APIs for synchronous calls, message queues (RabbitMQ, Kafka) for async, gRPC for high-performance RPC. Implement service discovery and circuit breakers.
  
- "What is a circuit breaker pattern and why is it important?"
  - Answer: Circuit breaker prevents cascading failures by stopping requests to failing service. Opens circuit after threshold, allows retry after timeout. Use opossum library in Node.js.

### Service Patterns
- **API Gateway**: Single entry point, routing, auth
- **Service mesh**: Istio, Linkerd for communication
- **Event-driven architecture**: Event sourcing, CQRS
- **Saga pattern**: Distributed transactions

---

## 24. Caching Strategies

### In-Memory Caching
- **Node-cache**: Simple in-memory cache
- **LRU cache**: Least Recently Used eviction
- **Memory limits and TTL**

### Distributed Caching
- **Redis**: In-memory data store, pub/sub, persistence
- **Memcached**: Simple key-value cache
- **Cache invalidation strategies**
- **Cache-aside, write-through, write-back patterns**

**Interview Questions:**
- "How do you implement caching in Node.js applications?"
  - Answer: Use in-memory cache (node-cache) for single-server, Redis for distributed. Implement cache-aside pattern: check cache, if miss fetch from DB and cache. Set appropriate TTL.
  
- "What are different cache invalidation strategies?"
  - Answer: TTL-based (time-to-live), event-based (invalidate on data change), manual invalidation, cache versioning. Choose based on data freshness requirements.
  
- "When would you use Redis vs in-memory caching?"
  - Answer: Redis for multi-server deployments, shared cache, persistence needs, or pub/sub. In-memory cache for single-server, faster access, or simple use cases.

---

## 25. Message Queues & Background Jobs

### Bull/BullMQ
- **Redis-based job queue**
- **Job priorities, delays, retries**
- **Job progress tracking**
- **Rate limiting**

### RabbitMQ
- **Message broker with exchanges**
- **Queues, bindings, routing**
- **Durable messages and acknowledgments**
- **Pub/sub patterns**

**Interview Questions:**
- "How do you handle background job processing in Node.js?"
  - Answer: Use Bull/BullMQ with Redis for job queues, or RabbitMQ for message broker. Queue jobs, process with workers, handle retries and failures. Use for async tasks like emails, image processing.
  
- "What is the difference between job queues and message queues?"
  - Answer: Job queues (Bull) are for task processing with progress, retries, priorities. Message queues (RabbitMQ) are for event-driven communication, pub/sub, and routing.

### AWS SQS / Azure Service Bus
- **Cloud-managed queues**
- **Visibility timeout and dead-letter queues**
- **FIFO queues for ordering**

---

## 26. Logging & Monitoring

### Structured Logging
- **Winston**: Feature-rich logger with transports
- **Pino**: Fast, low-overhead logger
- **Log levels**: error, warn, info, debug
- **JSON formatting for log aggregation**

**Interview Questions:**
- "How do you implement logging in Node.js applications?"
  - Answer: Use winston or pino for structured logging. Log to console, files, or remote services. Use log levels appropriately. Include context (request IDs, user IDs) for tracing.
  
- "What is structured logging and why is it important?"
  - Answer: Structured logging uses JSON format with consistent fields. Enables easy parsing, filtering, and aggregation in log management systems. Better than plain text logs.

### Monitoring & Observability
- **APM tools**: New Relic, Datadog, AppDynamics
- **Metrics**: Prometheus, StatsD
- **Tracing**: OpenTelemetry, Zipkin, Jaeger
- **Error tracking**: Sentry, Rollbar

**Interview Questions:**
- "How do you monitor Node.js application performance?"
  - Answer: Use APM tools (New Relic, Datadog) for metrics, tracing (OpenTelemetry) for request flows, error tracking (Sentry) for exceptions. Monitor CPU, memory, response times, error rates.

---

## 27. Advanced Error Handling Patterns

### Error Boundaries
- **Domain errors vs system errors**
- **Error recovery strategies**
- **Graceful degradation**
- **Circuit breakers**

### Error Monitoring
- **Error tracking services**
- **Alerting and notifications**
- **Error aggregation and grouping**
- **Performance impact tracking**

**Interview Questions:**
- "How do you implement graceful error handling in production?"
  - Answer: Catch errors at appropriate levels, log with context, return user-friendly messages, implement retry logic for transient errors, use circuit breakers for external services, monitor error rates.

---

## 28. Security Advanced Topics

### OWASP Top 10
- **Injection attacks**: SQL, NoSQL, command injection
- **Broken authentication**: Session fixation, weak passwords
- **Sensitive data exposure**: Encryption at rest and in transit
- **XXE (XML External Entity)**: XML parser configuration
- **Broken access control**: Authorization checks
- **Security misconfiguration**: Default credentials, open ports
- **XSS (Cross-Site Scripting)**: Input sanitization
- **Insecure deserialization**: Safe deserialization
- **Using components with known vulnerabilities**: Dependency scanning
- **Insufficient logging**: Security event logging

### Secret Management
- **Environment Variables**: Use `.env` files (via `dotenv`) for local dev, but avoid in production.
- **Secret Managers**: Use AWS Secrets Manager, HashiCorp Vault, or Azure Key Vault for production secrets.
- **Encryption**: Secrets should be encrypted at rest and only decrypted at runtime by authorized services.

### Rate Limiting
- **Implementation**: Use middleware like `express-rate-limit`.
- **Distributed Limiting**: For multi-server setups, store rate-limit counters in **Redis** to ensure limits are enforced consistently across all instances.
- **Algorithms**: Fixed window, Sliding window, or Token bucket.

**Interview Questions:**
- "How do you prevent NoSQL injection in Node.js?"
  - Answer: Validate and sanitize input, use parameterized queries, avoid eval() or string concatenation in queries, use ORM/ODM query builders, implement input validation middleware.
  
- "What is CSRF and how do you prevent it?"
  - Answer: Cross-Site Request Forgery tricks users into executing actions. Prevent with CSRF tokens, SameSite cookies, checking Origin/Referer headers, or using double-submit cookies.

---

## 29. Database Advanced Topics

### Connection Pooling
- **Pool configuration**: min, max connections
- **Connection lifecycle management**
- **Timeout and retry logic**
- **Health checks**

**Interview Questions:**
- "How do you configure database connection pooling?"
  - Answer: Set min/max pool size based on expected load, configure idle timeout, implement connection retry logic, monitor pool usage. Default pools usually need tuning for production.
  
- "What happens when connection pool is exhausted?"
  - Answer: Requests wait for available connection or timeout. Can cause cascading failures. Monitor pool usage, increase pool size, optimize queries, or add more database servers.

### Transactions
- **ACID properties**
- **Nested transactions**
- **Transaction isolation levels**
- **Distributed transactions (two-phase commit)**

**Interview Questions:**
- "How do you handle database transactions in Node.js?"
  - Answer: Use transaction methods from ORM (Sequelize, TypeORM) or driver. Begin transaction, execute queries, commit on success, rollback on error. Handle errors properly to avoid hanging transactions.

### Database Migrations
- **Schema versioning**
- **Migration tools**: Knex, Sequelize migrations
- **Rollback strategies**
- **Zero-downtime migrations**

---

## 30. API Design Best Practices

### RESTful API Design
- **Resource naming conventions**
- **HTTP methods and status codes**
- **Pagination and filtering**
- **Versioning strategies**
- **Documentation (OpenAPI/Swagger)**

**Interview Questions:**
- "What are RESTful API design best practices?"
  - Answer: Use nouns for resources, proper HTTP methods, status codes, versioning (URL or header), pagination for lists, filtering/sorting, consistent error format, comprehensive documentation.
  
- "How do you implement API pagination?"
  - Answer: Use offset/limit (simple but inefficient) or cursor-based (efficient for large datasets). Return metadata (total count, next cursor). Cursor-based is better for performance.

### API Documentation
- **OpenAPI/Swagger specification**
- **Auto-generated documentation**
- **Interactive API explorer**
- **Code examples and schemas**

---

## 31. Comprehensive Interview Questions Bank

### Fundamentals
1. **What is Node.js and what makes it different from other server-side technologies?**
   - Answer: Node.js is JavaScript runtime built on Chrome's V8 engine. Single-threaded, event-driven, non-blocking I/O. Great for I/O-bound applications, real-time apps, and APIs. Uses event loop for concurrency.

2. **Explain the Node.js architecture.**
   - Answer: V8 JavaScript engine, libuv for async I/O and event loop, Node.js bindings, and core modules. Event loop handles async operations, thread pool for blocking operations, single main thread for JavaScript execution.

3. **What is npm and how does it work?**
   - Answer: npm (Node Package Manager) manages dependencies, scripts, and package metadata. Uses package.json for configuration, node_modules for packages, package-lock.json for deterministic installs. Registry at npmjs.com.

4. **What is the difference between dependencies and devDependencies?**
   - Answer: dependencies are required at runtime, devDependencies only for development (testing, building, linting). Use --save-dev for devDependencies. Reduces production bundle size.

5. **How does Node.js handle child processes?**
   - Answer: Use child_process module (spawn, exec, fork). Spawn for commands, exec for shell commands, fork for Node scripts. Communicate via IPC, streams, or events. Use for CPU-intensive tasks.

### Performance & Optimization
6. **How do you optimize Node.js application performance?**
   - Answer: Use clustering for multi-core, worker threads for CPU tasks, caching (Redis), connection pooling, code splitting, lazy loading, profiling and optimizing hotspots, use streams for large data.

7. **What is the difference between blocking and non-blocking code?**
   - Answer: Blocking code stops execution until operation completes. Non-blocking code continues execution, uses callbacks/promises for results. Node.js is non-blocking by default for I/O operations.

8. **How do you prevent memory leaks in Node.js?**
   - Answer: Remove event listeners, clear timers/intervals, close streams/connections, avoid global variables, use weak references where appropriate, monitor memory usage, profile with DevTools.

### Real-World Scenarios
9. **How would you design a file upload service?**
   - Answer: Use multer for multipart/form-data, validate file types/sizes, stream to storage (S3/GCS), implement resumable uploads with chunking, progress tracking, virus scanning, signed URLs for access.

10. **How would you implement a rate limiting system?**
    - Answer: Use express-rate-limit or custom middleware. Store limits in memory (single server) or Redis (distributed). Token bucket or sliding window algorithm. Apply per IP, user, or API key.

11. **How would you build a real-time chat application?**
    - Answer: Use Socket.IO or WebSockets, Redis adapter for scaling, store messages in database, implement rooms/channels, presence tracking, message persistence, handle reconnection, implement typing indicators.

12. **How would you implement a caching layer for a REST API?**
    - Answer: Use Redis for distributed cache, cache-aside pattern, set TTL based on data freshness needs, cache invalidation on updates, cache keys with versioning, implement cache warming for hot data.

---

This comprehensive guide covers all major Node.js topics you'll encounter in interviews. Practice implementing these concepts, understand the underlying principles, and be ready to discuss trade-offs and design decisions.

