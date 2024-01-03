"use client";

import CareerTable from "@/components/ui/CareerTable";
import { Button } from "antd";
import Link from "next/link";
import { useState } from "react";

const AppliedJobPage = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

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

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "userId ",
      dataIndex: "userId",
    },
    {
      title: "companyId",
      dataIndex: "companyId",
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/resume/${data?.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                type="primary"
              >
                View details
              </Button>
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
        
        dataSource={""}
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
