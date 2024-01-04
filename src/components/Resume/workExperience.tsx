"use client";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, message } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import { useDeleteWorkExperienceMutation, useWorkExperiencesQuery } from "@/redux/api/workExperienceApi";
import ExperienceModal from "../ui/ResumeModal/ExperienceModal";
import { IWorkExperience } from "@/types";
import UpdateExperienceModal from "../ui/ResumeModal/UpdateExperienceModal";

const WorkExperience = () => {
  const [open, setOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const query: Record<string, any> = {};
  const { data, isLoading } = useWorkExperiencesQuery({ ...query });
  const experiencesData = data?.data;
  const [deleteWorkExperience] = useDeleteWorkExperienceMutation();

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteWorkExperience(id);
      if (res) {
        message.success("Work Experience deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const handleEditClick = (id: string) => {
    setSelectedId(id);
    setEditModalOpen(true);
  };

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
                <Flex wrap="wrap" gap="middle" justify="end" align="center">
                  <Button onClick={() => handleEditClick(exp._id)}>
                    <EditOutlined />
                  </Button>
                 
                  <Button onClick={() => deleteHandler(exp?._id)}>
                    <DeleteOutlined />
                  </Button>
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
            <ExperienceModal></ExperienceModal>
          </GlobalModal>
          <GlobalModal
            open={editModalOpen}
            setOpen={() => {
              setEditModalOpen(false);
              setSelectedId(null);
            }}
            width={650}
            title={""}
          >
            {/* Pass the selected ID*/}
            <UpdateExperienceModal id={selectedId} />
          </GlobalModal>
        </Col>
      </Row>
    </>
  );
};

export default WorkExperience;
