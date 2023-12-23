/* eslint-disable @next/next/no-async-client-component */
"use client";

import styles from "@/Styles/JobList.module.css";
import { Card, Col, Flex, Row } from "antd";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";

const JobLists = async (props: any) => {
  const { setSelectedID } = props;

  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    fetch("https://career-connect-hub-api.vercel.app/api/v1/jobs")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  const onClickHandler = (index: any, ID: any): void => {
    setSelectedIndex(index);
    setSelectedID(ID);
  };

  return (
    <div style={{ padding: "16px" }} className={styles.JobLists_div_main}>
      <Row gutter={[16, 24]}>
        {data?.map((job: any, index: number) => (
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            key={job?._id}
            onClick={() => onClickHandler(index, job._id)}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                border: `${selectedIndex === index ? "2px solid #104278" : ""}`,
                borderRadius: "10px",
              }}
            >
              {/* <div
                style={{
                  padding: "10px",
                  color: "blue",
                }}
              >
                <Flex wrap="wrap" gap="small">
                  <RiseOutlined /> <p>Active Hiring</p>
                </Flex>
              </div> */}
              <Card
                title={<Title level={4}>{job.title}</Title>}
                bordered={false}
              >
                <h4>{job.company}</h4>
                <br />
                <Flex wrap="wrap" gap="small">
                  <p>Location: {job.location},</p>
                  <p>JobType: {job.jobType},</p>
                  <p> Joining Date: {job.joiningDate},</p>
                  <p>CTC: {job.salary},</p>
                  <p>Experience: {job.experienceLevel}</p>
                </Flex>
                {/* <br />
                <Flex wrap="wrap" gap="small" justify="end" align="center">
                  <Link href={`/jobDetails/${job._id}`}>View Details</Link>
                  <Button type="primary">Apply Now</Button>
                </Flex> */}
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default JobLists;
