import axios from 'axios';
import store from '../store/store';
import Cookies from 'js-cookie';
import { logout } from '../store/auth/authSlice';

const apiClient = axios.create({
  baseURL: 'https://your-api-base-url.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor to add the access token to headers
apiClient.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const accessToken = state.auth.token;

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor to handle 401 errors and token refresh
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is a 401 (Unauthorized)
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Get the refresh token from the secure cookie
        const refreshToken = getRefreshTokenFromCookie();

        // Attempt to refresh the token
        const response = await axios.post(
          'https://your-api-base-url.com/api/auth/refresh',
          {
            accessToken: originalRequest.headers['Authorization']?.split(' ')[1], // Send the expired access token
            refreshToken: refreshToken, // Include the refresh token from the secure cookie
          },
          {
            withCredentials: true, // Allow cookies to be sent with the request
          },
        );

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        // Update the Redux store with the new access token
        store.dispatch({ type: 'auth/updateToken', payload: accessToken });

        // Update the secure cookie with the new refresh token if needed
        Cookies.set('refreshToken', newRefreshToken, { secure: true, sameSite: 'Strict' }); // Set the refresh token cookie

        // Set the new token in the original request's headers
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        // Retry the original request with the new token
        return apiClient(originalRequest);
      } catch (err) {
        // If refresh token fails, log out the user
        store.dispatch(logout());
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

// Function to get the refresh token from the secure cookie
function getRefreshTokenFromCookie() {
  // Implement logic to read the refresh token from the secure cookie
  // This might involve using a library like js-cookie or a simple document.cookie parsing
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'refreshToken') {
      return decodeURIComponent(value); // Adjust the cookie name based on your implementation
    }
  }
  return null;
}

export { apiClient };
