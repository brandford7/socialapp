// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    feed: feedReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
