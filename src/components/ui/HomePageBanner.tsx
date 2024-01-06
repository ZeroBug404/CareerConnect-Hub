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
      <Row
        justify="center"
        align="middle"
        style={{
          padding: "0 20px",
          color: "white",
          backgroundColor: "#123770",
        }}
      >
        <Col xs={24} sm={12} data-aos="zoom-in-right" data-aos-duration="1000">
          <p>CareerConnect Hub FOR EMPLOYERS</p>
          <h1
            style={{
              fontSize: "30px",
              padding: "20px 0",
            }}
          >
            Find Your Next Job with CareerConnect Hub
          </h1>
          <p
            style={{
              fontSize: "18px",
              paddingBottom: "20px",
            }}
          >
            No matter the skills, experience, or qualifications you’re looking
            for, you’ll find the right people on CareerConnect Hub’s matching
            and hiring platform.
          </p>
          <Button type="primary" onClick={() => setOpen(true)}>
            Post a Job
          </Button>
        </Col>
        <Col xs={24} sm={12} data-aos="zoom-in-left" data-aos-duration="1000">
          <img
            style={{
              width: "100%",
            }}
            src="/assets/home1.png"
            alt="Banner Image"
          />
        </Col>
        <GlobalModal
          open={open}
          setOpen={setOpen}
          width={600}
          title={"Let's create your account"}
        >
          <div className="">
            <HomePageModal></HomePageModal>
          </div>
        </GlobalModal>
      </Row>
    </>
  );
};

export default HomePageBanner;
