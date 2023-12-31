"use client";
import { useEducationsQuery } from "@/redux/api/educationApi";
import { IEducation } from "@/types";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import EducationModal from "../ui/ResumeModal/EducationModal";
import UpdateEducation from "./UpdateEducation";

const Education = () => {
  const [open, setOpen] = useState(false);
  const query: Record<string, any> = {};
  const { data, isLoading } = useEducationsQuery({ ...query });
  const educationData = data?.data;

  return (
    <>
      <Row
        style={{
          borderBottom: "1px solid black",
          padding: "10px 0",
        }}
      >
        <Col xs={24} sm={8}>
          <p>EDUCATION</p>
        </Col>
        <Col xs={24} sm={16}>
          <Col>
            {educationData?.map((education: IEducation) => (
              <Flex
                wrap="wrap"
                gap="middle"
                justify="space-between"
                align="start"
                key={education._id}
              >
                <div style={{ padding: "5px 0" }}>
                  <h4>{education?.degree}</h4>
                  <p>{education?.college}</p>
                  <p>
                    {education?.startYear} - {education?.endYear}
                  </p>
                </div>
                <Flex wrap="wrap" gap="middle" justify="end" align="start">
                  <UpdateEducation id={education._id} />
                  <DeleteOutlined />
                </Flex>
              </Flex>
            ))}
          </Col>
          <div>
            <Button type="link" onClick={() => setOpen(true)}>
              <PlusOutlined />
              Add Education
            </Button>
          </div>
          <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
            <EducationModal></EducationModal>
          </GlobalModal>
        </Col>
      </Row>
    </>
  );
};

export default Education;
