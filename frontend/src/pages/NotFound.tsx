import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '48px', color: '#f00' }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">
        <Button type="primary">Go to Dashboard</Button>
      </Link>
    </div>
  );
};

export default NotFound;
