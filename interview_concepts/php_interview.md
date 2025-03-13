# PHP Interview Preparation

This document outlines key concepts and common interview questions related to PHP, designed to help you prepare for technical interviews.

## 1. PHP Fundamentals

* **Variables and Data Types:**
    * Understanding PHP's dynamic typing.
    * Scalar types (boolean, integer, float, string).
    * Compound types (array, object, callable, iterable).
    * Special types (resource, NULL).
* **Operators:**
    * Arithmetic, assignment, comparison, logical, bitwise, string, array, execution, error control.
* **Control Structures:**
    * `if`, `elseif`, `else`.
    * `switch`.
    * `for`, `while`, `do-while`, `foreach`.
    * `break`, `continue`.
* **Functions:**
    * Defining and calling functions.
    * Function arguments (by value, by reference, default arguments, variable-length argument lists).
    * Return values.
    * Anonymous functions (closures).
* **Arrays:**
    * Indexed and associative arrays.
    * Array manipulation functions.
* **Strings:**
    * String manipulation functions.
    * Regular expressions (PCRE).
* **Error Handling:**
    * Error reporting levels.
    * `try`, `catch`, `throw`.
* **Interview Questions:**
    * "What are the differences between `==` and `===`?"
    * "Explain the difference between `include` and `require`."
    * "How do you pass arguments by reference in a PHP function?"
    * "What are anonymous functions (closures)?"
    * "How do you handle errors and exceptions in PHP?"
    * "Explain the difference between single-quoted and double-quoted strings."
    * "How do you iterate over an associative array?"

## 2. Object-Oriented Programming (OOP)

* **Classes and Objects:**
    * Defining classes and creating objects.
    * Properties and methods.
    * `$this` keyword.
* **Inheritance:**
    * Extending classes.
    * `parent` keyword.
    * Method overriding.
* **Encapsulation:**
    * Access modifiers (`public`, `protected`, `private`).
* **Polymorphism:**
    * Interfaces and abstract classes.
* **Autoloading:**
    * `spl_autoload_register`.
* **Namespaces:**
    * Organizing code.
* **Traits:**
    * Code reuse.
* **Magic Methods:**
    * `__construct`, `__destruct`, `__get`, `__set`, `__call`, `__toString`, etc.
* **Interview Questions:**
    * "Explain the difference between `public`, `protected`, and `private`."
    * "What is method overriding, and how is it used?"
    * "What are abstract classes and interfaces?"
    * "Explain how autoloading works in PHP."
    * "What are namespaces, and why are they used?"
    * "What are traits, and when would you use them?"
    * "Explain some commonly used magic methods."

## 3. Web Development

* **HTTP Basics:**
    * Request and response lifecycle.
    * HTTP methods (GET, POST, PUT, DELETE).
    * HTTP headers.
* **Forms:**
    * Handling form submissions.
    * `$_GET`, `$_POST`, `$_REQUEST`.
* **Sessions and Cookies:**
    * Managing user sessions.
    * Setting and retrieving cookies.
* **Security:**
    * Input validation and sanitization.
    * Cross-site scripting (XSS) prevention.
    * SQL injection prevention.
    * Cross-site request forgery (CSRF) prevention.
    * Password hashing.
    * HTTPS.
* **Templating:**
    * Using templating engines (e.g., Twig, Blade).
* **Routing:**
    * URL routing.
* **Interview Questions:**
    * "How do you prevent SQL injection in PHP?"
    * "Explain the difference between sessions and cookies."
    * "How do you handle file uploads in PHP?"
    * "What is XSS, and how do you prevent it?"
    * "What is CSRF, and how do you prevent it?"
    * "How do you hash passwords securely in PHP?"
    * "Explain the HTTP request-response cycle."

## 4. Databases

* **MySQLi/PDO:**
    * Connecting to databases.
    * Executing SQL queries.
    * Prepared statements.
* **Database Design:**
    * Normalization.
    * Indexes.
* **ORM (Object-Relational Mapping):**
    * Using ORMs (e.g., Doctrine, Eloquent).
* **Interview Questions:**
    * "What are the differences between MySQLi and PDO?"
    * "How do you use prepared statements to prevent SQL injection?"
    * "Explain the benefits of using an ORM."
    * "What is database normalization?"
    * "How do you optimize database queries?"

## 5. Frameworks (Laravel, Symfony, CodeIgniter)

* **MVC (Model-View-Controller) Architecture:**
    * Understanding the MVC pattern.
* **Routing:**
    * Defining routes.
* **Middleware:**
    * Request and response middleware.
* **Templating:**
    * Using templating engines within frameworks.
* **ORM:**
    * Framework-specific ORM implementations.
* **Dependency Injection:**
    * Managing dependencies.
* **Testing:**
    * Unit and integration testing.
* **Composer:**
    * Dependency management.
* **Interview Questions:**
    * "Explain the MVC architecture."
    * "What are the benefits of using a PHP framework?"
    * "How do you define routes in [Framework Name]?"
    * "What is middleware, and how is it used?"
    * "Explain dependency injection."
    * "How do you use Composer for dependency management?"
    * "What are some testing strategies you use within frameworks?"

## 6. Security

* **Input Validation and Sanitization:**
    * Preventing common vulnerabilities.
* **Authentication and Authorization:**
    * Secure login and access control.
* **Password Hashing:**
    * Using strong hashing algorithms (e.g., bcrypt).
* **HTTPS:**
    * Using secure connections.
* **Security Headers:**
    * Implementing security headers.
* **Interview Questions:**
    * "How do you validate and sanitize user input?"
    * "Explain how to implement secure user authentication."
    * "Why is password hashing important?"
    * "What are security headers, and how do they enhance security?"

## 7. Performance Optimization

* **Caching:**
    * Object caching (e.g., Redis, Memcached).
    * Page caching.
* **Database Optimization:**
    * Query optimization.
    * Indexing.
* **Code Optimization:**
    * Avoiding unnecessary computations.
    * Using efficient algorithms.
* **OPcache:**
    * PHP opcode caching.
* **Profiling:**
    * Using profiling tools (e.g., Xdebug).
* **Interview Questions:**
    * "How do you optimize PHP application performance?"
    * "What are some caching strategies you use?"
    * "How do you optimize database queries?"
    * "What is OPcache, and how does it work?"
    * "How do you use profiling tools to identify performance bottlenecks?"