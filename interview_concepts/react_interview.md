# React Interview Preparation

This document outlines key concepts and common interview questions related to React, designed to help you prepare for technical interviews.

## 1. Component Lifecycle/Hooks

* **Class Components (Lifecycle):**
    * `constructor()`: Initialization, setting initial state.
    * `render()`: Returns JSX to define the UI.
    * `componentDidMount()`: Called after the component is inserted into the DOM. Ideal for data fetching, subscriptions.
    * `componentDidUpdate(prevProps, prevState)`: Called after the component updates. Useful for performing side effects based on changes.
    * `componentWillUnmount()`: Called before the component is removed from the DOM. Clean up resources (timers, subscriptions).
    * `shouldComponentUpdate(nextProps, nextState)`: Performance optimization, determines if a component should re-render.
* **Functional Components (Hooks):**
    * `useState()`: Manages component state.
    * `useEffect()`: Performs side effects (data fetching, subscriptions, DOM manipulation).
    * `useContext()`: Accesses context values.
    * `useRef()`: Creates mutable references.
    * `useMemo()`: Memoizes expensive computations.
    * `useCallback()`: Memoizes callback functions.
    * `useReducer()`: Manages complex state with a reducer function.
    * Custom Hooks: Creating reusable logic.
* **Interview Questions:**
    * "Explain the React component lifecycle."
      - Answer: Components go through mounting (creation), updating (props/state changes), and unmounting (removal). Each phase has specific lifecycle methods/hooks.
    * "What are the differences between class components and functional components?"
      - Answer: Class components use lifecycle methods and 'this', while functional components use hooks. Functional components are simpler and preferred in modern React.
    * "Describe the purpose of `useEffect` and how it works."
      - Answer: Handles side effects in functional components. Runs after render, can clean up with return function. Dependencies array controls when it runs.
    * "When would you use `useMemo` or `useCallback`?"
      - Answer: Use useMemo for expensive computations, useCallback for function memoization. Both optimize performance by preventing unnecessary recalculations/rerenders.
    * "How do you optimize React component performance?"
      - Answer: Use memo, useMemo, useCallback, proper key usage, lazy loading, and avoid unnecessary rerenders through proper state management.
    * "What are custom hooks?"
      - Answer: Reusable functions starting with 'use', encapsulating component logic like state management, side effects, or API calls.
    * "What is the render phase and the commit phase?"
      - Answer: Render phase creates Virtual DOM and reconciles changes. Commit phase applies these changes to actual DOM.

## 2. State Management

* **Local State (`useState`):**
    * Managing state within a single component.
* **Context API (`useContext`):**
    * Sharing state across components without prop drilling.
* **Redux/Zustand/Recoil:**
    * Centralized state management for complex applications.
    * Redux: Actions, reducers, store.
    * Zustand: simplified store creation.
    * Recoil: atoms and selectors.
* **Interview Questions:**
    * "What are the different ways to manage state in React?"
      - Answer: Local state (useState), Context API for shared state, Redux/Zustand/Recoil for complex global state management.
    * "When would you use the Context API versus Redux?"
      - Answer: Context for simple shared state between components. Redux for complex state, middleware needs, or large applications.
    * "Explain the Redux data flow."
      - Answer: Actions describe state changes, reducers specify how changes happen, store holds state. Components dispatch actions to update state.
    * "What are the benefits of using a centralized state management library?"
      - Answer: Predictable state updates, easier debugging, centralized data flow, better state organization, and simpler data sharing between components.
    * "What are atoms and selectors in Recoil?"
      - Answer: Atoms are units of state. Selectors derive state from atoms or other selectors, enabling computed values.
    * "How does Zustand simplify state management?"
      - Answer: Provides simple hook-based API, minimal boilerplate, no providers needed, easy state updates with automatic rerenders.

## 3. Props and Component Composition

* **Props:**
    * Passing data from parent to child components.
    * Immutable.
* **Component Composition:**
    * Building complex UIs by combining smaller components.
    * `children` prop.
    * Render props.
* **Interview Questions:**
    * "What are props in React?"
      - Answer: Properties passed from parent to child components. Read-only values that help components communicate and share data.
    * "How do you pass data from a parent to a child component?"
      - Answer: Pass props as attributes in JSX when rendering child component. Child receives props as function parameter.
    * "Explain the concept of component composition."
      - Answer: Building complex UIs by combining simpler components. Enables code reuse and better organization through nested components.
    * "What is the `children` prop?"
      - Answer: Special prop that contains content between component's opening and closing tags. Enables component wrapping and nesting.
    * "What are render props?"
      - Answer: Pattern where component receives function prop that returns React elements. Enables component logic reuse and dynamic rendering.

## 4. Virtual DOM and Reconciliation

* **Virtual DOM:**
    * A lightweight copy of the actual DOM.
    * React updates the Virtual DOM first.
* **Reconciliation:**
    * The process of comparing the Virtual DOM with the actual DOM and applying minimal updates.
    * Diffing algorithm.
    * Keys.
* **Interview Questions:**
    * "What is the Virtual DOM, and why is it used in React?"
      - Answer: Lightweight copy of actual DOM. Enables efficient updates by comparing changes before updating real DOM, improving performance.
    * "Explain the reconciliation process."
      - Answer: React compares Virtual DOM with actual DOM, identifies differences, and updates only changed elements for efficient rendering.
    * "Why are keys important in React lists?"
      - Answer: Keys help React track list items' identity, optimize rendering, and maintain state when items change position.
    * "How does React optimize DOM updates?"
      - Answer: Uses Virtual DOM, batches updates, reconciliation algorithm, and efficient diffing to minimize actual DOM manipulations.

## 5. Routing (React Router)

* **React Router:**
    * Client-side routing for single-page applications.
    * `BrowserRouter`, `Route`, `Link`, `useParams`, `useNavigate`.
* **Nested Routing:**
    * Creating routes within routes.
* **Dynamic Routing:**
    * Routes with parameters.
* **Interview Questions:**
    * "How does React Router work?"
      - Answer: Enables client-side routing in React apps. Matches URLs to components, updates UI without page reload.
    * "How do you define routes in React Router?"
      - Answer: Use Route components inside Router, specify path and component to render. Can include nested routes.
    * "What are dynamic routes?"
      - Answer: Routes with parameters in URL (like :id). Access parameters using useParams hook or match prop.
    * "How do you navigate between routes programmatically?"
      - Answer: Use useNavigate hook or Navigate component. Can pass state and handle redirects programmatically.
    * "Explain nested routing."
      - Answer: Routes defined inside other routes, creating hierarchical navigation. Parent route renders child routes based on URL.

## 6. Performance Optimization

* **Memoization (`useMemo`, `useCallback`):**
    * Preventing unnecessary re-renders.
* **Code Splitting (Lazy Loading):**
    * Loading components on demand.
* **Virtualization (React Window, React Virtualized):**
    * Rendering only visible items in large lists.
* **ShouldComponentUpdate/React.memo:**
    * Preventing unnecessary re-renders in class and functional components.
* **Profiling Tools (React DevTools):**
    * Identifying performance bottlenecks.
* **Interview Questions:**
    * "How do you optimize React application performance?"
      - Answer: Use memo, lazy loading, code splitting, proper key usage, avoid unnecessary rerenders, and implement virtualization for large lists.
    * "What is memoization, and how is it used in React?"
      - Answer: Caching computed values or components to prevent unnecessary recalculations. Use useMemo and useCallback hooks.
    * "Explain code splitting and lazy loading."
      - Answer: Split code into smaller chunks, load components on demand using React.lazy and Suspense. Improves initial load time.
    * "When would you use virtualization?"
      - Answer: For rendering large lists efficiently. Only renders visible items, improves performance with react-window or react-virtualized.
    * "How do you use React DevTools to profile performance?"
      - Answer: Record renders, analyze component updates, identify unnecessary rerenders, and measure render times using Profiler tab.

## 7. Error Handling

* **Error Boundaries:**
    * Catching JavaScript errors in components.
    * `componentDidCatch()`.
* **`try...catch` blocks:**
    * Catching errors in specific code blocks.
* **Logging and Reporting:**
    * Reporting errors to a logging service.
* **Interview Questions:**
    * "How do you handle errors in React?"
      - Answer: Use error boundaries for component errors, try-catch for async code, proper error states, and logging services.
    * "What are error boundaries?"
      - Answer: Components that catch JavaScript errors in child components, show fallback UI, and prevent app crashes.
    * "How do you log and report errors?"
      - Answer: Use error monitoring services, custom error handlers, and logging middleware. Capture errors in boundaries and async code.

## 8. Testing (Jest, React Testing Library)

* **Unit Testing:**
    * Testing individual components.
* **Integration Testing:**
    * Testing interactions between components.
* **React Testing Library:**
    * Focusing on testing user behavior.
* **Jest:**
    * Javascript testing framework.
* **Mocking:**
    * Simulating dependencies.
* **Interview Questions:**
    * "What testing frameworks have you used with React?"
      - Answer: Jest for test running and assertions, React Testing Library for component testing, focusing on user behavior.
    * "How do you write unit tests for React components?"
      - Answer: Test component rendering, user interactions, and state changes using React Testing Library with Jest assertions.
    * "What are the benefits of using React Testing Library?"
      - Answer: Tests user behavior instead of implementation, encourages accessible code, simpler API, and better test reliability.
    * "How do you mock dependencies in your tests?"
      - Answer: Use Jest mock functions, mock modules with jest.mock, or create test-specific implementations of dependencies.
    * "What is the difference between unit and integration tests?"
      - Answer: Unit tests check individual components in isolation. Integration tests verify multiple components working together correctly.

## 9. Hooks Deep Dive

* **Understanding Hook Rules:**
    * Calling hooks at the top level, not inside loops or conditions.
* **Hook Dependencies:**
    * Correctly specifying dependencies in `useEffect`, `useMemo`, and `useCallback`.
* **Custom Hooks:**
    * Creating reusable logic.
* **Interview Questions:**
    * "What are the rules of hooks?"
      - Answer: Only call hooks at top level of function components or custom hooks. Don't call in loops/conditions.
    * "Why are dependencies important in hooks?"
      - Answer: Control when effects or memoization run, prevent stale closures, ensure proper cleanup. Missing dependencies can cause bugs.
    * "How do you create custom hooks?"
      - Answer: Create function starting with 'use', compose existing hooks, return values/functions. Enables reuse of stateful logic.
    * "Explain the difference between the dependency arrays of useEffect, useMemo and useCallback"
      - Answer: useEffect runs effect when deps change, useMemo/useCallback memoize value/function when deps change. All prevent unnecessary work.

## 10. Forms and Input Handling

* **Controlled Components:**
    * Managing form input values with React state.
* **Uncontrolled Components:**
    * Managing form input values with refs.
* **Form Validation:**
    * Using libraries like Formik or React Hook Form.
* **Interview Questions:**
    * "What are controlled and uncontrolled components?"
      - Answer: Controlled components use React state for form values. Uncontrolled components use DOM refs to access values directly.
    * "How do you handle form input changes in React?"
      - Answer: Use onChange event handler with setState for controlled components, or useRef for uncontrolled components.
    * "How do you validate forms in React?"
      - Answer: Use form libraries (Formik, React Hook Form) or custom validation logic with state/refs to validate inputs.
    * "What are the benefits of using form libraries like Formik or React Hook Form?"
      - Answer: Simplified form state management, built-in validation, reduced boilerplate, better performance, and easier error handling.

---

## 11. React Performance Optimization

### Overview
Optimizing React apps involves minimizing unnecessary renders, reducing bundle size, and improving perceived and actual performance.

### Key Concepts
- **React Profiler:** Analyze component render times and bottlenecks.
- **Memoization:** React.memo, useMemo, useCallback to avoid unnecessary recalculations.
- **Virtualization:** Render only visible list items (react-window, react-virtualized).
- **Code Splitting:** Dynamic imports, React.lazy, Suspense.
- **Suspense:** Defer rendering until data or code is ready.

### Advanced Topics
- **Concurrent Rendering:** React 18 features for smoother updates.
- **Resource Preloading:** Preload critical assets for faster interaction.
- **Bundle Analysis:** Tools like webpack-bundle-analyzer.
- **Server-Side Streaming:** Streaming HTML for faster TTI.

### Sample Interview Questions
- **Q:** How do you profile and optimize a slow React app?
  - **A:** Use React Profiler, memoization, code splitting, virtualization, and analyze bundle size to identify and fix bottlenecks.
- **Q:** What is React Suspense and how does it work?
  - **A:** Suspense lets you defer rendering part of the UI until data or code is loaded, improving perceived performance.

---

## 12. Advanced Hooks

### Overview
Advanced hooks enable powerful abstractions and custom logic in React apps.

### Key Concepts
- **Custom Hooks:** Encapsulate reusable logic.
- **useReducer:** Manage complex state transitions.
- **useLayoutEffect:** Synchronous effect after DOM mutations.
- **useImperativeHandle:** Expose imperative methods to parent components.
- **useRef:** Persist values across renders, access DOM nodes.

### Advanced Topics
- **Hook Factories:** Generate hooks with custom configuration.
- **Context + Hooks:** Combine for global state and logic.
- **Debugging Hooks:** React DevTools, custom hook logs.
- **Rules of Hooks:** Enforced by linter, critical for reliability.

### Sample Interview Questions
- **Q:** When would you use useReducer over useState?
  - **A:** For complex state logic with multiple actions or when state transitions depend on previous state.
- **Q:** How do you create a custom hook?
  - **A:** Write a function starting with 'use', encapsulate logic, and return state or functions for components to use.

---

## 13. State Management Ecosystem

### Overview
Beyond React's built-in state, many libraries offer advanced state management for large or complex apps.

### Key Concepts
- **Redux Toolkit:** Modern Redux with less boilerplate.
- **Zustand:** Minimal, hook-based global state.
- **Recoil:** Atom/selector-based state for React.
- **Jotai, MobX:** Alternative paradigms for state.
- **Context API:** For simple global state.

### Advanced Topics
- **Middleware:** Logging, async actions (redux-thunk, redux-saga).
- **DevTools:** Redux DevTools, Zustand/Atom inspectors.
- **Persistence:** Saving state to localStorage, IndexedDB.
- **Performance:** Avoiding unnecessary re-renders, selectors.

### Sample Interview Questions
- **Q:** What are the pros and cons of Redux Toolkit vs. Zustand?
  - **A:** Redux Toolkit is more structured and scalable, Zustand is simpler and more flexible for small/medium apps.
- **Q:** How do you persist state across sessions?
  - **A:** Use middleware or hooks to sync state to localStorage or IndexedDB and rehydrate on load.

---

## 14. React Server Components & SSR

### Overview
Server-side rendering (SSR) and React Server Components (RSC) improve performance, SEO, and user experience.

### Key Concepts
- **Next.js:** Leading SSR/SSG framework for React.
- **Hydration:** Attaching event listeners to server-rendered HTML.
- **Streaming:** Send HTML in chunks for faster TTI.
- **Server Components:** Fetch data and render on the server, send minimal data to client.

### Advanced Topics
- **Incremental Static Regeneration:** Update static pages after deployment.
- **API Routes:** Build backend endpoints in Next.js.
- **Edge Rendering:** Run code closer to users for lower latency.
- **Data Fetching Strategies:** getServerSideProps, getStaticProps, useSWR, React Query.

### Sample Interview Questions
- **Q:** What are the benefits of React Server Components?
  - **A:** They reduce client bundle size, improve performance, and enable direct server data access without client-side fetching.
- **Q:** How does hydration work in SSR React apps?
  - **A:** The client attaches event listeners to pre-rendered HTML, making it interactive without re-rendering the whole UI.

---

## 15. TypeScript with React

### Overview
TypeScript improves React code quality with static typing, better tooling, and safer refactoring.

### Key Concepts
- **Props & State Types:** Interface/Type for props, state, context.
- **Generics:** Reusable typed components and hooks.
- **Type Inference:** Automatic type deduction for props and state.
- **Discriminated Unions:** For complex prop types.

### Advanced Topics
- **Type-Safe Context:** Strongly-typed context values.
- **Higher-Order Components:** Typing HOCs and render props.
- **Type Guards:** Narrowing types in components.
- **Third-Party Types:** @types packages, custom type declarations.

### Sample Interview Questions
- **Q:** How do you type a generic React component?
  - **A:** Use generics in the component definition: function MyComponent<T>(props: MyProps<T>) { ... }
- **Q:** What are the benefits of using TypeScript with React?
  - **A:** Early error detection, better IDE support, safer refactoring, and improved documentation.

---

## 16. Testing Strategies

### Overview
Testing ensures React apps are reliable, maintainable, and bug-free.

### Key Concepts
- **Unit Testing:** Test individual components (Jest, React Testing Library).
- **Integration Testing:** Test component interactions.
- **E2E Testing:** Simulate real user flows (Cypress, Playwright).
- **Mocking:** Simulate APIs, dependencies, and user events.

### Advanced Topics
- **Test Coverage:** Measure and improve code tested.
- **Snapshot Testing:** Capture component output for regression.
- **Test Doubles:** Mocks, stubs, spies for complex scenarios.
- **CI Integration:** Run tests automatically in pipelines.

### Sample Interview Questions
- **Q:** How do you test a React component with async data?
  - **A:** Mock API calls, use async utilities from React Testing Library, and assert on loading, error, and success states.
- **Q:** What are the benefits of E2E testing?
  - **A:** It validates real user flows, catches integration bugs, and ensures the app works as expected in the browser.

---

## 17. Accessibility (a11y)

### Overview
Accessible React apps are usable by everyone, including people with disabilities.

### Key Concepts
- **ARIA Roles & Attributes:** Enhance semantic meaning for assistive tech.
- **Keyboard Navigation:** Ensure all features are usable via keyboard.
- **Screen Reader Support:** Use semantic HTML and ARIA.
- **Color Contrast:** Meet WCAG standards.

### Advanced Topics
- **Automated a11y Testing:** axe, Lighthouse, jest-axe.
- **Focus Management:** Trap focus in modals, manage tab order.
- **Live Regions:** Announce dynamic content changes.
- **Accessible Forms:** Labeling, error messages, validation.

### Sample Interview Questions
- **Q:** How do you make a React app accessible?
  - **A:** Use semantic HTML, ARIA attributes, keyboard navigation, color contrast, and test with screen readers and a11y tools.
- **Q:** What is the purpose of ARIA roles?
  - **A:** They provide additional context to assistive technologies, improving navigation and understanding for users with disabilities.

---

## 18. Security Best Practices

### Overview
Secure React apps protect users and data from common web vulnerabilities.

### Key Concepts
- **XSS Protection:** Escape user input, use dangerouslySetInnerHTML with caution.
- **CSRF:** Use tokens for API requests.
- **Authentication:** Use secure tokens (JWT), HTTPS, and proper session management.
- **Dependency Security:** Audit and update packages.

### Advanced Topics
- **Content Security Policy (CSP):** Restrict resource loading.
- **Third-Party Scripts:** Sandbox or avoid untrusted code.
- **Secure Storage:** Avoid storing sensitive data in localStorage.
- **Static Analysis:** Use tools like Snyk, npm audit.

### Sample Interview Questions
- **Q:** How do you prevent XSS in React apps?
  - **A:** Never inject untrusted HTML, escape user input, and use React's built-in escaping for JSX.
- **Q:** What are best practices for authentication in React?
  - **A:** Use secure tokens, HTTPS, and avoid storing sensitive data in the browser.

---

## 19. React Native & Cross-Platform

### Overview
React Native enables building native mobile apps using React, sharing logic across platforms.

### Key Concepts
- **Core Components:** View, Text, Image, ScrollView, etc.
- **Platform APIs:** Access device features (camera, geolocation).
- **Navigation:** React Navigation, deep linking.
- **Styling:** Flexbox, StyleSheet, platform-specific styles.

### Advanced Topics
- **Native Modules:** Integrate with native code (Java, Swift, Objective-C).
- **Performance:** Optimize rendering, memory, and animations.
- **Cross-Platform Sharing:** Monorepos, code sharing with web (Expo, React Native Web).
- **Testing:** Detox, Jest for mobile.

### Sample Interview Questions
- **Q:** How does React Native differ from React for web?
  - **A:** React Native renders to native components, not HTML, and uses a bridge to communicate with device APIs.
- **Q:** How do you optimize React Native app performance?
  - **A:** Use FlatList for large lists, avoid unnecessary renders, optimize images, and use native modules for intensive tasks.

---

## 20. React in Microfrontends & Large-Scale Apps

### Overview
React is widely used in microfrontend architectures and large-scale enterprise apps.

### Key Concepts
- **Microfrontends:** Split frontend into independently deployable modules.
- **Module Federation:** Webpack 5 feature for sharing code at runtime.
- **Design Systems:** Shared UI components, tokens, and guidelines.
- **Monorepos:** Manage multiple packages/apps in one repo (Nx, Turborepo).

### Advanced Topics
- **Cross-Team Collaboration:** Contracts, versioning, shared libraries.
- **Runtime Integration:** Dynamic loading, communication between microfrontends.
- **Testing at Scale:** Integration, E2E, contract tests.
- **Performance:** Lazy loading, code splitting, caching.

### Sample Interview Questions
- **Q:** What are the benefits of microfrontends?
  - **A:** Independent deployment, team autonomy, technology diversity, and scalable development for large apps.
- **Q:** How do you share code between microfrontends?
  - **A:** Use module federation, shared libraries, and design systems to ensure consistency and reduce duplication.

---

## 21. Data Fetching & Caching Strategies

### Overview
Modern React apps rely on sophisticated data-fetching libraries to handle caching, synchronization, and mutations beyond manual `useEffect` calls.

### Key Concepts
- **React Query / TanStack Query:** Query keys, caching tiers, background refetching, optimistic updates.
- **SWR (stale-while-revalidate):** Focus on revalidation and cache invalidation through hooks.
- **React 18 Suspense for Data Fetching:** `use` hook (experimental), resource APIs.
- **Streaming + Server Components:** Load data on the server, stream to client for low-latency experiences.

### Advanced Topics
- **Pagination & Infinite Queries:** Handling windowed lists with `fetchNextPage`.
- **Dependent Queries:** Execute queries after prerequisite data resolves.
- **Offline Support:** Persist query cache to IndexedDB/localStorage for offline-first apps.
- **Error & Loading States:** Global toasts, skeleton UIs, retry policies, fallback UI.

### Sample Interview Questions
- **Q:** How do you avoid duplicated network requests in React?
  - **A:** Use data-fetching libraries (React Query/SWR) that cache results by key, deduplicate requests, and share state across components.
- **Q:** Explain optimistic updates and when you’d use them.
  - **A:** Update UI immediately before server confirmation to improve UX (e.g., liking a post); roll back if mutation fails.

---

## 22. React + GraphQL Integration

### Overview
React pairs well with GraphQL for efficient data fetching and declarative schemas.

### Key Concepts
- **Apollo Client / urql / Relay:** Client-side caches, normalized stores, schema awareness.
- **Fragments & Co-location:** Define data requirements next to components to avoid over/under-fetching.
- **Subscriptions:** Real-time updates via websockets or SSE.
- **Schema Types:** Strong typing, introspection, codegen (GraphQL Code Generator).

### Advanced Topics
- **Cache Policies:** `cache-first`, `network-only`, `cache-and-network`.
- **Pagination:** Relay-style cursors, offset pagination, custom merge functions.
- **Error Handling:** GraphQL error extensions, global error boundaries, retry logic.
- **Auth & Security:** Passing JWT/headers, persisted queries, query cost analysis.

### Sample Interview Questions
- **Q:** How do you normalize GraphQL data on the client?
  - **A:** Use Apollo’s InMemoryCache or Relay’s store to identify entities by typename + id, preventing duplicates and enabling cache updates.
- **Q:** Describe how you’d handle real-time updates with GraphQL subscriptions.
  - **A:** Establish websocket link, subscribe to server events, merge incoming data into cache or local state, manage reconnection/backoff.

---

## 23. React 18 Concurrency & Transitional UI

### Overview
React 18 introduced concurrent rendering features to keep apps responsive during heavy updates.

### Key Concepts
- **Automatic Batching:** Multiple state updates batched in more cases (promises, timeouts).
- **`startTransition`:** Mark non-urgent updates, keeping UI responsive while deferring heavy work.
- **`useTransition`:** Hook to track pending state and show fallback UI.
- **`useDeferredValue`:** Lagging value derived from fast-changing inputs to avoid blocking typed input.

### Advanced Topics
- **Streaming SSR:** `renderToPipeableStream`, `renderToReadableStream` for Node/Deno.
- **Suspense Boundaries:** Graceful loading states while fetching async data.
- **Concurrent Rendering Pitfalls:** Side-effects must remain idempotent; avoid relying on render counts.

### Sample Interview Questions
- **Q:** When would you use `startTransition`?
  - **A:** For expensive state updates (filters, search results) triggered by user input, so typing stays responsive while results update in background.
- **Q:** How does automatic batching improve performance?
  - **A:** React batches more state updates, reducing unnecessary renders; previously only event handlers were batched.

---

## 24. System Design & Scenario-Based Questions

### Common Scenarios
1. **Design a Real-Time Dashboard**
   - Discuss WebSockets, data polling intervals, virtualization for large tables, and fallback strategies if sockets drop.
2. **Large Form Builder**
   - Cover dynamic form rendering, validation strategy (Formik/RHF), splitting state by sections, autosave, and accessibility.
3. **Microfrontend Migration**
   - Explain module federation, shared design tokens, communication buses, and independent deployments.
4. **Offline-First Progressive Web App**
   - Use service workers (Workbox), cache strategies, background sync, and state persistence.

### Interview Tips
- Diagram component hierarchies and data flow.
- Discuss trade-offs (performance vs. complexity, SSR vs. CSR).
- Mention monitoring (web vitals), error tracking, and rollout strategies (feature flags, canary releases).

### Sample Questions
- **Q:** How would you architect a design system consumed by multiple React apps?
  - **A:** Create a component library with Storybook, enforce theming using tokens, ship via npm packages, provide lint rules and CI visual regression tests.
- **Q:** Describe your approach to ensuring Lighthouse performance targets.
  - **A:** Optimize bundle splitting, images (lazy loading, AVIF/webp), critical CSS inlining, prefetching, and monitor Core Web Vitals via RUM tools.

---

## 25. Comprehensive React Interview Q&A Bank

1. **How do you detect and avoid memory leaks in React?**
   - **Answer:** Clean up subscriptions/timers in `useEffect` return, avoid stale references, use AbortController for fetches, and profile with DevTools.
2. **What’s the difference between controlled vs. uncontrolled inputs?**
   - **Answer:** Controlled inputs derive value from React state; uncontrolled maintain internal DOM state accessed via refs—useful for simple forms or integrations.
3. **Explain hydration mismatch errors and how to prevent them.**
   - **Answer:** Occur when SSR markup differs from client render; ensure deterministic rendering, avoid browser-only APIs during SSR, and guard with `useEffect`.
4. **How do you share logic across multiple components?**
   - **Answer:** Custom hooks, render props, higher-order components, or headless UI patterns.
5. **What strategies ensure accessibility in complex widgets (modals, dropdowns)?**
   - **Answer:** Manage focus trap, ARIA roles, keyboard navigation, announce changes via live regions, and test with screen readers.
6. **Describe your testing strategy for a React + Redux app.**
   - **Answer:** Unit test reducers/selectors, integration test connected components with Testing Library, mock API calls, and run E2E flows via Cypress/Playwright.
7. **How do you internationalize a React application?**
   - **Answer:** Use libraries (react-intl, i18next), externalize strings, handle locale-specific formatting (Intl APIs), and support dynamic language switching.
8. **What’s your approach to code-splitting routes?**
   - **Answer:** Use React.lazy with Suspense, wrap route components in lazy imports, prefetch critical routes, and handle fallback UI.

This extended Q&A helps cover the broad spectrum of topics senior-level interviews frequently explore.

---

## 26. React Hooks Advanced Deep Dive

### useState Advanced Patterns
- **Functional updates**: Using updater functions
- **Lazy initialization**: Initializing state with functions
- **State batching**: How React batches state updates
- **State updates and re-renders**: When components re-render

**Interview Questions:**
- "How does useState work under the hood?"
  - Answer: useState returns state value and setter function. State persists across re-renders. Setter triggers re-render if value changes. React uses linked list to track hooks. Must be called in same order.

- "When should you use functional updates with useState?"
  - Answer: When new state depends on previous state: setCount(prev => prev + 1). Prevents stale closures, ensures correct updates based on current state. Required when updating based on previous value.

- "How do you initialize state with a function in useState?"
  - Answer: Pass function to useState: useState(() => expensiveComputation()). Function runs only on initial render, not on re-renders. Useful for expensive initial state calculations.

### useEffect Advanced Usage
- **Effect cleanup**: Cleaning up side effects
- **Dependency arrays**: When and how to specify dependencies
- **Effect timing**: When effects run in render cycle
- **Conditional effects**: Running effects conditionally

**Interview Questions:**
- "When does useEffect cleanup function run?"
  - Answer: Cleanup runs before effect runs again (if dependencies changed), and when component unmounts. Ensures no memory leaks from subscriptions, timers, or event listeners.

- "What happens if you omit the dependency array in useEffect?"
  - Answer: Effect runs after every render. Usually not desired. Empty array [] runs once on mount. Missing dependencies can cause bugs and stale closures. ESLint warns about missing dependencies.

- "How do you handle async operations in useEffect?"
  - Answer: Define async function inside effect, call it. Or use .then() with promises. Cleanup function can cancel requests (AbortController). Cannot make useEffect callback async directly (returns cleanup, not promise).

### useMemo and useCallback Optimization
- **When to use useMemo**: Memoizing expensive computations
- **When to use useCallback**: Memoizing functions
- **Common mistakes**: Overusing memoization
- **Performance impact**: Measuring actual benefits

**Interview Questions:**
- "When should you use useMemo vs useCallback?"
  - Answer: useMemo memoizes computed values, useCallback memoizes functions. Use when passing to child components (prevent unnecessary re-renders) or expensive computations. Don't overuse - optimization has cost.

- "What are the performance implications of useMemo?"
  - Answer: useMemo has overhead (comparison, storage). Only use for expensive computations or when preventing unnecessary re-renders. Premature optimization can hurt performance. Profile before optimizing.

### Custom Hooks Patterns
- **Extracting logic**: Moving logic to custom hooks
- **Composing hooks**: Combining multiple hooks
- **Hook naming**: use prefix convention
- **Reusable patterns**: Common custom hook patterns

**Interview Questions:**
- "How do you create a custom hook?"
  - Answer: Create function starting with 'use', use other hooks inside, return values or functions. Encapsulates stateful logic. Can use state, effects, other hooks. Reusable across components.

- "What are some common custom hook patterns?"
  - Answer: useLocalStorage (sync with localStorage), useFetch (data fetching), useDebounce (debounce values), useMediaQuery (responsive design), useClickOutside (detect outside clicks).

---

## 27. State Management Advanced

### Context API Advanced
- **Context performance**: Preventing unnecessary re-renders
- **Multiple contexts**: Using multiple contexts
- **Context composition**: Combining contexts
- **Context patterns**: Common context patterns

**Interview Questions:**
- "How do you prevent unnecessary re-renders with Context?"
  - Answer: Split contexts by update frequency, use memo for consumers, create multiple contexts instead of single large context. Components re-render when context value changes (by reference).

- "What is the difference between Context and Redux?"
  - Answer: Context is built-in, simple API, good for shared state. Redux has devtools, middleware, time-travel debugging, better for complex state. Context can cause performance issues if overused.

### Redux Toolkit Advanced
- **createSlice**: Simplified reducer creation
- **createAsyncThunk**: Handling async actions
- **RTK Query**: Data fetching and caching
- **Redux patterns**: Common Redux patterns

**Interview Questions:**
- "How does Redux Toolkit simplify Redux?"
  - Answer: createSlice combines actions/reducers, Immer for immutable updates, configureStore with good defaults, createAsyncThunk for async logic. Reduces boilerplate significantly.

- "What is RTK Query and when would you use it?"
  - Answer: RTK Query is data fetching/caching solution for Redux. Handles caching, refetching, mutations. Use when you need Redux state with API data. Alternative to React Query with Redux integration.

---

## 28. React Performance Optimization Advanced

### React.memo Deep Dive
- **Memoization strategy**: When to use React.memo
- **Custom comparison**: Using comparison functions
- **Performance trade-offs**: Cost of memoization
- **Common patterns**: Memoizing components

**Interview Questions:**
- "How does React.memo work?"
  - Answer: React.memo memoizes component, only re-renders if props change (shallow comparison). Can provide custom comparison function. Prevents unnecessary re-renders when props unchanged.

- "When should you use React.memo?"
  - Answer: Use for expensive components, components that re-render frequently with same props, or leaf components in large trees. Not needed for all components - has overhead. Profile first.

### Code Splitting Advanced
- **Route-based splitting**: Splitting by routes
- **Component-based splitting**: Splitting individual components
- **Dynamic imports**: Using dynamic import()
- **Prefetching**: Preloading split code

**Interview Questions:**
- "How do you implement code splitting in React?"
  - Answer: Use React.lazy() with dynamic import(), wrap with Suspense, provide fallback UI. Split by routes or large components. Reduces initial bundle size, improves load time.

- "What is the difference between code splitting and lazy loading?"
  - Answer: Code splitting divides code into chunks. Lazy loading loads code on demand. React.lazy implements lazy loading via code splitting. Can also manually split with dynamic imports.

### Virtualization Advanced
- **react-window vs react-virtualized**: Comparison
- **Virtualization strategies**: Fixed vs variable heights
- **Performance considerations**: When to virtualize
- **Implementation patterns**: Common virtualization patterns

**Interview Questions:**
- "When should you use virtualization for lists?"
  - Answer: Use for large lists (hundreds/thousands of items). Only renders visible items, improves performance. Not needed for small lists - has overhead. Use react-window or react-virtualized.

---

## 29. Testing Advanced

### Testing Strategies
- **Unit testing**: Testing components in isolation
- **Integration testing**: Testing component interactions
- **E2E testing**: Testing user flows
- **Visual regression**: Testing UI changes

**Interview Questions:**
- "What is the difference between unit and integration tests in React?"
  - Answer: Unit tests test components in isolation (mocked dependencies). Integration tests test multiple components together. Use both - unit for logic, integration for user interactions.

- "How do you test custom hooks?"
  - Answer: Use @testing-library/react-hooks or renderHook from React Testing Library. Test hook behavior, state changes, effects. Mock dependencies if needed. Test in isolation.

### Mocking and Stubbing
- **Mocking modules**: jest.mock()
- **Mocking functions**: jest.fn()
- **Mocking APIs**: MSW, nock
- **Mocking contexts**: Mocking Context providers

**Interview Questions:**
- "How do you mock API calls in React tests?"
  - Answer: Use MSW (Mock Service Worker) for realistic API mocking, or nock for fetch mocking. Mock at test level, not component level. Use MSW for better integration tests.

---

## 30. React Patterns & Best Practices

### Component Composition Patterns
- **Container/Presentational**: Separating logic and presentation
- **Compound components**: Related components working together
- **Render props**: Sharing code via render prop
- **Higher-order components**: Reusing component logic

**Interview Questions:**
- "What is the container/presentational pattern?"
  - Answer: Container components handle logic/state, presentational components handle UI. Separates concerns, makes components reusable and testable. Hooks make this pattern less necessary.

- "What are compound components?"
  - Answer: Related components that work together (e.g., Select and Option). Share implicit state via Context. Provide flexible, composable API. Example: Tabs, Tab, TabPanel.

### Data Fetching Patterns
- **Fetch on mount**: useEffect for initial data
- **Fetch on update**: Fetching when dependencies change
- **Optimistic updates**: Updating UI before server response
- **Error boundaries**: Handling fetch errors

**Interview Questions:**
- "How do you handle data fetching in React?"
  - Answer: Use useEffect for lifecycle-based fetching, React Query/SWR for caching/synchronization, or fetch in event handlers. Handle loading/error states. Clean up requests on unmount.

- "What are optimistic updates?"
  - Answer: Update UI immediately, then sync with server. If server fails, rollback. Improves perceived performance. Use for mutations (likes, follows) where failure is acceptable.

---

## 31. React Ecosystem & Libraries

### Popular React Libraries
- **React Router**: Client-side routing
- **React Query/TanStack Query**: Data fetching
- **Formik/React Hook Form**: Form management
- **Styled Components/Emotion**: CSS-in-JS
- **React Spring/Framer Motion**: Animations

**Interview Questions:**
- "When would you use React Query vs useEffect for data fetching?"
  - Answer: React Query handles caching, refetching, background updates, error handling automatically. useEffect requires manual implementation. Use React Query for API data, useEffect for simple cases.

- "What are the differences between Formik and React Hook Form?"
  - Answer: Formik is more feature-rich, React Hook Form is more performant (less re-renders). React Hook Form uses uncontrolled components, Formik uses controlled. Choose based on needs.

### Build Tools & Tooling
- **Create React App**: Boilerplate and tooling
- **Next.js**: React framework with SSR
- **Vite**: Fast build tool
- **Webpack**: Module bundler
- **ESLint/Prettier**: Code quality tools

**Interview Questions:**
- "What are the differences between Create React App and Next.js?"
  - Answer: CRA is SPA toolchain, Next.js is full framework with SSR, routing, API routes. Next.js better for SEO, performance, production apps. CRA simpler for learning/small projects.

---

## 32. Comprehensive React Interview Questions Bank

### Fundamentals
1. **What is React and what problems does it solve?**
   - Answer: React is UI library for building interactive user interfaces. Solves DOM manipulation complexity with component-based architecture, Virtual DOM for performance, declarative syntax, and reusable components.

2. **What are the core principles of React?**
   - Answer: Component-based architecture, declarative UI, unidirectional data flow, Virtual DOM for performance, composition over inheritance, learn once write anywhere (web, native, etc.).

3. **What is JSX and how does it work?**
   - Answer: JSX is JavaScript syntax extension for writing HTML-like code in JavaScript. Transpiled to React.createElement() calls. Must have single root element (or Fragment), use className instead of class.

4. **What is the Virtual DOM and why is it used?**
   - Answer: Virtual DOM is JavaScript representation of real DOM. React compares Virtual DOM with previous version (diffing), updates only changed nodes. Improves performance by batching updates and minimizing DOM manipulation.

5. **How does React rendering work?**
   - Answer: React creates Virtual DOM tree, compares with previous tree (reconciliation), identifies changes (diffing algorithm), updates only changed DOM nodes. Batches updates for performance.

### Components & Props
6. **What are React components?**
   - Answer: Components are reusable pieces of UI. Can be functions (functional components) or classes (class components). Return JSX. Functional components are preferred in modern React.

7. **What are props and how do they work?**
   - Answer: Props (properties) are data passed from parent to child components. Read-only (immutable). Access via function parameters in functional components or this.props in class components.

8. **What is the difference between props and state?**
   - Answer: Props are passed from parent (immutable), state is internal to component (mutable). Props change triggers re-render from parent, state change triggers re-render of component itself.

9. **What are keys in React and why are they important?**
   - Answer: Keys help React identify which items changed/added/removed in lists. Should be unique, stable IDs. Using index as key can cause bugs when list order changes. Keys optimize reconciliation.

10. **What is the children prop?**
    - Answer: children is special prop containing content between component tags. Enables component composition and nesting. Can be accessed via props.children or destructured.

### Hooks
11. **What are React Hooks and why were they introduced?**
    - Answer: Hooks let you use state and other React features in functional components. Introduced to reuse stateful logic, simplify components, and avoid class component complexity.

12. **What are the Rules of Hooks?**
    - Answer: Only call hooks at top level (not in loops/conditions), only call from React functions (components or custom hooks). Ensures hooks are called in same order every render.

13. **How does useState work?**
    - Answer: useState returns state value and setter function. State persists across re-renders. Calling setter triggers re-render if value changes. Can initialize with value or function.

14. **How does useEffect work?**
    - Answer: useEffect runs side effects after render. Takes function and optional dependency array. Runs after every render if no deps, once on mount if empty array, when deps change if specified.

15. **What is the difference between useEffect and useLayoutEffect?**
    - Answer: useEffect runs after paint (asynchronous), useLayoutEffect runs synchronously before paint. Use useLayoutEffect for DOM measurements or when you need synchronous updates.

### State Management
16. **What are different ways to manage state in React?**
    - Answer: Local state (useState), Context API (shared state), Redux/Zustand (global state), URL state (routing), server state (React Query). Choose based on scope and needs.

17. **When would you use Context API vs Redux?**
    - Answer: Context for simple shared state, small apps, or theme/language. Redux for complex state, large apps, time-travel debugging, middleware needs. Context can cause performance issues if overused.

18. **How does Context API work?**
    - Answer: Context provides way to pass data through component tree without prop drilling. Create context, provide value via Provider, consume via useContext hook. All consumers re-render when value changes.

### Performance
19. **How do you optimize React application performance?**
    - Answer: Use React.memo for components, useMemo/useCallback for values/functions, code splitting, virtualization for lists, avoid unnecessary re-renders, optimize images, use production build.

20. **What is the difference between useMemo and useCallback?**
    - Answer: useMemo memoizes computed values, useCallback memoizes functions. Both prevent unnecessary recalculations/re-renders. Use when passing to child components or expensive computations.

21. **When should you use React.memo?**
    - Answer: Use for expensive components, components that re-render frequently with same props, or leaf components. Not needed for all components - has overhead. Profile before optimizing.

### Advanced Topics
22. **What is Server-Side Rendering (SSR) and why use it?**
    - Answer: SSR renders React on server, sends HTML to client. Benefits: SEO, faster initial load, works without JavaScript. Use Next.js or custom SSR setup. Trade-off: server load, complexity.

23. **What is code splitting and how do you implement it?**
    - Answer: Code splitting divides code into smaller chunks loaded on demand. Use React.lazy() with dynamic import(), wrap with Suspense. Reduces initial bundle size, improves load time.

24. **How do you handle errors in React applications?**
    - Answer: Error boundaries for component errors (class components or libraries), try-catch for event handlers/effects, error states in components, error logging services (Sentry). Error boundaries catch errors in tree below.

25. **What are Higher-Order Components (HOCs)?**
    - Answer: HOC is function that takes component and returns enhanced component. Used to share logic between components. Less common with hooks. Example: withRouter, connect (Redux).

---

This comprehensive guide covers all major React topics you'll encounter in interviews. Practice building projects with these concepts, understand the underlying principles, and be ready to discuss trade-offs and design decisions.

