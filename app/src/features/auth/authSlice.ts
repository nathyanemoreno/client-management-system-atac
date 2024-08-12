import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthSignInPayload, AuthState } from "./types";

const initialStateValue = {
  user: null,
  authToken: null,
  isVerified: false,
  isSignedIn: false,
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState: initialStateValue,
  reducers: {
    signIn: (state, action: PayloadAction<AuthSignInPayload>) => {
      state.authToken = action.payload.authToken;
      state.user = action.payload.user;
      state.isSignedIn = true;
      state.isVerified = true;
    },
    signOut: (state) => {
      state.isVerified = true;
      state.isSignedIn = false;
      state.user = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
