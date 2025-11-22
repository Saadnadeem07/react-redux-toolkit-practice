// ============================================================================
// App Component
// ----------------------------------------------------------------------------
// Demonstrates how to use Redux Toolkit inside React components.
//
// Key concepts used here:
// - useSelector → Read values from Redux store
// - useDispatch → Send actions to update the store
// - Dispatching normal actions + async thunks
// ============================================================================

import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementAsync,
  selectCount,
  selectLoading,
} from "./features/counter/counterSlice";

const App = () => {
  const dispatch = useDispatch();

  // Read data from Redux store
  const count = useSelector(selectCount);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <button onClick={() => dispatch(increment())}>
        <h1> + </h1>
      </button>

      <h1>Count = {count}</h1>

      <button onClick={() => dispatch(decrement())}>
        <h1> - </h1>
      </button>

      <button onClick={() => dispatch(reset())}>Reset</button>

      <button onClick={() => dispatch(incrementAsync(1000))}>
        {isLoading ? "Loading..." : "Async +"}
      </button>
    </>
  );
};

export default App;
