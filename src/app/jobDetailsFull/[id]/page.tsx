"use client";
import styles from "@/Styles/jobDetailsFull.module.css";
import type { TabsProps } from "antd";
import { Button, Col, Divider, Flex, Row, Tabs } from "antd";
import { useEffect, useState } from "react";

interface JobData {
  company: string;
  title: string;
  deadline: string;
  numberOfOpenings: string;
  location: string;
  salary: string;
  createdAt: string;
}

const JobDetailsFull = ({ params }: any) => {
  const [jobData, setJobData] = useState<JobData | null>(null);

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "All",
    },
    {
      key: "2",
      label: "Job Responsibilities",
    },
    {
      key: "3",
      label: "Requirements",
    },
    {
      key: "4",
      label: "Salary & Benefits",
    },
    {
      key: "5",
      label: "Company Information",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://career-connect-hub-api.vercel.app/api/v1/jobs/${params.id}`,
          {
            cache: "no-store",
          }
        );
        const data = await res.json();
        setJobData(data?.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div>
      {jobData ? (
        <Row justify="center" align="middle" className={styles.container}>
          <Col sm={22} md={22} lg={20} className={styles.jobDetails}>
            <div className="">
              <h6 className={styles.jobHeaderCompany}>{jobData?.company}</h6>
              <h5 className={styles.jobHeaderTitle}>{jobData?.title}</h5>
              <p className={styles.deadline}>
                Application Deadline:{" "}
                <span style={{ fontWeight: "bold" }}>{jobData?.deadline}</span>
              </p>
              <Flex
                className={styles.buttonContainer}
                wrap="wrap"
                gap="small"
                justify="end"
              >
                <Button type="primary">Apply Now</Button>
                <Button>Shortlist</Button>
              </Flex>
            </div>
            <Tabs
              defaultActiveKey="1"
              items={items}
              onChange={onChange}
              type="card"
              size="large"
            />
            <div className={styles.summaryContainer}>
              <h5 className={styles.summaryHeader}>Summary</h5>
              <ul className={styles.summaryList}>
                <li>
                  Vacancy:{" "}
                  <span className={styles.listItem}>
                    {jobData?.numberOfOpenings}
                  </span>
                </li>
                <li>
                  Age:<span className={styles.listItem}>22 to 33 years</span>{" "}
                </li>
                <li>
                  Location:{" "}
                  <span className={styles.listItem}>{jobData?.location}</span>
                </li>
                <li>
                  Salary:{" "}
                  <span className={styles.listItem}>${jobData?.salary}</span>
                </li>
                <li>
                  Published:{" "}
                  <span className={styles.listItem}>{jobData?.createdAt}</span>
                </li>
              </ul>
            </div>
            <div className={styles.ReusibleContainer}>
              <h5 className={styles.responsibilityHeader}>
                Job Responsibilities & Context
              </h5>
              <p className={styles.responsibilityText}>
                The applicants should have experience in the following area(s):
                Accounts and store. The applicants should have At least 02 years
                working experience. Computer knowledge is must - Specially in MS
                word & excel. Excellent communication skill. Knowledge in
                English both written and verbally. Ability to interact with all
                levels of personnel. Ability to work under pressure.
              </p>
              <Divider />
              <h5 className={styles.educationalHeader}>
                Educational Requirements
              </h5>
              <ul className={styles.educationalul}>
                <li className={styles.educationalList}>
                  Bachelor Degree in commerce back ground - in Accounting
                  Preference.
                </li>
              </ul>
              <h5 className={styles.additionalHeader}>
                Additional Requirements
              </h5>
              <ul className={styles.educationalul}>
                <li className={styles.educationalList}>Age 22 to 33 years</li>
                <li className={styles.educationalList}>
                  Skills Required: Computer literacy, Accounting Software/ERP
                  Knowledge.
                </li>
              </ul>
              <Divider />
              <h5 className={styles.additionalHeader}>
                Compensation & Other Benefits
              </h5>
              <ul className={styles.educationalul}>
                <li className={styles.educationalList}>Mobile bill</li>
                <li className={styles.educationalList}>
                  Lunch Facilities: Full Subsidize
                </li>
                <li className={styles.educationalList}>Festival Bonus: 2</li>
              </ul>
              <h5 className={styles.additionalHeader}>Workplace</h5>
              <p className={styles.reusableText}>Work at office</p>
              <h5 className={styles.additionalHeader}>Employment Status</h5>
              <p className={styles.reusableText}>Full-time</p>
              <h5 className={styles.additionalHeader}>Job Location</h5>
              <p className={styles.reusableText}>Anywhere in Bangladesh</p>
            </div>
            <div className={styles.ReusibleContainer}>
              <h5 className={styles.responsibilityHeader}>Apply Procedure</h5>
              <p className={styles.applyProcedureText}>
                Application Deadline:{" "}
                <span style={{ fontWeight: "bold" }}>{jobData?.deadline}</span>
              </p>
              <Button type="primary">Apply Now</Button>
            </div>
            <div className={styles.companyInfoContainer}>
              <h5 className={styles.companyInfoHeader}>Company Information</h5>
              <h6 className={styles.companyName}>{jobData?.company}</h6>
              <p className={styles.companyAddress}>
                House: 436, Road: 30, New DOHS, Mohakhali, DHaka 1200
              </p>
              <p className={styles.companyType}>Agro Based Firm</p>
            </div>
          </Col>
        </Row>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default JobDetailsFull;
