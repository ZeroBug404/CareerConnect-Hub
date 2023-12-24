"use client";
/* eslint-disable @next/next/no-img-element */
import styles from "@/Styles/CareerServiceResume.module.css";
import { Card, Col, Row } from "antd";

const CareerServiceResume = () => {
  return (
    <section className={styles.careerServiceResume}>
      <div className={styles.container}>
        <Row className={styles.headerRow}>
          <Col
            xs={24}
            sm={24}
            md={16}
            lg={16}
            xl={16}
            className={styles.headerSecondCol}
          >
            <p className={styles.headerText1}>Resume help</p>
            <p className={styles.headerTitle}>Upgrade your resume</p>
            <p className={styles.headerText2}>
              Get a resume that stands out to employers.
            </p>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <img
              src="/assets/resume_help.svg"
              alt="Banner Image"
              className={styles.headerImage}
            />
          </Col>
        </Row>
        <div className={styles.CardContainer}>
          <Card hoverable className={styles.CardDesign}>
            <div className={styles.cardContent}>
              <div>
                <img
                  src="/assets/resume-1.svg"
                  alt="Image"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardTextContainer}>
                <p className={styles.cardTitle}>Get an Instant Resume Report</p>
                <p className={styles.cardText}>
                  Free Personalized tips to update your resume today
                </p>
              </div>
            </div>
          </Card>
          <Card hoverable className={styles.CardDesign}>
            <div className={styles.cardContent}>
              <div>
                <img
                  src="/assets/resume-2.svg"
                  alt="Image"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardTextContainer}>
                <p className={styles.cardTitle}>Get Expert Resume help</p>
                <p className={styles.cardText}>
                  Get resume feadback or a resume rewrite
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CareerServiceResume;
