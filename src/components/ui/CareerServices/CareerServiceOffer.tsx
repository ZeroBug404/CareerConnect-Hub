"use client";
/* eslint-disable @next/next/no-img-element */
import styles from "@/Styles/CareerServiceOffer.module.css";
import { Card, Col, Row } from "antd";

const CareerServiceOffer = () => {
  return (
    <section
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      className={styles.careerServiceOffer}
    >
      <div className={styles.container}>
        <Row className={styles.headerRow}>
          <Col
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            xs={24}
            sm={24}
            md={16}
            lg={16}
            xl={16}
            className={styles.headerSecondCol}
          >
            <p
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className={styles.headerText1}
            >
              Offer negotiation
            </p>
            <p
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className={styles.headerTitle}
            >
              Get paid what your worth
            </p>
            <p
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className={styles.headerText2}
            >
              Compare your offer and learn how to ask for fair pay.
            </p>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <img
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              src="/assets/offer.svg"
              alt="Banner Image"
              className={styles.headerImage}
            />
          </Col>
        </Row>
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className={styles.CardContainer}
        >
          <Card
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            hoverable
            className={styles.CardDesign}
          >
            <div className={styles.cardContent}>
              <div>
                <img
                  data-aos="zoom-in"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                  src="/assets/compare.svg"
                  alt="Image"
                  className={styles.cardImage}
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className={styles.cardTextContainer}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                  className={styles.cardTitle}
                >
                  Compare Your Offer
                </p>
                <p
                  data-aos="zoom-in"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                  className={styles.cardText}
                >
                  Learn if your offer matches the average reported pay for
                  similar jobs.
                </p>
              </div>
            </div>
          </Card>
          <Card
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            hoverable
            className={styles.CardDesign}
          >
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className={styles.cardContent}
            >
              <div>
                <img
                  data-aos="zoom-in"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                  src="/assets/offer_negotiation.svg"
                  alt="Image"
                  className={styles.cardImage}
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className={styles.cardTextContainer}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                  className={styles.cardTitle}
                >
                  Offer negotiation coaching
                </p>
                <p
                  data-aos="zoom-in"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                  className={styles.cardText}
                >
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
