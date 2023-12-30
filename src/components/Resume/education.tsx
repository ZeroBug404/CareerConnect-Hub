"use client";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";

import EducationModal from "../ui/ResumeModal/EducationModal";
import UpdateEducation from "./UpdateEducation";
import { useEducationsQuery } from "@/redux/api/educationApi";
import { IEducation } from "@/types";

const Education = () => {
  const [open, setOpen] = useState(false);
  const query: Record<string, any> = {};
  const { data, isLoading } = useEducationsQuery({ ...query });
  const educationData = data?.data;

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
            <Flex
              vertical
              gap="middle"
              justify="space-between"
              align="start"
            >
              {educationData?.map((education:IEducation) => (
                <div key={education._id}>
                  <h4>{education?.degree}</h4>
                  <p>{education?.college}</p>
                  <p>{education?.startYear} - {education?.endYear}</p>
                </div>
              ))}
            </Flex>
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
