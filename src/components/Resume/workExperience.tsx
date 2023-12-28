"use client";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import ExperienceModal from "../ui/ResumeModal/ExperienceModal";
import UpdateWorkExperience from "./UpdateWorkExperience";

const WorkExperience = () => {
  const [open, setOpen] = useState(false);
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
      <div>
        <p>WORK EXPERIENCE</p>
        <p>year</p>
      </div>
      <div style={{ width: "50%" }}>
        <div>
          <Flex wrap="wrap" gap="middle" justify="space-between" align="start">
            <div>
              <h4>Frontend dev</h4>
              <p>NY, Remote</p>
              <p>
                Job <span>Dec 2022 - Dec 2023</span>
              </p>
            </div>
            <Flex wrap="wrap" gap="middle" justify="end" align="start">
              <UpdateWorkExperience />
              <DeleteOutlined />
            </Flex>
          </Flex>
        </div>
        <div>
          <Button type="link" onClick={() => setOpen(true)}>
            <PlusOutlined />
            Add Job
          </Button>
        </div>
        <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
          <ExperienceModal btnName={"Save"}></ExperienceModal>
        </GlobalModal>
      </div>
    </Flex>
  );
};

export default WorkExperience;
