import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, LoginCredentials, LoginToken } from '.';
import { apiClient } from '../../utils';

const initialState: AuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
  status: 'idle',
  error: null,
};

// Thunk for user login
const loginUser = createAsyncThunk<LoginToken, LoginCredentials>(
  'auth/login',
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      const errorMessage = (error as any).response?.data?.message || 'Login failed';
      return rejectWithValue(errorMessage);
    }
  },
);

// Thunk for refreshing the token
const refreshToken = createAsyncThunk('auth/refreshToken', async (_, { rejectWithValue }) => {
  try {
    const refreshToken = getRefreshTokenFromCookie();
    const response = await apiClient.post('/auth/refresh', {
      refreshToken: refreshToken,
    });
    return response.data;
  } catch (error) {
    const errorMessage = (error as any).response?.data?.message || 'Token refresh failed';
    return rejectWithValue(errorMessage);
  }
});

// Helper function to get refresh token from cookie
function getRefreshTokenFromCookie() {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'refreshToken') {
      return decodeURIComponent(value);
    }
  }
  return null;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.status = 'idle';
      state.error = null;
      document.cookie = 'refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;'; // Clear the refresh token cookie
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginToken>) => {
        state.token = action.payload.accessToken;
        // state.user = action.payload.user;
        state.isAuthenticated = true;
        document.cookie = `refreshToken=${action.payload.refreshToken}; path=/; secure;`;
        state.status = 'succeeded';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error occurred';
      })
      .addCase(refreshToken.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        refreshToken.fulfilled,
        (state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) => {
          state.token = action.payload.accessToken;
          // Update the refresh token in cookies if needed
          document.cookie = `refreshToken=${action.payload.refreshToken}; path=/; secure;`;
          state.status = 'succeeded';
        },
      )
      .addCase(refreshToken.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Token refresh failed';
        // Reset authentication state on failure
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { logout } = authSlice.actions;
export { loginUser, refreshToken };
export default authSlice.reducer;
