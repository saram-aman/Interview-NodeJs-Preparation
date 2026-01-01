# Django Interview Preparation

## Table of Contents
1. [Django Fundamentals](#1-django-fundamentals)
2. [Models and Databases](#2-models-and-databases)
3. [Views and URL Routing](#3-views-and-url-routing)
4. [Templates and Forms](#4-templates-and-forms)
5. [Django REST Framework](#5-django-rest-framework)
6. [Authentication and Authorization](#6-authentication-and-authorization)
7. [Performance and Optimization](#7-performance-and-optimization)
8. [Testing and Security](#8-testing-and-security)
9. [Deployment and Scaling](#9-deployment-and-scaling)
10. [Common Interview Questions](#10-common-interview-questions)

---

## 1. Django Fundamentals
- What is Django and its key features
  - **Answer:** Django is a batteries-included Python web framework that emphasizes rapid development, security, and a clean MVT separation, offering ORM, admin, auth, templating, and middleware out of the box.
- MVT (Model-View-Template) architecture
  - **Answer:** Django’s MVT splits responsibilities into Models for data access, Views for request handling, and Templates for presentation, with URLs acting as the controller layer.
- Django project vs app structure
  - **Answer:** A project is the overarching configuration container (settings, URLs, WSGI/ASGI) while apps are modular feature bundles that can be plugged into multiple projects.
- Settings and configurations
  - **Answer:** Settings live in `settings.py`, control installed apps, middleware, databases, caching, static/media paths, and are environment-specific via modules or env vars.
- Management commands
  - **Answer:** Commands invoked via `python manage.py <command>` handle tasks like migrations, shell access, test runs, and can be extended with custom command classes.
- Middleware in Django
  - **Answer:** Middleware are hooks that process requests/responses globally (e.g., auth, CSRF, sessions); they’re configured in order in `MIDDLEWARE` and must implement `__call__` logic.

## 2. Models and Databases
- Django ORM fundamentals
  - **Answer:** Django ORM maps Python classes to database tables, auto-generating SQL for CRUD operations while remaining database-agnostic.
- Model fields and relationships
  - **Answer:** Fields define column types (`CharField`, `IntegerField`, etc.) and relationships (`ForeignKey`, `ManyToManyField`, `OneToOneField`) capturing relational integrity via constraints.
- Migrations and schema evolution
  - **Answer:** Migrations track schema changes through versioned files created with `makemigrations` and applied via `migrate`, ensuring databases evolve consistently.
- QuerySets and database queries
  - **Answer:** QuerySets are lazy SQL abstractions supporting filters, annotations, aggregations, and can be composed/chainable, evaluated only when data is needed.
- Model methods and properties
  - **Answer:** Custom methods/properties encapsulate domain logic, computed fields, or convenience helpers, keeping behavior close to data definitions.
- Raw SQL and custom SQL
  - **Answer:** When ORM falls short, `raw()` queries, `connection.cursor()`, or database functions allow optimized SQL while ensuring proper parameterization for safety.
- Multi-database support
  - **Answer:** Django supports multiple database connections via `DATABASES` settings and routing classes that control read/write distribution across replicas or shards.

## 3. Views and URL Routing
- Function-based views (FBVs)
  - **Answer:** FBVs are simple Python callables receiving `request` and returning responses, ideal for straightforward logic or when readability matters.
- Class-based views (CBVs)
  - **Answer:** CBVs encapsulate logic in classes with HTTP method handlers (`get`, `post`) enabling inheritance, mixins, and reusable behavior.
- URL patterns and routing
  - **Answer:** URLs are mapped via `urlpatterns` using `path`/`re_path`, guiding requests to views with optional converters and names for reverse resolution.
- Request and response objects
  - **Answer:** Django wraps HTTP data in `HttpRequest` (headers, body, user, session) and expects responses as `HttpResponse` or `JsonResponse` instances encapsulating status, headers, content.
- View decorators
  - **Answer:** Decorators like `login_required`, `csrf_exempt`, or custom wrappers modify view behavior, enforcing auth, caching, throttling, or instrumentation.
- Generic class-based views
  - **Answer:** GCBVs like `ListView`, `DetailView`, `CreateView` provide CRUD scaffolding with minimal code by leveraging conventions and mixins.
- View mixins
  - **Answer:** Mixins encapsulate reusable behaviors (e.g., `LoginRequiredMixin`, `FormMixin`) that can be combined to compose view functionality.

## 4. Templates and Forms
- Django template language
  - **Answer:** DTL uses `{{ }}` for expressions and `{% %}` for logic, supporting filters, tags, and context variables while escaping output by default.
- Template inheritance and tags
  - **Answer:** Base templates define blocks that child templates override, encouraging DRY layouts; custom tags/filters extend functionality.
- Forms and form validation
  - **Answer:** `forms.Form` encapsulates fields, validation rules, and cleansed data, providing automatic error handling and HTML rendering helpers.
- ModelForms
  - **Answer:** `forms.ModelForm` ties forms to models, auto-generating fields and saving instances, making CRUD UIs concise and consistent.
- CSRF protection
  - **Answer:** Django includes a middleware/token system that requires `{% csrf_token %}` in forms, preventing cross-site request forgery attacks.
- Static files management
  - **Answer:** `STATICFILES_DIRS`, `collectstatic`, and storage backends manage CSS/JS assets across development and production deployments.
- Caching templates
  - **Answer:** Template fragments or entire views can be cached using the cache framework (`cache` template tag or per-view caching) to reduce rendering overhead.

## 5. Django REST Framework (DRF)
- Serializers and viewsets
  - **Answer:** Serializers convert complex data to native types/JSON and validate input, while viewsets bundle related actions (`list`, `create`) for routers to auto-generate URLs.
- Authentication and permissions
  - **Answer:** DRF supports session, token, JWT, OAuth, and custom auth, combined with permission classes (`IsAuthenticated`, `IsAdminUser`) to gate access per view.
- Throttling and pagination
  - **Answer:** Built-in throttles (`UserRateThrottle`, `AnonRateThrottle`) limit request rates; pagination classes (`PageNumber`, `LimitOffset`) control response sizes.
- Versioning and content negotiation
  - **Answer:** Versioning strategies (URL, header) allow evolving APIs, while content negotiation auto-selects renderers (JSON, Browsable API) based on request headers.
- Browsable API
  - **Answer:** DRF offers a human-friendly HTML interface for exploring endpoints, testing payloads, and inspecting serializers with minimal configuration.
- Customizing the API
  - **Answer:** Custom renderers/parsers, filters, and schema generators tailor API behavior to business needs or standards.
- API documentation
  - **Answer:** Tools like `drf-spectacular` or `drf-yasg` generate OpenAPI/Swagger docs from serializers and viewsets, keeping documentation in sync.

## 6. Authentication and Authorization
- User model and authentication backends
  - **Answer:** Django's pluggable backends authenticate against the `User` model (default or custom) and can integrate LDAP, SSO, or API keys.
- Built-in authentication views
  - **Answer:** `django.contrib.auth` provides ready-made views for login, logout, password reset/change, reducing boilerplate and ensuring secure flows.
- Custom user models
  - **Answer:** Using `AbstractUser` or `AbstractBaseUser` enables tailoring fields and auth behavior; you must define it at project start to avoid migration pain.
- Permissions and groups
  - **Answer:** Object-level and model-level permissions plus grouping enable fine-grained access control managed through the admin or code.
- Social authentication
  - **Answer:** Packages like Django Allauth integrate OAuth providers (Google, GitHub), handling tokens, profile mapping, and connection flows.
- JWT authentication
  - **Answer:** Libraries such as `djangorestframework-simplejwt` issue signed JWTs for stateless APIs, requiring secure storage and rotation strategies.
- OAuth and OAuth2
  - **Answer:** OAuth toolkits let Django act as provider or consumer, enabling delegated auth flows and scoped resource access.

## 7. Performance and Optimization
- Database optimization
  - **Answer:** Analyze slow queries, denormalize when needed, batch writes, and limit columns retrieved to reduce database load.
- Caching strategies
  - **Answer:** Layered caching (per-view, per-template, low-level cache) with Redis/Memcached cuts response times for repeated computations.
- Select related and prefetch related
  - **Answer:** `select_related` joins foreign keys in one query, while `prefetch_related` fetches many-to-many/related sets efficiently, eliminating N+1 problems.
- Database indexing
  - **Answer:** Create indexes (standard or partial) on frequently filtered fields to speed lookups; use Django’s `indexes` Meta option.
- Asynchronous views
  - **Answer:** Django’s ASGI support allows async views to await I/O-bound tasks, improving throughput when combined with async ORM/drivers.
- Background tasks with Celery
  - **Answer:** Celery workers offload long-running jobs (emails, reports) using brokers like Redis/RabbitMQ, keeping web requests responsive.
- Monitoring and profiling
  - **Answer:** Tools like Django Debug Toolbar, New Relic, or Sentry trace performance, enabling targeted optimizations and alerting.

## 8. Testing and Security
- Writing tests in Django
  - **Answer:** Tests extend `TestCase`/`SimpleTestCase`, leveraging built-in assertions and database isolation for unit/integration coverage.
- Test client and test cases
  - **Answer:** The test client simulates HTTP requests, enabling end-to-end assertions on views, redirects, and templates without running a server.
- Fixtures and factories
  - **Answer:** JSON/YAML fixtures or factory libraries (Factory Boy) seed deterministic data, ensuring reproducible scenarios.
- Security best practices
  - **Answer:** Keep dependencies updated, enforce HTTPS, rotate secrets, validate input, and enable security middleware to minimize attack surface.
- Common vulnerabilities (XSS, CSRF, SQL injection)
  - **Answer:** Django auto-escapes templates, provides CSRF tokens, and parameterizes queries; developers must avoid disabling these safeguards.
- Security middleware
  - **Answer:** Middleware like `SecurityMiddleware` adds HSTS, secure cookies, and SSL redirects; others handle clickjacking and session hardening.
- Content Security Policy (CSP)
  - **Answer:** CSP headers restrict allowed sources of scripts/styles, significantly mitigating XSS; Django can add them via middleware or libraries.

## 9. Deployment and Scaling
- WSGI and ASGI servers
  - **Answer:** WSGI servers (Gunicorn, uWSGI) handle sync workloads; ASGI servers (Uvicorn, Daphne) support async and WebSocket traffic.
- Static files in production
  - **Answer:** Use `collectstatic` to push assets to S3/CDN or serve via WhiteNoise/nginx, ensuring efficient caching headers.
- Database optimization for production
  - **Answer:** Tune connection pools, use read replicas, and monitor metrics to maintain low latency under load.
- Caching in production
  - **Answer:** Redis/Memcached caches, HTTP reverse proxies, and CDN edge caching reduce origin load and latency.
- Containerization with Docker
  - **Answer:** Docker images encapsulate dependencies, making deployments reproducible and environment agnostic.
- CI/CD pipelines
  - **Answer:** Pipelines automate tests, linting, migrations, and deployments, enabling frequent, reliable releases.
- Scaling strategies
  - **Answer:** Horizontal scaling via load balancers, auto-scaling groups, sharded databases, and task queues maintains performance as traffic grows.

## 10. Common Interview Questions
- Explain Django's architecture and design patterns.
  - **Answer:** Django follows MTV (variant of MVC) with ORM, template engine, URL routing, and encourages singleton settings, DRY, and loose coupling through apps/middleware.
- What is the difference between select_related and prefetch_related?
  - **Answer:** `select_related` performs SQL joins for single-valued relationships, whereas `prefetch_related` issues separate queries and stitches results for many-valued relations.
- How does Django handle database migrations?
  - **Answer:** Schema changes translate into migration files tracked in `django_migrations`, applied sequentially with `migrate`, ensuring reversible, versioned DDL.
- Explain Django's middleware architecture.
  - **Answer:** Middleware are callable layers executed in order before view handling and in reverse order for responses, allowing cross-cutting logic like auth or compression.
- How do you implement user authentication in Django?
  - **Answer:** Use built-in auth views/forms, configure authentication backends, optionally extend the user model, and protect views with decorators/mixins and permissions.
- What are Django signals and when would you use them?
  - **Answer:** Signals (`pre_save`, `post_save`, etc.) decouple event publishers from subscribers, useful for side-effects like auditing or cache invalidation.
- How do you optimize database queries in Django?
  - **Answer:** Profile with Debug Toolbar, use `select_related/prefetch_related`, annotations, indexing, and avoid unnecessary conversions or loops triggering query explosions.
- Explain Django's caching framework.
  - **Answer:** The caching API supports per-site, per-view, or low-level cache storage backed by Redis/Memcached/files, configured via `CACHES`.
- How do you implement pagination in Django REST Framework?
  - **Answer:** Configure a pagination class (PageNumber, LimitOffset) globally or per-view, returning paginated responses with metadata.
- What are the security features in Django?
  - **Answer:** Built-in CSRF protection, XSS escaping, SQL injection prevention, clickjacking headers, secure session cookies, password hashing, and auth middleware.

---

### Additional Resources
- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework Documentation](https://www.django-rest-framework.org/)
- [Django GitHub Repository](https://github.com/django/django)
- [Django Packages](https://djangopackages.org/)
- [Awesome Django](https://gitlab.com/rosarior/awesome-django)
