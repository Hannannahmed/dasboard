import React, { useState, useEffect } from "react";
import { Button, Layout, theme } from "antd";
import Index from "../Subpages/Index";
import { RxHamburgerMenu } from "react-icons/rx";
import profile from "../../assets/Images/profile.png";
import { FaCog, FaHome, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa6";

const { Header, Sider, Content } = Layout;

const DashboardContent = () => (
  <div>
    <Index />
  </div>
);
const DailyProfitContent = () => <div>Daily Profit Content</div>;
const WithdrawRequestContent = () => <div>Withdraw Request Content</div>;

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
    { text: 'Home', icon: <FaHome size={20} /> },
    { text: 'Profile', icon: <FaUser size={20} /> },
    { text: 'Messages', icon: <FaEnvelope size={20} /> },
    { text: 'Setting', icon: <FaCog size={20} /> },
    { text: 'Help', icon: <FaQuestionCircle size={20} /> },
    { text: 'Password', icon: <FaLock size={20} /> },
    { text: 'Sign Out', icon: <FaSignOutAlt size={20} /> }
  ];

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <li key={index} className={index === 0 ? 'active' : ''}>
        {collapsed ? item.icon : <>{item.icon} {item.text}</>}
      </li>
    ));
  };

  return (
    <Layout style={{ overflow: 'hidden' }}>
      <div className="row">
        <div className={`sidebar col-md-2 ${collapsed ? 'sidebar-collapsed' : ''}`}>
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
                background: '#fff', // Update this to your `colorBgContainer` value
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
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: '#fff', // Update this to your `colorBgContainer` value
                borderRadius: '8px', // Update this to your `borderRadiusLG` value
                overflow: 'auto',
             
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
