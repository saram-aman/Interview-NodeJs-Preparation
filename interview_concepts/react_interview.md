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
    * "What are the differences between class components and functional components?"
    * "Describe the purpose of `useEffect` and how it works."
    * "When would you use `useMemo` or `useCallback`?"
    * "How do you optimize React component performance?"
    * "What are custom hooks?"
    * "What is the render phase and the commit phase?"

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
    * "When would you use the Context API versus Redux?"
    * "Explain the Redux data flow."
    * "What are the benefits of using a centralized state management library?"
    * "What are atoms and selectors in Recoil?"
    * "How does Zustand simplify state management?"

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
    * "How do you pass data from a parent to a child component?"
    * "Explain the concept of component composition."
    * "What is the `children` prop?"
    * "What are render props?"

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
    * "Explain the reconciliation process."
    * "Why are keys important in React lists?"
    * "How does React optimize DOM updates?"

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
    * "How do you define routes in React Router?"
    * "What are dynamic routes?"
    * "How do you navigate between routes programmatically?"
    * "Explain nested routing."

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
    * "What is memoization, and how is it used in React?"
    * "Explain code splitting and lazy loading."
    * "When would you use virtualization?"
    * "How do you use React DevTools to profile performance?"

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
    * "What are error boundaries?"
    * "How do you log and report errors?"

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
    * "How do you write unit tests for React components?"
    * "What are the benefits of using React Testing Library?"
    * "How do you mock dependencies in your tests?"
    * "What is the difference between unit and integration tests?"

## 9. Hooks Deep Dive

* **Understanding Hook Rules:**
    * Calling hooks at the top level, not inside loops or conditions.
* **Hook Dependencies:**
    * Correctly specifying dependencies in `useEffect`, `useMemo`, and `useCallback`.
* **Custom Hooks:**
    * Creating reusable logic.
* **Interview Questions:**
    * "What are the rules of hooks?"
    * "Why are dependencies important in hooks?"
    * "How do you create custom hooks?"
    * "Explain the difference between the dependency arrays of useEffect, useMemo and useCallback"

## 10. Forms and Input Handling

* **Controlled Components:**
    * Managing form input values with React state.
* **Uncontrolled Components:**
    * Managing form input values with refs.
* **Form Validation:**
    * Using libraries like Formik or React Hook Form.
* **Interview Questions:**
    * "What are controlled and uncontrolled components?"
    * "How do you handle form input changes in React?"
    * "How do you validate forms in React?"
    * "What are the benefits of using form libraries like Formik or React Hook Form?"