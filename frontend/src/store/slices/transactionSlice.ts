import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transaction, State } from '../types';

const initialTransactionState: State<Transaction> = {
  items: [],
  loading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: initialTransactionState,
  reducers: {
    fetchTransactionsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTransactionsSuccess(state, action: PayloadAction<Transaction[]>) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchTransactionsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTransactionsStart, fetchTransactionsSuccess, fetchTransactionsFailure } = transactionSlice.actions;

export const transactionReducer = transactionSlice.reducer;
