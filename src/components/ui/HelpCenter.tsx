/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "@/Styles/helpCenter.module.css";

import { Col, Row } from "antd";
import Link from "next/link";

const HelpCenter = () => {
  return (
    <Row justify="center" align="middle" style={{ backgroundColor: "#eff4fc" }}>
      <Col sm={24} md={24} lg={24}>
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className={styles.container}
        >
          <div className={styles.textContent}>
            <h1>Explore our Help Center</h1>
            <p>
              Learn everything you need to know about managing your account,
              navigating your dashboard, and more.
            </p>
            <Link href="/career-service">
              <button
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                Start Exploring
              </button>
            </Link>
          </div>
          <div className="">
            <img
              src="/assets/Help-Center.png"
              alt="Image"
              className={styles.image}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default HelpCenter;
