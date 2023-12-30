'use client'
import styles from "@/Styles/UserProfile.module.css";
import { Progress } from 'antd';
const page = () => {
  return (
    <div className={styles.main_body}>
      <div className={styles.top_section}>
        <p className={styles.top_section_head}>View Profile</p>
        <div className={styles.top_section_body}>
          <p className={styles.top_section_body_title}>
            Here you will get a detailed view of your resume and you can
            download your resume from Download Resume option.
          </p>
          <div className={styles.top_section_body_complete}>
            <div><Progress size="small" type="circle" percent={100} /></div>
            <div>
              <p className={styles.top_section_body_complete_text1}>Completeness of Career Connect Hub Profile (8/8)</p>
              <p className={styles.top_section_body_complete_text2}>Last updated on: 29 Oct 2023</p>
            </div>
          </div>
          <div  className={styles.top_section_body_complete_download}>
            <span>Download</span>
          </div>
        </div>
      </div>
      <div className={styles.profile_section}>Name</div>
    </div>
  );
};

export default page;
