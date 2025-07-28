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