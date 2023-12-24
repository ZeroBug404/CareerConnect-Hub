"use client";
/* eslint-disable @next/next/no-img-element */
import styles from "@/Styles/CareerServiceSkill.module.css";
import { Col, Row } from "antd";

const CareerServiceSkill = () => {
  return (
    <div className={styles.container}>
      {" "}
      <Row className={styles.headerRow}>
        <Col
          xs={24}
          sm={24}
          md={16}
          lg={16}
          xl={16}
          className={styles.headerSecondCol}
        >
          <p className={styles.headerText1}>Career Services</p>
          <p className={styles.headerTitle}>
            Build the skills to get a better job
          </p>
          <p className={styles.headerText2}>
            Get career guidance and improve at resume writing, interviewing, and
            pay negotiation.
          </p>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <img
            src="/assets/career-service-banner.svg"
            alt="Banner Image"
            className={styles.headerImage}
          />
        </Col>
      </Row>
    </div>
  );
};

export default CareerServiceSkill;
