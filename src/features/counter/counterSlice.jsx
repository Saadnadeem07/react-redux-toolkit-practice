// ============================================================================
// Counter Slice
// ----------------------------------------------------------------------------
// A "slice" in Redux Toolkit bundles three things together:
// 1. State
// 2. Reducers (state update logic)
// 3. Actions generated automatically from reducers
//
// This example demonstrates all basic RTK concepts:
// - State management
// - Reducers
// - Auto-generated actions
// - Selectors
// - Async Thunks (for future API logic)
// ============================================================================

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// -----------------------------------------------------------------------------
// Example Async Thunk (Optional)
// -----------------------------------------------------------------------------
// Demonstrates how to perform async logic with Redux Toolkit.
// This could be used for calling APIs or long-running tasks.
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (delay = 1000, { dispatch }) => {
    // Simulates an async operation
    await new Promise((resolve) => setTimeout(resolve, delay));

    // Dispatch normal reducer after async completion
    dispatch(increment());
  }
);

// -----------------------------------------------------------------------------
// Initial State
// -----------------------------------------------------------------------------
const initialState = {
  value: 0,
  isLoading: false, // for async demo
};

// -----------------------------------------------------------------------------
// Slice Definition
// -----------------------------------------------------------------------------
export const counterSlice = createSlice({
  name: "counter",

  initialState,

  reducers: {
    // Increment by 1
    increment: (state) => {
      state.value += 1;
    },

    // Decrement by 1
    decrement: (state) => {
      state.value -= 1;
    },

    // Reset to initial value
    reset: (state) => {
      state.value = 0;
    },

    // Increment by user-defined amount
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  // Extra reducers handle actions NOT defined in reducers — mostly async thunks
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(incrementAsync.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

// Auto-generated actions
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

// -----------------------------------------------------------------------------
// Selectors (best practice)
// -----------------------------------------------------------------------------
export const selectCount = (state) => state.counter.value;
export const selectLoading = (state) => state.counter.isLoading;

export default counterSlice.reducer;
