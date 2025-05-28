# Vue.js Interview Preparation

This document outlines key concepts and common interview questions related to Vue.js, designed to help you prepare for technical interviews.

## 1. Vue.js Fundamentals

* **Vue Instance:**
    * Creation and lifecycle.
    * Data properties.
    * Methods and computed properties.
    * Watchers.
* **Template Syntax:**
    * Text interpolation.
    * Directives.
    * Expressions.
    * Filters.
* **Components:**
    * Component registration.
    * Props and events.
    * Slots.
    * Dynamic components.
* **Reactivity System:**
    * Reactive data.
    * Computed properties.
    * Watchers.
* **Interview Questions:**
    * "Explain Vue.js lifecycle hooks."
      - Answer: Hooks like created, mounted, updated track component lifecycle. Enable setup, DOM manipulation, cleanup at different stages.

    * "What's the difference between computed properties and watchers?"
      - Answer: Computed properties are cached, recalculate when dependencies change. Watchers react to specific data changes, handle side effects.

    * "How does Vue's reactivity system work?"
      - Answer: Uses Proxy (Vue 3) or Object.defineProperty (Vue 2) to track changes. Automatically updates view when data changes.

    * "Explain the difference between v-show and v-if."
      - Answer: v-if removes/adds elements from DOM, v-show toggles display property. v-show better for frequent toggles.

    * "What are props and how do they work?"
      - Answer: Pass data from parent to child components. Define type, required status, default values. One-way data flow.

## 2. Component Communication

* **Props:**
    * Prop types.
    * Validation.
    * Dynamic props.
* **Events:**
    * Custom events.
    * Event modifiers.
    * v-model.
* **Event Bus:**
    * Global event handling.
    * Component communication.
* **Provide/Inject:**
    * Dependency injection.
    * Component hierarchy.
* **Interview Questions:**
    * "What are the different ways components can communicate?"
      - Answer: Props for parent-to-child, events for child-to-parent, provide/inject for deep hierarchy, Vuex for global state.

    * "How does v-model work?"
      - Answer: Combines v-bind and v-on for two-way binding. Syntactic sugar for value prop and input event handling.

    * "Explain provide/inject in Vue."
      - Answer: Passes data through component tree without props. Parent provides data, any child can inject it.

    * "What is the event bus pattern?"
      - Answer: Global Vue instance for cross-component communication. Emit and listen to events between unrelated components.

    * "How do you validate props?"
      - Answer: Define type, required status, validator functions. Ensures components receive correct data format from parents.

## 3. State Management (Vuex)

* **Store:**
    * State.
    * Getters.
    * Mutations.
    * Actions.
* **Modules:**
    * Namespacing.
    * Module registration.
* **Plugins:**
    * Store plugins.
    * State persistence.
* **Composition API Store:**
    * Setup store.
    * Composables.
* **Interview Questions:**
    * "Explain Vuex and its core concepts."
      - Answer: State management pattern. State holds data, mutations change state, actions handle async, getters compute derived state.

    * "What's the difference between mutations and actions?"
      - Answer: Mutations synchronously change state, actions handle async operations. Actions commit mutations, can contain business logic.

    * "How do you handle modules in Vuex?"
      - Answer: Divide store into modules. Each has state, mutations, actions. Namespacing prevents naming conflicts.

    * "Explain Vuex getters and their use."
      - Answer: Compute derived state from store. Like computed properties for Vuex, cached based on dependencies.

    * "How do you test Vuex stores?"
      - Answer: Test mutations/getters directly, mock actions for async. Use Vue Test Utils for component integration.

## 4. Routing (Vue Router)

* **Route Configuration:**
    * Route definitions.
    * Dynamic routes.
    * Nested routes.
* **Navigation Guards:**
    * Global guards.
    * Per-route guards.
    * Component guards.
* **Route Meta Fields:**
    * Meta information.
    * Authentication.
* **Lazy Loading:**
    * Route-level code splitting.
    * Async components.
* **Interview Questions:**
    * "How does Vue Router handle navigation?"
      - Answer: Maps routes to components, handles URL changes. Supports history/hash modes, dynamic matching, navigation guards.

    * "Explain navigation guards and their types."
      - Answer: beforeEach for global checks, beforeEnter for routes, beforeRouteEnter for components. Control navigation flow, authentication.

    * "How do you implement lazy loading routes?"
      - Answer: Use dynamic imports for route components. Splits code into chunks, loads only when needed.

    * "What are route meta fields used for?"
      - Answer: Store route-specific data like auth requirements, titles. Access in navigation guards, components for custom behavior.

    * "How do you handle route parameters?"
      - Answer: Define with colon syntax, access via $route.params. Optional parameters with question mark, catch-all with asterisk.

## 5. Composition API

* **Setup Function:**
    * Reactive references.
    * Computed properties.
    * Lifecycle hooks.
* **Composables:**
    * Reusable logic.
    * State management.
* **Script Setup:**
    * Simplified syntax.
    * TypeScript support.
* **Reactivity APIs:**
    * ref vs reactive.
    * Computed refs.
* **Interview Questions:**
    * "What is the Composition API and why use it?"
      - Answer: Alternative to Options API. Better TypeScript support, code organization, logic reuse through composables.

    * "Explain ref vs reactive."
      - Answer: ref wraps primitives, needs .value, reactive for objects. ref automatically unwrapped in templates.

    * "How do composables work?"
      - Answer: Functions encapsulating reusable logic. Return reactive state, computed properties, methods for components to use.

    * "What are the benefits of script setup?"
      - Answer: Less boilerplate, automatic name inference, better TypeScript integration. Simpler syntax for Composition API.

    * "How do lifecycle hooks work in Composition API?"
      - Answer: Import as onMounted, onUpdated etc. Called inside setup, no this context needed.

## 6. Performance Optimization

* **Virtual DOM:**
    * Rendering optimization.
    * Key attribute.
* **Lazy Loading:**
    * Components.
    * Routes.
* **Keep-Alive:**
    * Component caching.
    * Dynamic components.
* **Memory Management:**
    * Event cleanup.
    * Watchers disposal.
* **Interview Questions:**
    * "How can you optimize Vue.js performance?"
      - Answer: Use v-show for frequent toggles, lazy load components/routes, implement keep-alive, proper key usage.

    * "What is keep-alive and when to use it?"
      - Answer: Caches inactive components, preserves state. Use for expensive components that toggle frequently.

    * "How does virtual DOM help performance?"
      - Answer: Minimizes actual DOM manipulation. Batches updates, efficiently calculates minimum changes needed.

    * "Explain proper key usage in v-for."
      - Answer: Unique keys help Vue track items, optimize re-rendering. Use stable IDs, avoid index as key.

    * "How do you handle memory leaks?"
      - Answer: Clean up event listeners, watchers in beforeUnmount. Remove global references, clear intervals/timeouts.

## 7. Testing and Debugging

* **Unit Testing:**
    * Vue Test Utils.
    * Component testing.
    * Vuex testing.
* **E2E Testing:**
    * Cypress.
    * Test scenarios.
* **Debugging Tools:**
    * Vue DevTools.
    * Browser debugging.
* **Error Handling:**
    * Error boundaries.
    * Global handlers.
* **Interview Questions:**
    * "How do you test Vue components?"
      - Answer: Use Vue Test Utils for mounting, simulating events. Test rendered output, component behavior, emitted events.

    * "What tools do you use for debugging Vue apps?"
      - Answer: Vue DevTools for component inspection, state management. Browser DevTools for network, console debugging.

    * "How do you handle errors in Vue?"
      - Answer: Use errorCaptured hook, global handlers. Implement error boundaries, provide fallback UI for failures.

    * "Explain component testing best practices."
      - Answer: Test component outputs, user interactions. Mock external dependencies, test props/events, maintain test isolation.

    * "How do you test Vuex in components?"
      - Answer: Mock store in tests, verify commits/dispatches. Test store integration, state changes, action results. 