"use client";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";

import EducationModal from "../ui/ResumeModal/EducationModal";
import UpdateEducation from "./UpdateEducation";

import { useEducationQuery } from "@/redux/api/educationApi";

const Education = () => {
  const [open, setOpen] = useState(false);
  const query: Record<string, any> = {};
  const { data, isLoading } = useEducationQuery({ ...query });
  const educationData = data?.data;
  console.log(data?.data);
  return (
    <Flex
      wrap="wrap"
      gap="small"
      justify="space-between"
      style={{
        borderBottom: "1px solid black",
        padding: "10px 0",
      }}
    >
      <p>EDUCATION</p>
      <div style={{ width: "50%" }}>
        <div>
          <Flex wrap="wrap" gap="middle" justify="space-between" align="start">
            <div>
              <h4>Department</h4>
              <p>Institute</p>
              <p>year</p>
            </div>
            <Flex wrap="wrap" gap="middle" justify="end" align="start">
              <UpdateEducation />
              <DeleteOutlined />
            </Flex>
          </Flex>
        </div>
        <div>
          <Button type="link" onClick={() => setOpen(true)}>
            <PlusOutlined />
            Add Education
          </Button>
        </div>
        <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
          <EducationModal btnName={"Save"}></EducationModal>
        </GlobalModal>
      </div>
    </Flex>
  );
};

export default Education;
