import React from 'react';
import { LogoutOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu, MenuProps, theme } from 'antd';
import logo from './assets/logo.png';

const { Header, Content, Footer, Sider } = Layout;

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const dropItems: MenuProps['items'] = [
  {
    key: '1',
    label: <a href="/">Profile</a>,
    icon: <UserOutlined />,
  },
  {
    key: '1',
    label: <a href="/">Logout</a>,
    icon: <LogoutOutlined />,
  },
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        {/* <div className="demo-logo-vertical" /> */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            // padding: '10px',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          <img src={logo} alt="Logo" style={{ height: '32px', marginRight: 10, marginLeft: 10 }} />
          <h2 style={{ color: 'white' }}>App Title</h2>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}

        <Header
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
        </Header>

        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
