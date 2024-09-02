export interface State {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface Transaction {
  id: number;
  accountId: number;
  transactionTypeId: number;
  typeId: number;
  amount: number;
  date: string;
  description: string;
}

export interface TransactionType {
  id: number;
  name: string;
}

export interface Budget {
  id: number;
  name: string;
  amount: number;
}
