import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";

/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "@/Styles/blog.module.css";
import { useBlogsQuery } from "@/redux/api/blogApi";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

interface BlogData {
  _id: string;
  title: string;
  content: string;
  publishDate: string;
  author: string;
  img: string;
}

const Blog = () => {
  const { data } = useBlogsQuery({});
  const blogData = data?.data;

  console.log(blogData);

  return (
    <>
      <NavBar />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "green",
          }}
        >
          coming soon....
        </h2>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
