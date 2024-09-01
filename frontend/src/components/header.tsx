import React from 'react';
import { Avatar, Button, Dropdown, Layout } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

interface HeaderProps {
  colorBgContainer: string;
}

const Header: React.FC<HeaderProps> = ({ colorBgContainer }) => {
  const dropItems = [
    {
      key: '1',
      label: <a href="/">Profile</a>,
      icon: <UserOutlined />,
    },
    {
      key: '2',
      label: <a href="/">Logout</a>,
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Layout.Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px',
        background: colorBgContainer,
      }}
    >
      <div />
      <div>
        <Button type="primary" style={{ marginRight: '10px' }}>
          Login
        </Button>
        <Dropdown menu={{ items: dropItems }} placement="bottomRight">
          <Avatar icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Layout.Header>
  );
};

export { Header };
