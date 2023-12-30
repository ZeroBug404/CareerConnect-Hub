"use client";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";

import UpdateWorkExperience from "./UpdateWorkExperience";

import { useWorkExperienceQuery } from "@/redux/api/workExperienceApi";
import ExperienceModal from "../ui/ResumeModal/ExperienceModal";
import { IWorkExperience } from "@/types";

const WorkExperience = () => {
  const [open, setOpen] = useState(false);
  const query: Record<string, any> = {};
  const { data, isLoading } = useWorkExperienceQuery({ ...query });
  const experiencesData = data?.data;

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
            <Flex vertical gap="middle" justify="space-between" align="start">
              {experiencesData?.map((exp: IWorkExperience) => (
                <div key={exp._id}>
                  <h4>{exp?.profile}</h4>
                  <p>{exp?.location}</p>
                  <p>
                    Job - {exp?.startDate} - {exp?.endDate}
                  </p>
                </div>
              ))}
            </Flex>
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
