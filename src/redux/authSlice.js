import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authApi";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.singUp.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.singUp.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload.token);
      state.isFetchingCurrentUser = false;
    },
    [authOperations.singUp.rejected](state, action) {
      state.isFetchingCurrentUser = false;
    },
    [authOperations.logIn.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload.token);
      state.isFetchingCurrentUser = false;
    },
    [authOperations.logIn.pending](state, action) {
      state.isFetchingCurrentUser = false;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const isLoggedIn = (state) => state.auth.isLoggedIn;
export const isFetchingCurrentUser = (state) =>
  state.auth.isFetchingCurrentUser;
