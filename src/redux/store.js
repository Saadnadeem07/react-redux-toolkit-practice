// ============================================================================
// Redux Store Configuration
// ----------------------------------------------------------------------------
// This file sets up the global Redux store using Redux Toolkit.
//
// Redux Toolkit's `configureStore` automatically:
// - Combines reducers
// - Enables Redux DevTools
// - Sets up Immer for immutable updates
// - Adds common middleware like Thunk for async actions
// ============================================================================

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  // Root reducer of the entire application
  reducer: {
    counter: counterReducer, // <--- Mounted at state.counter
  },
});
