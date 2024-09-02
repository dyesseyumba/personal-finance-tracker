import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Account,
  AccountState,
  createAccount,
  deleteAccount,
  fetchAccountById,
  fetchAccountByName,
  fetchAccounts,
  updateAccount,
} from '.';

const initialState: AccountState = {
  items: [],
  item: null,
  status: 'idle',
  error: null,
};

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccounts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccounts.fulfilled, (state, action: PayloadAction<Account[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchAccounts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to load accounts';
      })
      .addCase(fetchAccountById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccountById.fulfilled, (state, action: PayloadAction<Account>) => {
        state.status = 'succeeded';
        state.item = action.payload;
      })
      .addCase(fetchAccountById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to load the account';
      })
      .addCase(fetchAccountByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccountByName.fulfilled, (state, action: PayloadAction<Account[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchAccountByName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to load accounts';
      })
      .addCase(createAccount.fulfilled, (state, action: PayloadAction<Account>) => {
        state.items.push(action.payload);
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to create the account';
      })
      .addCase(updateAccount.fulfilled, (state, action: PayloadAction<Account>) => {
        const index = state.items.findIndex((account) => account.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateAccount.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update the account';
      })
      .addCase(deleteAccount.fulfilled, (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((account) => account.id !== action.payload);
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to delete the account';
      });
  },
});

export default accountSlice.reducer;
