import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AccountState {
  wallet_address: string | null;
}

const initialState: AccountState = {
  wallet_address: "0xfF4d16757A18B22672ac8109EaeD135E0Fc7178f",
};

export const accountSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<string>) => {
      state.wallet_address = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;
