"use client";
/* eslint-disable @next/next/no-img-element */
import styles from "@/Styles/CareerServiceCoaching.module.css";
import { Card } from "antd";

const CareerServiceCoaching = () => {
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
          Career coaching
        </p>
        <p
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className={styles.headerTitle}
        >
          Get closer to your career goals
        </p>
        <p
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className={styles.headerText2}
        >
          Meet with an experienced coach to get career guidance.
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
            src="/assets/working.svg"
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
                    src="/assets/career_coach.svg"
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
                    Career coaching
                  </p>
                  <p
                    data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    className={styles.cardText}
                  >
                    Career coaching Meet with a career coach and get an
                    individualized plan.
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

export default CareerServiceCoaching;
