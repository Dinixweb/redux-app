import { createSlice } from "@reduxjs/toolkit";

const userAuth = createSlice({
  name: "userSession",
  initialState: {
    loginStatus: false,
    userObj: {},
  },
  reducers: {
    signIn: (state, action) => {
      if (action.payload.email && action.payload.userName) {
        state.userObj = { ...state.userObj, ...action.payload };
        state.loginStatus = true;
      } else {
        state.userObj = {};
        state.loginStatus = false;
      }
    },
  },
});

export const { signIn } = userAuth.actions;
export default userAuth.reducer;
