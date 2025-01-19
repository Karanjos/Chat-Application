import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authUser: null,
  isLoading: true,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinStart: (state) => {
      state.isLoading = true;
      state.error = null;
      state.authUser = null;
    },
    signinSuccess: (state, action) => {
      state.isLoading = false;
      state.authUser = action.payload;
      state.error = null;
    },
    signinFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.authUser = null;
    },
    checkAuthUserSatrt: (state) => {
      state.isLoading = true;
      state.authUser = null;
      state.error = null;
    },
    checkAuthUserSuccess: (state, action) => {
      state.isLoading = false;
      state.authUser = action.payload;
      state.error = null;
    },
    checkAuthUserFailure: (state, action) => {
      state.isLoading = false;
      state.authUser = null;
      state.error = action.payload;
    },
  },
});

export const {
  signupStart,
  signupSuccess,
  signupFailure,
  checkAuthUserSatrt,
  checkAuthUserSuccess,
  checkAuthUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
