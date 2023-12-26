/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import Link from "next/link";

interface DataType {
  index: number;
  name: string;
  email: string;
  phone: string;
  industry: string;
  update: string;
  delete: string;
}

const data: DataType[] = [
  {
    index: 1,
    name: "Nature's Bounty Farms",
    email: "info@naturesbountyfarms.com",
    phone: "888-777-6666",
    industry: "Agriculture",
    update: "Update",
    delete: "Delete",
  },
];

const CompanyTable = () => {
  const columns: ColumnsType<DataType> = [
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
      title: "Email",
      dataIndex: "email",
      key: "email",
      // responsive: ["lg"],
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      // responsive: ["lg"],
    },
    {
      title: "Industry",
      dataIndex: "industry",
      key: "industry",
      // responsive: ["lg"],
    },
    {
      title: "Update",
      dataIndex: "update",
      key: "update",
      render: (text: string) => (
        <Link href="/dashboard/company/update-company">
          <Tag color="blue">{text}</Tag>
        </Link>
      ),
    },
    {
      title: "Delete",
      dataIndex: "delete",
      key: "delete",
      render: (text: string) => <Tag color="red">{text}</Tag>,
    },
  ] as const;

  return (
    <>
      <Link href="/dashboard/company/add-company">
        <Button type="primary" style={{ marginBottom: 16 }}>
          Add Company
        </Button>
      </Link>
      <Table
        scroll={{ x: 1000 }}
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey={(record) => record.index}
      />
    </>
  );
};

export default CompanyTable;
