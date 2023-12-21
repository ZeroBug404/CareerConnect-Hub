"use client";

import styles from "@/Styles/footer.module.css";
import {
  FacebookFilled,
  LinkedinFilled,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { Button, Flex } from "antd";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer_div_main}>
      <div className={styles.top_section}>
        <div className={styles.left_section}>
          <h3>We are here to help</h3>
          <p>
            Visit our Help Center for answers to common questions or contact us
            directly.
          </p>
          <Flex gap="small" wrap="wrap" style={{ marginTop: "10px" }}>
            <Button>Help center</Button>
            <Button>Contact Support</Button>
          </Flex>
        </div>
        <div className={styles.right_section}>
          <div className={styles.right_section_buttons}>
            <p style={{ marginBottom: "10px" }}>Indeed</p>
            <ul>
              <li>
                <Link href="/">About Indeed</Link>
              </li>
              <li>
                <Link href="/">Press</Link>
              </li>
              <li>
                <Link href="/">Security</Link>
              </li>
              <li>
                <Link href="/">Terms</Link>
              </li>
              <li>
                <Link href="/">Privacy Center and Ad Choices</Link>
              </li>
              <li>
                <Link href="/">Accessibility at Indeed</Link>
              </li>
              <li>
                <Link href="/">Work at Indeed</Link>
              </li>
              <li>
                <Link href="/">Countries</Link>
              </li>
              <li>
                <Link href="/">Work at Indeed</Link>
              </li>
            </ul>
          </div>
          <div className={styles.right_section_buttons}>
            <p style={{ marginBottom: "10px" }}>Employers</p>
            <ul>
              <li>
                <Link href="/">Post a job</Link>
              </li>
              <li>
                <Link href="/">Find candidates</Link>
              </li>
              <li>
                <Link href="/">Products</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">Skills test</Link>
              </li>
              <li>
                <Link href="/">LEAD with Indeed</Link>
              </li>
            </ul>
          </div>
          <div className={styles.right_section_buttons}>
            <p style={{ marginBottom: "10px" }}>Resources</p>
            <ul>
              <li>
                <Link href="/">Hiring resources</Link>
              </li>
              <li>
                <Link href="/">How to hire employees</Link>
              </li>
              <li>
                <Link href="/">How to write job descriptions</Link>
              </li>
              <li>
                <Link href="/">Guide to hiring with Indeed</Link>
              </li>
              <li>
                <Link href="/">Interview questions guide</Link>
              </li>
              <li>
                <Link href="/">Hiring Lab</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom_section}>
        <div className={styles.bottom_section_left}>
          <Link href="/">CareerConnect-Hub</Link>
          ©2023{" "}
        </div>
        <div className={styles.bottom_section_middle}>
          <Link href="/">Your privacy choices</Link>
        </div>
        <div className={styles.bottom_section_right}>
          <Link href="/">
            <FacebookFilled style={{ fontSize: "25px", padding: "5px" }} />
          </Link>
          <Link href="/">
            <TwitterSquareFilled style={{ fontSize: "25px", padding: "5px" }} />
          </Link>
          <Link href="/">
            <LinkedinFilled style={{ fontSize: "25px", padding: "5px" }} />
          </Link>
          <Link href="/">
            <YoutubeFilled style={{ fontSize: "25px", padding: "5px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
