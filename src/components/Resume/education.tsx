"use client";
import {
  useDeleteEducationMutation,
  useEducationsQuery,
} from "@/redux/api/educationApi";
import { getUserInfo } from "@/services/auth.service";
import { IEducation } from "@/types";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, message } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import EducationModal from "../ui/ResumeModal/EducationModal";
import UpdateEducationModal from "../ui/ResumeModal/UpdateEducationModal";

const Education = () => {
  const [open, setOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { email } = getUserInfo() as any;

  const query: Record<string, any> = {};

  const { data, isLoading } = useEducationsQuery({ ...query });

  const educationData = data?.data;

  const [deleteEducation] = useDeleteEducationMutation();

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteEducation(id);
      if (res) {
        message.success("Education deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const handleEditClick = (id: string) => {
    setSelectedId(id);
    setEditModalOpen(true);
  };

  const filteredByEmail = educationData?.filter(
    (item: any) => item.userEmail === email
  );


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
            {filteredByEmail?.map((education: IEducation) => (
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
                <Flex wrap="wrap" gap="middle" justify="end" align="center">
                  <Button onClick={() => handleEditClick(education._id)}>
                    <EditOutlined />
                  </Button>
                  <Button onClick={() => deleteHandler(education?._id)}>
                    <DeleteOutlined />
                  </Button>
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
          <GlobalModal
            open={editModalOpen}
            setOpen={() => {
              setEditModalOpen(false);
              setSelectedId(null);
            }}
            width={650}
            title={""}
          >
            {/* Pass the selected ID to the UpdateExperienceModal */}
            <UpdateEducationModal id={selectedId} />
          </GlobalModal>
        </Col>
      </Row>
    </>
  );
};

export default Education;
