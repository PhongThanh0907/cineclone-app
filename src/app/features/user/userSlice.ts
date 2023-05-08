import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
  userInfo: null;
  token: null;
}

const initialState: UserState = {
  isLoggedIn: false,
  userInfo: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state: UserState, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userInfo = action.payload.userInfo;
      state.token = action.payload.token;
    },
  },
});

export const { registerUser } = userSlice.actions;

export default userSlice.reducer;
