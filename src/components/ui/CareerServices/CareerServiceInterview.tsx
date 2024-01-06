"use client";
/* eslint-disable @next/next/no-img-element */
import styles from "@/Styles/CareerServiceInterview.module.css";
import { Card } from "antd";

const CareerServiceInterview = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      className={styles.container}
    >
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className={styles.textCard}
      >
        <p
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className={styles.headerText1}
        >
          Interview prep
        </p>
        <p
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className={styles.headerTitle}
        >
          Ace your next interview
        </p>
        <p
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className={styles.headerText2}
        >
          Feel prepared and confident when speaking with employers.
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className={styles.content}
      >
        <div className={styles.imageCard}>
          <img
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            src="/assets/interview.svg"
            alt="Banner Image"
            className={styles.headerImage}
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className={styles.cardSection}
        >
          <div className={styles.CardContainer}>
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
                    src="/assets/guide.svg"
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
                    Interview Guide
                  </p>
                  <p
                    data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    className={styles.cardText}
                  >
                    Enter Your Job title and get practice question
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
              <div className={styles.cardContent}>
                <div>
                  <img
                    data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    src="/assets/mock.svg"
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
                    Mock Interview
                  </p>
                  <p
                    data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    className={styles.cardText}
                  >
                    Meet With Exprienced coach to practice for your interview
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerServiceInterview;
