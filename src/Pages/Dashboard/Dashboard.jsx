import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined, 
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CiBadgeDollar } from "react-icons/ci";
import { PiHandWithdrawLight } from "react-icons/pi";
import { IoAnalytics } from "react-icons/io5";
import Index from '../Subpages/Index';

const { Header, Sider, Content } = Layout;

const DashboardContent = () => <div><Index /></div>;
const DailyProfitContent = () => <div>Daily Profit Content</div>;
const WithdrawRequestContent = () => <div>Withdraw Request Content</div>;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return <DashboardContent />;
      case '2':
        return <DailyProfitContent />;
      case '3':
        return <WithdrawRequestContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <Layout style={{height:"100vh"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <h5 className='text-white text-center my-5'>Logo Here</h5>
        <hr />
        <Menu
          theme="dark"
          mode="inline" 
          defaultSelectedKeys={['1']}
          onSelect={({ key }) => setSelectedKey(key)}
          items={[
            {
              key: '1',
              icon: <MdOutlineSpaceDashboard size="25" />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <CiBadgeDollar size="25" />,
              label: 'Daily Profit',
            },
            {
              key: '3',
              icon: <PiHandWithdrawLight size="25" />,
              label: 'Withdraw Request',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          /> 
          
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow:'auto'
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
