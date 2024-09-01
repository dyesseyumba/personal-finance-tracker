import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2f54eb',
          colorInfo: '#2f54eb',
          borderRadius: 4,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
