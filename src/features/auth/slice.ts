import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.loggedIn = true;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    signOut(state) {
      state.user = null;
      state.loggedIn = false;
    },
  },
});

export const { signIn, signInSuccess, signInFailure, signOut } =
  authSlice.actions;

export const authReducer = authSlice.reducer;
