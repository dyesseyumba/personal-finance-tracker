import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  // Create breadcrumb items based on the current location
  const breadcrumbItems = location.pathname
    .split('/')
    .filter(Boolean)
    .map((path, index, array) => {
      const routePath = `/${array.slice(0, index + 1).join('/')}`;
      return {
        path: routePath,
        name: path.charAt(0).toUpperCase() + path.slice(1) || 'Home',
      };
    });

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {breadcrumbItems.map((item, index) => (
        <Breadcrumb.Item key={index}>
          <Link to={item.path}>{item.name}</Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export { Breadcrumbs };
