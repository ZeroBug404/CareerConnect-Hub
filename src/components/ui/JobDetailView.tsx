/* eslint-disable @next/next/no-async-client-component */
"use client";

import styles from "@/Styles/JobList.module.css";
import { RiseOutlined } from "@ant-design/icons";
import { Button, Card, Flex, List } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";

const JobDetailView = async (props: any) => {
  const { singleData } = props;

  // console.log("singleData", singleData);
  return (
    <>
      {singleData && (
        <Flex className={styles.JobDetailView_div_main}>
          <div
            style={{
              width: "100%",
              height: "100%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              border: "1px solid #104278",
              margin: " 20px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                padding: "10px",
                color: "#104278",
              }}
            >
              <Flex wrap="wrap" gap="small">
                <RiseOutlined /> <p>Active Hiring</p>
              </Flex>
            </div>
            <Card
              title={<Title level={4}>{singleData?.title}</Title>}
              bordered={false}
            >
              <h3>{singleData?.company}</h3>
              <br />
              <Flex wrap="wrap" gap="small">
                <p>Location: {singleData?.location},</p>
                <p>JobType: {singleData?.jobType},</p>
                <p>Joining Date: {singleData?.joiningDate},</p>
                <p>CTC: {singleData?.salary},</p>
                <p>Experience: {singleData?.experienceLevel}</p>
              </Flex>
              <br />
              <div>
                <h4>About {singleData?.company}</h4>
                <p>{singleData?.companyDescription}</p>
              </div>
              <div>
                <h4>About Job</h4>
                <p>{singleData?.jobDescription}</p>
              </div>
              <div>
                <h4>Key responsibilities:</h4>
                <List>{singleData?.keyResponsibilities}</List>
              </div>
              <div>
                <h4>Skill(s) required</h4>
                <p>{singleData?.skills}</p>
              </div>
              <div>
                <h4>Salary</h4>
                <p>{singleData?.salary}</p>
              </div>
              <div>
                <h4>Additional Information</h4>
                <p>{singleData?.benefits}</p>
              </div>
              <div>
                <h4>Number of openings</h4>
                <p>{singleData?.numberOfOpenings}</p>
              </div>

              <Flex
                wrap="wrap"
                gap="small"
                justify="center"
                align="center"
                style={{
                  padding: "20px 0",
                }}
              >
                <Link href="/login">
                  <Button type="primary">Apply Now</Button>
                </Link>
              </Flex>
            </Card>
          </div>
        </Flex>
      )}
    </>
  );
};

export default JobDetailView;
