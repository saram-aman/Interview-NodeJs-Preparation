# Go (Golang) Interview Preparation

This document outlines key concepts and common interview questions related to Go, designed to help you prepare for technical interviews.

## 1. Go Fundamentals

* **Variables and Data Types:**
    * Declaring variables using `var` and `:=`.
    * Basic types: `int`, `float64`, `bool`, `string`.
    * Composite types: `arrays`, `slices`, `maps`, `structs`.
    * Zero values.
    * Type inference.
* **Control Flow:**
    * `if`, `else if`, `else`.
    * `for` loops (Go's only loop construct).
    * `switch` statements.
    * `defer` statements.
* **Functions:**
    * Defining functions with multiple return values.
    * Variadic functions.
    * Anonymous functions (closures).
* **Pointers:**
    * Understanding pointer types and dereferencing.
    * Passing arguments by value vs. by reference.
* **Packages and Modules:**
    * Importing and exporting packages.
    * Using `go mod` for dependency management.
* **Error Handling:**
    * Returning and handling errors using the `error` interface.
    * `panic` and `recover`.
* **Interview Questions:**
    * "Explain the difference between `var` and `:=` in Go."
    * "What are zero values in Go?"
    * "How does Go handle multiple return values?"
    * "What is a `defer` statement, and when is it used?"
    * "Explain how pointers work in Go."
    * "How do you handle errors in Go?"
    * "What is the purpose of `panic` and `recover`?"
    * "How does `go mod` work?"

## 2. Concurrency

* **Goroutines:**
    * Lightweight threads managed by the Go runtime.
    * Starting goroutines using the `go` keyword.
* **Channels:**
    * Typed communication channels for goroutines.
    * Buffered and unbuffered channels.
    * Sending and receiving values.
* **Select Statement:**
    * Multiplexing on multiple channels.
* **Mutexes and RWMutexes:**
    * Synchronizing access to shared resources.
* **WaitGroups:**
    * Waiting for a collection of goroutines to finish.
* **Context:**
    * Managing timeouts and cancellations.
* **Interview Questions:**
    * "What are goroutines, and how do they differ from threads?"
    * "How do you create and use channels in Go?"
    * "What is the purpose of the `select` statement?"
    * "How do you prevent race conditions in Go?"
    * "Explain the difference between `Mutex` and `RWMutex`."
    * "How do you use `WaitGroup` to synchronize goroutines?"
    * "What is the `context` package, and how is it used?"

## 3. Structs and Interfaces

* **Structs:**
    * Defining custom types with fields.
    * Embedding structs.
    * Struct tags.
* **Interfaces:**
    * Defining method sets.
    * Implementing interfaces.
    * Empty interface (`interface{}`).
* **Methods:**
    * Defining methods on structs.
    * Pointer receivers vs. value receivers.
* **Interview Questions:**
    * "How do you define structs in Go?"
    * "What is struct embedding, and how is it used?"
    * "What are interfaces, and how are they implemented?"
    * "Explain the difference between pointer receivers and value receivers."
    * "What is the empty interface, and when is it used?"
    * "What are struct tags used for?"

## 4. Slices and Maps

* **Slices:**
    * Dynamic arrays.
    * Slicing and appending.
    * Capacity and length.
* **Maps:**
    * Key-value pairs.
    * Checking for key existence.
    * Iterating over maps.
* **Interview Questions:**
    * "What are slices, and how do they differ from arrays?"
    * "How do you append elements to a slice?"
    * "What is the difference between the length and capacity of a slice?"
    * "How do you create and use maps in Go?"
    * "How do you check if a key exists in a map?"

## 5. Standard Library

* **Common Packages:**
    * `fmt`: Formatting and printing.
    * `io`: Input/output operations.
    * `net/http`: HTTP client and server.
    * `os`: Operating system interaction.
    * `encoding/json`: JSON encoding and decoding.
    * `time`: Time and duration handling.
    * `strings`: String manipulation.
    * `sync`: Synchronization primitives.
    * `context`: Context management.
* **Interview Questions:**
    * "What are some commonly used packages in the Go standard library?"
    * "How do you read and write files in Go?"
    * "How do you create an HTTP server in Go?"
    * "How do you encode and decode JSON data in Go?"
    * "How do you work with dates and times in Go?"

## 6. Testing

* **Unit Testing:**
    * Writing tests using the `testing` package.
    * Table-driven tests.
    * Mocking.
* **Benchmarks:**
    * Measuring performance.
* **Test Coverage:**
    * Analyzing test coverage.
* **Interview Questions:**
    * "How do you write unit tests in Go?"
    * "What are table-driven tests, and why are they used?"
    * "How do you write benchmarks in Go?"
    * "How do you analyze test coverage?"

## 7. Memory Management and Garbage Collection

* **Garbage Collection:**
    * Automatic memory management.
* **Memory Profiling:**
    * Using `pprof` for memory profiling.
* **Interview Questions:**
    * "How does Go's garbage collector work?"
    * "How do you profile memory usage in Go?"
    * "What are some common memory management best practices in Go?"

## 8. HTTP and Networking

* **HTTP Clients and Servers:**
    * Using `net/http` to create clients and servers.
* **Routing:**
    * Handling HTTP requests and routing.
* **Middlewares:**
    * Implementing middleware functions.
* **JSON APIs:**
    * Building RESTful APIs.
* **TCP Sockets:**
    * Working with TCP connections.
* **Interview Questions:**
    * "How do you create an HTTP server in Go?"
    * "How do you make HTTP requests in Go?"
    * "How do you handle routing in Go?"
    * "What are middlewares, and how are they used in Go?"
    * "How do you build a JSON API in Go?"
    * "How do you work with TCP sockets in Go?"

## 9. Reflection

* **Reflection in Go:**
    * Examining and manipulating types at runtime.
    * `reflect` package.
* **Interview Questions:**
    * "What is reflection, and how is it used in Go?"
    * "When might you use reflection in Go?"
    * "What are the limitations of reflection in Go?"

## 10. Code Optimization and Profiling

* **Profiling Tools:**
    * Using `pprof` for CPU and memory profiling.
* **Optimization Techniques:**
    * Identifying and addressing performance bottlenecks.
* **Interview Questions:**
    * "How do you profile CPU and memory usage in Go?"
    * "What are some common Go optimization techniques?"
    * "How do you identify performance bottlenecks in Go applications?"