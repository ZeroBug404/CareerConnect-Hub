"use client";

import CareerTable from "@/components/ui/CareerTable";
import {
  useDeleteEventMutation,
  useGetEventsQuery,
} from "@/redux/api/eventApi";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import Link from "next/link";
import { useState } from "react";

const EventsPage = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { data, isLoading } = useGetEventsQuery({ ...query });
  // console.log("Data:", data?.data);

  const EventData = data?.data;
  const [deleteEvent] = useDeleteEventMutation();

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
      const res = await deleteEvent(id);
      if (res) {
        message.success("Event Deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "name",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/dashboard/events/edit/${data}`}>
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
            <Button
              onClick={() => deleteHandler(data?.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <Link href="/dashboard/events/create">
        <Button type="primary" style={{ margin: "10px 0" }}>
          Publish an event?
        </Button>
      </Link>
      <CareerTable
        loading={isLoading}
        columns={columns}
        dataSource={EventData}
        showSizeChanger={true}
        showPagination={true}
        pageSize={size}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
      />
    </div>
  );
};

export default EventsPage;