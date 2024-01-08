/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import styles from "@/Styles/HomeBlog.module.css";
import { useBlogsQuery } from "@/redux/api/blogApi";
import { IBlogData } from "@/types";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Link from "next/link";

const HomeBlog = () => {
  const { data } = useBlogsQuery({});
  const blogData = data?.data;
  console.log(blogData);

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        backgroundColor: "#ECEDF2",
        padding: "3em 0",
      }}
    >
      <Col
        sm={23}
        md={23}
        lg={23}
        style={{
          borderRadius: ".5rem",
          margin: "1rem 0",
        }}
      >
        <div
          style={{
            padding: "1.5rem 0",
            textAlign: "center",
          }}
        >
          <h1
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            Recent News Blogs
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            style={{
              padding: "1rem 0",
            }}
          >
            Fresh job related news content posted each day.
          </p>
        </div>
        <div className={styles.CardContainer}>
          {blogData?.slice(0, 3).map((blog: IBlogData) => (
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              key={blog?._id}
              className={styles.CardDesign}
            >
              <div>
                <img src={blog?.img} alt="Image" className={styles.cardImage} />
              </div>
              <div className={styles.cardTextContainer}>
                <div className={styles.small}>
                  <p>
                    <CalendarOutlined />{" "}
                    <span style={{ marginLeft: ".4rem" }}>
                      {blog?.publishDate}
                    </span>
                  </p>
                  <p>
                    <UserOutlined />
                    <span style={{ marginLeft: ".4rem" }}>{blog?.author}</span>
                  </p>
                </div>
                <p className={styles.cardTitle}>{blog?.title}</p>
                <p className={styles.cardText}>
                  {blog?.content?.slice(0, 143)}
                </p>
                <Link href="/">Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default HomeBlog;
