"use client";

import { Button, Card, Col, Row, Typography, Tag } from "antd";
import Search from "antd/es/input/Search";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import React, { useState } from "react";
const { Text, Paragraph } = Typography;

const JobFeed = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const jobData = [
    {
      _id: 1,
      title: "Frontend Developer",
      location: "VenU eLearning Solutions Smyrna",
      type: "Remote Full-time",
      contract: "Contract",
    },
    {
      _id: 2,
      title: "Backend Developer",
      location: "Tech Innovations Inc. San Francisco",
      type: "On-site",
      contract: "Full-time",
    },
    {
      _id: 3,
      title: "React Developer",
      location: "Awesome Tech Co. New York, NY",
      type: "Remote Part-time",
      contract: "Freelance",
    },
    {
      _id: 4,
      title: "UI/UX Designer",
      location: "Creative Designs Ltd. Los Angeles",
      type: "On-site",
      contract: "Full-time",
    },
    {
      _id: 5,
      title: "Data Scientist",
      location: "Data Insights Corp. Chicago",
      type: "Remote",
      contract: "Contract",
    },
    {
      _id: 6,
      title: "Mobile App Developer",
      location: "Mobile Innovations Ltd. Seattle",
      type: "On-site",
      contract: "Full-time",
    },
  ];

  const filteredJobs = jobData.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    console.log("Search term:", value);
  };

  return (
    <div style={{ padding: "16px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        <Search
          placeholder="Search for jobs"
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
          style={{
            maxWidth: "500px",
            width: "100%",
          }}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        <h2>Job Feed</h2>
        <Paragraph>
          <Text strong>We are working on your personalized job feed.</Text>
        </Paragraph>
        <Paragraph>
          In the meantime, run a search to find your next job
        </Paragraph>
        {/* <Button style={{ borderColor: '#1890ff', color: '#1890ff' }}>Find Job</Button> */}
      </div>

      <Row gutter={[16, 24]}>
        {filteredJobs.map((job, index) => (
          <Col xs={24} sm={12} md={8} lg={8} key={index}>
            <Card
              title={<Title level={4}>{job.title}</Title>}
              bordered={false}
              style={{
                width: "100%",
                height: "100%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Text strong>Location: </Text>
              <Text>{job.location}</Text>
              <br />
              <Text strong>Type: </Text>
              <Text>{job.type}</Text>
              <br />
              <Text strong>Contract: </Text>
              <Text>{job.contract}</Text>
              <br />
              <Button type="primary" style={{ marginTop: "16px" }}>
                <Link href={`/jobDetails/${job._id}`}>Job Details</Link>
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default JobFeed;
