import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import devToolsEnhancer from "redux-devtools-expo-dev-plugin";

import { authReducer } from "@/features/auth";

export const store = configureStore({
  devTools: false,
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(devToolsEnhancer()),
  reducer: {
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
