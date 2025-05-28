# Laravel Interview Preparation

This document outlines key concepts and common interview questions related to Laravel, designed to help you prepare for technical interviews.

## 1. Laravel Fundamentals

* **Artisan CLI:**
    * Command-line interface.
    * Custom commands.
    * Database migrations.
    * Generating code.
* **Service Container:**
    * Dependency injection.
    * Service providers.
    * Facades.
* **Configuration:**
    * Environment variables.
    * Config files.
    * Service providers.
* **Directory Structure:**
    * MVC organization.
    * App directory.
    * Resources.
    * Routes.
* **Interview Questions:**
    * "What is Laravel's service container?"
      - Answer: Core container managing class dependencies and injection. Handles object creation, sharing instances, and resolving dependencies automatically.

    * "Explain Laravel facades and how they work."
      - Answer: Static interfaces to underlying classes. Use real-time facade resolution through service container, providing elegant syntax.

    * "What are service providers in Laravel?"
      - Answer: Bootstrap application services, register bindings in container. Handle service configuration and initialization during app startup.

    * "How do you create custom Artisan commands?"
      - Answer: Generate with make:command, define signature and handle method. Register in kernel.php or provider for custom CLI tasks.

    * "Explain Laravel's directory structure."
      - Answer: Organized by feature/responsibility. App for logic, resources for views, config for settings, routes for URL handling.

## 2. Routing and Middleware

* **Route Types:**
    * Basic routes.
    * Resource routes.
    * API routes.
    * Named routes.
* **Route Parameters:**
    * Required parameters.
    * Optional parameters.
    * Regular expression constraints.
* **Middleware:**
    * Global middleware.
    * Route middleware.
    * Middleware groups.
* **CSRF Protection:**
    * Token verification.
    * Excluding routes.
* **Interview Questions:**
    * "What are the different types of routes in Laravel?"
      - Answer: Web routes, API routes, resource routes, fallback routes. Each serves specific purpose with appropriate middleware.

    * "How do you handle route parameters?"
      - Answer: Define in route using {parameter}, optional with ?, type hints possible. Access in controller through method parameters.

    * "Explain middleware and its types."
      - Answer: Filters HTTP requests. Global runs always, route middleware on specific routes, groups combine multiple middleware.

    * "What is route model binding?"
      - Answer: Automatically inject model instances into routes. Implicit binding uses variable names, explicit defines custom resolution.

    * "How do you protect against CSRF attacks?"
      - Answer: Laravel includes CSRF middleware, generates tokens. Forms need @csrf directive, API requests may be excluded.

## 3. Database and Eloquent ORM

* **Migrations:**
    * Creating tables.
    * Modifying tables.
    * Rolling back changes.
* **Eloquent Models:**
    * Relationships.
    * Accessors/Mutators.
    * Scopes.
    * Events.
* **Query Builder:**
    * CRUD operations.
    * Joins.
    * Aggregates.
* **Seeding:**
    * Database seeds.
    * Model factories.
* **Interview Questions:**
    * "Explain Eloquent relationships and types."
      - Answer: Define connections between models. One-to-one, one-to-many, many-to-many, polymorphic relationships with fluent interface.

    * "What are migrations and why use them?"
      - Answer: Version control for database schema. Define structure in PHP, share changes, maintain consistency across environments.

    * "How do model factories and seeders work?"
      - Answer: Factories generate fake data, seeders populate database. Use for testing, development environments, sample data.

    * "Explain Eloquent accessors and mutators."
      - Answer: Methods modifying attribute retrieval/storage. Accessors format data when accessed, mutators before saving to database.

    * "What are query scopes in Eloquent?"
      - Answer: Reusable query constraints. Global scopes apply to all queries, local scopes are methods called on query builder.

## 4. Authentication and Authorization

* **Authentication:**
    * Built-in auth.
    * Custom guards.
    * API authentication.
* **Authorization:**
    * Gates.
    * Policies.
    * Roles and permissions.
* **Password Reset:**
    * Email verification.
    * Token generation.
* **API Tokens:**
    * Sanctum.
    * Passport.
* **Interview Questions:**
    * "How does Laravel's authentication system work?"
      - Answer: Uses guards and providers. Guards determine authentication method, providers retrieve user data from storage.

    * "Explain the difference between Gates and Policies."
      - Answer: Gates are Closure-based authorization, Policies are classes for model-specific authorization. Both define permissions.

    * "How do you implement API authentication?"
      - Answer: Use Sanctum for SPA/simple tokens, Passport for OAuth. Both provide secure API authentication with different complexity levels.

    * "What is Laravel Sanctum?"
      - Answer: Lightweight authentication for SPAs, mobile apps, and simple APIs. Manages tokens, SPA authentication through cookies.

    * "How do you handle user roles and permissions?"
      - Answer: Use Gates/Policies with custom logic, or packages like Spatie Permission. Define roles, assign permissions, check access.

## 5. Caching and Performance

* **Cache Systems:**
    * File cache.
    * Redis/Memcached.
    * Database cache.
* **Query Optimization:**
    * Eager loading.
    * Query caching.
    * N+1 problem.
* **Response Caching:**
    * HTTP cache headers.
    * Full-page cache.
* **Queue System:**
    * Job queues.
    * Workers.
    * Failed jobs.
* **Interview Questions:**
    * "How do you implement caching in Laravel?"
      - Answer: Use Cache facade with various drivers. Store frequently accessed data, query results, or full pages.

    * "What is the N+1 query problem?"
      - Answer: Performance issue with lazy loading relationships. Solve using eager loading (with()) to reduce database queries.

    * "Explain Laravel's queue system."
      - Answer: Defers time-consuming tasks. Jobs processed in background, supports multiple drivers, handles failures and retries.

    * "How do you optimize database queries?"
      - Answer: Use eager loading, query caching, indexes. Monitor and optimize slow queries, implement proper relationship loading.

    * "What are the different cache drivers?"
      - Answer: File, Redis, Memcached, database. Each has benefits: file simple, Redis/Memcached fast, database persistent.

## 6. Testing

* **Unit Testing:**
    * PHPUnit.
    * Feature tests.
    * HTTP tests.
* **Database Testing:**
    * Migrations.
    * Factories.
    * Seeders.
* **Mocking:**
    * Service mocking.
    * Facade mocking.
    * Event fake.
* **Browser Testing:**
    * Dusk.
    * Assertions.
* **Interview Questions:**
    * "What types of tests can you write in Laravel?"
      - Answer: Unit tests for isolated code, feature tests for endpoints, browser tests with Dusk. Integration tests for components.

    * "How do you test database operations?"
      - Answer: Use in-memory SQLite, refresh migrations, factories for data. RefreshDatabase trait maintains clean state between tests.

    * "Explain mocking in Laravel tests."
      - Answer: Mock dependencies, facades, services. Use Mock, Spy, or Fake classes to isolate components during testing.

    * "What is Laravel Dusk?"
      - Answer: Browser testing tool. Automates UI testing, interacts with JavaScript, tests real browser behavior.

    * "How do you handle test data?"
      - Answer: Use model factories, database seeders. Create test-specific data, maintain isolation between tests.

## 7. Security

* **Authentication:**
    * Multi-factor auth.
    * Session security.
* **Data Protection:**
    * Encryption.
    * Hashing.
    * CSRF protection.
* **Input Validation:**
    * Form requests.
    * Validation rules.
* **Security Headers:**
    * CORS.
    * CSP.
* **Interview Questions:**
    * "How does Laravel handle security?"
      - Answer: Built-in features for XSS, CSRF, SQL injection protection. Includes secure authentication, input validation, encryption.

    * "Explain Form Request Validation."
      - Answer: Dedicated classes for validation logic. Separate validation rules, custom messages, authorization checks from controllers.

    * "How do you implement API security?"
      - Answer: Use authentication tokens, rate limiting, validate input. Implement CORS policies, secure headers, encryption when needed.

    * "What security headers does Laravel provide?"
      - Answer: CSRF tokens, X-Frame-Options, Content-Security-Policy. Configurable through middleware for different security needs.

    * "How do you handle sensitive data?"
      - Answer: Use encryption for sensitive data, hashing for passwords. Store secrets in .env, use secure sessions. 