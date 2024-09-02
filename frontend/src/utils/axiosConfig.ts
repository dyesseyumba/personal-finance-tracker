import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-api-base-url.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { apiClient };
