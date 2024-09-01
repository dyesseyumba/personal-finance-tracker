import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png';

const Sidebar: React.FC = () => {
  const items = [
    { key: '1', icon: <UserOutlined />, label: 'Profile' },
    { key: '2', icon: <VideoCameraOutlined />, label: 'Videos' },
    { key: '3', icon: <UploadOutlined />, label: 'Upload' },
  ];

  return (
    <Layout.Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      >
        <img src={logo} alt="Logo" style={{ height: '32px', marginRight: 10, marginLeft: 10 }} />
        <h2 style={{ color: 'white' }}>App Title</h2>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
    </Layout.Sider>
  );
};

export { Sidebar };
