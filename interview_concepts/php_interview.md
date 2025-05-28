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
      - Answer: == compares values after type coercion, === compares both value and type. === is stricter and generally safer.

    * "Explain the difference between `include` and `require`."
      - Answer: Include produces warning on failure, require produces fatal error. Require ensures file must exist for execution to continue.

    * "How do you pass arguments by reference in a PHP function?"
      - Answer: Use & before parameter name in function definition. Changes to parameter inside function affect original variable outside function.

    * "What are anonymous functions (closures)?"
      - Answer: Functions without names, often used as callbacks. Can access variables from parent scope using 'use' keyword.

    * "How do you handle errors and exceptions in PHP?"
      - Answer: Use try-catch blocks for exceptions, set_error_handler for errors. Configure error reporting levels and logging appropriately.

    * "Explain the difference between single-quoted and double-quoted strings."
      - Answer: Double quotes parse variables and escape sequences, single quotes treat everything literally except \' and \\.

    * "How do you iterate over an associative array?"
      - Answer: Use foreach($array as $key => $value) loop. Can also use array functions like array_map, array_walk.

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
      - Answer: Public accessible everywhere, protected within class and descendants, private only within declaring class. Controls encapsulation and access.

    * "What is method overriding, and how is it used?"
      - Answer: Child class redefines parent's method. Must have same signature. Use parent:: to access original implementation.

    * "What are abstract classes and interfaces?"
      - Answer: Abstract classes provide partial implementation, can't be instantiated. Interfaces define contracts classes must implement.

    * "Explain how autoloading works in PHP."
      - Answer: Automatically loads classes when used. Register autoloader function with spl_autoload_register to define class loading rules.

    * "What are namespaces, and why are they used?"
      - Answer: Organize code, prevent naming conflicts. Like virtual directories for classes, functions, and constants.

    * "What are traits, and when would you use them?"
      - Answer: Reusable code blocks that can be included in classes. Solve multiple inheritance limitations, share methods between classes.

    * "Explain some commonly used magic methods."
      - Answer: __construct (initialization), __get/__set (property access), __call (method calls), __toString (string conversion). Automatically called in specific situations.

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
      - Answer: Use prepared statements with PDO/MySQLi, parameterize queries, escape inputs. Never directly concatenate user input into queries.

    * "Explain the difference between sessions and cookies."
      - Answer: Sessions store data server-side, cookies client-side. Sessions more secure for sensitive data, cookies persist across browser sessions.

    * "How do you handle file uploads in PHP?"
      - Answer: Use $_FILES superglobal, move_uploaded_file function. Validate file type, size, and implement security checks.

    * "What is XSS, and how do you prevent it?"
      - Answer: Cross-site scripting injects malicious scripts. Prevent by escaping output (htmlspecialchars), validating input, using Content-Security-Policy.

    * "What is CSRF, and how do you prevent it?"
      - Answer: Cross-site request forgery exploits authenticated sessions. Prevent using CSRF tokens, validating requests, checking referrer headers.

    * "How do you hash passwords securely in PHP?"
      - Answer: Use password_hash with strong algorithm (bcrypt default). Never store plain passwords. Use password_verify for checking.

    * "Explain the HTTP request-response cycle."
      - Answer: Client sends request, server processes it, generates response, sends back to client. Includes headers, body, status codes.

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
      - Answer: PDO supports multiple databases, consistent API. MySQLi MySQL-specific but has both procedural and OOP interfaces.

    * "How do you use prepared statements to prevent SQL injection?"
      - Answer: Create statement template with placeholders, bind parameters separately. Database handles escaping and execution safely.

    * "Explain the benefits of using an ORM."
      - Answer: Maps database tables to objects, simplifies queries, provides abstraction, handles relationships, improves maintainability.

    * "What is database normalization?"
      - Answer: Organizing database to reduce redundancy, ensure data integrity. Involves splitting tables, establishing relationships between them.

    * "How do you optimize database queries?"
      - Answer: Use proper indexes, minimize joins, cache results, use EXPLAIN to analyze queries, optimize table structure.

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
      - Answer: Model (data/logic), View (presentation), Controller (handles requests). Separates concerns, improves maintainability and organization.

    * "What are the benefits of using a PHP framework?"
      - Answer: Structured development, built-in security, ORM support, routing, templating, testing tools. Speeds up development, follows best practices.

    * "How do you define routes in [Framework Name]?"
      - Answer: Map URLs to controller actions using route configuration. Support parameters, HTTP methods, middleware, and named routes.

    * "What is middleware, and how is it used?"
      - Answer: Code that runs before/after requests. Handles authentication, logging, CORS, input processing. Can modify request/response.

    * "Explain dependency injection."
      - Answer: Design pattern where dependencies are passed in rather than created inside class. Improves testing, flexibility, and decoupling.

    * "How do you use Composer for dependency management?"
      - Answer: Define dependencies in composer.json, use composer install/update. Autoloads classes, manages versions, resolves conflicts.

    * "What are some testing strategies you use within frameworks?"
      - Answer: Unit tests for isolated components, integration tests for features, PHPUnit for testing, mocking dependencies.

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
      - Answer: Use filter_var/filter_input functions, type casting, regex validation. Remove/escape dangerous characters, validate against expected format.

    * "Explain how to implement secure user authentication."
      - Answer: Hash passwords, use secure sessions, implement rate limiting, require strong passwords, use HTTPS, consider two-factor authentication.

    * "Why is password hashing important?"
      - Answer: Protects user passwords if database compromised. Use strong algorithms (bcrypt), add salt, never store plain passwords.

    * "What are security headers, and how do they enhance security?"
      - Answer: HTTP headers that enforce security policies. Prevent XSS, clickjacking, force HTTPS, control resource loading.

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
      - Answer: Use caching, optimize database queries, enable opcode cache, minimize file operations, implement proper indexing.

    * "What are some caching strategies you use?"
      - Answer: Object caching (Redis/Memcached), page caching, query caching, CDN for static content. Cache invalidation strategies important.

    * "How do you optimize database queries?"
      - Answer: Use proper indexes, EXPLAIN queries, minimize joins, cache results, optimize table structure, use query builder wisely.

    * "What is OPcache, and how does it work?"
      - Answer: Caches compiled PHP code in memory, avoiding repeated parsing/compilation. Significantly improves performance, enabled in php.ini.

    * "How do you use profiling tools to identify performance bottlenecks?"
      - Answer: Use Xdebug, New Relic, or built-in profilers. Analyze execution time, memory usage, query performance, cache effectiveness.