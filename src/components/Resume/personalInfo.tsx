"use client";
import { DownloadOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

const PersonalInfo = () => {
  return (
    <Flex
      wrap="wrap"
      gap="small"
      justify="space-between"
      style={{
        borderBottom: "1px solid black",
        paddingBottom: "10px",
      }}
    >
      <Flex wrap="wrap" gap="middle" justify="space-between" align="start">
        <div>
          <h2>Candidate Name</h2>
          <p>email</p>
          <p>contact</p>
          <p>location</p>
        </div>
        <EditOutlined />
      </Flex>
      <Button type="link" icon={<DownloadOutlined />}>
        Download
      </Button>
    </Flex>
  );
};

export default PersonalInfo;
