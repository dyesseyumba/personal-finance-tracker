import { Layout } from 'antd';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Layout.Footer style={{ textAlign: 'center', padding: '20px 0' }}>
      Sun Fund ©{new Date().getFullYear()}
    </Layout.Footer>
  );
};

export { Footer };
