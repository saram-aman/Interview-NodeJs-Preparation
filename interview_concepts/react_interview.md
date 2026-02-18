# React Interview Preparation Guide

This comprehensive guide covers essential React concepts, patterns, and best practices to help you excel in technical interviews. Each section includes detailed explanations, practical examples, and common interview questions with answers.

## Table of Contents
1. [Component Lifecycle & Hooks](#1-component-lifecycle--hooks)
2. [State Management](#2-state-management)
3. [Props and Component Composition](#3-props-and-component-composition)
4. [Virtual DOM and Reconciliation](#4-virtual-dom-and-reconciliation)
5. [Routing with React Router](#5-routing-react-router)
6. [Performance Optimization](#6-performance-optimization)
7. [Error Handling](#7-error-handling)
8. [Testing React Applications](#8-testing-react-applications)
9. [Advanced Hooks Patterns](#9-advanced-hooks-patterns)
10. [React 18+ Features](#10-react-18-features)
11. [Server Components & Next.js](#11-server-components--nextjs)
12. [Advanced Patterns](#12-advanced-patterns)
13. [Common Interview Questions](#13-common-interview-questions)

## 1. Component Lifecycle & Hooks

### Class Components Lifecycle

#### Mounting Phase
```jsx
class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('1. Constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('2. getDerivedStateFromProps');
    return null; // Return new state or null
  }

  componentDidMount() {
    console.log('4. componentDidMount');
    // Perfect for API calls, subscriptions, timers
    this.timer = setInterval(() => {
      this.setState(prev => ({ count: prev.count + 1 }));
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('5. shouldComponentUpdate');
    return nextState.count % 2 === 0; // Only update on even counts
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('6. getSnapshotBeforeUpdate');
    return { message: 'Snapshot data' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('7. componentDidUpdate', snapshot);
  }

  componentWillUnmount() {
    console.log('8. componentWillUnmount');
    clearInterval(this.timer);
  }

  render() {
    console.log('3. Render');
    return <div>Count: {this.state.count}</div>;
  }
}
```

### Functional Components with Hooks

#### useState
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(() => {
    // Lazy initialization
    const initialValue = Number(window.localStorage.getItem('count')) || 0;
    return initialValue;
  });
  
  // Update localStorage when count changes
  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
    </div>
  );
}
```

#### useEffect
```jsx
import { useState, useEffect } from 'react';

function DataFetcher({ userId }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      isMounted = false;
      // Cancel any pending requests
      // source.cancel('Component unmounted');
    };
  }, [userId]); // Only re-run if userId changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>{JSON.stringify(data, null, 2)}</div>;
}
```

### Common Interview Questions

#### 1. "Explain the differences between useEffect and useLayoutEffect"

**Answer:**
- **useEffect**: Runs asynchronously after the browser has painted the screen. Use for data fetching, subscriptions, or other non-blocking operations.
- **useLayoutEffect**: Runs synchronously after all DOM mutations but before the browser paints. Use when you need to read layout from the DOM and make DOM mutations that should be visible to the user immediately.

```jsx
// Example showing the difference
function Example() {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    // This runs after the browser has painted
    console.log('useEffect - Width:', width);
    
    // This will cause a second render + paint
    setWidth(200);
  }, []);
  
  useLayoutEffect(() => {
    // This runs before the browser paints
    console.log('useLayoutEffect - Width:', width);
    
    // This will cause a second render before paint
    setWidth(100);
  }, []);
  
  return <div style={{ width: `${width}px` }}>Width: {width}px</div>;
}
```

#### 2. "How would you optimize a component that re-renders too often?"

**Answer:**
1. **Use React.memo for functional components**
   ```jsx
   const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
     // Component code
   }, (prevProps, nextProps) => {
     // Custom comparison function
     return prevProps.data.id === nextProps.data.id;
   });
   ```

2. **useMemo for expensive calculations**
   ```jsx
   const memoizedValue = useMemo(
     () => computeExpensiveValue(a, b),
     [a, b] // Only recompute when a or b changes
   );
   ```

3. **useCallback for function references**
   ```jsx
   const handleClick = useCallback(() => {
     // Handler logic
   }, [/* dependencies */]);
   ```

4. **Avoid inline objects/functions in props**
   ```jsx
   // Bad - creates new object on every render
   <Component style={{ color: 'red' }} onClick={() => {}} />
   
   // Good
   const style = useMemo(() => ({ color: 'red' }), []);
   const handleClick = useCallback(() => {}, []);
   <Component style={style} onClick={handleClick} />
   ```

5. **Use React DevTools Profiler** to identify unnecessary re-renders

## 2. State Management

### Local State with Context API

```jsx
// ThemeContext.js
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// App.js
function App() {
  return (
    <ThemeProvider>
      <Header />
      <MainContent />
      <Footer />
    </ThemeProvider>
  );
}

// Header.js
function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}
```

### Redux Toolkit Example

```jsx
// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// App.js
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store, increment, decrement, incrementByAmount } from './store';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```

### Common Interview Questions

#### 1. "When would you use Redux vs Context API?"

**Answer:**
- **Use Redux when:**
  - You have large amounts of application state that are needed in many places
  - State is updated frequently
  - The logic to update that state may be complex
  - You need to use middleware like Redux-Saga or Redux-Thunk
  - You need time-travel debugging
  - You're working on a large application with many developers

- **Use Context API when:**
  - You only need to pass data down a few levels
  - Your state updates are simple
  - You don't need middleware
  - You're building a small to medium-sized application
  - You want to avoid additional dependencies

#### 2. "How does Redux middleware work?"

**Answer:**
Redux middleware provides a third-party extension point between dispatching an action and the moment it reaches the reducer. It's useful for logging, crash reporting, talking to an asynchronous API, routing, and more.

Example of a custom logger middleware:

```javascript
const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

// Apply middleware when creating the store
const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk, /* other middlewares */)
);
```

## 3. Advanced Patterns

### Compound Components

```jsx
import { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

function Tabs({ children, defaultActiveKey }) {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  
  return (
    <TabsContext.Provider value={{ activeKey, setActiveKey }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div className="tab-list">{children}</div>;
}

function Tab({ tabKey, children }) {
  const { activeKey, setActiveKey } = useContext(TabsContext);
  const isActive = activeKey === tabKey;
  
  return (
    <button
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={() => setActiveKey(tabKey)}
    >
      {children}
    </button>
  );
}

function TabPanels({ children }) {
  return <div className="tab-panels">{children}</div>;
}

function TabPanel({ tabKey, children }) {
  const { activeKey } = useContext(TabsContext);
  return activeKey === tabKey ? <div className="tab-panel">{children}</div> : null;
}

// Usage
function App() {
  return (
    <Tabs defaultActiveKey="home">
      <TabList>
        <Tab tabKey="home">Home</Tab>
        <Tab tabKey="profile">Profile</Tab>
        <Tab tabKey="settings">Settings</Tab>
      </TabList>
      
      <TabPanels>
        <TabPanel tabKey="home">
          <h2>Welcome Home!</h2>
          <p>This is the home tab content.</p>
        </TabPanel>
        <TabPanel tabKey="profile">
          <h2>User Profile</h2>
          <p>Edit your profile information here.</p>
        </TabPanel>
        <TabPanel tabKey="settings">
          <h2>Settings</h2>
          <p>Configure your application settings.</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
```

### Render Props Pattern

```jsx
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

// Usage
function App() {
  return (
    <div>
      <h1>Move the mouse around!</h1>
      <MouseTracker
        render={({ x, y }) => (
          <p>
            The current mouse position is ({x}, {y})
          </p>
        )}
      />
    </div>
  );
}
```

### Common Interview Questions

#### 1. "What are the differences between render props and custom hooks?"

**Answer:**
- **Render Props:**
  - A pattern where a component's children is a function that returns React elements
  - More flexible for UI composition
  - Can lead to "wrapper hell" if overused
  - Better when you need to render different UI based on the same logic

- **Custom Hooks:**
  - Functions that use React hooks internally
  - Better for sharing stateful logic without affecting the component hierarchy
  - Cleaner JSX as it doesn't add extra DOM nodes
  - Better performance as it doesn't create new components

#### 2. "How would you implement a custom hook for form handling?"

**Answer:**
```jsx
function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (onSubmit) => async (e) => {
    e.preventDefault();
    
    // Run validation if provided
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      
      if (Object.keys(validationErrors).length > 0) {
        return;
      }
    }
    
    try {
      setIsSubmitting(true);
      await onSubmit(values);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors(prev => ({
        ...prev,
        form: error.message || 'An error occurred'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setValues,
    setErrors,
  };
}

// Usage
function LoginForm() {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useForm(
    { email: '', password: '' },
    (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email is invalid';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }
      return errors;
    }
  );

  const onSubmit = async (formData) => {
    // Submit to API
    console.log('Form submitted:', formData);
    // await api.login(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Logging in...' : 'Log In'}
      </button>
      {errors.form && <div className="error">{errors.form}</div>}
    </form>
  );
}
```

## 4. React 18+ Features

### Concurrent Features

```jsx
import { useState, useTransition, Suspense } from 'react';

function App() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('home');
  
  function selectTab(nextTab) {
    // Mark any state updates inside as transitions
    startTransition(() => {
      setTab(nextTab);
    });
  }
  
  return (
    <div>
      <div style={{ opacity: isPending ? 0.5 : 1 }}>
        <button onClick={() => selectTab('home')}>Home</button>
        <button onClick={() => selectTab('about')}>About</button>
        <button onClick={() => selectTab('contact')}>Contact</button>
      </div>
      
      <Suspense fallback={<div>Loading...</div>}>
        {tab === 'home' && <Home />}
        {tab === 'about' && <About />}
        {tab === 'contact' && <Contact />}
      </Suspense>
    </div>
  );
}
```

### Server Components

```jsx
// app/page.js - Next.js 13+ App Router
import { Suspense } from 'react';
import { getPosts } from './api';

// This is a Server Component - runs only on the server
export default function Page() {
  return (
    <div>
      <h1>My Blog</h1>
      <Suspense fallback={<div>Loading posts...</div>}>
        <PostList />
      </Suspense>
    </div>
  );
}

// This is also a Server Component
async function PostList() {
  // This runs on the server, not in the browser
  const posts = await getPosts();
  
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </li>
      ))}
    </ul>
  );
}
```

### Common Interview Questions

#### 1. "What are the key features of React 18?"

**Answer:**
1. **Automatic Batching** - Multiple state updates are batched into a single re-render
2. **Concurrent Rendering** - Interruptible rendering for better user experience
3. **Transitions** - Mark updates as non-urgent with `startTransition`
4. **Suspense on the Server** - Better server-side rendering with Suspense
5. **New Root API** - `createRoot` instead of `ReactDOM.render`
6. **Strict Mode Enhancements** - Simulates mounting, unmounting, and re-mounting components
7. **Improved Suspense** - Better support for code splitting and data fetching

#### 2. "How does Suspense work with data fetching?"

**Answer:**
Suspense lets components "wait" for something (like data) before rendering. When used with libraries that support Suspense (like React Query, SWR, or Relay), you can write components that read data as if it's already loaded.

Example with React Query:

```jsx
import { Suspense } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading user data...</div>}>
        <UserProfile userId={1} />
      </Suspense>
    </QueryClientProvider>
  );
}

function UserProfile({ userId }) {
  // This will suspend until the data is available
  const { data: user } = useQuery(
    ['user', userId],
    () => fetchUser(userId),
    { suspense: true }
  );
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

## 5. Testing React Applications

### Component Testing with React Testing Library

```jsx
// Button.js
function Button({ onClick, children, disabled = false }) {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      data-testid="custom-button"
    >
      {children}
    </button>
  );
}

// Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByText(/click me/i);
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Button>Snapshot Test</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
```

### Mocking API Calls

```jsx
// UserProfile.js
import { useState, useEffect } from 'react';
import { getUser } from './api';

export function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userId);
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

// UserProfile.test.js
import { render, screen } from '@testing-library/react';
import { UserProfile } from './UserProfile';
import { getUser } from './api';

// Mock the API module
jest.mock('./api');

describe('UserProfile', () => {
  const mockUser = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin'
  };

  test('displays user data after successful fetch', async () => {
    // Setup mock implementation
    getUser.mockResolvedValueOnce(mockUser);
    
    render(<UserProfile userId={1} />);
    
    // Initially shows loading
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    // After data loads
    const userName = await screen.findByText('John Doe');
    expect(userName).toBeInTheDocument();
    expect(screen.getByText('Email: john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Role: admin')).toBeInTheDocument();
  });

  test('displays error message when fetch fails', async () => {
    // Setup mock to reject
    getUser.mockRejectedValueOnce(new Error('Failed to fetch user'));
    
    render(<UserProfile userId={1} />);
    
    // Should show error message
    const errorMessage = await screen.findByText(/error: failed to fetch user/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
```

### Common Interview Questions

#### 1. "What are the principles of testing React applications?"

**Answer:**
1. **Test behavior, not implementation** - Test what the component does, not how it does it
2. **Use the Testing Library** - Favor user-centric testing utilities
3. **Write accessible tests** - Use semantic queries that work with accessibility features
4. **Test user flows, not implementation details** - Focus on what users see and do
5. **Mock external dependencies** - Isolate components from external services
6. **Keep tests maintainable** - Avoid brittle tests that break with UI changes
7. **Test error states** - Ensure your app handles errors gracefully

#### 2. "How would you test a custom hook?"

**Answer:**
You can test custom hooks using `@testing-library/react-hooks` or by creating a test component that uses the hook.

```jsx
// useCounter.js
export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// useCounter.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  test('should use counter', () => {
    const { result } = renderHook(() => useCounter());
    
    expect(result.current.count).toBe(0);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });
  
  test('should increment counter', () => {
    const { result } = renderHook(() => useCounter(5));
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(6);
  });
  
  test('should reset counter', () => {
    const { result, rerender } = renderHook(
      ({ initialValue }) => useCounter(initialValue),
      { initialProps: { initialValue: 10 } }
    );
    
    // Change counter
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    
    // Reset should go back to initial value
    act(() => {
      result.current.reset();
    });
    
    expect(result.current.count).toBe(10);
    
    // Test with new initial value
    rerender({ initialValue: 20 });
    act(() => {
      result.current.reset();
    });
    
    expect(result.current.count).toBe(20);
  });
});
```

## 6. Performance Optimization

### Code Splitting with React.lazy and Suspense

```jsx
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

### Virtualized Lists with react-window

```jsx
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style} className={index % 2 ? 'odd' : 'even'}>
    Row {index}
  </div>
);

function VirtualizedList() {
  return (
    <List
      height={400}
      itemCount={1000}
      itemSize={35}
      width={300}
    >
      {Row}
    </List>
  );
}
```

### Common Interview Questions

#### 1. "How would you optimize a slow React application?"

**Answer:**
1. **Code Splitting** - Use React.lazy and Suspense to load only necessary code
2. **Memoization** - Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders
3. **Virtualization** - For large lists, use libraries like react-window or react-virtualized
4. **Bundle Analysis** - Use tools like webpack-bundle-analyzer to identify large dependencies
5. **Optimize Images** - Use modern formats (WebP), lazy loading, and responsive images
6. **Use Production Build** - Ensure you're using the production build for best performance
7. **Avoid Inline Functions/Objects** - They cause unnecessary re-renders
8. **Use React Profiler** - Identify performance bottlenecks

#### 2. "What is the difference between useMemo and useCallback?"

**Answer:**
- **useMemo** is used to memoize the result of a computation. It will only recompute the memoized value when one of the dependencies has changed.
  ```jsx
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

- **useCallback** is used to memoize callback functions. It will return a memoized version of the callback that only changes if one of the dependencies has changed.
  ```jsx
  const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);
  ```

In essence:
- `useMemo` is for values
- `useCallback` is for functions

Both are used for performance optimization to prevent unnecessary recalculations and re-renders.

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
      - Answer: Handles side effects in functional components. Runs after render, can clean up with return function. Dependencies array controls when it runs and must include every external value you use, otherwise you risk subtle bugs like stale data or memory leaks.
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
      - Answer: Use memo, lazy loading, code splitting, proper key usage, avoid unnecessary rerenders, and implement virtualization for large lists, but always start by profiling with React DevTools to identify the actual bottlenecks instead of guessing.
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
- **Concurrent Rendering:** React 18 features (Transitions) for smoother updates by interrupting heavy renders for high-priority user input.
- **Transition API (`useTransition`):** Mark state updates as "transitions" to keep the UI responsive. React will render the transition in the background and switch when ready.
- **`useDeferredValue`:** Postpone updating a part of the UI that is expensive to render, keeping the input fields feeling snappy.
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
- **useTransition / useDeferredValue:** (React 18) Manage non-urgent UI updates without blocking the main thread.
- **useActionState:** (React 19) Handles form actions with built-in pending state and error handling.
- **useOptimistic:** (React 19) Easily implement optimistic UI updates during async actions.
- **use:** (React 19) A unique hook that can be used inside loops or conditions (with some restrictions) to read values from resources like Promises or Context.

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
- **Client Components:** The standard React components we know, marked with `'use client'`. They handle interactivity and browser APIs.

### Deep Dive: Server vs. Client Components

| Feature | **Server Components** | **Client Components** |
| :--- | :--- | :--- |
| **Data Fetching** | Direct access to DB/Filesystem | API calls via `fetch` |
| **Security** | Keep secrets/tokens on server | Secrets exposed to client |
| **Bundle Size** | Zero impact on client bundle | Adds to client bundle |
| **Interactivity** | No event listeners (onClick, etc.) | Full interactivity |
| **Browser APIs** | No access to `window`, `localStorage`| Full access |
| **Lifecycle** | No `useEffect`, `useState` | All hooks available |

**Serialization & Hydration:**
Server Components are rendered into a special format (not pure HTML) called the **RSC Payload**. This payload is serialized and sent to the client. The client then "rehydrates" the app, but Server Components themselves don't re-render on the client—only Client Components do. This means Server Component logic stays on the server, reducing the JavaScript sent to the browser.

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

