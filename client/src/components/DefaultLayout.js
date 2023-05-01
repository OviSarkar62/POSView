// DefaultLayout.js

import {
  CopyOutlined,
  HomeOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/DefaultLayout.css";
import Spinner from "./Spinner";
const { Header, Sider, Content } = Layout;

const DefaultLayout = ({ children }) => {
  const navigate = useNavigate();
  const { cartItems, loading } = useSelector((state) => state.rootReducer);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  //to get localstorage data
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      {loading && <Spinner />}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[window.location.pathname]}
        >
          <Menu.Item
            key="/"
            icon={<HomeOutlined />}
            onClick={() => navigate("/")}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="/bills"
            icon={<CopyOutlined />}
            onClick={() => navigate("/bills")}
          >
            Bills
          </Menu.Item>
          <Menu.Item
            key="/items"
            icon={<UnorderedListOutlined />}
            onClick={() => navigate("/items")}
          >
            Items
          </Menu.Item>
          <Menu.Item
            key="/customers"
            icon={<UserOutlined />}
            onClick={() => navigate("/customers")}
          >
            Customers
          </Menu.Item>
          <Menu.Item
            key="/logout"
            icon={<LogoutOutlined />}
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            margin: 8,
            padding: 0,
            borderRadius: 8,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
          <div
            className="cart-item d-flex jusitfy-content-space-between flex-row"
            onClick={() => navigate("/cart")}
          >
            <p>{cartItems.length}</p>
            <ShoppingCartOutlined />
          </div>
        </Header>
        <Content className="content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
