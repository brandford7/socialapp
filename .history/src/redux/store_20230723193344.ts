// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/authSlice";
import feedReducer from "../redux/auth/authSlice";
import { useReducer } from "react";

const store = configureStore({
  reducer: {
    auth: authReducer,
        feed: feedReducer,
    user:useRReducer
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
