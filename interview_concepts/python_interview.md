# Python Interview Preparation

This document outlines key concepts and common interview questions related to Python, designed to help you prepare for technical interviews.

## 1. Data Structures and Algorithms

* **Data Structures:**
    * Lists: Mutable, ordered sequences.
    * Tuples: Immutable, ordered sequences.
    * Dictionaries: Key-value pairs.
    * Sets: Unordered collections of unique elements.
    * Strings: Immutable sequences of characters.
    * Queues (collections.deque): FIFO data structure.
    * Stacks (lists): LIFO data structure.
    * Heaps (heapq): Priority queues.
* **Algorithms:**
    * Sorting (e.g., bubble sort, insertion sort, merge sort, quicksort).
    * Searching (e.g., linear search, binary search).
    * Recursion.
    * Dynamic programming.
    * Graph algorithms (e.g., depth-first search, breadth-first search).
* **Interview Questions:**
    * "Explain the differences between lists and tuples."
      - Answer: Lists are mutable, ordered sequences that can be modified. Tuples are immutable, ordered sequences that cannot be changed after creation.
    * "When would you use a dictionary versus a list?"
      - Answer: Use dictionaries for key-value pairs and fast lookups by key. Use lists for ordered sequences when accessing by position.
    * "Implement a function to reverse a string."
      - Answer: Use string slicing with negative step [::-1], or convert to list, reverse, and join. Both methods work efficiently.
    * "Describe how to implement a binary search."
      - Answer: Compare middle element, recursively search left half if target smaller, right half if larger. Requires sorted array. O(log n) complexity.
    * "Explain the concept of time and space complexity."
      - Answer: Time complexity measures operations vs input size. Space complexity measures memory usage. Usually expressed in Big O notation.
    * "What are common sorting algorithms and their time complexities?"
      - Answer: Quick sort (O(n log n) average), Merge sort (O(n log n) stable), Bubble sort (O(n²)), Selection sort (O(n²)).
    * "How would you implement a queue or stack in Python?"
      - Answer: Queue using collections.deque with append/popleft. Stack using list with append/pop or collections.deque for better performance.
    * "When would you use a set?"
      - Answer: Use sets for unique elements, fast membership testing, and mathematical operations like union, intersection, and difference.

## 2. Object-Oriented Programming (OOP)

* **Key Concepts:**
    * Classes and objects.
    * Inheritance.
    * Polymorphism.
    * Encapsulation.
    * Abstraction.
* **Special Methods (Dunder Methods):**
    * `__init__`, `__str__`, `__repr__`, `__eq__`, `__hash__`.
* **Interview Questions:**
    * "What are the four pillars of OOP?"
      - Answer: Encapsulation (data hiding), Inheritance (reuse code), Polymorphism (multiple forms), Abstraction (hide complexity behind simple interface).
    * "Explain inheritance and polymorphism."
      - Answer: Inheritance allows classes to inherit attributes/methods. Polymorphism lets objects of different classes be treated as same type.
    * "What is the purpose of `__init__`?"
      - Answer: Constructor method that initializes new object instances, setting up initial attributes and state when object is created.
    * "What is the difference between `__str__` and `__repr__`?"
      - Answer: __str__ returns readable string for users, __repr__ returns detailed string for developers, should be unambiguous representation.
    * "How do you implement custom classes in Python?"
      - Answer: Define class using 'class' keyword, implement __init__ for initialization, add methods and attributes as needed.
    * "What are class methods and static methods?"
      - Answer: Class methods (@classmethod) receive class as first argument. Static methods (@staticmethod) don't receive instance or class automatically.
    * "What is method overriding?"
      - Answer: Redefining method in child class that exists in parent class. Child's implementation takes precedence over parent's.

## 3. Python Fundamentals

* **Data Types:**
    * Integers, floats, strings, booleans, lists, tuples, dictionaries, sets.
* **Control Flow:**
    * `if`, `elif`, `else`.
    * `for` loops, `while` loops.
    * List comprehensions.
* **Functions:**
    * Defining functions, arguments, return values.
    * Lambda functions.
    * Generators.
    * Decorators.
* **Modules and Packages:**
    * Importing modules.
    * Creating packages.
* **Exception Handling:**
    * `try`, `except`, `finally`, `raise`.
* **Interview Questions:**
    * "Explain the difference between mutable and immutable data types."
      - Answer: Mutable types (lists, dictionaries, sets) can be modified after creation. Immutable types (strings, tuples, numbers) cannot be changed.
    * "What are list comprehensions, and when would you use them?"
      - Answer: Concise way to create lists. Use for simple transformations and filtering. More readable than loops for straightforward operations.
    * "Explain how to use generators in Python."
      - Answer: Functions using 'yield' to return values one at a time. Memory efficient for large sequences, as values generated on demand.
    * "What are lambda functions?"
      - Answer: Anonymous, single-expression functions. Useful for short operations, especially in map/filter/reduce or as simple callbacks.
    * "How do you handle exceptions in Python?"
      - Answer: Use try-except blocks to catch and handle errors. Can include else (no exception) and finally (always runs) clauses.
    * "What are decorators and how are they used?"
      - Answer: Functions modifying other functions. Add functionality like logging, timing, or access control without changing original function.
    * "Explain the global and nonlocal keywords."
      - Answer: Global declares variable in global scope. Nonlocal references variable in outer (but not global) scope in nested functions.

## 4. File I/O

* **Reading and Writing Files:**
    * `open()`, `read()`, `write()`, `close()`.
    * Context managers (`with open(...)`).
* **File Modes:**
    * `'r'`, `'w'`, `'a'`, `'b'`, `'x'`, `'t'`.
* **Interview Questions:**
    * "How do you read and write files in Python?"
      - Answer: Use open() with appropriate mode, read()/write() methods, and close(). Better: use 'with' statement for automatic closing.
    * "What are the different file modes?"
      - Answer: 'r' for read, 'w' for write (overwrites), 'a' for append, 'b' for binary, '+' for read/write.
    * "Why is it important to close files?"
      - Answer: Prevents resource leaks, ensures data is written, allows other programs to access file. 'with' statement handles automatically.
    * "Explain how to use context managers for file I/O."
      - Answer: 'with open(file) as f:' ensures file is properly closed after use, even if exceptions occur.
    * "How do you read a file line by line?"
      - Answer: Use for loop directly on file object, readline() method, or readlines() for all lines at once.

## 5. Standard Library

* **Common Modules:**
    * `os`, `sys`, `datetime`, `math`, `random`, `json`, `re`, `collections`, `itertools`.
* **Interview Questions:**
    * "What are some commonly used modules in the Python standard library?"
      - Answer: os (filesystem), datetime (time handling), json (data serialization), re (regex), collections (data structures), sys (system-specific).
    * "How do you work with dates and times in Python?"
      - Answer: Use datetime module for creating, formatting, and manipulating dates/times. timedelta for time differences.
    * "How do you use regular expressions in Python?"
      - Answer: Import re module, use re.match(), re.search(), re.findall() with patterns. Compile patterns for repeated use.
    * "How do you serialize and deserialize JSON data?"
      - Answer: Use json.dumps() to convert Python to JSON string, json.loads() for reverse. json.dump()/load() for file operations.
    * "How do you interact with the operating system using Python?"
      - Answer: Use os module for paths, directories, environment variables. subprocess for running commands. platform for system information.

## 6. Concurrency and Multithreading/Multiprocessing

* **Threads (threading):**
    * Creating and managing threads.
    * Thread synchronization (locks, semaphores).
* **Processes (multiprocessing):**
    * Creating and managing processes.
    * Inter-process communication (pipes, queues).
* **Asyncio:**
    * Asynchronous programming.
    * `async` and `await`.
* **Interview Questions:**
    * "What is the difference between multithreading and multiprocessing?"
      - Answer: Threads share memory space, lightweight but limited by GIL. Processes have separate memory, heavier but true parallelism.
    * "When would you use threads versus processes?"
      - Answer: Threads for I/O-bound tasks, processes for CPU-bound tasks. Threads share memory, processes better for parallel computation.
    * "How do you handle thread synchronization?"
      - Answer: Use threading.Lock for mutual exclusion, Semaphore for resource limiting, Event for signaling between threads.
    * "Explain the Global Interpreter Lock (GIL)."
      - Answer: Lock allowing only one thread to execute Python bytecode. Prevents true multithreading but simplifies memory management.
    * "What is asyncio, and how does it work?"
      - Answer: Framework for asynchronous I/O using coroutines with async/await syntax. Enables concurrent execution without threads.

## 7. Web Development (Flask, Django)

* **Flask:**
    * Microframework.
    * Routing, templates, requests, responses.
* **Django:**
    * Full-featured framework.
    * Models, views, templates, URLs, ORM.
* **RESTful APIs:**
    * Creating and consuming APIs.
* **Interview Questions:**
    * "What are the differences between Flask and Django?"
      - Answer: Flask is lightweight, flexible microframework. Django is full-featured with built-in admin, ORM, authentication. Choose based on needs.
    * "How do you define routes in Flask or Django?"
      - Answer: Flask uses @app.route decorators. Django uses URL patterns in urls.py with path() function.
    * "Explain the Django ORM."
      - Answer: Object-Relational Mapper translates Python classes to database tables. Provides high-level API for database operations.
    * "How do you create a RESTful API using Flask or Django?"
      - Answer: Define routes/views for CRUD operations, use appropriate HTTP methods, serialize data, handle requests/responses with JSON.
    * "What is middleware?"
      - Answer: Software layer between request and response. Processes requests globally, handles authentication, sessions, security.

## 8. Databases

* **Database Connectivity (e.g., psycopg2, mysql-connector-python, SQLAlchemy):**
    * Connecting to databases.
    * Executing SQL queries.
* **ORM (Object-Relational Mapping):**
    * Mapping Python objects to database tables.
* **SQL:**
    * Basic SQL Queries.
* **Interview Questions:**
    * "How do you connect to a database from Python?"
      - Answer: Use appropriate database driver (psycopg2, mysql-connector) or ORM (SQLAlchemy). Create connection with credentials and connection string.
    * "What is an ORM, and why is it used?"
      - Answer: Maps database tables to Python classes. Simplifies database operations, provides abstraction, makes code more maintainable.
    * "How do you execute SQL queries from Python?"
      - Answer: Create cursor from connection, execute queries using cursor.execute(), fetch results with fetchall()/fetchone().
    * "How do you prevent SQL injection?"
      - Answer: Use parameterized queries or ORM's query builders. Never format SQL strings directly with user input.

## 9. Testing (unittest, pytest)

* **Unit Testing:**
    * Testing individual functions and classes.
* **Test Frameworks:**
    * `unittest`, `pytest`.
* **Mocking:**
    * Simulating dependencies.
* **Interview Questions:**
    * "What testing frameworks have you used in Python?"
      - Answer: unittest (built-in), pytest (popular third-party). Both support test discovery, assertions, fixtures, and test organization.
    * "How do you write unit tests in Python?"
      - Answer: Create test class inheriting TestCase, write test methods starting with 'test_', use assertions to verify results.
    * "What are the benefits of testing?"
      - Answer: Catches bugs early, ensures code works as expected, makes refactoring safer, serves as documentation.
    * "How do you mock dependencies in your tests?"
      - Answer: Use unittest.mock or pytest's monkeypatch to replace real objects with mock objects. Isolates code being tested.

## 10. Memory Management

* **Garbage Collection:**
    * Automatic memory management.
* **Reference Counting:**
    * Tracking object references.
* **Memory Leaks:**
    * Identifying and preventing memory leaks.
* **Interview Questions:**
    * "How does Python manage memory?"
      - Answer: Uses reference counting and garbage collection. Objects freed when reference count reaches zero or cyclic references detected.
    * "What is garbage collection in Python?"
      - Answer: Automatic memory management that identifies and frees unreachable objects. Handles cyclic references reference counting misses.
    * "What are memory leaks, and how can you prevent them?"
      - Answer: Objects remaining in memory when no longer needed. Prevent by properly closing resources, using weak references, avoiding circular references.
    * "Explain reference counting."
      - Answer: Python tracks number of references to objects. When count reaches zero, object is deallocated. Can be viewed with sys.getrefcount().