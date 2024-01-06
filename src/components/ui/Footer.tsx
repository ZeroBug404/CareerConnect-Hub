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
    // <div className={styles.footer_div_main}>
    //   <div className={styles.top_section}>
    //     <div className={styles.left_section}>
    //       <h3
    //         style={{
    //           color: "#2d2d2d",
    //           fontSize: "24px",
    //           fontWeight: "bold",
    //           marginBottom: "10px",
    //         }}
    //       >
    //         We are here to help
    //       </h3>
    //       <p
    //         style={{
    //           color: "#2d2d2d",
    //           marginBottom: "10px",
    //         }}
    //       >
    //         Visit our Help Center for answers to common questions or contact us
    //         directly.
    //       </p>
    //       <Flex gap="small" wrap="wrap" style={{ marginTop: "10px" }}>
    //         <Button size="large" type="primary" ghost>
    //           Help center
    //         </Button>
    //         <Button size="large" type="primary" ghost>
    //           Contact Support
    //         </Button>
    //       </Flex>
    //     </div>
    //     <div className={styles.right_section}>
    //       <div className={styles.right_section_buttons}>
    //         <p style={{ marginBottom: "10px" }}>Career Connect Hub</p>
    //         <ul>
    //           <li>
    //             <Link href="/">About Career Connect Hub</Link>
    //           </li>
    //           <li>
    //             <Link href="/">Press</Link>
    //           </li>
    //           <li>
    //             <Link href="/">Security</Link>
    //           </li>
    //           <li>
    //             <Link href="/terms">Terms</Link>
    //           </li>
    //           <li>
    //             <Link href="/">Privacy Center and Ad Choices</Link>
    //           </li>
    //           <li>
    //             <Link href="/">Accessibility at Career Connect Hub</Link>
    //           </li>
    //           <li>
    //             <Link href="/">Work at Career Connect Hub</Link>
    //           </li>
    //           <li>
    //             <Link href="/">Countries</Link>
    //           </li>
    //           <li>
    //             <Link href="/">Work at Career Connect Hub</Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className={styles.right_section_buttons}>
    //         <p style={{ marginBottom: "10px" }}>Employers</p>
    //         <ul>
    //           <li>
    //             <Link href="/">Post a job</Link>
    //           </li>
    //           <li>
    //             <Link href="/">Find candidates</Link>
    //           </li>
    //           <li>
    //             <Link href="/">Products</Link>
    //           </li>
    //           <li>
    //             <Link href="/">Pricing</Link>
    //           </li>
    //           <li>
    //             <Link href="/">Skills test</Link>
    //           </li>
    //           <li>
    //             <Link href="/">LEAD with Career Connect Hub</Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className={styles.right_section_buttons}>
    //         <p style={{ marginBottom: "10px" }}>Resources</p>
    //         <ul>
    //           <li>
    //             <Link href="/">Hiring resources</Link>
    //           </li>
    //           <li>
    //             <Link href="/">How to hire employees</Link>
    //           </li>
    //           <li>
    //             <Link href="/">How to write job descriptions</Link>
    //           </li>
    //           <li>
    //             <Link href="/">Guide to hiring with Career Connect Hub</Link>
    //           </li>
    //           <li>
    //             <Link href="/">Interview questions guide</Link>
    //           </li>
    //           <li>
    //             <Link href="/">Hiring Lab</Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className={styles.bottom_section}
    //   >
    //     <div className={styles.bottom_section_left}>
    //       <Link href="/">Career Connect Hub </Link>© 2023{" "}
    //     </div>
    //     <div className={styles.bottom_section_middle}>
    //       <Link href="/">Your privacy choices</Link>
    //     </div>
    //     <div className={styles.bottom_section_right}>
    //       <Link href="/">
    //         <FacebookFilled style={{ fontSize: "25px", padding: "5px" }} />
    //       </Link>
    //       <Link href="/">
    //         <TwitterSquareFilled style={{ fontSize: "25px", padding: "5px" }} />
    //       </Link>
    //       <Link href="/">
    //         <LinkedinFilled style={{ fontSize: "25px", padding: "5px" }} />
    //       </Link>
    //       <Link href="/">
    //         <YoutubeFilled style={{ fontSize: "25px", padding: "5px" }} />
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#123770] text-white  text-center py-10 px-5">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 border-b-2 border-gray-600 pb-5">
        <div className="mb-5 lg:mb-0">
          <h3 className="text-2xl mb-5 font-semibold">Career Connect Hub</h3>
          <p className="mb-5">
            Your dream job, simplified. Explore opportunities effortlessly on
            our <br /> Career Connect Hub.
          </p>
          <div className="flex justify-center gap-2 text-2xl">
            <Link href="">
              <FacebookFilled className="border-2 rounded-full p-3 hover:bg-[#4096FF] transition duration-300" />
            </Link>
            <Link href="">
              <LinkedinFilled className="border-2 rounded-full p-3 hover:bg-[#4096FF] transition duration-300" />
            </Link>
            <Link href="">
              <TwitterSquareFilled className="border-2 rounded-full p-3 hover:bg-[#4096FF] transition duration-300" />
            </Link>
            <Link href="">
              <YoutubeFilled className="border-2 rounded-full p-3 hover:bg-[#4096FF] transition duration-300" />
            </Link>
          </div>
        </div>
        <div className="mb-5 lg:mb-0">
          <h3 className="text-2xl mb-5 font-semibold">Company</h3>
          <div className="grid grid-cols-1">
            <Link href="/" className="mb-5">
              About Us
            </Link>
            <Link href="/contact" className="mb-5">
              Contact With Us
            </Link>
          </div>
        </div>
        <div className="mb-5 lg:mb-0">
          <h3 className="text-2xl mb-5 font-semibold">Resources</h3>
          <div className="grid grid-cols-1">
            <Link href="/" className="mb-5">
              Post New Job
            </Link>
            <Link href="/job-list" className="mb-5">
              Jobs Listing
            </Link>
          </div>
        </div>
        <div className="mb-5 lg:mb-0">
          <h3 className="text-2xl mb-5 font-semibold">Legal</h3>
          <div className=" grid grid-cols-1">
            <Link href="/blog" className="mb-5">
              Blog
            </Link>
            <Link href="/privacy" className="mb-5">
              Privacy
            </Link>
            <Link href="/terms" className="mb-5">
              Terms
            </Link>
          </div>
        </div>
      </div>
      <p className="pt-5">@ 2023 Career Connect Hub, Made with by Next.js</p>
    </div>
  );
};

export default Footer;
