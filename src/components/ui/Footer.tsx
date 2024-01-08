"use client";

import {
  FacebookFilled,
  LinkedinFilled,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { Col, Flex, Row } from "antd";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#123770",
        color: "white",
        textAlign: "center",
        padding: "30px 10px",
      }}
    >
      <Row
        style={{
          borderBottom: "1px solid #6D747A",
          padding: "10px",
        }}
      >
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={6}
          style={{
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            Career Connect Hub
          </h3>
          <p
            style={{
              marginBottom: "20px",
            }}
          >
            Your dream job, simplified. Explore opportunities effortlessly on
            our Career Connect Hub.
          </p>
          <Flex
            justify="center"
            align="center"
            gap="large"
            wrap="wrap"
            style={{
              fontSize: "24px",
            }}
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <FacebookFilled
              style={{
                border: "2px solid",
                borderRadius: "50%",
                padding: "12px",
                cursor: "pointer",
              }}
            />

            <LinkedinFilled
              style={{
                border: "2px solid",
                borderRadius: "50%",
                padding: "12px",
                cursor: "pointer",
              }}
            />

            <TwitterSquareFilled
              style={{
                border: "2px solid",
                borderRadius: "50%",
                padding: "12px",
                cursor: "pointer",
              }}
            />

            <YoutubeFilled
              style={{
                border: "2px solid",
                borderRadius: "50%",
                padding: "12px",
                cursor: "pointer",
              }}
            />
          </Flex>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={6}
          style={{
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            Company
          </h3>
          <Col
            style={{
              marginBottom: "20px",
            }}
          >
            <Link
              href="/"
              style={{
                color: "white",
              }}
            >
              About Us
            </Link>
          </Col>
          <Col
            style={{
              marginBottom: "20px",
            }}
          >
            <Link
              href="/contact"
              style={{
                color: "white",
              }}
            >
              Contact With Us
            </Link>
          </Col>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={6}
          style={{
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            Resources
          </h3>
          <Col
            style={{
              marginBottom: "20px",
            }}
          >
            {" "}
            <Link
              href="/"
              style={{
                color: "white",
              }}
            >
              Post New Job
            </Link>
          </Col>
          <Col
            style={{
              marginBottom: "20px",
            }}
          >
            <Link
              href="/job-list"
              style={{
                color: "white",
              }}
            >
              Jobs Listing
            </Link>
          </Col>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={6}
          style={{
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            Legal
          </h3>
          <Col
            style={{
              marginBottom: "20px",
            }}
          >
            {" "}
            <Link
              href="/blog"
              style={{
                color: "white",
              }}
            >
              Blog
            </Link>
          </Col>
          <Col
            style={{
              marginBottom: "20px",
            }}
          >
            <Link
              href="/privacy"
              style={{
                color: "white",
              }}
            >
              Privacy
            </Link>
          </Col>
          <Col
            style={{
              marginBottom: "20px",
            }}
          >
            <Link
              href="/terms"
              style={{
                color: "white",
              }}
            >
              Terms
            </Link>
          </Col>
        </Col>
      </Row>
      <p
        style={{
          paddingTop: "20px",
        }}
      >
        @ 2023 Career Connect Hub, Made with by Next.js
      </p>
    </div>
  );
};

export default Footer;
