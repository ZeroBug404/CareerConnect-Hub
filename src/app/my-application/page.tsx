"use client";

import CareerTable from "@/components/ui/CareerTable";
import { FileTextOutlined, ImportOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

const MyApplicationPage = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [applicationData, setApplicationData] = useState();

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://career-connect-hub-api.vercel.app/api/v1/applied-job/applicant/applicant@gmail.com`,
          {
            cache: "no-store",
          }
        );
        const data = await res.json();
        setApplicationData(data?.data);
      } catch (error) {
        console.error("Error fetching Blog details:", error);
      }
    };

    fetchData();
  }, []);

  if (!applicationData) {
    return <p>Loading...</p>;
  }

  console.log(applicationData);

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const appData = [
    {
      company: "Seequenze Technologies",
      profile: "Web Development",
      jobDetail:
        "https://internshala.com/internship/detail/web-development-work-from-home-job-internship-at-seequenze-technologies1703102109",
      date: "30/12/2023",
      applicationStatus: "Applied",
      reviewApplication:
        "https://internshala.com/application/view/180312582?referral=dashboard",
    },
  ];

  const columns = [
    {
      title: "COMPANY",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "PROFILE",
      dataIndex: "profile",
      key: "profile",
    },
    {
      title: "",
      dataIndex: "jobDetail",
      key: "jobDetail",
      render: (data: any) => (
        <Link href={`${data}`}>
          <span style={{ color: "#00A6E5", fontSize: "1rem" }}>
            <ImportOutlined />
          </span>
        </Link>
      ),
    },
    {
      title: "APPLIED ON",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "APPLICATION STATUS",
      dataIndex: "applicationStatus",
      key: "applicationStatus",
      render: (text: any) => (
        <Button type="primary" ghost>
          {text}
        </Button>
      ),
    },
    {
      title: "REVIEW APPLICATION",
      dataIndex: "id",
      key: "reviewApplication",
      render: (data: any) => (
        <Link href={`${data}`}>
          <span style={{ color: "#00A6E5", fontSize: "1rem" }}>
            <FileTextOutlined />
          </span>
        </Link>
      ),
    },
  ] as const;

  return (
    <Row justify="center">
      <Col sm={22} md={22} lg={22}>
        <h1 style={{ textAlign: "center", margin: "2rem 0" }}>
          My applications
        </h1>
        <CareerTable
          // loading={isLoading}
          columns={columns}
          dataSource={appData}
          showSizeChanger={true}
          showPagination={true}
          pageSize={size}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
        />
      </Col>
    </Row>
  );
};

export default MyApplicationPage;
