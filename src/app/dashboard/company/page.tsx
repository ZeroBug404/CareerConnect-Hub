/* eslint-disable @next/next/no-img-element */
"use client";
import CareerTable from "@/components/ui/CareerTable";
import {
  useCompaniesQuery,
  useDeleteCompanyMutation,
} from "@/redux/api/companyApi";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Switch, message } from "antd";
import { useState } from "react";

interface DataType {
  index: number;
  industry: string;
  name: string;
  email: string;
  phone: string;
  update: string;
  delete: string;
}

const CompanyTable = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { data, isLoading } = useCompaniesQuery({ ...query });
  const companyData = data?.data;
  console.log(companyData);
  const [deleteCompany] = useDeleteCompanyMutation();

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
      const res = await deleteCompany(id);
      if (res) {
        message.success("Company Deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const statusChangeHandler = (checked: boolean) => {
    console.log(`switch to ${checked}`);
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
      title: "Industry",
      dataIndex: "industry",
      key: "industry",
    },
    {
      title: "Email",
      dataIndex: ["contact", "email"],
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: ["contact", "phone"],
      key: "phone",
    },
    {
      title: "Status",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Switch onChange={statusChangeHandler}/>
            {/* onChange={() => statusChangeHandler(data)} */}
          </>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            {/* <Link href={`/dashboard/company/edit/${data}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                type="primary"
                onClick={() => console.log(data)}
              >
                <EditOutlined />
              </Button>
            </Link> */}
            <Button type="primary" danger onClick={() => deleteHandler(data)}>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      {/* <Link href="/dashboard/company/create">
        <Button type="primary" style={{ margin: "10px 0" }}>
          Add a Company?
        </Button>
      </Link> */}
      <CareerTable
        loading={isLoading}
        columns={columns}
        dataSource={companyData}
        showSizeChanger={true}
        showPagination={true}
        pageSize={size}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
      />
    </>
  );
};

export default CompanyTable;
