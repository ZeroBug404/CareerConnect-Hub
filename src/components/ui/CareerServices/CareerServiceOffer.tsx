"use client";
/* eslint-disable @next/next/no-img-element */
import styles from "@/Styles/CareerServiceOffer.module.css";
import { Card, Col, Row } from "antd";

const CareerServiceOffer = () => {
  return (
    <section className={styles.careerServiceOffer}>
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
            <p className={styles.headerText1}>Offer negotiation</p>
            <p className={styles.headerTitle}>Get paid what your worth</p>
            <p className={styles.headerText2}>
              Compare your offer and learn how to ask for fair pay.
            </p>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <img
              src="/assets/offer.svg"
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
                  src="/assets/compare.svg"
                  alt="Image"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardTextContainer}>
                <p className={styles.cardTitle}>Compare Your Offer</p>
                <p className={styles.cardText}>
                  Learn if your offer matches the average reported pay for
                  similar jobs.
                </p>
              </div>
            </div>
          </Card>
          <Card hoverable className={styles.CardDesign}>
            <div className={styles.cardContent}>
              <div>
                <img
                  src="/assets/offer_negotiation.svg"
                  alt="Image"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardTextContainer}>
                <p className={styles.cardTitle}>Offer negotiation coaching</p>
                <p className={styles.cardText}>
                  Meet with an expert coach and learn how to negotiate your pay.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CareerServiceOffer;
