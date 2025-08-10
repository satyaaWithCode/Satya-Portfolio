import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

// Example reducer placeholder (we'll replace with real ones later)
const dummyReducer = (state = {}, action) => state;

export const store = configureStore({
  reducer: {
      theme: themeReducer,
  },
});
