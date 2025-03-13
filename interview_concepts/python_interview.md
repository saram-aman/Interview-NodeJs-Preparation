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
    * "When would you use a dictionary versus a list?"
    * "Implement a function to reverse a string."
    * "Describe how to implement a binary search."
    * "Explain the concept of time and space complexity."
    * "What are common sorting algorithms and their time complexities?"
    * "How would you implement a queue or stack in Python?"
    * "When would you use a set?"

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
    * "Explain inheritance and polymorphism."
    * "What is the purpose of `__init__`?"
    * "What is the difference between `__str__` and `__repr__`?"
    * "How do you implement custom classes in Python?"
    * "What are class methods and static methods?"
    * "What is method overriding?"

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
    * "What are list comprehensions, and when would you use them?"
    * "Explain how to use generators in Python."
    * "What are lambda functions?"
    * "How do you handle exceptions in Python?"
    * "What are decorators and how are they used?"
    * "Explain the global and nonlocal keywords."

## 4. File I/O

* **Reading and Writing Files:**
    * `open()`, `read()`, `write()`, `close()`.
    * Context managers (`with open(...)`).
* **File Modes:**
    * `'r'`, `'w'`, `'a'`, `'b'`, `'x'`, `'t'`.
* **Interview Questions:**
    * "How do you read and write files in Python?"
    * "What are the different file modes?"
    * "Why is it important to close files?"
    * "Explain how to use context managers for file I/O."
    * "How do you read a file line by line?"

## 5. Standard Library

* **Common Modules:**
    * `os`, `sys`, `datetime`, `math`, `random`, `json`, `re`, `collections`, `itertools`.
* **Interview Questions:**
    * "What are some commonly used modules in the Python standard library?"
    * "How do you work with dates and times in Python?"
    * "How do you use regular expressions in Python?"
    * "How do you serialize and deserialize JSON data?"
    * "How do you interact with the operating system using Python?"

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
    * "When would you use threads versus processes?"
    * "How do you handle thread synchronization?"
    * "Explain the Global Interpreter Lock (GIL)."
    * "What is asyncio, and how does it work?"

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
    * "How do you define routes in Flask or Django?"
    * "Explain the Django ORM."
    * "How do you create a RESTful API using Flask or Django?"
    * "What is middleware?"

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
    * "What is an ORM, and why is it used?"
    * "How do you execute SQL queries from Python?"
    * "How do you prevent SQL injection?"

## 9. Testing (unittest, pytest)

* **Unit Testing:**
    * Testing individual functions and classes.
* **Test Frameworks:**
    * `unittest`, `pytest`.
* **Mocking:**
    * Simulating dependencies.
* **Interview Questions:**
    * "What testing frameworks have you used in Python?"
    * "How do you write unit tests in Python?"
    * "What are the benefits of testing?"
    * "How do you mock dependencies in your tests?"

## 10. Memory Management

* **Garbage Collection:**
    * Automatic memory management.
* **Reference Counting:**
    * Tracking object references.
* **Memory Leaks:**
    * Identifying and preventing memory leaks.
* **Interview Questions:**
    * "How does Python manage memory?"
    * "What is garbage collection in Python?"
    * "What are memory leaks, and how can you prevent them?"
    * "Explain reference counting."