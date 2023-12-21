/* eslint-disable jsx-a11y/alt-text */
"use client";

import styles from "@/Styles/HomeBlog.module.css";
import { Card, Col, Image, Row } from "antd";
import Link from "next/link";

const blogData = [
  {
    id_: "1",
    img: "/assets/blog-1.webp",
    title: "Guide",
    color: "#FDF8FA",
    desc: "Onboarding Guide: Setting Your Job Up for Success on CareerConnect Hub",
  },
  {
    id_: "2",
    img: "/assets/blog-2.webp",
    title: "Article",
    color: "#E6F5F1",
    desc: "What is an Includes Workplace ",
  },
  {
    id_: "3",
    img: "/assets/blog-3.webp",
    title: "Guide",
    color: "#F2F1FE",
    desc: "Divercity And Includes Training",
  },
  {
    id_: "4",
    img: "/assets/blog-4.webp",
    title: "Article",
    color: "#FDF8FA",
    desc: "The CareerConnect Hub Guide To Workplace Allyship",
  },
];

const HomeBlog = () => {
  return (
    <div className={styles.homeBlog}>
      <h1 className={styles.homeBlogTitle}>
        Hiring resources for inclusivity and allyship
      </h1>
      <Row>
        {blogData?.map((blog) => (
          <Col
            className={styles.homeBlogCol}
            key={blog?.id_}
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
          >
            <Link href="/">
              <Card
                className={styles.homeBlogCard}
                style={{
                  background: `${blog?.color}`,
                }}
              >
                <Image width={"100%"} src={blog?.img} />
                <h2
                  style={{
                    fontWeight: "500",
                    marginBottom: "20px",
                    fontSize: "1.2rem",
                  }}
                >
                  {blog?.title}
                </h2>
                <p style={{ fontSize: "1.3rem" }}>{blog?.desc}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeBlog;
