"use client";

import blueLogo from "@/assets/1-removebg-preview.png";
import {
  MenuOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Dropdown,
  Menu,
  MenuProps,
  Space,
} from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <div
          style={{
            // fontSize: "1.2rem",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            // onClick={logOut}
            type="text"
            // size="large"
            danger
            style={{
              fontSize: "1.2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            LogOut
          </Button>
        </div>
      ),
    },
    {
      key: "1",
      label: (
        <Link href={`/dashboard`}>
          <Button
            type="text"
            danger
            style={{
              fontSize: "1.2rem",
            }}
          >
            Dashboard
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <div
      style={
        {
          // height: "100vh",
        }
      }
    >
      <div
        style={{
          backgroundColor: "#2d2d2d",
          height: "4rem",
          padding: "0rem 1rem",
        }}
        className="menuIcon"
      >
        <MenuOutlined
          style={{ color: "white", fontSize: "30px" }}
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>
      <div
        className="headerMenu"
        style={{
          backgroundColor: "#2d2d2d",
          height: "4rem",
          padding: "0rem 1rem",
          width: "100%",
        }}
      >
        <Link href="/">
          {" "}
          <Image
            src={blueLogo}
            alt="Logo"
            width={200}
            style={{ marginRight: "10px", height: "80px" }}
          />
        </Link>
        <NavMenu />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/career-services"
            style={{
              color: "white",
              fontSize: "0.9rem",
              backgroundColor: "#2d2d2d",
              border: "none",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "7rem",
            }}
          >
            <p>Help Center</p>
            <QuestionCircleOutlined
              style={{
                fontWeight: "bolder",
                fontSize: "1.2rem",
                marginLeft: "0.4rem",
              }}
            />
          </Link>
          <Divider
            type="vertical"
            style={{
              backgroundColor: "#949494",
              height: "2rem",
              margin: "0 1.5rem",
            }}
          />
          <Link
            href={"/login"}
            style={{
              cursor: "pointer",
            }}
          >
            <button
              style={{
                backgroundColor: "#2557a7",
                color: "white",
                fontSize: "1rem",
                fontWeight: "bold",
                padding: "0.6rem 1rem",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </Link>
          <Divider
            type="vertical"
            style={{
              backgroundColor: "#949494",
              height: "2rem",
              margin: "0 1.5rem",
            }}
          />
          <Link
            href="/job-list"
            style={{
              color: "white",
              fontSize: "0.9rem",
              backgroundColor: "#2d2d2d",
              border: "none",
              textDecoration: "none",
              width: "8rem",
            }}
          >
            Find jobs
          </Link>
        </div>

        <Space size={16} wrap>
          <Dropdown menu={{ items }}>
            <Space wrap size={16}>
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Space>
          </Dropdown>
        </Space>
      </div>
      <Drawer
        // placement="left"
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={false}
        style={{ backgroundColor: "#2d2d2d" }}
      >
        <NavMenu isInline />
      </Drawer>
    </div>
  );
};

const NavMenu = ({ isInline = false }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Menu
        style={{
          color: "white",
          fontSize: "0.9rem",
          backgroundColor: "#2d2d2d",
          border: "none",
        }}
        mode={isInline ? "inline" : "horizontal"}
        className="custom-menu" // Add className here
        items={[
          {
            label: (
              <Link
                href="/"
                // target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </Link>
            ),
            key: "home",
          },
          {
            label: (
              <Link
                href="/contact"
                // target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </Link>
            ),
            key: "contact",
          },
          {
            label: (
              <Link
                href="/blog"
                // target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </Link>
            ),
            key: "blog",
          },
        ]}
      ></Menu>
    </div>
  );
};

export default NavBar;
