"use client";

import { RiseOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Typography, Flex } from "antd";
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
      company: "VenU eLearning Solutions",
      location: "Smyrna",
      type: "Remote Full-time",
      contract: "Contract",
      ctc: "$80,000 - $100,000",
      experience: "2-5 years",
      joiningDate: "Immediate",
    },
    {
      _id: 2,
      title: "Backend Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco",
      type: "On-site",
      contract: "Full-time",
      ctc: "$90,000 - $110,000",
      experience: "3-7 years",
      joiningDate: "2 weeks notice",
    },
    {
      _id: 3,
      title: "React Developer",
      company: "Awesome Tech Co.",
      location: "New York, NY",
      type: "Remote Part-time",
      contract: "Freelance",
      ctc: "$70 - $90 per hour",
      experience: "1-3 years",
      joiningDate: "Flexible",
    },
    {
      _id: 4,
      title: "UI/UX Designer",
      company: "Creative Designs Ltd.",
      location: "Los Angeles",
      type: "On-site",
      contract: "Full-time",
      ctc: "$85,000 - $110,000",
      experience: "3-6 years",
      joiningDate: "Immediate",
    },
    {
      _id: 5,
      title: "Data Scientist",
      company: "Data Insights Corp.",
      location: "Chicago",
      type: "Remote",
      contract: "Contract",
      ctc: "$100,000 - $120,000",
      experience: "4-8 years",
      joiningDate: "1 month notice",
    },
    {
      _id: 6,
      title: "Mobile App Developer",
      company: "Mobile Innovations Ltd.",
      location: "Seattle",
      type: "On-site",
      contract: "Full-time",
      ctc: "$95,000 - $115,000",
      experience: "2-5 years",
      joiningDate: "2 weeks notice",
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
      </div>

      <Row gutter={[16, 24]}>
        {filteredJobs.map((job, index) => (
          <Col xs={24} sm={12} md={8} lg={8} key={index}>
            <div
              style={{
                width: "100%",
                height: "100%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                style={{
                  padding: "10px",
                  color: "blue",
                }}
              >
                <RiseOutlined /> <Text strong>Active Hiring</Text>
              </div>
              <Card
                title={<Title level={4}>{job.title}</Title>}
                bordered={false}
              >
                <Text strong>{job.company}</Text>
                <br />
                <Flex wrap="wrap" gap="small">
                  <Text>Location: </Text>
                  <Text>{job.location}</Text>
                  <br />
                  <Text>Type: </Text>
                  <Text>{job.type}</Text>
                  <Text> Start Date:</Text>
                  <Text>{job.joiningDate}</Text>

                  <Text>CTC: </Text>
                  <Text>{job.ctc}</Text>

                  <Text>Experience: </Text>
                  <Text>{job.experience}</Text>
                  <Text>Contract: </Text>
                  <Text>{job.contract}</Text>
                </Flex>
                <br />
                <Flex wrap="wrap" gap="small" justify="end" align="center">
                  <Link href={`/jobDetails/${job._id}`}>View Details</Link>
                  <Button type="primary">Apply Now</Button>
                </Flex>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default JobFeed;
