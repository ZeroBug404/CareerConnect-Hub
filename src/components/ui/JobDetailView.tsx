/* eslint-disable @next/next/no-async-client-component */
"use client";

import styles from "@/Styles/JobList.module.css";
import { RiseOutlined } from "@ant-design/icons";
import { Button, Card, Flex, List } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import { useEffect, useState } from "react";

const JobDetailView = async (props: any) => {
  const { selectedID } = props;

  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://career-connect-hub-api.vercel.app/api/v1/jobs/${selectedID}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("setData", res.data);
        setData(res?.data);
      });
  }, [selectedID]);

  return (
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
        {/* @ts-ignore */}
        <Card title={<Title level={4}>{data?.title}</Title>} bordered={false}>
          {/* @ts-ignore */}
          <h3>{data?.company}</h3>
          <br />
          <Flex wrap="wrap" gap="small">
            {/* @ts-ignore */}
            <p>Location: {data?.location},</p>
            {/* @ts-ignore */}
            <p>JobType: {data?.jobType},</p>
            {/* @ts-ignore */}
            <p>Joining Date: {data?.joiningDate},</p>
            {/* @ts-ignore */}
            <p>CTC: {data?.salary},</p>
            {/* @ts-ignore */}
            <p>Experience: {data?.experienceLevel}</p>
          </Flex>
          <br />
          <div>
            {/* @ts-ignore */}
            <h4>About {data?.company}</h4>
            {/* @ts-ignore */}
            <p>{data?.companyDescription}</p>
          </div>
          <div>
            <h4>About Job</h4>
            {/* @ts-ignore */}
            <p>{data?.jobDescription}</p>
          </div>
          <div>
            <h4>Key responsibilities:</h4>
            {/* @ts-ignore */}
            <List>{data?.keyResponsibilities}</List>
          </div>
          <div>
            <h4>Skill(s) required</h4>
            {/* @ts-ignore */}
            <p>{data?.skills}</p>
          </div>
          <div>
            <h4>Salary</h4>
            {/* @ts-ignore */}
            <p>{data?.salary}</p>
          </div>
          <div>
            <h4>Additional Information</h4>
            {/* @ts-ignore */}
            <p>{data?.benefits}</p>
          </div>
          <div>
            <h4>Number of openings</h4>
            {/* @ts-ignore */}
            <p>{data?.numberOfOpenings}</p>
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
  );
};

export default JobDetailView;
