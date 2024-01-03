/* eslint-disable @next/next/no-img-element */
"use client";
import CareerTable from "@/components/ui/CareerTable";
import { useDeleteFAQMutation, useFAQsQuery } from "@/redux/api/faqApi";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import Link from "next/link";
import { useState } from "react";

interface DataType {
  index: number;
  name: string;
  update: string;
  delete: string;
}

const FAQTable = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { data, isLoading } = useFAQsQuery({ ...query });
  const FAQData = data?.data;
  const [deleteFAQ] = useDeleteFAQMutation();
  console.log(FAQData);

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

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteFAQ(id);
      if (res) {
        message.success("FAQ Deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "",
      dataIndex: "index",
      key: "index",
      render: (_: any, record: DataType) => record.index,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/dashboard/faq/edit/${data}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                type="primary"
                onClick={() => console.log(data)}
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              type="primary"
              danger
              onClick={() => deleteHandler(data?.id)}
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ] as const;

  return (
    <>
      <Link href="/dashboard/faq/create">
        <Button type="primary" style={{ marginBottom: 16 }}>
          Add FAQ
        </Button>
      </Link>

      <CareerTable
        loading={isLoading}
        columns={columns}
        dataSource={FAQData}
        showSizeChanger={true}
        showPagination={true}
        pageSize={size}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
      />
    </>
  );
};

export default FAQTable;
