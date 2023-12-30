"use client";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import UpdateWorkExperience from "./UpdateWorkExperience";
import { useWorkExperiencesQuery } from "@/redux/api/workExperienceApi";
import ExperienceModal from "../ui/ResumeModal/ExperienceModal";
import { IWorkExperience } from "@/types";

const WorkExperience = () => {
  const [open, setOpen] = useState(false);
  const query: Record<string, any> = {};
  const { data, isLoading } = useWorkExperiencesQuery({ ...query });
  const experiencesData = data?.data;

  return (
    <>
      <Row
        style={{
          borderBottom: "1px solid black",
          padding: "10px 0",
        }}
      >
        <Col xs={24} sm={8}>
          <div>
            <p>WORK EXPERIENCE</p>
            <p>year</p>
          </div>
        </Col>
        <Col xs={24} sm={16}>
          <Col>
            {experiencesData?.map((exp: IWorkExperience) => (
              <Flex
                wrap="wrap"
                gap="large"
                justify="space-between"
                align="start"
                key={exp._id}
              >
                <div style={{padding: "5px 0"}}>
                  <h4>{exp?.profile}</h4>
                  <p>{exp?.location}</p>
                  <p>
                    Job - {exp?.startDate} - {exp?.endDate}
                  </p>
                  <p>Responsibility - {exp?.responsibility}</p>
                </div>
                <Flex wrap="wrap" gap="middle" justify="end" align="start">
                  <UpdateWorkExperience />
                  <DeleteOutlined />
                </Flex>
              </Flex>
            ))}
          </Col>
          <div>
            <Button type="link" onClick={() => setOpen(true)}>
              <PlusOutlined />
              Add Job
            </Button>
          </div>
          <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
            <ExperienceModal btnName={"Save"}></ExperienceModal>
          </GlobalModal>
        </Col>
      </Row>
    </>
  );
};

export default WorkExperience;
