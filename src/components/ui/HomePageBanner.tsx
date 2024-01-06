"use client";

/* eslint-disable @next/next/no-img-element */
import styles from "@/Styles/HomePageBanner.module.css";
import { Button, Col, Row } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import HomePageModal from "./homePageModal";

const HomePageBanner = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <div className={styles.bannerHeading}>
        <Row className={styles.bannerRow}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className={styles.bannerFirstCol}
          >
            <p className={styles.bannerText1} style={{ color: "#93aaec" }}>
              CareerConnect Hub FOR EMPLOYERS
            </p>
            <h1 className="text-black">
              Find Your Next Job with CareerConnect Hub
            </h1>
            <p className={styles.bannerText2}>
              No matter the skills, experience, or qualifications you’re looking
              for, you’ll find the right people on CareerConnect Hub’s matching
              and hiring platform.
            </p>
            <Button
              onClick={() => setOpen(true)}
              className={styles.bannerButton}
            >
              Post a Job
            </Button>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <img
              src="/assets/hero-banner.webp"
              alt="Banner Image"
              className={styles.bannerImage}
            />
          </Col>
        </Row>

        <GlobalModal
          open={open}
          setOpen={setOpen}
          width={600}
          title={"Let's create your account"}
        >
          {" "}
          <div className="">
            <HomePageModal></HomePageModal>
          </div>
        </GlobalModal>
      </div> */}
      
      <Row
        justify="center"
        align="middle"
        className="px-4 bg-[#123770] text-white"
      >
        <Col xs={24} sm={12} data-aos="zoom-in-right" data-aos-duration="3000">
          <p>CareerConnect Hub FOR EMPLOYERS</p>
          <h1 className="lg:text-2xl font-bold text-xl py-5 ">
            Find Your Next Job with CareerConnect Hub
          </h1>
          <p className="pb-5 lg:text-lg">
            No matter the skills, experience, or qualifications you’re looking
            for, you’ll find the right people on CareerConnect Hub’s matching
            and hiring platform.
          </p>
          <Button type="primary" onClick={() => setOpen(true)}>
            Post a Job
          </Button>
        </Col>
        <Col xs={24} sm={12} data-aos="zoom-in-left" data-aos-duration="3000">
          <img src="/assets/home1.png" alt="Banner Image" className="w-full" />
        </Col>
        <GlobalModal
          open={open}
          setOpen={setOpen}
          width={600}
          title={"Let's create your account"}
        >
          {" "}
          <div className="">
            <HomePageModal></HomePageModal>
          </div>
        </GlobalModal>
      </Row>
    </>
  );
};

export default HomePageBanner;
