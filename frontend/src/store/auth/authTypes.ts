import { State } from '../types';

export interface AuthState extends State {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
}

export interface User {
  userName: number;
  email: string;
  role: number;
}
