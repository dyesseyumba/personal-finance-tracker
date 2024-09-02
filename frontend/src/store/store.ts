import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './account/accountSlice';

const store = configureStore({
  reducer: {
    accounts: accountReducer,
    // budget: budgetReducer,
    // transaction: transactionReducer,
    // transactionType: transactionTypeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default store;
