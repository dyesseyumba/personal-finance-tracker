import { State } from '../types';

export interface AccountState extends State {
  items: Account[];
  item: Account | null;
}

export interface Account {
  id: number;
  name: string;
  balance: number;
  currency: string;
  userId: string;
}
