"use client";
/* eslint-disable @next/next/no-img-element */
import styles from "@/Styles/CareerServiceCoaching.module.css";
import { Card } from "antd";

const CareerServiceCoaching = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textCard}>
        <p className={styles.headerText1}>Career coaching</p>
        <p className={styles.headerTitle}>Get closer to your career goals</p>
        <p className={styles.headerText2}>
          Meet with an experienced coach to get career guidance.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.imageCard}>
          <img
            src="/assets/working.svg"
            alt="Banner Image"
            className={styles.headerImage}
          />
        </div>
        <div className={styles.cardSection}>
          <div className={styles.CardContainer}>
            <Card hoverable className={styles.CardDesign}>
              <div className={styles.cardContent}>
                <div>
                  <img
                    src="/assets/career_coach.svg"
                    alt="Image"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardTextContainer}>
                  <p className={styles.cardTitle}>Career coaching</p>
                  <p className={styles.cardText}>
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
