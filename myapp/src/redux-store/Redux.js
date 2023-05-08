import { configureStore } from "@reduxjs/toolkit";
import { useReduxReducers } from "./reducer.js";

export const store = configureStore({
  reducer: useReduxReducers,
  middleware:getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
