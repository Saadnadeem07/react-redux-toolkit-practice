# React + Redux Toolkit (Beginner-Friendly Guide)

This guide gives you a clear, simple path to understand **React** and
**Redux Toolkit (RTK)** --- from basic concepts to real development
patterns.
Short explanations, small examples, and practical reasoning.

## 📌 What is React?

**React** is a JavaScript library for building user interfaces.
Think of React as a way to build UI using _components_ --- small,
reusable pieces.

### Why React matters

- Builds fast interfaces
- Components = cleaner and reusable code
- Huge ecosystem
- Industry standard

```jsx
function Welcome() {
  return <h1>Hello World</h1>;
}
```

## 📌 What is Redux Toolkit (RTK)?

Redux Toolkit is the official, recommended way to write Redux logic.

Old Redux was verbose; RTK solves that with: - Less boilerplate

- Simple APIs
- Built-in async handling
- Immer for immutability
- Best practices included

## 📌 Why Use Redux Toolkit?

Use RTK when you need: - Global shared state

- Predictable updates
- DevTools
- Async logic
- Scalable structure

Small apps → Context API
Growing apps → RTK

## 📌 Context API vs Redux Toolkit

Feature Context API Redux Toolkit

---

App Size Small Medium--Large
Logic Simple Complex
Async Manual Built-in
DevTools No Yes

### When to use Context API

- Theme
- Language
- Simple auth

### When RTK is better

- Dashboard apps
- API-heavy apps
- Multi-developer projects

# 🔥 Core Redux Toolkit Concepts

## 1️⃣ configureStore

```js
export const store = configureStore({
  reducer: { counter: counterReducer },
});
```

## 2️⃣ createSlice

```js
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value++;
    },
  },
});
```

## 3️⃣ createAsyncThunk

```js
export const fetchUser = createAsyncThunk("user/fetch", async () => {
  const res = await fetch("/api/user");
  return res.json();
});
```

## 4️⃣ RTK DevTools & Middleware

RTK auto-configures DevTools, middleware, immer --- nothing to set up.

# 🔄 How Data Flows

    UI → dispatch(action)
               ↓
          reducer updates state
               ↓
        store saves new state
               ↓
       UI re-renders

# Simple Full Example

```js
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value++;
    },
  },
});
```

```js
export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
```

```jsx
const count = useSelector((s) => s.counter.value);
<button onClick={() => dispatch(increment())}>+</button>;
```

# Best Practices

- Keep slices small
- Use selectors
- Put async logic in thunks
- Local UI state stays in components
- Keep state serializable
- Use clean folder structure

# Learning Path

1.  Learn React basics
2.  Understand global state
3.  Learn RTK essentials
4.  Build a small project
5.  Learn RTK Query & advanced patterns

# Conclusion

RTK makes Redux simple, modern, and scalable. This guide gives you
everything you need to start confidently.
