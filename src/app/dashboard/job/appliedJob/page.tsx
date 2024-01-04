"use client";

import CareerTable from "@/components/ui/CareerTable";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

const AppliedJobPage = () => {
  const {email} = getUserInfo() as any;;
  console.log(email);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://career-connect-hub-api.vercel.app/api/v1/company/${email}`,
          {
            cache: "no-store",
          }
        );
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "User Id ",
      dataIndex: "userId",
    },
    {
      title: "Company Id",
      dataIndex: "companyId",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "View Details",
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
