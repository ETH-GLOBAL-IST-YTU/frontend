import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./tabSlice";
import accountReducer from "./accountSlice";

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    account: accountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
