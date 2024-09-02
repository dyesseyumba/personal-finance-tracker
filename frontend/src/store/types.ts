export interface State<StateType> {
  items: StateType[];
  loading: boolean;
  error: string | null;
}

export interface Account {
  id: number;
  name: string;
  balance: number;
  currency: string;
  userId: string;
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

