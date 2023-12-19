import styles from "@/components/ui/footer.module.css";
import { Button } from "antd";

const Footer = () => {
  return (
    <div className={styles.footer_div_main}>
      <div className={styles.top_section}>
        <div className={styles.left_section}>
          <h2>We'Re here to help</h2>
          <p>
            Visit our Help Center for answers to common questions or contact us
            directly.
          </p>
          <div>
            <a href="" className={styles.outline_button}>Help center</a>
          </div>
        </div>
        <div className={styles.right_section}>
          <div>Indeed</div>
          <div>Employers</div>
          <div>Resources</div>
        </div>
      </div>
      <div className={styles.bottom_section}></div>
    </div>
  );
};

export default Footer;
