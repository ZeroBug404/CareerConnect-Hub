"use client";

import blueLogo from "@/assets/logo-blue1.png";
import { MenuOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Divider, Drawer, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
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
          width: "100%",
        }}
      >
        <Image
          src={blueLogo}
          alt="Logo"
          width={100}
          style={{ marginRight: "10px", height: "30px" }}
        />
        <NavMenu />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/register"
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
          <button
            style={{
              backgroundColor: "#2557a7",
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              padding: "0.6rem 1rem",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Login
          </button>
          <Divider
            type="vertical"
            style={{
              backgroundColor: "#949494",
              height: "2rem",
              margin: "0 1.5rem",
            }}
          />
          <Link
            href="/register"
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
      {/* <Image
        src={blueLogo}
        alt="Logo"
        width={100}
        style={{ marginRight: "10px", height: "30px" }}
      /> */}
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
            label: "Home",
            key: "home",
          },
          {
            label: "Contact Us",
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
        ]}
      ></Menu>
      {/* <div>
        <Link
          href="/register"
          style={{
            color: "white",
            fontSize: "0.9rem",
            backgroundColor: "#2d2d2d",
            border: "none",
            textDecoration: "none",
          }}
        >
          Help Center
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
        <button
          style={{
            backgroundColor: "#2557a7",
            color: "white",
            fontSize: "1rem",
            fontWeight: "bold",
            padding: "0.6rem 1rem",
            borderRadius: "5px",
            border: "none",
          }}
        >
          Login
        </button>
        <Divider
          type="vertical"
          style={{
            backgroundColor: "#949494",
            height: "2rem",
            margin: "0 1.5rem",
          }}
        />
        <Link
          href="/register"
          style={{
            color: "white",
            fontSize: "0.9rem",
            backgroundColor: "#2d2d2d",
            border: "none",
            textDecoration: "none",
          }}
        >
          Find jobs
        </Link>
      </div> */}
    </div>
  );
};

export default NavBar;
