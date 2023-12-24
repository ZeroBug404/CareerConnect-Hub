"use client";

import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import { useState } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

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
        }}
      >
        <NavMenu />
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
    <Menu
      style={{
        color: "white",
        fontSize: "1.2rem",
        backgroundColor: "#2d2d2d",
        border: "none",
      }}
      mode={isInline ? "inline" : "horizontal"}
      items={[
        {
          label: "Home",
          key: "home",
        },
        {
          label: "Conatct Us",
          key: "contact",
        },
        {
          label: "About Us",
          key: "about",
        },
        {
          label: "Blog",
          key: "blog",
        },
        {
          label: "Career Services",
          key: "career-services",
        },
      ]}
    ></Menu>
  );
};

export default NavBar;
