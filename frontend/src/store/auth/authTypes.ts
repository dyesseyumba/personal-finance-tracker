import { State } from '../types';

interface AuthState extends State {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
}

interface User {
  userName: number;
  email: string;
  role: number;
}

interface LoginToken {
  accessToken: string;
  refreshToken: string;
}

interface LoginCredentials {
  username: string;
  password: string;
}

export { AuthState, User, LoginCredentials, LoginToken };
