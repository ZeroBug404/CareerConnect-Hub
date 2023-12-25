"use client";
import CareerTable from "@/components/ui/CareerTable";
import { useJobsQuery } from "@/redux/api/jobApi";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const JobPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const { data, isLoading } = useJobsQuery({ ...query });
  const jobData = data?.data;

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

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      sorter: true,
    },
    {
      title: "Job Type",
      dataIndex: "jobType",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`${data?.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button onClick={() => console.log(data)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <Link href="/dashboard/job/create">
        <Button type="primary">Publish a job?</Button>
      </Link>
      <CareerTable
        loading={isLoading}
        columns={columns}
        dataSource={jobData}
        showSizeChanger={true}
        showPagination={true}
        totalPages={100}
        pageSize={size}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
      />
    </div>
  );
};

export default JobPage;
