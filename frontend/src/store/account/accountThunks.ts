import { createAsyncThunk } from '@reduxjs/toolkit';
import { Account } from './accountTypes';
import { apiClient } from '../../utils';

export const fetchAccounts = createAsyncThunk('account/fetchAccounts', async () => {
  const response = await apiClient.get<Account[]>('/account');
  return response.data;
});

export const fetchAccountById = createAsyncThunk('account/fetchAccountById', async (id: number) => {
  const response = await apiClient.get<Account>(`/account/${id}`);
  return response.data;
});

export const fetchAccountByName = createAsyncThunk('account/fetchAccountByName', async (name: string) => {
  const response = await apiClient.get<Account[]>(`/account/find/${name}`);
  return response.data;
});

export const createAccount = createAsyncThunk<Account, Partial<Account>>(
  'account/createAccount',
  async (newAccount) => {
    const response = await apiClient.post('/account', newAccount);
    return response.data;
  },
);

export const updateAccount = createAsyncThunk<Account, { id: number; account: Partial<Account> }>(
  'account/updateAccount',
  async ({ id, account }) => {
    const response = await apiClient.put(`/account/${id}`, account);
    return response.data;
  },
);

export const deleteAccount = createAsyncThunk<number, number>('account/deleteAccount', async (id) => {
  await apiClient.delete(`/account/${id}`);
  return id;
});
