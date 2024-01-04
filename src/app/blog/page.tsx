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
        lg={22}
        style={{
          borderRadius: ".5rem",
          margin: "1rem 0",
        }}
      >
        <h1
          style={{
            borderBottom: "1px solid #00A5EC",
            margin: "5px",
            // textAlign: "center",
          }}
        >
          Latest Blogs
        </h1>
        <div className={styles.CardContainer}>
          {blogData?.map((blog: BlogData) => (
            <div key={blog?._id} className={styles.CardDesign}>
              <div>
                <img src={blog?.img} alt="Image" className={styles.cardImage} />
              </div>
              <div className={styles.cardTextContainer}>
                <p className={styles.cardTitle}>{blogData?.title}</p>
                <p className={styles.cardText}>
                  {blog?.content?.slice(0, 143)}
                </p>
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
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default Blog;
