# Node.js Interview Preparation

This document outlines key concepts and common interview questions related to Node.js, designed to help you prepare for technical interviews.

## 1. Buffers

**What are Buffers?**

* Buffers are a fundamental part of Node.js that provide a way to work with binary data directly. They represent a fixed-size chunk of memory allocated outside of the V8 JavaScript heap, which is crucial for handling raw binary data efficiently.
* Unlike JavaScript strings which are encoded in UTF-8 and limited to text, Buffers can handle any type of binary data including images, audio files, network packets, and more.
* Key characteristics:
  - Fixed size allocation in memory
  - Global object in Node.js (no need to require)
  - Similar to arrays of integers but work on raw memory outside V8 heap
  - Essential for I/O operations, network communication, and file system operations
* Common use cases include:
  - Reading/writing to the filesystem
  - Handling TCP streams and network protocols
  - Processing binary protocols and file formats
  - Working with cryptography and hashing algorithms

**Key Concepts:**

* **Allocation:** `Buffer.alloc(size)`, `Buffer.allocUnsafe(size)`, `Buffer.from(array)`, `Buffer.from(string)`. Understand the differences between `alloc` (zero-filled) and `allocUnsafe` (faster, but potentially contains old data).
* **Reading and Writing:** `buffer.readUInt8(offset)`, `buffer.writeUInt16LE(value, offset)`, etc. Know how to read and write different data types at specific offsets.
* **Encoding:** Understand how to convert between Buffers and strings using different encodings (e.g., UTF-8, ASCII, base64).
* **Slicing and Concatenation:** `buffer.slice()`, `Buffer.concat()`. Be able to manipulate Buffers efficiently.

**Interview Questions:**

* "What are Buffers and why are they needed in Node.js?"
  - Answer: Buffers are raw memory allocations outside V8's heap that provide a way to work with binary data directly. They are essential in Node.js because:
    1. JavaScript strings are Unicode-based and not suitable for handling binary data
    2. They enable efficient handling of I/O operations with binary data
    3. They allow working with TCP streams and file system operations
    4. They're crucial for implementing protocols and working with binary file formats
    5. They provide better performance for large data operations compared to strings
  Example use cases include reading image files, handling network packets, and processing binary protocols.

* "Explain the difference between `Buffer.alloc()` and `Buffer.allocUnsafe()`."
  - Answer: 
    - `Buffer.alloc(size)`: 
      - Allocates a new Buffer of the specified size
      - The memory is initialized (filled with zeros by default)
      - Slower but safer as it ensures no sensitive data leakage
      - Recommended for most use cases where security is important
      
    - `Buffer.allocUnsafe(size)`: 
      - Allocates a new Buffer of the specified size
      - The memory is uninitialized (may contain old data)
      - Faster as it skips memory initialization
      - Potentially exposes sensitive data if not properly initialized
      - Should only be used when performance is critical and you'll immediately overwrite the buffer
      
    Best practice: Always use `Buffer.alloc()` unless you have a specific performance requirement and can guarantee you'll write to the entire buffer before reading from it.

* "How do you convert a Buffer to a string and vice versa?"
  - Answer: 
    - **Buffer to String**: 
      ```javascript
      const buf = Buffer.from('hello', 'utf8');
      const str = buf.toString('utf8'); // 'hello'
      ```
      Supported encodings: 'utf8', 'ascii', 'utf16le', 'ucs2', 'base64', 'base64url', 'latin1', 'binary', 'hex'
      
    - **String to Buffer**:
      ```javascript
      const str = 'hello';
      const buf = Buffer.from(str, 'utf8'); // Creates a Buffer
      ```
      
    - **Important Notes**:
      - Always specify the encoding explicitly for clarity
      - The default encoding is 'utf8' if not specified
      - Be cautious with 'binary' encoding as it's being deprecated in favor of 'latin1'
      - For binary data, consider using 'hex' or 'base64' encodings
      - When working with text, always ensure consistent encoding between Buffer and String conversions

* "Describe a scenario where you would use Buffers."
  - Answer: 
    **Scenario 1: File Processing**
    When building a service that processes image uploads, you'd use Buffers to:
    - Read the uploaded file data
    - Resize or modify the image
    - Save it to disk or cloud storage

    **Scenario 2: Network Communication**
    When implementing a custom protocol or working with raw TCP/UDP:
    ```javascript
    const net = require('net');
    const server = net.createServer((socket) => {
      socket.on('data', (data) => {
        // data is a Buffer containing raw bytes
        const buffer = Buffer.from(data);
        // Process the binary protocol
      });
    });
    ```

    **Scenario 3: Cryptography**
    When working with hashing or encryption:
    ```javascript
    const crypto = require('crypto');
    const hash = crypto.createHash('sha256');
    const data = Buffer.from('sensitive data');
    hash.update(data);
    const digest = hash.digest('hex');
    ```

    **Scenario 4: Binary File Parsing**
    When reading structured binary files (like PNG, ZIP, etc.) where you need to read specific bytes at specific positions.

* "How do you manipulate buffer data?"
  - Answer: Use methods like write(), read(), slice(), copy(), and concat() to modify buffer contents. Access individual bytes using array notation.

* "How do you handle large files using buffers and streams?"
  - Answer: Use streams with appropriate buffer sizes to process large files in chunks, preventing memory overflow and improving performance.

## 2. Security

**Key Areas:**

* **Input Validation and Sanitization:**
  - Validate all user input on both client and server sides
  - Use libraries like `express-validator` or `joi` for schema validation
  - Sanitize input to prevent XSS and injection attacks
  - Implement input whitelisting instead of blacklisting
  - Set proper content types and character encodings

* **Authentication and Authorization:**
  - Implement multi-factor authentication (MFA) for sensitive operations
  - Use OAuth 2.0 or OpenID Connect for third-party authentication
  - Implement proper session management with secure, HttpOnly, and SameSite cookies
  - Use short-lived access tokens and secure refresh token rotation
  - Implement account lockout after failed attempts

* **HTTPS and Secure Communication:**
  - Enforce HTTPS using HSTS (HTTP Strict Transport Security)
  - Implement certificate pinning for mobile applications
  - Use secure cipher suites and disable weak protocols (SSLv3, TLS 1.0, TLS 1.1)
  - Implement secure WebSocket connections (WSS)

* **Password Security:**
  - Use bcrypt, Argon2, or PBKDF2 for password hashing
  - Enforce strong password policies (length, complexity, expiration)
  - Implement secure password reset flows
  - Never log or store plain-text passwords
  - Use password managers and encourage their use

* **CORS (Cross-Origin Resource Sharing):**
  - Configure CORS to allow only trusted origins
  - Avoid using wildcard (*) in production
  - Set appropriate HTTP methods and headers
  - Consider using a proxy server for API requests

* **Security Headers:**
  - `Content-Security-Policy`: Prevent XSS attacks
  - `X-Content-Type-Options: nosniff`: Prevent MIME type sniffing
  - `X-Frame-Options: DENY`: Prevent clickjacking
  - `X-XSS-Protection: 1; mode=block`: Enable XSS filtering
  - `Referrer-Policy`: Control referrer information
  - `Feature-Policy`: Control browser features and APIs

* **Dependency Management:**
  - Regularly update dependencies (`npm audit`, `npm outdated`)
  - Use `npm ci` for reproducible builds
  - Lock dependency versions (package-lock.json, yarn.lock)
  - Use `npm audit` and tools like Snyk or Dependabot
  - Review and minimize dependencies

* **OWASP Top 10 Protection:**
  - Broken Access Control
  - Cryptographic Failures
  - Injection (SQL, NoSQL, Command, LDAP)
  - Insecure Design
  - Security Misconfiguration
  - Vulnerable and Outdated Components
  - Identification and Authentication Failures
  - Software and Data Integrity Failures
  - Security Logging and Monitoring Failures
  - Server-Side Request Forgery (SSRF)

**Interview Questions:**

* **"How do you prevent SQL injection and XSS attacks in Node.js?"**
  - **SQL Injection Prevention**:
    ```javascript
    // BAD - Vulnerable to SQL injection
    const query = `SELECT * FROM users WHERE username = '${username}'`;
    
    // GOOD - Parameterized queries
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], (err, results) => {
      // Handle results
    });
    ```
  - **XSS Prevention**:
    - Use template engines that auto-escape by default (EJS, Pug with `{ escape: true }`)
    - Sanitize user input with libraries like `dompurify` or `xss`
    - Implement Content Security Policy (CSP)
    - Set `X-XSS-Protection: 1; mode=block` header
    - Use `helmet` middleware for security headers

* **"What are JWTs and how are they used for authentication?"**
  - **JWT Structure**:
    - Header: Algorithm and token type
    - Payload: Claims (user data, expiration, etc.)
    - Signature: Verifies token integrity
  - **Implementation**:
    ```javascript
    const jwt = require('jsonwebtoken');
    
    // Create token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) { /* handle error */ }
      // Use decoded data
    });
    ```
  - **Best Practices**:
    - Store tokens in HTTP-only cookies
    - Use short expiration times
    - Implement refresh token rotation
    - Include user context in the payload
    - Use RS256 for asymmetric encryption in microservices

* **"How do you implement secure password storage in Node.js?"**
  ```javascript
  const bcrypt = require('bcrypt');
  const saltRounds = 12;
  
  // Hashing password
  async function hashPassword(password) {
    return await bcrypt.hash(password, saltRounds);
  }
  
  // Verifying password
  async function verifyPassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
  ```
  - **Key Points**:
    - Use work factor (cost) of 12 or higher for bcrypt
    - Store only the hashed password (never plaintext)
    - Use environment variables for secrets
    - Consider using Argon2 for better security

* **"What is CORS and how do you configure it?"**
  ```javascript
  const express = require('express');
  const cors = require('cors');
  
  const app = express();
  
  // Basic CORS configuration
  const corsOptions = {
    origin: ['https://trusted-domain.com', 'https://api.trusted-domain.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 86400, // 24 hours
    preflightContinue: false,
    optionsSuccessStatus: 204
  };
  
  app.use(cors(corsOptions));
  ```
  - **Best Practices**:
    - Be specific with allowed origins
    - Limit HTTP methods
    - Set appropriate headers
    - Configure CORS before routes

* **"What are security headers and why are they important?"**
  ```javascript
  const helmet = require('helmet');
  app.use(helmet());
  
  // Custom security headers
  app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'same-origin');
    res.setHeader('Feature-Policy', "geolocation 'none'; microphone 'none'; camera 'none'");
    next();
  });
  ```
  - **Key Headers**:
    - `Content-Security-Policy`: Prevents XSS and code injection
    - `Strict-Transport-Security`: Enforces HTTPS
    - `X-Content-Type-Options`: Prevents MIME sniffing
    - `X-Frame-Options`: Prevents clickjacking
    - `X-XSS-Protection`: Enables XSS filtering

* **"How do you keep your Node.js application secure?"**
  - **Development**:
    - Use `npm audit` and `npm outdated` regularly
    - Implement pre-commit hooks with `husky` and `lint-staged`
    - Use `eslint-plugin-security`
    - Set up CI/CD with security scanning
  - **Production**:
    - Use environment variables for configuration
    - Implement rate limiting (`express-rate-limit`)
    - Set up logging and monitoring
    - Regular security audits and penetration testing
    - Keep Node.js and dependencies updated

* **"How do you handle user authentication and authorization?"**
  ```javascript
  // Authentication middleware
  const authenticateJWT = (req, res, next) => {
    const token = req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }
      req.user = user;
      next();
    });
  };
  
  // Authorization middleware
  const authorize = (roles = []) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      next();
    };
  };
  
  // Usage
  app.get('/admin', authenticateJWT, authorize(['admin']), (req, res) => {
    // Admin route
  });
  ```

* **"What are some common security vulnerabilities in Node.js applications, and how can they be mitigated?"**
  | Vulnerability | Impact | Mitigation |
  |--------------|--------|------------|
  | **Injection** | Data theft, system compromise | Use parameterized queries, ORM with built-in protection |
  | **Broken Authentication** | Account takeover | Implement MFA, secure session management |
  | **Sensitive Data Exposure** | Data breach | Encrypt data at rest and in transit |
  | **Broken Access Control** | Unauthorized access | Implement proper authorization checks |
  | **Security Misconfiguration** | Various attacks | Harden server, disable unnecessary features |
  | **XSS** | Session hijacking, defacement | Input validation, output encoding |
  | **Insecure Deserialization** | Remote code execution | Validate input, use safe serialization |
  | **Using Components with Known Vulnerabilities** | Exploitation of known issues | Regular updates, dependency scanning |
  | **Insufficient Logging & Monitoring** | Delayed breach detection | Implement comprehensive logging and monitoring |
  | **SSRF** | Internal network access | Validate and sanitize user input, use allowlists |

## 3. Multi-Core Processing in Node.js

**Single-Threaded Event Loop Architecture:**

* **Event Loop**: Node.js uses a single-threaded event loop for handling asynchronous I/O operations, making it highly efficient for I/O-bound tasks.
* **Non-Blocking I/O**: Utilizes libuv's thread pool (default size: 4) to handle potentially blocking operations like filesystem or DNS operations.
* **CPU-Bound Limitation**: The single-threaded nature means CPU-intensive tasks can block the event loop, causing performance issues.

**Multi-Core Processing Strategies:**

### 1. Child Processes (`child_process` module)
```javascript
const { fork } = require('child_process');

// Fork a new Node.js process
const child = fork('worker.js');

// Send message to child
child.send({ task: 'process_data', data: largeDataSet });

// Handle response from child
child.on('message', (result) => {
  console.log('Result from child:', result);
});

// worker.js
process.on('message', async ({ task, data }) => {
  if (task === 'process_data') {
    const result = await cpuIntensiveTask(data);
    process.send(result);
  }
});
```

### 2. Clustering (`cluster` module)
```javascript
const cluster = require('cluster');
const os = require('os');
const http = require('http');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master ${process.pid} is running`);
  
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork(); // Restart worker
  });
} else {
  // Workers can share any TCP connection
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello from worker ${process.pid}\n`);
  }).listen(8000);
  
  console.log(`Worker ${process.pid} started`);
}
```

### 3. Worker Threads (`worker_threads` module)
```javascript
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  // Main thread
  const worker = new Worker(__filename, {
    workerData: { /* data to pass to worker */ }
  });
  
  worker.on('message', (result) => {
    console.log('Worker result:', result);
  });
  
  worker.on('error', (err) => {
    console.error('Worker error:', err);
  });
  
  worker.on('exit', (code) => {
    if (code !== 0) {
      console.error(`Worker stopped with exit code ${code}`);
    }
  });
} else {
  // Worker thread
  const heavyComputation = (data) => {
    // CPU-intensive task
    return data * 2;
  };
  
  const result = heavyComputation(workerData);
  parentPort.postMessage({ result });
}
```

**Comparison of Multi-Processing Approaches**

| Feature | **Child Process** | **Cluster** | **Worker Threads** |
|---------|------------------|-------------|-------------------|
| **Isolation** | Separate V8 instance, memory | Separate V8 instance, memory | Shared memory possible |
| **Communication** | IPC (slower) | IPC (slower) | SharedArrayBuffer (faster) |
| **Use Case** | Run separate programs | Scale HTTP servers | CPU-intensive JS tasks |
| **Overhead** | High | High | Low |
| **Port Sharing** | No | Yes | N/A |
| **Best For** | Running non-Node.js code | Stateless HTTP servers | CPU-bound JavaScript |

**Interview Questions & Answers:**

* **"Explain the single-threaded nature of Node.js and its implications."**
  - **Single-Threaded Model**: Node.js runs JavaScript in a single thread with an event loop, making it highly efficient for I/O-bound operations.
  - **Implications**:
    - ✅ Excellent for handling many concurrent connections with low overhead
    - ❌ CPU-intensive tasks block the event loop
    - 🔄 Uses libuv's thread pool for potentially blocking operations
    - 📈 Scales well for I/O-bound workloads but needs special handling for CPU-bound tasks

* **"How can you utilize multi-core systems in Node.js?"**
  - **Cluster Module**:
    ```javascript
    const cluster = require('cluster');
    if (cluster.isMaster) {
      // Fork workers based on CPU cores
      for (let i = 0; i < require('os').cpus().length; i++) {
        cluster.fork();
      }
    } else {
      // Worker code
      require('./server');
    }
    ```
  - **Worker Threads**:
    ```javascript
    const { Worker } = require('worker_threads');
    const worker = new Worker(require.resolve('./worker.js'), {
      workerData: { /* data */ }
    });
    ```
  - **Child Processes**:
    ```javascript
    const { fork } = require('child_process');
    const child = fork('cpu-intensive-task.js');
    ```

* **"What's the difference between cluster, child_process, and worker_threads?"**
  - **Cluster**:
    - Multiple Node.js worker processes
    - Shares server ports
    - Best for scaling HTTP servers
    - No shared memory between workers
  - **Child Process**:
    - Spawns new system processes
    - Can run any executable
    - Heavyweight (separate V8 instance)
    - Good for running non-Node.js programs
  - **Worker Threads**:
    - Lightweight threads within same process
    - Can share memory (SharedArrayBuffer)
    - Lower overhead than processes
    - Best for CPU-bound JavaScript tasks

* **"When would you use the cluster module?"**
  - **Ideal Use Cases**:
    - Scaling stateless HTTP/HTTPS servers
    - Handling multiple concurrent connections
    - When you need automatic process management
    - Zero-downtime restarts with PM2 or similar
  - **Implementation Example**:
    ```javascript
    // Graceful shutdown
    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died`);
      if (!worker.exitedAfterDisconnect) {
        console.log('Starting a new worker');
        cluster.fork();
      }
    });
    ```

* **"How do you handle CPU-bound tasks in Node.js?"**
  - **Strategies**:
    1. **Worker Threads** (Best for pure JavaScript CPU tasks):
       ```javascript
       const { Worker } = require('worker_threads');
       function runService(workerData) {
         return new Promise((resolve, reject) => {
           const worker = new Worker('./worker.js', { workerData });
           worker.on('message', resolve);
           worker.on('error', reject);
           worker.on('exit', (code) => {
             if (code !== 0)
               reject(new Error(`Worker stopped with exit code ${code}`));
           });
         });
       }
       ```
    2. **Task Partitioning**: Break into smaller chunks
       ```javascript
       function processInChunks(data, chunkSize, processChunk) {
         return new Promise((resolve) => {
           let results = [];
           let index = 0;
           
           function next() {
             const chunk = data.slice(index, index + chunkSize);
             if (chunk.length === 0) return resolve(results);
             
             // Process chunk in next tick to avoid blocking
             process.nextTick(() => {
               results = results.concat(processChunk(chunk));
               index += chunkSize;
               next();
             });
           }
           
           next();
         });
       }
       ```
    3. **Native Addons**: For extreme performance needs
    4. **Microservices**: Offload to specialized services

* **"How does the thread pool work in Node.js?"**
  - **Default Size**: 4 threads (configurable via `UV_THREADPOOL_SIZE`)
  - **Handles**:
    - File system operations
    - DNS lookups
    - Some crypto operations
    - Some ZLIB operations
  - **Configuration**:
    ```bash
    # Increase thread pool size
    UV_THREADPOOL_SIZE=8 node server.js
    ```
  - **Best Practices**:
    - Don't set it too high (memory overhead)
    - Consider using worker threads for CPU-bound tasks instead
    - Monitor thread pool usage with `process._getActiveHandles()`

* **"How would you implement zero-dowtime restarts in a Node.js application?"**
  ```javascript
  // In master process
  process.on('SIGUSR2', () => {
    const workers = Object.values(cluster.workers);
    
    const restartWorker = (workerIndex) => {
      if (workerIndex >= workers.length) return;
      
      const worker = workers[workerIndex];
      console.log(`Restarting worker ${worker.process.pid}`);
      
      const newWorker = cluster.fork();
      
      newWorker.on('listening', () => {
        worker.send('shutdown');
      });
      
      worker.on('disconnect', () => {
        // Give the worker some time to close connections
        setTimeout(() => {
          if (worker.isDead()) return;
          worker.kill('SIGKILL');
        }, 5000);
      });
      
      newWorker.on('online', () => {
        restartWorker(workerIndex + 1);
      });
    };
    
    restartWorker(0);
  });
  ```

## 4. Event Loop & Timing Functions

### Understanding the Node.js Event Loop

The event loop is what allows Node.js to perform non-blocking I/O operations despite being single-threaded. Here's a comprehensive breakdown:

**Event Loop Phases (in order of execution):**

1. **Timers Phase**
   - Executes callbacks scheduled by `setTimeout()` and `setInterval()`
   - Only processes timers that have reached their threshold
   - Example:
     ```javascript
     setTimeout(() => console.log('timeout'), 0);
     setImmediate(() => console.log('immediate'));
     // Order might vary due to the event loop phase execution
     ```

2. **Pending I/O Callbacks**
   - Executes I/O callbacks deferred from previous iterations
   - Handles TCP errors, system errors, etc.
   - Example of a deferred callback:
     ```javascript
     const fs = require('fs');
     fs.readFile('/nonexistent', (err) => {
       // This error callback runs in the pending phase
       console.error('Error:', err);
     });
     ```

3. **Idle, Prepare (Internal Use)**
   - Used internally by Node.js for housekeeping
   - Not typically used in application code

4. **Poll Phase**
   - Retrieves new I/O events
   - Executes I/O-related callbacks (file system, network, etc.)
   - If no timers are scheduled, it will wait for new I/O events
   - Example:
     ```javascript
     const fs = require('fs');
     
     // This I/O operation's callback will be processed in the poll phase
     fs.readFile('example.txt', (err, data) => {
       console.log('File read complete');
     });
     ```

5. **Check Phase**
   - `setImmediate()` callbacks are executed here
   - Runs immediately after the poll phase completes
   - Example:
     ```javascript
     setImmediate(() => {
       console.log('This runs in the check phase');
     });
     ```

6. **Close Callbacks**
   - Executes close event callbacks (e.g., `socket.on('close', ...)`)
   - Example:
     ```javascript
     const server = require('http').createServer();
     server.on('connection', (socket) => {
       socket.on('close', () => {
         console.log('Connection closed');
       });
     });
     ```

**Microtask Queue (Not Part of Event Loop Phases)**
- Processed after the current operation completes and before the event loop continues
- Includes:
  - `process.nextTick()` callbacks (highest priority)
  - Resolved Promise callbacks (`.then()`, `async/await`)
- Example showing execution order:
  ```javascript
  console.log('Start');
  
  // Macrotask (Timer Phase)
  setTimeout(() => console.log('setTimeout'), 0);
  
  // Microtask (Next Tick Queue)
  process.nextTick(() => console.log('nextTick 1'));
  
  // Microtask (Promise Queue)
  Promise.resolve().then(() => console.log('Promise 1'));
  
  // Microtask (Next Tick Queue)
  process.nextTick(() => {
    console.log('nextTick 2');
    // Adding another microtask from within a microtask
    Promise.resolve().then(() => console.log('Nested Promise'));
  });
  
  console.log('End');
  
  // Output Order:
  // Start
  // End
  // nextTick 1
  // nextTick 2
  // Promise 1
  // Nested Promise
  // setTimeout
  ```

### Timing Functions in Depth

#### 1. `setTimeout` & `setInterval`
```javascript
// Basic usage
const timeoutId = setTimeout(() => {
  console.log('This runs after 1 second');
}, 1000);

// Clear the timeout
clearTimeout(timeoutId);

// setInterval example
let counter = 0;
const intervalId = setInterval(() => {
  console.log(`Interval ${++counter}`);
  if (counter >= 5) {
    clearInterval(intervalId);
  }
}, 500);
```

#### 2. `setImmediate` vs `process.nextTick`
```javascript
console.log('Start');

setImmediate(() => {
  console.log('setImmediate - runs in the check phase');
});

process.nextTick(() => {
  console.log('nextTick - runs before the event loop continues');
});

console.log('End');

// Output Order:
// Start
// End
// nextTick - runs before the event loop continues
// setImmediate - runs in the check phase
```

#### 3. `performance.now()` for High-Resolution Timing
```javascript
const { performance } = require('perf_hooks');

// Basic usage
const start = performance.now();

// Some operation
let sum = 0;
for (let i = 0; i < 1000000; i++) {
  sum += i;
}

const end = performance.now();
console.log(`Operation took ${(end - start).toFixed(3)}ms`);

// Measuring async operations
async function measureAsync() {
  const start = performance.now();
  
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const end = performance.now();
  console.log(`Async operation took ${(end - start).toFixed(3)}ms`);
}

measureAsync();
```

### Common Interview Questions & Answers

#### 1. "Explain the event loop in Node.js"
- **Answer**: The event loop is Node.js's mechanism for handling asynchronous operations. It's a single-threaded loop that processes events from various queues. The event loop has several phases (timers, I/O callbacks, idle/prepare, poll, check, close callbacks) that it cycles through, executing callbacks from each phase's queue. This allows Node.js to handle many concurrent operations with a single thread by delegating I/O operations to the system kernel and processing callbacks when operations complete.

#### 2. "What's the difference between `setImmediate` and `process.nextTick`?"
- **Answer**:
  - `process.nextTick()`:
    - Runs before the event loop continues to the next phase
    - Higher priority than `setImmediate`
    - Can lead to I/O starvation if overused
    - Part of the microtask queue
  - `setImmediate()`:
    - Runs in the check phase of the event loop
    - Lower priority than `process.nextTick`
    - More fair to I/O operations
    - Better for breaking up long-running operations

#### 3. "How would you implement a debounce function?"
```javascript
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// Usage
const debouncedSearch = debounce((query) => {
  console.log(`Searching for: ${query}`);
  // API call would go here
}, 300);

// Will only execute once after 300ms of no calls
debouncedSearch('node');
debouncedSearch('node.js');
```

#### 4. "Explain the difference between microtasks and macrotasks"
- **Answer**:
  - **Microtasks**:
    - Processed after the current operation completes and before the event loop continues
    - Includes: `process.nextTick()`, `Promise` callbacks, `queueMicrotask()`
    - Higher priority than macrotasks
  - **Macrotasks**:
    - Processed in the event loop phases
    - Includes: `setTimeout`, `setInterval`, `setImmediate`, I/O callbacks
    - Lower priority than microtasks

#### 5. "How would you implement a simple rate limiter?"
```javascript
class RateLimiter {
  constructor(limit, interval) {
    this.limit = limit;
    this.interval = interval;
    this.requests = [];
  }

  canProceed() {
    const now = Date.now();
    // Remove requests older than the interval
    this.requests = this.requests.filter(time => now - time < this.interval);
    
    if (this.requests.length < this.limit) {
      this.requests.push(now);
      return true;
    }
    return false;
  }
}

// Usage
const apiLimiter = new RateLimiter(5, 60000); // 5 requests per minute

// In your route handler
function handleRequest(req, res) {
  if (!apiLimiter.canProceed()) {
    return res.status(429).send('Too Many Requests');
  }
  // Process the request
  res.send('Request processed');
}
```

#### 6. "What's the difference between `setTimeout(fn, 0)` and `setImmediate(fn)`?"
- **Answer**:
  - `setTimeout(fn, 0)`: 
    - Schedules the callback to be executed in the next timers phase
    - The actual delay may be longer than 0ms (minimum delay is 1ms in modern browsers/Node.js)
  - `setImmediate(fn)`:
    - Schedules the callback to be executed in the check phase
    - More efficient than `setTimeout(fn, 0)` as it doesn't involve the timers phase
    - In the main module, the order between them is non-deterministic, but in I/O callbacks, `setImmediate` always runs first

#### 7. "How would you measure the performance of an async operation?"
```javascript
const { performance, PerformanceObserver } = require('perf_hooks');

// Method 1: Using performance.mark()
async function measureOperation() {
  performance.mark('start');
  
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 100));
  
  performance.mark('end');
  performance.measure('Async Operation', 'start', 'end');
  
  const measure = performance.getEntriesByName('Async Operation')[0];
  console.log(`Operation took ${measure.duration.toFixed(2)}ms`);
  
  // Clean up
  performance.clearMarks();
  performance.clearMeasures();
}

// Method 2: Using PerformanceObserver
const obs = new PerformanceObserver((items) => {
  const entries = items.getEntries();
  console.log(entries[0].duration);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

// Usage
performance.mark('start');
setTimeout(() => {
  performance.mark('end');
  performance.measure('Timeout', 'start', 'end');
}, 100);
```

## 5. Streams in Node.js

### Understanding Streams

Streams are a powerful abstraction in Node.js for handling data flow in a memory-efficient way. They process data in chunks, making them ideal for working with large datasets or real-time data without consuming excessive memory.

### Core Stream Types

#### 1. Readable Streams
Source of data that can be read from (e.g., reading from a file, HTTP request).

```javascript
const fs = require('fs');

// Creating a readable stream
const readableStream = fs.createReadStream('largefile.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024 // 64KB chunks
});

// Reading data
readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data`);
});

// End of stream
readableStream.on('end', () => {
  console.log('No more data');
});

// Error handling
readableStream.on('error', (error) => {
  console.error('Error reading file:', error);
});
```

#### 2. Writable Streams
Destination to which data can be written (e.g., writing to a file, HTTP response).

```javascript
const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

// Writing data
writableStream.write('First line\n');
writableStream.write('Second line\n');
writableStream.end('Final line\n'); // End the stream

// Handle finish event
writableStream.on('finish', () => {
  console.log('All writes are now complete');
});

// Handle errors
writableStream.on('error', (error) => {
  console.error('Error writing to file:', error);
});
```

#### 3. Duplex Streams
Streams that are both Readable and Writable (e.g., TCP sockets).

```javascript
const { Duplex } = require('stream');

const myDuplex = new Duplex({
  write(chunk, encoding, callback) {
    console.log('Received:', chunk.toString());
    callback();
  },
  
  read(size) {
    // Push data to be read
    if (this.currentCharCode > 90) { // Stop at 'Z'
      this.push(null); // Signal end of stream
      return;
    }
    this.push(String.fromCharCode(this.currentCharCode++));
  }
});

// Initialize counter
myDuplex.currentCharCode = 65; // 'A'

// Read from the stream
myDuplex.on('data', chunk => {
  console.log('Read:', chunk.toString());
});

// Write to the stream
myDuplex.write('Hello');
myDuplex.end();
```

#### 4. Transform Streams
Special type of Duplex stream that transforms data as it's written and read (e.g., compression, encryption).

```javascript
const { Transform } = require('stream');

// Custom transform stream that converts to uppercase
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

// Using the transform stream
process.stdin
  .pipe(upperCaseTransform)
  .pipe(process.stdout);

console.log('Type something (Ctrl+C to exit):');
```

### Stream Piping
Piping connects multiple streams together, automatically handling backpressure.

```javascript
const fs = require('fs');
const zlib = require('zlib');

// Basic pipe
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('output.txt.gz'))
  .on('finish', () => console.log('File compressed'));

// Using pipeline (recommended for better error handling)
const { pipeline } = require('stream/promises');

async function processFile() {
  try {
    await pipeline(
      fs.createReadStream('input.txt'),
      // Add transform streams here
      zlib.createGzip(),
      fs.createWriteStream('output.txt.gz')
    );
    console.log('Pipeline succeeded');
  } catch (err) {
    console.error('Pipeline failed:', err);
  }
}

processFile();
```

### Backpressure Handling

Backpressure occurs when the data producer is faster than the consumer. Here's how to handle it:

```javascript
const fs = require('fs');

// Producer (fast)
const readable = fs.createReadStream('largefile.txt');

// Consumer (slow)
const writable = fs.createWriteStream('output.txt');

// Handle backpressure manually
readable.on('data', (chunk) => {
  const canContinue = writable.write(chunk);
  
  if (!canContinue) {
    // Pause the readable stream when the writable stream's buffer is full
    console.log('Backpressure: Pausing readable stream');
    readable.pause();
    
    // Resume when the writable stream is ready again
    writable.once('drain', () => {
      console.log('Backpressure: Resuming readable stream');
      readable.resume();
    });
  }
});

// Handle stream completion
readable.on('end', () => {
  writable.end('\n--- End of file ---\n');
});

writable.on('finish', () => {
  console.log('Write completed');
});
```

### Object Mode
Streams can work with JavaScript objects instead of just strings and buffers.

```javascript
const { Readable } = require('stream');

// Create a readable stream in object mode
const objectStream = new Readable({
  objectMode: true,
  read() {}
});

// Push objects to the stream
objectStream.push({ name: 'Alice', age: 30 });
objectStream.push({ name: 'Bob', age: 25 });
objectStream.push(null); // Signal end of stream

// Consume the stream
objectStream.on('data', (obj) => {
  console.log(`Name: ${obj.name}, Age: ${obj.age}`);
});
```

### Common Interview Questions & Answers

#### 1. "What are streams and why are they important in Node.js?"
- **Answer**: Streams are collections of data that might not be available all at once and don't have to fit in memory. They're important because:
  - **Memory Efficiency**: Process data in chunks instead of loading everything into memory
  - **Time Efficiency**: Start processing data as soon as it's available
  - **Composability**: Can be piped together to create complex data processing pipelines
  - **Built-in Support**: Many Node.js core modules implement the stream interface

#### 2. "Explain the different types of streams in Node.js"
- **Answer**:
  1. **Readable**: Source of data that can be read from (e.g., `fs.createReadStream`)
  2. **Writable**: Destination to which data can be written (e.g., `fs.createWriteStream`)
  3. **Duplex**: Both readable and writable (e.g., TCP sockets)
  4. **Transform**: A type of duplex stream that can modify data as it's being read/written (e.g., `zlib.createGzip`)

#### 3. "What is backpressure in Node.js streams and how do you handle it?"
- **Answer**: Backpressure occurs when the data producer is faster than the consumer. Handling methods:
  - **Using `pipe()`**: Automatically handles backpressure
  - **Manual handling**: Check `writable.write()` return value and pause/resume streams
  - **Using `pipeline`**: Handles backpressure and cleans up resources on error
  - **High Water Mark**: Configure buffer size using `highWaterMark` option

#### 4. "How would you process a very large CSV file using streams?"
```javascript
const fs = require('fs');
const { Transform } = require('stream');
const csv = require('csv-parser');

// Transform stream to process each row
const processRow = new Transform({
  objectMode: true,
  transform(row, encoding, callback) {
    // Process each row (e.g., transform data, filter, etc.)
    const processed = {
      ...row,
      processedAt: new Date().toISOString()
    };
    this.push(JSON.stringify(processed) + '\n');
    callback();
  }
});

// Process the file
fs.createReadStream('large-file.csv')
  .pipe(csv())
  .pipe(processRow)
  .pipe(fs.createWriteStream('output.ndjson'))
  .on('finish', () => console.log('Processing complete'));
```

#### 5. "What's the difference between `pipe()` and `pipeline()`?"
- **Answer**:
  - **`pipe()`**:
    - Chains streams together
    - Doesn't automatically handle errors in the pipeline
    - Returns the destination stream
    - Doesn't automatically close all streams on error
  - **`pipeline()`**:
    - Takes any number of streams as arguments
    - Properly handles errors and cleans up resources
    - Returns a promise that resolves when the pipeline is complete
    - Automatically destroys all streams if one fails

#### 6. "How would you implement a custom transform stream?"
```javascript
const { Transform } = require('stream');

class JSONParser extends Transform {
  constructor(options = {}) {
    super({ ...options, objectMode: true });
    this.buffer = '';
  }
  
  _transform(chunk, encoding, callback) {
    this.buffer += chunk.toString();
    
    // Try to parse complete JSON objects
    let boundary;
    while ((boundary = this.buffer.indexOf('}')) !== -1) {
      try {
        const jsonStr = this.buffer.substring(0, boundary + 1);
        const data = JSON.parse(jsonStr);
        this.push(data);
        this.buffer = this.buffer.substring(boundary + 1).trim();
      } catch (err) {
        // If parsing fails, wait for more data
        break;
      }
    }
    
    callback();
  }
  
  _flush(callback) {
    // Process any remaining data
    if (this.buffer) {
      try {
        const data = JSON.parse(this.buffer);
        this.push(data);
      } catch (err) {
        this.emit('error', new Error('Invalid JSON at end of stream'));
      }
    }
    callback();
  }
}

// Usage
const parser = new JSONParser();
parser.on('data', (data) => {
  console.log('Parsed:', data);
});

parser.write('{"name":"Alice"}\n{"name":"Bob"}');
parser.end('{"name":"Charlie"}');
```

#### 7. "How would you handle errors in a stream pipeline?"
```javascript
const fs = require('fs');
const { pipeline } = require('stream/promises');
const zlib = require('zlib');

async function processWithErrorHandling() {
  try {
    await pipeline(
      fs.createReadStream('input.txt'),
      // Add error handler to the transform stream
      (() => {
        const transform = new Transform({
          transform(chunk, encoding, callback) {
            try {
              // Some processing that might throw
              if (chunk.includes('error')) {
                throw new Error('Invalid data encountered');
              }
              this.push(chunk);
              callback();
            } catch (err) {
              callback(err); // Forward the error
            }
          }
        });
        
        // Add error handler to the transform stream
        transform.on('error', (err) => {
          console.error('Transform error:', err.message);
        });
        
        return transform;
      })(),
      zlib.createGzip(),
      fs.createWriteStream('output.txt.gz')
    );
    
    console.log('Pipeline completed successfully');
  } catch (err) {
    console.error('Pipeline failed:', err.message);
  }
}

processWithErrorHandling();
```

### Performance Considerations

1. **Buffer Sizing**: Adjust `highWaterMark` based on your use case
   ```javascript
   const stream = fs.createReadStream('file.txt', {
     highWaterMark: 1024 * 1024 // 1MB chunks
   });
   ```

2. **Concurrency Control**: Use libraries like `p-limit` or `p-queue` for parallel processing

3. **Memory Management**: Be cautious with object mode streams as they can consume more memory

4. **Error Handling**: Always handle errors on all streams in the pipeline

5. **Resource Cleanup**: Use `stream.destroy()` or `pipeline()` to ensure proper cleanup

### Real-world Use Cases

1. **File Processing**: Process large files line by line
2. **Data Transformation**: Convert between formats (CSV to JSON, etc.)
3. **Log Processing**: Process log files in real-time
4. **HTTP Requests/Responses**: Handle large uploads/downloads
5. **Real-time Data**: Process real-time data from WebSockets or other sources

## 6. Event Emitter in Node.js

### Understanding Event Emitter

The `EventEmitter` class is a core Node.js module that facilitates communication between objects in Node.js. It's the foundation of Node's asynchronous event-driven architecture and is used by many built-in modules like `http`, `fs`, and `net`.

### Basic Usage

```javascript
const EventEmitter = require('events');

// Create a new event emitter instance
const myEmitter = new EventEmitter();

// Listen for an event
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit an event
myEmitter.emit('greet', 'Alice'); // Output: Hello, Alice!
```

### Key Features

#### 1. Multiple Listeners
```javascript
const emitter = new EventEmitter();

// First listener
emitter.on('data', (data) => {
  console.log('Listener 1:', data);
});

// Second listener (gets called after the first)
emitter.on('data', (data) => {
  console.log('Listener 2:', data.toUpperCase());
});

emitter.emit('data', 'test');
// Output:
// Listener 1: test
// Listener 2: TEST
```

#### 2. Once-Only Listeners
```javascript
emitter.once('connection', () => {
  console.log('Connection established (this will only run once)');
});

emitter.emit('connection'); // This triggers the listener
emitter.emit('connection'); // This does nothing
```

#### 3. Error Handling
```javascript
emitter.on('error', (error) => {
  console.error('An error occurred:', error.message);
});

// This will trigger the 'error' event
emitter.emit('error', new Error('Something went wrong'));
```

### Advanced Patterns

#### 1. Extending EventEmitter
```javascript
class User extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
  
  save() {
    // Simulate async operation
    setImmediate(() => {
      this.emit('saved', { id: Date.now(), name: this.name });
    });
    return this;
  }
}

const user = new User('Alice');
user.on('saved', (data) => {
  console.log('User saved:', data);
});

user.save();
```

#### 2. Request-Response Pattern
```javascript
class Responder extends EventEmitter {
  constructor() {
    super();
    this.on('request', (data, callback) => {
      console.log('Request received:', data);
      // Process the request
      const response = { status: 'success', data: 'Processed' };
      callback(response);
    });
  }
}

const responder = new Responder();
responder.emit('request', { action: 'getUser' }, (response) => {
  console.log('Response:', response);
});
```

### Performance Considerations

1. **Memory Leaks**
   - Always remove event listeners when they're no longer needed
   - Use `emitter.off()` or `emitter.removeListener()`
   - The `events.defaultMaxListeners` property sets the maximum number of listeners (default: 10)

2. **Error Handling**
   - Always handle 'error' events
   - Use domains or async/await with event emitters for better error handling

### Common Interview Questions & Answers

#### 1. "What is the Observer pattern and how does EventEmitter implement it?"
- **Answer**: The Observer pattern defines a one-to-many dependency between objects. When one object changes state, all its dependents are notified. EventEmitter implements this pattern through its `on()` (subscribe) and `emit()` (notify) methods, allowing multiple listeners to react to the same event.

#### 2. "How would you implement a simple EventEmitter class?"
```javascript
class SimpleEventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return this;
  }
  
  emit(event, ...args) {
    if (!this.events[event]) return false;
    
    for (const listener of this.events[event]) {
      try {
        listener.apply(this, args);
      } catch (err) {
        console.error(`Error in ${event} handler:`, err);
      }
    }
    
    return true;
  }
  
  off(event, listenerToRemove) {
    if (!this.events[event]) return this;
    
    this.events[event] = this.events[event]
      .filter(listener => listener !== listenerToRemove);
    
    return this;
  }
}
```

#### 3. "What's the difference between `process.nextTick()` and `setImmediate()` with respect to event emitters?"
- **Answer**: 
  - `process.nextTick()` schedules the callback to run in the same phase of the event loop, before any I/O events or timers fire. This can lead to I/O starvation if overused.
  - `setImmediate()` schedules the callback to run in the check phase of the event loop, after I/O events. It's more efficient for event emission as it prevents blocking I/O operations.

#### 4. "How would you handle memory leaks with EventEmitters?"
```javascript
// 1. Always remove listeners when done
const handler = () => console.log('Event fired');
emitter.on('event', handler);
// Later...
emitter.off('event', handler);

// 2. Set max listeners
emitter.setMaxListeners(20); // Increase if needed

// 3. Use EventEmitter.once() for one-time events
emitter.once('connection', handleConnection);

// 4. Use tools to detect leaks
if (emitter.listenerCount('event') > 10) {
  console.warn('Possible memory leak detected');
}
```

#### 5. "How would you implement a simple pub/sub system using EventEmitter?"
```javascript
class PubSub {
  constructor() {
    this.topics = {};
    this.subId = 0;
  }
  
  subscribe(topic, callback) {
    if (!this.topics[topic]) {
      this.topics[topic] = {};
    }
    
    const id = ++this.subId;
    this.topics[topic][id] = callback;
    
    return () => {
      delete this.topics[topic][id];
      if (Object.keys(this.topics[topic]).length === 0) {
        delete this.topics[topic];
      }
    };
  }
  
  publish(topic, data) {
    if (!this.topics[topic]) return;
    
    Object.values(this.topics[topic]).forEach(callback => {
      try {
        callback(data);
      } catch (err) {
        console.error(`Error in ${topic} subscriber:`, err);
      }
    });
  }
}

// Usage
const pubsub = new PubSub();
const unsubscribe = pubsub.subscribe('news', (data) => {
  console.log('News update:', data);
});

pubsub.publish('news', 'Breaking: Node.js 20 released!');
unsubscribe(); // Clean up
```

### Real-world Use Cases

1. **Chat Applications**: Real-time message broadcasting
2. **Logging Systems**: Centralized logging with multiple outputs
3. **Plugin Architectures**: Allowing plugins to hook into application events
4. **State Management**: Notifying components of state changes
5. **API Rate Limiting**: Tracking and limiting API requests

## 7. File System (fs) Module

### Understanding the fs Module

The `fs` module provides a comprehensive set of methods for interacting with the file system. It supports both synchronous and asynchronous operations, with the asynchronous methods being preferred for non-blocking I/O.

### Core Operations

#### 1. Reading Files

**Asynchronous with Callbacks:**
```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});
```

**With Promises (fs.promises):**
```javascript
const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}
```

**Synchronous (Blocking):**
```javascript
const fs = require('fs');

try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}
```

#### 2. Writing Files

**Asynchronous:**
```javascript
const fs = require('fs').promises;

async function writeFile() {
  try {
    await fs.writeFile('output.txt', 'Hello, World!', 'utf8');
    console.log('File written successfully');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}
```

**Appending to Files:**
```javascript
const fs = require('fs').promises;

async function appendToFile() {
  try {
    await fs.appendFile('log.txt', `${new Date().toISOString()} - Log entry\n`);
  } catch (err) {
    console.error('Error appending to file:', err);
  }
}
```

#### 3. Working with Directories

**Creating Directories:**
```javascript
const fs = require('fs').promises;

// Create directory (recursive: true creates parent directories if they don't exist)
async function createDirectory() {
  try {
    await fs.mkdir('new-directory', { recursive: true });
    console.log('Directory created');
  } catch (err) {
    console.error('Error creating directory:', err);
  }
}
```

**Reading Directories:**
```javascript
const fs = require('fs').promises;

async function listFiles() {
  try {
    const files = await fs.readdir('.');
    console.log('Files in directory:', files);
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}
```

### File Metadata and Stats

```javascript
const fs = require('fs').promises;

async function getFileStats() {
  try {
    const stats = await fs.stat('example.txt');
    console.log('Is file?', stats.isFile());
    console.log('Is directory?', stats.isDirectory());
    console.log('Size in bytes:', stats.size);
    console.log('Created:', stats.birthtime);
    console.log('Last modified:', stats.mtime);
  } catch (err) {
    console.error('Error getting file stats:', err);
  }
}
```

### File System Watchers

**Using `fs.watch` (more efficient):**
```javascript
const fs = require('fs');

// Watch for changes in a file or directory
const watcher = fs.watch('example.txt', (eventType, filename) => {
  console.log(`Event type: ${eventType}`);
  if (filename) {
    console.log(`File affected: ${filename}`);
  }
});

// Stop watching after 30 seconds
setTimeout(() => {
  watcher.close();
  console.log('Stopped watching file');
}, 30000);
```

### Common Interview Questions & Answers

#### 1. "How would you read a large file without blocking the event loop?"
- **Answer**: Use `fs.createReadStream()` to read the file in chunks, which is memory-efficient and non-blocking. This is particularly important for large files that shouldn't be loaded entirely into memory.

```javascript
const fs = require('fs');
const readStream = fs.createReadStream('largefile.txt', {
  encoding: 'utf8',
  highWaterMark: 1024 * 1024 // 1MB chunks
});

readStream.on('data', (chunk) => {
  // Process each chunk
  console.log(`Received ${chunk.length} bytes of data`);
});

readStream.on('end', () => {
  console.log('Finished reading file');
});

readStream.on('error', (err) => {
  console.error('Error reading file:', err);
});
```

#### 2. "What's the difference between `fs.readFile` and `fs.createReadStream`?"
- **`fs.readFile`**:
  - Reads the entire file into memory
  - Simpler API but less efficient for large files
  - Better for small files or when you need the entire content at once
  
- **`fs.createReadStream`**:
  - Reads the file in chunks (streams)
  - More memory efficient for large files
  - Better performance for processing large files
  - Can be piped to other streams

#### 3. "How would you implement a file-based logging system?"

```javascript
const fs = require('fs').promises;
const { createWriteStream, promises: fsPromises } = require('fs');
const path = require('path');

class FileLogger {
  constructor(logDir = 'logs') {
    this.logDir = logDir;
    this.initialize();
  }
  
  async initialize() {
    try {
      await fsPromises.mkdir(this.logDir, { recursive: true });
      this.logFile = path.join(this.logDir, `${new Date().toISOString().split('T')[0]}.log`);
      this.stream = createWriteStream(this.logFile, { flags: 'a' });
    } catch (err) {
      console.error('Failed to initialize logger:', err);
    }
  }
  
  log(level, message) {
    const logEntry = `[${new Date().toISOString()}] [${level.toUpperCase()}] ${message}\n`;
    
    // Write to file
    if (this.stream) {
      this.stream.write(logEntry);
    }
    
    // Also log to console
    console[level === 'error' ? 'error' : 'log'](logEntry.trim());
  }
  
  error(message) {
    this.log('error', message);
  }
  
  info(message) {
    this.log('info', message);
  }
  
  async rotateLogs() {
    if (this.stream) {
      await new Promise(resolve => this.stream.end(resolve));
      await this.initialize();
    }
  }
  
  async close() {
    if (this.stream) {
      await new Promise(resolve => this.stream.end(resolve));
    }
  }
}

// Usage
const logger = new FileLogger();
logger.info('Application started');
logger.error('An error occurred');
```

#### 4. "How would you implement a file upload endpoint with Express?"

```javascript
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const uploadDir = 'uploads';

// Ensure upload directory exists
async function ensureUploadDir() {
  try {
    await fs.mkdir(uploadDir, { recursive: true });
  } catch (err) {
    console.error('Error creating upload directory:', err);
  }
}

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
    files: 5 // Max 5 files
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});

// File upload endpoint
app.post('/upload', upload.array('files', 5), async (req, res, next) => {
  try {
    const fileInfo = req.files.map(file => ({
      filename: file.filename,
      originalname: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
      path: file.path
    }));
    
    res.json({
      success: true,
      message: 'Files uploaded successfully',
      files: fileInfo
    });
  } catch (err) {
    next(err);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Upload error:', err);
  res.status(400).json({
    success: false,
    message: err.message || 'File upload failed'
  });
});

// Initialize and start server
async function startServer() {
  await ensureUploadDir();
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Upload directory: ${path.resolve(uploadDir)}`);
  });
}

startServer().catch(console.error);
```

#### 5. "How would you implement a file-based key-value store?"

```javascript
const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

class FileStore {
  constructor(storagePath = './storage') {
    this.storagePath = path.resolve(storagePath);
    this.ensureStorageDir();
  }
  
  async ensureStorageDir() {
    try {
      await fs.mkdir(this.storagePath, { recursive: true });
    } catch (err) {
      if (err.code !== 'EEXIST') throw err;
    }
  }
  
  getKeyPath(key) {
    // Create a hash of the key for the filename
    const hash = crypto.createHash('sha256').update(key).digest('hex');
    return path.join(this.storagePath, `${hash}.json`);
  }
  
  async set(key, value, ttl = 0) {
    const filePath = this.getKeyPath(key);
    const expiresAt = ttl > 0 ? Date.now() + ttl * 1000 : 0;
    
    const data = {
      value,
      metadata: {
        key,
        createdAt: new Date().toISOString(),
        expiresAt: expiresAt || null,
        ttl
      }
    };
    
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
    return data;
  }
  
  async get(key) {
    const filePath = this.getKeyPath(key);
    
    try {
      const data = JSON.parse(await fs.readFile(filePath, 'utf8'));
      
      // Check if the entry has expired
      if (data.metadata.expiresAt && Date.now() > data.metadata.expiresAt) {
        await this.delete(key);
        return null;
      }
      
      return data.value;
    } catch (err) {
      if (err.code === 'ENOENT') return null;
      throw err;
    }
  }
  
  async delete(key) {
    const filePath = this.getKeyPath(key);
    
    try {
      await fs.unlink(filePath);
      return true;
    } catch (err) {
      if (err.code === 'ENOENT') return false;
      throw err;
    }
  }
  
  async clear() {
    try {
      const files = await fs.readdir(this.storagePath);
      await Promise.all(
        files.map(file => fs.unlink(path.join(this.storagePath, file)))
      );
      return true;
    } catch (err) {
      console.error('Error clearing storage:', err);
      return false;
    }
  }
  
  async cleanup() {
    // Remove expired entries
    try {
      const files = await fs.readdir(this.storagePath);
      
      await Promise.all(
        files.map(async (file) => {
          try {
            const filePath = path.join(this.storagePath, file);
            const data = JSON.parse(await fs.readFile(filePath, 'utf8'));
            
            if (data.metadata.expiresAt && Date.now() > data.metadata.expiresAt) {
              await fs.unlink(filePath);
            }
          } catch (err) {
            console.error('Error cleaning up file:', file, err);
          }
        })
      );
    } catch (err) {
      console.error('Error during cleanup:', err);
    }
  }
}

// Usage
async function example() {
  const store = new FileStore();
  
  // Set a value with 60-second TTL
  await store.set('user:123', { name: 'Alice', age: 30 }, 60);
  
  // Get a value
  const user = await store.get('user:123');
  console.log('User:', user);
  
  // Clean up expired entries
  await store.cleanup();
  
  // Clear all data
  // await store.clear();
}

example().catch(console.error);
```

### Performance Tips

1. **Use Streams for Large Files**: Always use streams when working with files larger than a few MB
2. **Batch Operations**: For multiple file operations, use `Promise.all()` for parallel processing
3. **File Descriptors**: Be mindful of file descriptor limits when working with many files
4. **Memory Management**: Avoid loading large files into memory all at once
5. **Error Handling**: Always handle filesystem errors, especially for operations that might fail (file not found, permission issues, etc.)

## 8. Express.js

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building web applications by providing a thin layer of fundamental web application features, without obscuring Node.js features.

### Core Concepts

#### 1. Basic Express Application

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Route with parameters
app.get('/users/:userId', (req, res) => {
  res.json({ userId: req.params.userId });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

#### 2. Middleware

Middleware functions have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle.

```javascript
// Application-level middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Route-specific middleware
const requireAuth = (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.status(401).send('Authentication required');
  }
};

app.get('/protected', requireAuth, (req, res) => {
  res.send('Protected content');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong!' });
});
```

#### 3. Routing

```javascript
const router = express.Router();

// Middleware specific to this router
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Define routes
router.get('/', (req, res) => {
  res.send('Home page');
});

router.get('/about', (req, res) => {
  res.send('About page');
});

// Mount the router
app.use('/pages', router);
```

### Advanced Features

#### 1. File Uploads with Multer

```javascript
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb('Error: Images only! (jpeg|jpg|png|gif)');
  },
});

app.post('/upload', upload.single('avatar'), (req, res) => {
  res.json({ file: req.file });
});
```

#### 2. Authentication with JWT

```javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Mock user database
const users = [];

// Register route
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Check if user exists
    if (users.some(user => user.username === username)) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: Date.now().toString(), username, password: hashedPassword };
    users.push(user);
    
    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    );
    
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
  
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
  
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '1h' }
  );
  
  res.json({ token });
});

// Protected route
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.get('/profile', authenticateToken, (req, res) => {
  res.json({ user: req.user });
});
```

#### 3. Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later',
});

app.use('/api/', limiter);
```

### Common Interview Questions

#### 1. "What is middleware in Express.js?"

**Answer:**
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. They can:
- Execute any code
- Make changes to the request and response objects
- End the request-response cycle
- Call the next middleware in the stack

Example:
```javascript
app.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
});
```

#### 2. "How does error handling work in Express?"

**Answer:**
Express comes with a default error handler, but you can create custom error handling middleware:

1. **Synchronous errors** are caught automatically
2. **Asynchronous errors** must be passed to `next()`
3. Error-handling middleware has 4 parameters: `(err, req, res, next)`

Example:
```javascript
// Route that throws an error
app.get('/error', (req, res, next) => {
  try {
    // Some operation that might fail
    throw new Error('Something went wrong!');
  } catch (err) {
    next(err); // Pass to error handler
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});
```

#### 3. "How would you implement authentication in an Express application?"

**Answer:**
A common approach is to use JWT (JSON Web Tokens) with Passport.js or a similar library. The flow is:

1. User logs in with credentials
2. Server verifies credentials and issues a JWT
3. Client stores the token (usually in localStorage or cookies)
4. Client sends the token in the Authorization header for subsequent requests
5. Server verifies the token on protected routes

Example implementation (simplified):
```javascript
// Login route
app.post('/login', (req, res) => {
  // Verify credentials (in a real app, check against database)
  if (req.body.username === 'admin' && req.body.password === 'password') {
    // Create token
    const token = jwt.sign(
      { username: req.body.username },
      'your-secret-key',
      { expiresIn: '1h' }
    );
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protected route
app.get('/protected', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) return res.sendStatus(403);
    res.json({ message: 'Protected data', user });
  });
});
```

#### 4. "What is the difference between app.use() and app.METHOD()?"

**Answer:**

| Feature           | `app.use()`                          | `app.METHOD()` (e.g., `app.get()`) |
|-------------------|--------------------------------------|-----------------------------------|
| Purpose          | For mounting middleware functions    | For handling specific HTTP methods and paths |
| Path Matching    | Matches the beginning of the path    | Exact match or pattern matching   |
| Method Matching  | Matches all HTTP methods             | Matches only the specified method |
| Order            | Executed in the order they are defined | Executed based on route matching  |
| Next Parameter   | Has access to `next()`               | Also has access to `next()`       |

Example:
```javascript
// This middleware runs for all requests
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// This only runs for GET requests to /users
app.get('/users', (req, res) => {
  res.send('List of users');
});
```

#### 5. "How would you handle file uploads in Express?"

**Answer:**
Use the `multer` middleware to handle file uploads. Here's a complete example:

```javascript
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/';
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and GIF are allowed.'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// Single file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  res.json({
    message: 'File uploaded successfully',
    file: req.file,
  });
});

// Multiple files upload (up to 5)
app.post('/upload-multiple', upload.array('files', 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }
  res.json({
    message: 'Files uploaded successfully',
    files: req.files,
  });
});
```

### Best Practices

1. **Use environment variables** for configuration (e.g., database credentials, API keys)
2. **Implement proper error handling** with custom error classes and middleware
3. **Use async/await** with try/catch blocks for async operations
4. **Validate request data** using libraries like Joi or express-validator
5. **Implement rate limiting** to prevent abuse
6. **Use Helmet.js** to set secure HTTP headers
7. **Enable CORS** properly if your API is accessed from different domains
8. **Use compression** to reduce response size
9. **Implement proper logging** for debugging and monitoring
10. **Use a process manager** like PM2 in production

## 9. Networking in Node.js

### Core Networking Modules

Node.js provides several built-in modules for networking:
- **http**: For creating HTTP servers and clients
- **https**: For creating HTTPS servers and clients
- **net**: For low-level TCP networking
- **dgram**: For UDP datagram sockets
- **tls**: For TLS/SSL encryption
- **dns**: For domain name resolution

### 1. Creating an HTTP Server

```javascript
const http = require('http');

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  // Parse URL and method
  const { method, url, headers } = req;
  
  // Handle different routes
  if (method === 'GET' && url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  } 
  else if (method === 'POST' && url === '/data') {
    let body = '';
    
    // Collect request data
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    // When all data is received
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 'success', data }));
      } catch (err) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  } 
  else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Handle server errors
server.on('error', (err) => {
  console.error('Server error:', err);
});
```

### 2. Making HTTP Requests

#### Using the `http` module:

```javascript
const http = require('http');
const https = require('https');

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
      // Check status code
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error(`Status Code: ${res.statusCode}`));
      }
      
      // Collect response data
      const data = [];
      res.on('data', chunk => data.push(chunk));
      
      // Parse the response
      res.on('end', () => {
        try {
          const body = JSON.parse(Buffer.concat(data).toString());
          resolve(body);
        } catch (err) {
          reject(err);
        }
      });
    });
    
    // Handle errors
    req.on('error', reject);
    
    // Set timeout
    req.setTimeout(5000, () => {
      req.destroy(new Error('Request timeout'));
    });
    
    // End the request
    req.end();
  });
}

// Usage
async function main() {
  try {
    const data = await fetchJSON('https://api.github.com/users/octocat');
    console.log('GitHub user:', data);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

main();
```

#### Using the `https` module (similar to `http` but with SSL/TLS):

```javascript
const https = require('https');

// Similar to http.get but with SSL/TLS
https.get('https://api.github.com/users/octocat', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      console.log(parsed);
    } catch (err) {
      console.error('Error parsing JSON:', err);
    }
  });
  
}).on('error', (err) => {
  console.error('Error:', err.message);
});
```

### 3. Working with TCP Sockets

#### TCP Server

```javascript
const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
  console.log('Client connected');
  
  // Handle incoming data
  socket.on('data', (data) => {
    const message = data.toString().trim();
    console.log(`Received: ${message}`);
    
    // Echo back the message in uppercase
    socket.write(`Echo: ${message.toUpperCase()}\n`);
    
    // Close connection on 'exit' command
    if (message.toLowerCase() === 'exit') {
      socket.end('Goodbye!\n');
    }
  });
  
  // Handle client disconnection
  socket.on('end', () => {
    console.log('Client disconnected');
  });
  
  // Handle errors
  socket.on('error', (err) => {
    console.error('Socket error:', err.message);
  });
});

// Start the server
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`TCP server listening on port ${PORT}`);
});

// Handle server errors
server.on('error', (err) => {
  console.error('Server error:', err.message);
});
```

#### TCP Client

```javascript
const net = require('net');
const readline = require('readline');

// Create interface for reading from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

// Create a TCP client
const client = net.createConnection({ port: 3001 }, () => {
  console.log('Connected to server');
  rl.prompt();
});

// Handle incoming data
client.on('data', (data) => {
  console.log(data.toString().trim());
  rl.prompt();
});

// Handle connection close
client.on('end', () => {
  console.log('Disconnected from server');
  process.exit(0);
});

// Handle errors
client.on('error', (err) => {
  console.error('Connection error:', err.message);
  process.exit(1);
});

// Read input from user and send to server
rl.on('line', (line) => {
  client.write(line);
  if (line.toLowerCase() === 'exit') {
    client.end();
    rl.close();
  } else {
    rl.prompt();
  }
}).on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});
```

### 4. Handling File Uploads with Streams

```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream/promises');

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/upload') {
    try {
      const filename = `upload-${Date.now()}.dat`;
      const filePath = path.join(__dirname, 'uploads', filename);
      
      // Ensure uploads directory exists
      await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
      
      // Stream the request to a file
      const fileStream = fs.createWriteStream(filePath);
      
      // Use pipeline for proper error handling
      await pipeline(req, fileStream);
      
      res.statusCode = 200;
      res.end(JSON.stringify({ 
        success: true, 
        message: 'File uploaded successfully',
        filename
      }));
    } catch (err) {
      console.error('Upload error:', err);
      res.statusCode = 500;
      res.end(JSON.stringify({ 
        success: false, 
        error: 'Failed to upload file' 
      }));
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`File upload server running on port ${PORT}`);
});
```

### 5. Implementing a Simple HTTP Proxy

```javascript
const http = require('http');
const https = require('https');
const { URL } = require('url');

const proxy = http.createServer((clientReq, clientRes) => {
  try {
    // Parse the target URL from the request
    const targetUrl = new URL(clientReq.url, 'http://example.com');
    
    // Determine the protocol
    const protocol = targetUrl.protocol === 'https:' ? https : http;
    
    console.log(`Proxying request to: ${targetUrl.href}`);
    
    // Forward the request to the target server
    const proxyReq = protocol.request({
      hostname: targetUrl.hostname,
      port: targetUrl.port || (protocol === https ? 443 : 80),
      path: targetUrl.pathname + targetUrl.search,
      method: clientReq.method,
      headers: { ...clientReq.headers, host: targetUrl.hostname }
    }, (proxyRes) => {
      // Forward the response to the client
      clientRes.writeHead(proxyRes.statusCode || 500, proxyRes.headers);
      proxyRes.pipe(clientRes);
    });
    
    // Handle errors
    proxyReq.on('error', (err) => {
      console.error('Proxy request error:', err);
      clientRes.statusCode = 502;
      clientRes.end('Proxy error');
    });
    
    // Forward the request body
    clientReq.pipe(proxyReq);
    
  } catch (err) {
    console.error('Proxy error:', err);
    clientRes.statusCode = 500;
    clientRes.end('Internal server error');
  }
});

// Handle proxy server errors
proxy.on('error', (err) => {
  console.error('Proxy server error:', err);
});

const PORT = 3003;
proxy.listen(PORT, () => {
  console.log(`HTTP proxy server running on port ${PORT}`);
  console.log(`Try: curl -x http://localhost:${PORT} https://api.github.com/users/octocat`);
});
```

### Common Interview Questions & Answers

#### 1. "What's the difference between HTTP and HTTPS in Node.js?"
- **Answer**: 
  - **HTTP**: Plain text protocol, no encryption, default port 80
  - **HTTPS**: Secure protocol with SSL/TLS encryption, default port 443
  - In Node.js, they're separate modules (`http` and `https`) but share similar APIs
  - HTTPS requires SSL/TLS certificates (can be self-signed for development)

#### 2. "How does Node.js handle concurrency with its single-threaded model?"
- **Answer**:
  - Uses an event loop to handle I/O operations asynchronously
  - Offloads I/O operations to the system kernel (which handles them in separate threads)
  - Uses a thread pool for CPU-intensive operations (file I/O, DNS, etc.)
  - Processes callbacks when I/O operations complete
  - Scales well for I/O-bound applications but can be limited for CPU-bound tasks

#### 3. "What are the differences between TCP and UDP in Node.js?"
- **TCP**:
  - Connection-oriented protocol
  - Reliable, ordered delivery
  - Error checking and recovery
  - Used by HTTP, HTTPS, FTP, etc.
  ```javascript
  const net = require('net');
  const server = net.createServer((socket) => { /* handle connection */ });
  ```
  
- **UDP**:
  - Connectionless protocol
  - Unreliable, no ordering guarantees
  - Lower overhead, faster
  - Used for DNS, video streaming, online games
  ```javascript
  const dgram = require('dgram');
  const server = dgram.createSocket('udp4');
  server.on('message', (msg, rinfo) => { /* handle message */ });
  ```

#### 4. "How would you implement rate limiting in a Node.js HTTP server?"

```javascript
const http = require('http');

// Store request counts per IP
const requestCounts = new Map();
const RATE_LIMIT = 100; // Max requests
const WINDOW_MS = 60 * 1000; // 1 minute

const server = http.createServer((req, res) => {
  const clientIP = req.socket.remoteAddress;
  const now = Date.now();
  
  // Initialize or clean up old entries
  if (!requestCounts.has(clientIP)) {
    requestCounts.set(clientIP, []);
  }
  
  // Remove timestamps older than the window
  const timestamps = requestCounts.get(clientIP).filter(ts => now - ts < WINDOW_MS);
  
  // Check rate limit
  if (timestamps.length >= RATE_LIMIT) {
    res.statusCode = 429; // Too Many Requests
    res.setHeader('Retry-After', Math.ceil(WINDOW_MS / 1000));
    return res.end('Rate limit exceeded. Please try again later.');
  }
  
  // Add current timestamp
  timestamps.push(now);
  requestCounts.set(clientIP, timestamps);
  
  // Process the request
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    remaining: RATE_LIMIT - timestamps.length,
    reset: Math.ceil(WINDOW_MS / 1000)
  }));
});

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of requestCounts.entries()) {
    const filtered = timestamps.filter(ts => now - ts < WINDOW_MS);
    if (filtered.length === 0) {
      requestCounts.delete(ip);
    } else {
      requestCounts.set(ip, filtered);
    }
  }
}, WINDOW_MS);

const PORT = 3004;
server.listen(PORT, () => {
  console.log(`Rate-limited server running on port ${PORT}`);
  console.log(`Try: curl http://localhost:${PORT}`);
});
```

#### 5. "How would you implement a WebSocket server in Node.js?"

```javascript
const http = require('http');
const { createServer } = require('http');
const { WebSocketServer } = require('ws');

// Create HTTP server
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server is running\n');
});

// Create WebSocket server
const wss = new WebSocketServer({ server });

// Track connected clients
const clients = new Set();

wss.on('connection', (ws, req) => {
  const clientId = req.socket.remoteAddress;
  console.log(`Client connected: ${clientId}`);
  
  // Add to clients set
  clients.add(ws);
  
  // Broadcast to all clients when someone connects
  broadcast(`${clientId} joined the chat`, ws);
  
  // Handle incoming messages
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    // Broadcast the message to all clients
    broadcast(`${clientId}: ${message}`, ws);
  });
  
  // Handle client disconnection
  ws.on('close', () => {
    console.log(`Client disconnected: ${clientId}`);
    clients.delete(ws);
    broadcast(`${clientId} left the chat`, ws);
  });
  
  // Handle errors
  ws.on('error', (error) => {
    console.error(`WebSocket error: ${error.message}`);
  });
});

// Broadcast to all clients except the sender
function broadcast(message, sender) {
  for (const client of clients) {
    if (client !== sender && client.readyState === 1) { // 1 = OPEN
      client.send(message);
    }
  }
}

const PORT = 3005;
server.listen(PORT, () => {
  console.log(`WebSocket server running on port ${PORT}`);
  console.log('Connect using: new WebSocket(`ws://localhost:3005`)');
});
```

### Performance Considerations

1. **Connection Pooling**:
   - Reuse HTTP/HTTPS agents to avoid creating new connections
   - Configure `maxSockets` to limit concurrent connections
   ```javascript
   const http = require('http');
   const agent = new http.Agent({
     keepAlive: true,
     maxSockets: 10,
     timeout: 60000 // 1 minute
   });
   
   http.get({ hostname: 'example.com', port: 80, path: '/', agent }, (res) => {
     // Handle response
   });
   ```

2. **Timeouts**:
   - Always set timeouts for requests and responses
   - Handle timeouts gracefully with appropriate error messages
   ```javascript
   const req = http.request(options, (res) => {
     // Handle response
   });
   
   req.setTimeout(5000, () => {
     req.destroy(new Error('Request timeout'));
   });
   
   req.on('error', (err) => {
     console.error('Request error:', err);
   });
   
   req.end();
   ```

3. **Compression**:
   - Use compression middleware for HTTP servers to reduce bandwidth
   - Support gzip/deflate for responses
   ```javascript
   const zlib = require('zlib');
   const http = require('http');
   
   http.createServer((req, res) => {
     const acceptEncoding = req.headers['accept-encoding'] || '';
     let gzip;
     
     if (acceptEncoding.includes('gzip')) {
       res.setHeader('Content-Encoding', 'gzip');
       gzip = zlib.createGzip();
       gzip.pipe(res);
     } else {
       gzip = res;
     }
     
     // Your response
     gzip.end('Hello, compressed world!');
   }).listen(3006);
   ```

4. **Connection Handling**:
   - Implement proper connection pooling
   - Handle connection errors and retries
   - Implement circuit breakers for failed services

5. **Security**:
   - Always validate and sanitize input
   - Use HTTPS for secure communication
   - Implement proper CORS headers
   - Rate limit API endpoints
   - Use HTTP security headers

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

