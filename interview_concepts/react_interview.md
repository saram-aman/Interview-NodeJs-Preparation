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