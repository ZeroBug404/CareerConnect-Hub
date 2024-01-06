"use client";

import helpCenterImage from "@/assets/Help-Center.png";
import styles from "@/Styles/helpCenter.module.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const HelpCenter = () => {
  return (
    <div className={styles.helpCenter_main}>
      <div className={styles.helpCenter_left}>
        <h2>Explore our Help Center</h2>
        <p>
          Learn everything you need to know about managing your account,
          navigating your dashboard, and more.
        </p>
        <Link href="/">
          <p className={styles.helpCenter_left_link}>
            <span>Start Exploring</span> <ArrowRightOutlined />
          </p>
        </Link>
      </div>
      <div className={styles.helpCenter_right}>
        <Image
          src={helpCenterImage}
          width={350}
          height={350}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default HelpCenter;
