"use client";

import CareerTable from "@/components/ui/CareerTable";
import { getUserInfo } from "@/services/auth.service";
import { EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

const AppliedJobPage = () => {
  const {email} = getUserInfo() as any;
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [appliedJob, setAppliedJob] = useState([])


  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://career-connect-hub-api.vercel.app/api/v1/applied-job/company/${email}`,
          {
            cache: "no-store",
          }
        );
        const data = await res.json();
        setAppliedJob(data.data)
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchData();
  }, [email]);

  const columns = [
    {
      title: "Title",
      dataIndex: "jobId",
    },
    {
      title: "User Id ",
      dataIndex: "id",
    },
    {
      title: "Job Seeker Email",
      dataIndex: "jobSeekerEmail",
    },
    {
      title: "Company Email",
      dataIndex: "companyEmail",
    },
    {
      title: "View Resume",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/${data?.id}`}>
            <EyeOutlined style={{
                  fontSize: "20px",
                  margin: "0px 5px",
                }}/>
            </Link>
          </>
        );
      },
    },
  ];
  
  return (
    <div>
        <Button type="primary" style={{ margin: "10px 0" }}>
          Applied job
        </Button>
      <CareerTable
        
        dataSource={appliedJob}
        columns={columns}
        showSizeChanger={true}
        showPagination={true}
        pageSize={size}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
      />
    </div>
  );
};

export default AppliedJobPage;
