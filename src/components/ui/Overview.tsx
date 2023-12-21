"use client";
import styles from "@/Styles/Overview.module.css";

const cardData = [
  {
    id_: "1",
    title: "Post a job",
    desc: "Get started with a job post that has the potential to be seen by 65.5 million monthly users.",
  },
  {
    id_: "2",
    title: "Find quality applicants",
    desc: "Customize your post with screening tools and assessments to narrow down potential candidates.",
  },
  {
    id_: "3",
    title: "Make connections",
    desc: "Track, message, invite, and interview directly on CareerConnect Hub with no extra apps to download.",
  },
  {
    id_: "4",
    title: "Hire confidently",
    desc: "You’re not alone on your hiring journey. We have helpful resources for every step of the hiring process.",
  },
];

import { Col, Row } from "antd";

const Overview = () => {
  return (
    <div className={styles.overview}>
      <h1 className={styles.overviewTitle}>
        Manage your hiring from start to finish
      </h1>
      <Row>
        {cardData?.map((card) => (
          <Col
            className={styles.overviewCol}
            key={card?.id_}
            xs={24}
            sm={24}
            md={24}
            lg={6}
            xl={6}
          >
            <h2 className={styles.overviewColTitle}>{card?.title}</h2>
            <p className={styles.overviewColText}>{card?.desc}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Overview;
