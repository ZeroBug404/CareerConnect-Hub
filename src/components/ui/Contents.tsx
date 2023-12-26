"use client";
import { Layout } from "antd";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <div
        style={{
          padding: "10px",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;