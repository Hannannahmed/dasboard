import React, { useState, useEffect } from "react";
import { Button, Layout, theme } from "antd";
import Index from "../Subpages/Index";
import { RxHamburgerMenu } from "react-icons/rx";
import profile from "../../assets/Images/profile.png";
import { FaCog, FaHome, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa6";
import Withdraw from "../Subpages/Withdraw";
import DailyProfit from "../Subpages/DailyProfit";

const { Header, Sider, Content } = Layout;

const DashboardContent = () => (
  <div>
    <Index />
  </div>
);
const DailyProfitContent = () => <div><DailyProfit /> </div>;
const WithdrawRequestContent = () => <div><Withdraw /> </div>;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <DashboardContent />;
      case "2":
        return <DailyProfitContent />;
      case "3":
        return <WithdrawRequestContent />;
      default:
        return <DashboardContent />;
    }
  };
  const menuItems = [
    { key: "1", text: 'Home', icon: <FaHome size={20} /> },
    { key: "2", text: 'Daily Profit', icon: <FaEnvelope size={20} /> },
    { key: "3", text: 'Withdraw', icon: <FaUser size={20} /> },
  ];
  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <li key={item.key} className={item.key === selectedKey ? 'active' : ''} onClick={() => setSelectedKey(item.key)}>
        {collapsed ? item.icon : <>{item.icon} {item.text}</>}
      </li>
    ));
  };
  return (
    <Layout style={{ overflow: 'hidden' }} >
      <div className="row">
        <div  className={`sidebar col-md-2 ${collapsed ? 'sidebar-collapsed' : ''}`}>
          <ul className="side_color">
            <div className="mb-5 text-center">
              <h3 className={collapsed ? "logo_small" : ""}>LOGO HERE</h3>
            </div>
            {renderMenuItems()}
          </ul>
        </div>
        <div className={`content col-md-10 ${collapsed ? 'content-expanded' : ''}`}>
          <Header
            style={{
              marginLeft:"-27px",
              padding: 0,
              background: '#fff', 
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Button
                  type="text"
                  icon={<RxHamburgerMenu size={20} />}
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                />
              </div>
              <div className="dropdown">
                <button
                  className="border-0 bg-transparent profile-icon"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={profile} className="profile-icon" alt="profile" />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <FaUser /> Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <FaCog /> Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Header>
          <Layout>
            <Content
              style={{
                margin: '24px 16px 0',
                padding: 24,
                minHeight: 280,
                background: '#fff', // Update this to your `colorBgContainer` value
                borderRadius: '8px', // Update this to your `borderRadiusLG` value
                overflow: 'initial',
                marginTop: collapsed ? '30px' : '30px', 
              }}
            >
              {renderContent()}
            </Content>
          </Layout>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
