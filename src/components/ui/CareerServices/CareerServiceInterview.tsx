"use client";
/* eslint-disable @next/next/no-img-element */
import styles from "@/Styles/CareerServiceInterview.module.css";
import { Card } from "antd";

const CareerServiceInterview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textCard}>
        <p className={styles.headerText1}>Interview prep</p>
        <p className={styles.headerTitle}>Ace your next interview</p>
        <p className={styles.headerText2}>
          Feel prepared and confident when speaking with employers.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.imageCard}>
          <img
            src="/assets/interview.svg"
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
                    src="/assets/guide.svg"
                    alt="Image"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardTextContainer}>
                  <p className={styles.cardTitle}>Interview Guide</p>
                  <p className={styles.cardText}>
                    Enter Your Job title and get practice question
                  </p>
                </div>
              </div>
            </Card>
            <Card hoverable className={styles.CardDesign}>
              <div className={styles.cardContent}>
                <div>
                  <img
                    src="/assets/mock.svg"
                    alt="Image"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardTextContainer}>
                  <p className={styles.cardTitle}>Mock Interview</p>
                  <p className={styles.cardText}>
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
