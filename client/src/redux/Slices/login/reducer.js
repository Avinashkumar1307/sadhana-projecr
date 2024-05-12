import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: {},
  error: "", // for error message
  loading: false,
  isUserLogout: false,
  errorMsg: false, // for error
  allUsers: []
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    apiError(state, action) {
      state.error = action.payload.data;
      state.loading = true;
      state.isUserLogout = false;
      state.errorMsg = true;
    },
    loginSuccess(state, action) {
      state.user = action.payload
      console.log(" state.user = action.payload")
      console.log(state.user);
      state.loading = false;
      state.errorMsg = false;
    },
    logoutUserSuccess(state, action) {
      console.log(state.isUserLogout);
      state.isUserLogout = true
    }
    
  },
});

export const {
  apiError,
  loginSuccess,
  logoutUserSuccess,
} = loginSlice.actions

export default loginSlice.reducer;