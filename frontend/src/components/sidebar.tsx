import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  WalletOutlined,
  BarChartOutlined,
  TransactionOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const items = [
    {
      key: '/',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: '/accounts',
      icon: <WalletOutlined />,
      label: 'Accounts',
    },
    {
      key: '/budgets',
      icon: <BarChartOutlined />,
      label: 'Budgets',
    },
    {
      key: '/transactions',
      icon: <TransactionOutlined />,
      label: 'Transactions',
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
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
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['/']}
        selectedKeys={[location.pathname]}
        items={items.map((item) => ({
          key: item.key,
          icon: item.icon,
          label: <Link to={item.key}>{item.label}</Link>,
        }))}
      />
    </Layout.Sider>
  );
};

export { Sidebar };
