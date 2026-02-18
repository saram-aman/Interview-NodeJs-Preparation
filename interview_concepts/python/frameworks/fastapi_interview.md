# FastAPI Interview Preparation

## Table of Contents
1. [FastAPI Fundamentals](#1-fastapi-fundamentals)
2. [Routing and Request Handling](#2-routing-and-request-handling)
3. [Data Validation and Serialization](#3-data-validation-and-serialization)
4. [Dependency Injection](#4-dependency-injection)
5. [Authentication and Authorization](#5-authentication-and-authorization)
6. [Database Integration](#6-database-integration)
7. [Background Tasks and WebSockets](#7-background-tasks-and-websockets)
8. [Testing and Deployment](#8-testing-and-deployment)
9. [Performance and Optimization](#9-performance-and-optimization)
10. [Common Interview Questions](#10-common-interview-questions)

---

## 1. FastAPI Fundamentals
- What is FastAPI and its key features
  - **Answer:** FastAPI is an async-first Python web framework built atop Starlette and Pydantic, offering automatic OpenAPI docs, blazing performance, and type-driven validation.
- Comparison with other Python web frameworks
  - **Answer:** Compared to Flask/Django, FastAPI emphasizes async support, automatic schema generation, and type hints; compared to aiohttp it provides higher-level routing/dependency tooling.
- Setting up a FastAPI project
  - **Answer:** Install `fastapi` and an ASGI server like `uvicorn`, define an `app = FastAPI()` instance, and create path operations via decorators such as `@app.get("/")`.
- ASGI and Uvicorn
  - **Answer:** FastAPI relies on ASGI for async concurrency; Uvicorn is a high-performance ASGI server (based on uvloop/httptools) that runs FastAPI apps.
- Request-Response cycle
  - **Answer:** Incoming requests hit an ASGI server, pass through middleware, execute a path operation function, and return responses serialized via Pydantic and Starlette Response classes.
- Path operations and HTTP methods
  - **Answer:** Decorators (`@app.get`, `@app.post`, etc.) register functions for HTTP methods; annotations define parameters, query args, and request bodies.

## 2. Routing and Request Handling
- Path parameters and query parameters
  - **Answer:** Declare function arguments with type hints; FastAPI auto-parses path segments and query strings, applying validation and conversions.
- Request body and form data
  - **Answer:** Use Pydantic models for JSON bodies and `Form`/`Body` helpers for form-encoded data, enabling automatic docs and validation.
- File uploads and handling
  - **Answer:** `UploadFile` streams incoming files without loading fully into memory, exposing `.file` for efficient processing.
- Response models and status codes
  - **Answer:** `response_model` enforces output schema and filtering; `status_code` parameter sets HTTP codes, ensuring clear API contracts.
- Custom response types
  - **Answer:** Starlette responses (`JSONResponse`, `HTMLResponse`, `StreamingResponse`, `FileResponse`) handle different payloads and headers.
- Path operation configuration
  - **Answer:** Metadata like `tags`, `summary`, `deprecated`, `responses`, and dependencies can be configured per route for documentation and behavior.

## 3. Data Validation and Serialization
- Pydantic models (v1 vs v2)
  - **Answer:** Pydantic v2 is a major rewrite in Rust, offering 5-50x better performance. It uses `model_dump()` instead of `.dict()` and has a stricter, cleaner API. FastAPI fully supports v2 while maintaining backward compatibility where possible.
- Request and response models
  - **Answer:** Separate models let you accept certain fields and return filtered ones; FastAPI automatically uses them for body parsing and documentation.
- Field validation
  - **Answer:** Pydantic `Field` metadata enforces constraints (regex, min_length) and generates helpful error messages.
- Custom validators
  - **Answer:** Use `@validator` and `root_validator` to add cross-field checks or transformations during parsing.
- Nested models
  - **Answer:** Models can embed other models/lists, enabling complex payloads; FastAPI handles JSON serialization recursively.
- Response model includes and excludes
  - **Answer:** `response_model_include/exclude` filter fields dynamically, preventing sensitive data leakage.

## 4. Dependency Injection
- What is dependency injection
  - **Answer:** DI separates resource creation from usage, enhancing testability and modularity.
- Creating and using dependencies
  - **Answer:** Annotate parameters with `Depends(callable)`; FastAPI resolves dependencies before calling the path function.
- Sub-dependencies
  - **Answer:** Dependencies can declare their own dependencies, forming DAGs that FastAPI resolves automatically.
- Dependency caching
  - **Answer:** FastAPI caches dependency results per request unless `use_cache=False`, avoiding redundant work like DB lookups.
- Security dependencies
  - **Answer:** Built-in helpers (`HTTPBasic`, `OAuth2PasswordBearer`) plug into `Depends` to enforce auth flows and parse credentials.
- Overriding dependencies for testing
  - **Answer:** `app.dependency_overrides` lets tests swap real dependencies with fakes/mocks.

**Testing Example (Dependency Override):**
```python
from fastapi.testclient import TestClient
from main import app, get_db

def override_get_db():
    return MagicMock() # Mock database

app.dependency_overrides[get_db] = override_get_db
client = TestClient(app)

def test_read_main():
    response = client.get("/items/")
    assert response.status_code == 200
```

## 5. Authentication and Authorization
- OAuth2 with Password (and hashing)
  - **Answer:** Implement token endpoints using OAuth2PasswordRequestForm, hash passwords with `passlib`, and issue tokens for subsequent requests.
- JWT tokens
  - **Answer:** Use `pyjwt` or `python-jose` to sign JWTs containing user claims/expiry, validating them via dependencies in protected routes.
- OAuth2 scopes
  - **Answer:** `SecurityScopes` ensure tokens include required scopes, enabling fine-grained authorization.
- Role-based access control
  - **Answer:** Store roles/permissions on users and check them in dependencies or custom decorators before executing route logic.
- API key authentication
  - **Answer:** Dependencies can read headers/query params for API keys, validating against datastore or secrets manager.
- Custom authentication backends
  - **Answer:** Implement custom dependencies/middleware to integrate SSO, session tokens, or third-party providers.

## 6. Database Integration
- SQLAlchemy integration
  - **Answer:** Define ORM models, configure engine/session (sync or async), and inject sessions via dependencies to use inside path operations.
- Async database access
  - **Answer:** Use `SQLAlchemy 2.0 async` engine or ORMs like Tortoise/encode Databases to run awaitable queries without blocking the event loop.
- Database migrations with Alembic
  - **Answer:** Alembic tracks schema revisions; integrate by pointing to models’ metadata and running `alembic revision --autogenerate`/`upgrade`.
- Pydantic models with databases
  - **Answer:** Convert ORM objects to response models via `.from_orm` with `Config.orm_mode=True`, bridging DB and API schemas.
- CRUD operations
  - **Answer:** Organize create/read/update/delete logic in repositories/services and call them from routes to keep handlers thin.
- Database transactions
  - **Answer:** Manage transactions using session contexts or `async with` blocks to ensure atomicity and rollback on exceptions.

## 7. Background Tasks and WebSockets
- Background tasks
  - **Answer:** FastAPI’s `BackgroundTasks` schedule follow-up work (emails, logging) after responses are sent.
- Celery/RQ integration
  - **Answer:** Offload heavy processing to Celery/RQ workers via brokers (Redis/RabbitMQ). Use these for tasks taking >10s or requiring retries/advanced scheduling.

**Comparison: BackgroundTasks vs. Celery**

| Feature | **FastAPI BackgroundTasks** | **Celery / RQ** |
| :--- | :--- | :--- |
| **Running Env** | Same process/thread | Separate worker process(es) |
| **Use Case** | Quick tasks (emails, logs) | Heavy work (video encoding, data crunching) |
| **Complexity** | Simple, no extra infra | Requires broker (Redis) and workers |
| **Persistence** | Lost if server restarts | Persistent (tasks stored in broker) |
| **Retries** | No built-in retry logic | Rich retry/backoff policies |
- WebSocket endpoints
  - **Answer:** `@app.websocket` routes maintain bi-directional connections using async send/receive loops.
- Real-time applications
  - **Answer:** Combine WebSockets with pub/sub backends (Redis, Kafka) to broadcast real-time updates.
- Handling concurrent connections
  - **Answer:** Async event loop + efficient servers handle thousands of sockets; implement backpressure and connection cleanup to avoid leaks.
- Rate limiting
  - **Answer:** Middleware or dependencies backed by Redis counters enforce per-user/IP quotas to deter abuse.

## 8. Testing and Deployment
- Testing with TestClient
  - **Answer:** FastAPI’s TestClient (Starlette) simulates HTTP calls synchronously, allowing assertions on JSON/status/headers.
- Testing with pytest
  - **Answer:** Pytest fixtures spin up app instances, override dependencies, and run async tests via `pytest-asyncio`.
- Test databases
  - **Answer:** Use SQLite in-memory or transactional fixtures to isolate DB state per test.
- CI/CD pipelines
  - **Answer:** Automate linting, type checks (mypy), tests, and deployments using GitHub Actions/GitLab CI for consistent releases.
- Docker deployment
  - **Answer:** Containerize with lightweight images (python-slim + `uvicorn[standard]`), leveraging multi-stage builds for smaller artifacts.
- Cloud deployment (AWS, GCP, Azure)
  - **Answer:** Deploy via managed containers (ECS, Cloud Run, App Service) or serverless (Lambda + Mangum) depending on workload.

## 9. Performance and Optimization
- Async/await patterns
  - **Answer:** Keep CPU-bound work off the event loop, `await` I/O operations, and avoid blocking libraries to maintain concurrency.
- Caching strategies
  - **Answer:** Implement Redis caches, HTTP caching headers, or client-side caches to reduce redundant computations.
- Database optimization
  - **Answer:** Use indexing, connection pooling, and query profiling (EXPLAIN) to keep DB latency low.
- Response compression
  - **Answer:** Add `GZipMiddleware` or CDN compression to shrink payload sizes for faster delivery.
- Middleware optimization
  - **Answer:** Keep middleware lightweight, offload heavy logic to dependencies/background tasks, and short-circuit early when possible.
- Monitoring and metrics
  - **Answer:** Integrate logging, Prometheus exporters, OpenTelemetry traces, and APM tools to track latency/error trends.

## 10. Common Interview Questions
- What are the advantages of FastAPI over Flask/Django?
  - **Answer:** Native async support, automatic OpenAPI docs, type-driven validation, and performance comparable to Node/Go make FastAPI attractive. It also tends to produce cleaner, more self-documenting code because request/response models and dependency graphs are all expressed via standard Python type hints.
- How does FastAPI handle async requests?
  - **Answer:** Path functions declared with `async def` run in the event loop, allowing concurrent awaits; sync functions run in thread pools automatically. This means I/O-bound work scales very well, but CPU-heavy work should still be moved off the main event loop into separate processes or task queues.
- Explain Pydantic and its role in FastAPI.
  - **Answer:** Pydantic powers request validation, serialization, and schema generation by enforcing type hints and constraints on models. In practice it lets you centralize all your API contracts in one place and get automatic, descriptive error messages when clients send invalid payloads.
- How do you implement authentication in FastAPI?
  - **Answer:** Use dependencies that parse credentials (OAuth2, JWT, API keys), verify them against storage, and raise `HTTPException` on failure.
- What is dependency injection in FastAPI?
  - **Answer:** DI lets you declare dependencies via `Depends`, enabling shared resources, auth checks, and modular design without manual wiring. It also makes testing much easier because you can override dependencies with fakes or mocks at app or test level.
- How do you handle database migrations?
  - **Answer:** Integrate Alembic or Tortoise migrations, generating revisions based on ORM models and applying them during deployment pipelines.
- Explain FastAPI's background tasks.
  - **Answer:** `BackgroundTasks` queue callables to execute after response completion, suitable for non-critical follow-up work.
- How do you implement rate limiting?
  - **Answer:** Use middleware or dependencies with Redis counters/leaky bucket algorithms to cap requests per user/IP and return `429` responses.
- What are the best practices for error handling?
  - **Answer:** Define global exception handlers, return structured `JSONResponse` with detail codes, log stack traces, and avoid exposing internals.
- How do you monitor a FastAPI application in production?
  - **Answer:** Collect metrics (Prometheus), logs (structured JSON), traces (OTel), and integrate APM tools (New Relic, Datadog) for observability.

---

### Additional Resources
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [FastAPI GitHub Repository](https://github.com/tiangolo/fastapi)
- [FastAPI Users Guide](https://fastapi-users.github.io/fastapi-users/)
- [Awesome FastAPI](https://github.com/mjhea0/awesome-fastapi)
- [TestDriven.io FastAPI](https://testdriven.io/blog/topics/fastapi/)
