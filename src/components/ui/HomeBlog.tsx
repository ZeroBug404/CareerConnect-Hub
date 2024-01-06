/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import styles from "@/Styles/HomeBlog.module.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Link from "next/link";

const blogData = [
  {
    _id: "1",
    img: "/assets/blog-1.webp",
    title: "Guide",
    color: "#FDF8FA",
    desc: "Onboarding Guide: Setting Your Job Up for Success on CareerConnect Hub",
  },
  {
    _id: "2",
    img: "/assets/blog-2.webp",
    title: "Article",
    color: "#E6F5F1",
    desc: "What is an Includes Workplace ",
  },
  {
    _id: "3",
    img: "/assets/blog-3.webp",
    title: "Guide",
    color: "#F2F1FE",
    desc: "Divercity And Includes Training",
  },
  {
    _id: "4",
    img: "/assets/blog-4.webp",
    title: "Article",
    color: "#FDF8FA",
    desc: "The CareerConnect Hub Guide To Workplace Allyship",
  },
];

const HomeBlog = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        backgroundColor: "white",
      }}
    >
      <Col
        sm={23}
        md={23}
        lg={20}
        style={{
          borderRadius: ".5rem",
          margin: "1rem 0",
        }}
      >
        <h1 className={styles.title}>
          Hiring resources for inclusivity and allyship
        </h1>
        <div className={styles.CardContainer}>
          {blogData?.map((blog) => (
            <div
              style={{ backgroundColor: `${blog?.color}` }}
              key={blog?._id}
              className={styles.CardDesign}
            >
              <div>
                <img src={blog?.img} alt="Image" className={styles.cardImage} />
              </div>
              <div className={styles.cardTextContainer}>
                <div className="">
                  <p className={styles.cardTitle}>{blog?.title}</p>
                  <p className={styles.cardText}>{blog?.desc?.slice(0, 143)}</p>
                </div>
                <Link
                  style={{ fontSize: "1.1rem", marginRight: ".2rem" }}
                  href="/blog"
                >
                  Read The Article <ArrowRightOutlined />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default HomeBlog;
