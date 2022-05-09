import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
    isFetching: boolean;
    currentUser: any;
    error:boolean;
  };

  export type LoginPayload = {
    username: string;
    password: string;
  };

  const initialState:UserState  = {
    currentUser: null,
    isFetching: false,
    error: false,
  };
  
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state:UserState) => {
      state.isFetching = true;
    },
    loginSuccess: (state:UserState, action:PayloadAction<LoginPayload>) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state:UserState) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state:UserState) => {
        state.currentUser = null;
      },
  },
});

export const { loginStart, loginSuccess, loginFailure,logout } = userSlice.actions;
export default userSlice.reducer;