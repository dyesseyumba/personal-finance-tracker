import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Account, State } from '../types';

const initialAccountState: State<Account> = {
  items: [],
  loading: false,
  error: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState: initialAccountState,
  reducers: {
    fetchAccountsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAccountsSuccess(state, action: PayloadAction<Account[]>) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchAccountsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchAccountsStart, fetchAccountsSuccess, fetchAccountsFailure } = accountSlice.actions;

export const accountReducer = accountSlice.reducer;
