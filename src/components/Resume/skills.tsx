"use client";

import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, message } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import { useDeleteSkillMutation, useSkillsQuery } from "@/redux/api/skillApi";
import SkillModal from "../ui/ResumeModal/SkillModal";
import UpdateSkillModal from "../ui/ResumeModal/UpdateSkillModal";


const Skills = () => {
  const [open, setOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const query: Record<string, any> = {};
  const { data, isLoading } = useSkillsQuery({ ...query });
  const skillData = data?.data;
  const [deleteSkill] = useDeleteSkillMutation();

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteSkill(id);
      if (res) {
        message.success("Skill deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

<<<<<<< HEAD
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
        <p>Skills</p>
      </div>
      <div style={{ width: "50%" }}>
        <div>
          <Flex wrap="wrap" gap="middle" justify="space-between" align="start">
            {data?.data?.map((skill: any) => {
              return (
                <div key={skill.id}>
                  <p>{skill.skills}</p>
                </div>
              );
            })}
            <Flex wrap="wrap" gap="middle" justify="end" align="start">
              <UpdateSkills />
              <DeleteOutlined />
            </Flex>
          </Flex>
        </div>
        <div>
          <Button type="link" onClick={() => setOpen(true)}>
            <PlusOutlined />
            Add skill
          </Button>
        </div>
        <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
          <SkillModal btnName={"Save"}></SkillModal>
        </GlobalModal>
      </div>
    </Flex>
=======
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
          <p>SKILLS</p>
        </Col>
        <Col xs={24} sm={16}>
          <Col>
            {skillData?.map((skill: any) => (
              <Flex
                wrap="wrap"
                gap="middle"
                justify="space-between"
                align="start"
                key={skill._id}
              >
                <div style={{  padding: "5px 0"  }}>
                  <h4>{skill?.skills}</h4>
                </div>
                <Flex wrap="wrap" gap="middle" justify="end" align="center">
                <Button onClick={() => handleEditClick(skill._id)}>
                    <EditOutlined />
                  </Button>
                  <Button onClick={() => deleteHandler(skill?._id)}>
                    <DeleteOutlined />
                  </Button>
                </Flex>
              </Flex>
            ))}
          </Col>
          <div>
            <Button type="link" onClick={() => setOpen(true)}>
              <PlusOutlined />
              Add Skill
            </Button>
          </div>
          <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
            <SkillModal/>
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
            <UpdateSkillModal id={selectedId} />
          </GlobalModal>
        </Col>
      </Row>
    </>
>>>>>>> bf03791e4460710ce7dfde1f96b26149ad9bf457
  );
};

export default Skills;