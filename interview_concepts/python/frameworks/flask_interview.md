# Flask Interview Preparation

## Table of Contents
1. [Flask Fundamentals](#1-flask-fundamentals)
2. [Routing and Views](#2-routing-and-views)
3. [Templates and Static Files](#3-templates-and-static-files)
4. [Forms and Validation](#4-forms-and-validation)
5. [Database Integration](#5-database-integration)
6. [Authentication and Authorization](#6-authentication-and-authorization)
7. [RESTful APIs with Flask](#7-restful-apis-with-flask)
8. [Testing and Debugging](#8-testing-and-debugging)
9. [Deployment and Scaling](#9-deployment-and-scaling)
10. [Common Interview Questions](#10-common-interview-questions)

---

## 1. Flask Fundamentals
- What is Flask and its key features
  - **Answer:** Flask is a lightweight, extensible microframework built on Werkzeug and Jinja2, focusing on minimal boilerplate, explicit configuration, and modular extensions.
- WSGI and Werkzeug
  - **Answer:** Flask runs on the WSGI spec, with Werkzeug providing the WSGI server utilities, request/response objects, and routing.
- Application and request contexts
  - **Answer:** Flask pushes application and request contexts to expose `current_app`, `g`, and `request` proxies within functions, ensuring thread-safe access bound to each request.
- Blueprints and application factories
  - **Answer:** Blueprints encapsulate routes/templates for modular reuse; combined with factory functions (`create_app`) they allow deferred configuration and testing flexibility.
- Configuration management
  - **Answer:** Configs live on `app.config` and can be loaded from Python objects, env vars, or instance folders, supporting per-environment overrides.
- Development server and debug mode
  - **Answer:** `flask run --debug` enables the reloader and interactive debugger (Werkzeug debugger) for rapid iteration; never expose it in production.

## 2. Routing and Views
- URL routing and view functions
  - **Answer:** `@app.route` decorators map paths and methods to Python callables returning responses (strings, dicts, Response objects).
- URL building with `url_for`
  - **Answer:** `url_for` generates URLs from endpoint names, keeping links DRY and updating automatically when routes change.
- HTTP methods and request methods
  - **Answer:** Specify `methods=["GET","POST"]` in routes; inside views read `request.method` to branch logic appropriately.
- Request and response objects
  - **Answer:** Werkzeug’s `Request` exposes headers, form data, JSON, files; `make_response` or returning tuples `(data, status, headers)` builds responses.
- Error handling and custom error pages
  - **Answer:** Register `@app.errorhandler(code)` to return friendly pages or JSON payloads for exceptions.
- Before and after request handlers
  - **Answer:** `@app.before_request` and `@app.after_request` run cross-cutting logic like auth, logging, or header injection around every request.

## 3. Templates and Static Files
- Jinja2 templating engine
  - **Answer:** Flask integrates Jinja2 for rendering HTML with control structures, filters, auto-escaping, and global context processors.
- Template inheritance
  - **Answer:** Base templates define blocks that child templates override, enabling consistent layouts and reuse.
- Template filters and tests
  - **Answer:** Built-in/custom filters (`|safe`, `|capitalize`) and tests (`is defined`) transform output; custom ones register via `app.template_filter`.
- Static files and file uploads
  - **Answer:** Static assets live in `/static` and are served via `url_for('static', filename='...')`; file uploads use `request.files` and secure filenames before saving.
- Flash messages
  - **Answer:** `flash(message, category)` stores session-backed messages retrieved with `get_flashed_messages()` for user feedback.
- Internationalization and localization
  - **Answer:** Extensions like Flask-Babel add translation catalogs, locale switching, and date/number formatting.

## 4. Forms and Validation
- WTForms integration
  - **Answer:** Flask-WTF wraps WTForms with CSRF protection, form classes, and validators to manage HTML forms easily.
- Form validation and CSRF protection
  - **Answer:** `form.validate_on_submit()` runs field validators and CSRF checks using a secret key-backed token.
- File uploads and handling
  - **Answer:** Use `FileField` in forms, accept uploads via `request.files`, and save securely using `werkzeug.utils.secure_filename`.
- Custom validators
  - **Answer:** Define functions or WTForms validators to enforce business rules per field or across forms.
- Form rendering in templates
  - **Answer:** Forms expose fields rendered with macros (`bootstrap/wtf`), manual markup, or `{{ form.hidden_tag() }}` for hidden inputs like CSRF.

## 5. Database Integration
- SQLAlchemy ORM
  - **Answer:** SQLAlchemy maps Python classes to tables, offering expressive query APIs and relationship management.
- Flask-SQLAlchemy extension
  - **Answer:** Provides an `SQLAlchemy` instance bound to the Flask app context, simplifying engine/session creation and config.
- Database migrations with Flask-Migrate
  - **Answer:** Flask-Migrate wraps Alembic to autogenerate migration scripts (`flask db migrate`) and apply them (`flask db upgrade`).
- Model relationships
  - **Answer:** Define `relationship` and `ForeignKey` fields to model one-to-many/many-to-many associations with lazy loading options.
- Query patterns and optimization
  - **Answer:** Use `filter`, `join`, eager loading, and pagination to minimize round-trips; profile with SQLAlchemy’s echo or Flask-DebugToolbar.
- Working with raw SQL
  - **Answer:** Execute raw statements via `db.session.execute(text("..."))` when queries exceed ORM expressiveness, ensuring bound parameters.

## 6. Authentication and Authorization
- User authentication with Flask-Login
  - **Answer:** Flask-Login manages user sessions, login/logout, and `current_user`, requiring user loader callbacks.
- Password hashing and security
  - **Answer:** Use `werkzeug.security` or `passlib` to hash passwords with salt (PBKDF2, bcrypt) instead of storing plaintext.
- Role-based access control
  - **Answer:** Store roles/permissions on users and check them via decorators or custom logic before executing view code.
- OAuth integration
  - **Answer:** Libraries like Flask-Dance simplify OAuth flows with providers, handling redirects and token storage.
- JWT authentication
  - **Answer:** Flask-JWT-Extended issues JWTs, setting identity/claims inside tokens for stateless APIs.
- Session management
  - **Answer:** Flask stores session data in signed cookies by default; use server-side stores (Redis) for larger or more secure sessions.

## 7. RESTful APIs with Flask
- Building RESTful APIs
  - **Answer:** Define JSON-producing routes, set content-type headers, and structure resources around HTTP verbs.
- Flask-RESTful extension
  - **Answer:** Provides `Resource` classes, request parsers, and automatic routing to keep APIs organized.
- Request parsing and validation
  - **Answer:** Use `reqparse`, Marshmallow, or Pydantic to validate payloads before business logic.
- API versioning
  - **Answer:** Version via URL prefixes (`/v1/`), blueprints, or headers to evolve APIs safely.
- API documentation with Swagger/OpenAPI
  - **Answer:** Tools like Flask-Swagger, APIspec, or Connexion generate OpenAPI specs and interactive docs.
- Rate limiting and throttling
  - **Answer:** Flask-Limiter enforces quotas using in-memory or Redis backends, returning 429 responses when exceeded.

## 8. Testing and Debugging
- Unit testing with pytest
  - **Answer:** Pytest + `pytest-flask` fixtures allow isolated tests with app/test client creation per test.
- Test client and test fixtures
  - **Answer:** `app.test_client()` simulates HTTP calls; fixtures seed database state or application context.
- Mocking external services
  - **Answer:** Use unittest.mock or responses library to stub HTTP calls, ensuring deterministic tests.
- Debugging techniques
  - **Answer:** Enable debug toolbar, use pdb/ipdb breakpoints, or inspect requests via logging middleware.
- Logging configuration
  - **Answer:** Configure Python logging or `app.logger` with handlers/formatters to capture structured logs.
- Error tracking
  - **Answer:** Integrate Sentry or Rollbar to capture exceptions, request context, and user data for postmortems.

## 9. Deployment and Scaling
- WSGI servers (Gunicorn, uWSGI)
  - **Answer:** Run Flask behind production WSGI servers with worker processes/threads tuned to workload.
- Nginx configuration
  - **Answer:** Nginx proxies requests to Gunicorn, handles TLS, static assets, and buffering for better performance.
- Docker and containerization
  - **Answer:** Containerize apps with requirements pinned, health checks, and environment configs for reproducible deployments.
- Cloud deployment (AWS, GCP, Azure)
  - **Answer:** Deploy via Elastic Beanstalk, App Engine, or Azure App Service; manage secrets via environment services.
- Scaling strategies
  - **Answer:** Scale horizontally with load balancers, auto-scaling groups, or microservices; offload background work to Celery.
- Monitoring and logging
  - **Answer:** Use CloudWatch, Stackdriver, or Prometheus/Grafana plus centralized logging (ELK) to watch request metrics and errors.

## 10. Common Interview Questions
- What are the key differences between Flask and Django?
  - **Answer:** Flask is micro and unopinionated, requiring manual component selection, whereas Django is batteries-included with ORM/admin/auth built-in.
- Explain the Flask application context.
  - **Answer:** The app context binds the app instance to the active thread, enabling `current_app` and config access outside request handlers.
- How do you implement database migrations in Flask?
  - **Answer:** Use Flask-Migrate (Alembic) to autogenerate migration scripts after model changes and apply them with `flask db upgrade`.
- What is the purpose of Blueprints in Flask?
  - **Answer:** Blueprints modularize related routes/assets, easing code organization and reuse across apps or enabling lazy registration.
- How do you handle file uploads in Flask?
  - **Answer:** Accept files from `request.files`, validate type/size, use `secure_filename`, and store them in configured upload folders or object storage.
- Explain the Flask request context.
  - **Answer:** The request context stores request-specific data (headers, forms, user) accessible via `request` and `g`, isolated per thread/request.
- How do you implement user authentication?
  - **Answer:** Combine Flask-Login, password hashing, and protected views (`@login_required`) or JWT-based APIs depending on use case.
- What are Flask extensions you've worked with?
  - **Answer:** Mention relevant ones (Flask-WTF, Flask-RESTful, Flask-Admin, Celery integration) and describe their roles.
- How do you handle background tasks in Flask?
  - **Answer:** Use Celery or RQ with a message broker to run asynchronous jobs triggered from Flask routes.
- Explain how to scale a Flask application.
  - **Answer:** Scale via multiple Gunicorn workers behind load balancers, cache heavy computations, move static assets to CDNs, and use distributed task queues.

---

### Additional Resources
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Flask GitHub Repository](https://github.com/pallets/flask)
- [Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world)
- [Awesome Flask](https://github.com/humiaozuzu/awesome-flask)
- [TestDriven.io Flask](https://testdriven.io/blog/topics/flask/)
