"use client";

import { useDeleteSkillMutation, useSkillsQuery } from "@/redux/api/skillApi";
import { getUserInfo } from "@/services/auth.service";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, message } from "antd";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import GlobalModal from "../Shared/GlobalModal";
import SkillModal from "../ui/ResumeModal/SkillModal";
import UpdateSkillModal from "../ui/ResumeModal/UpdateSkillModal";

const Skills = () => {
  const [open, setOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const query: Record<string, any> = {};
  const { data } = useSkillsQuery({ ...query });

  const { email } = getUserInfo() as any;

  const skillData = data?.data;

  console.log(skillData);

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

  const filteredByEmail = skillData?.filter(
    (skill: any) => skill.userEmail === email
  );

  // console.log(filteredByEmail);

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
            {filteredByEmail?.map((skill: any) => (
              <Flex
                wrap="wrap"
                gap="middle"
                // justify="space-around"
                align="start"
                key={skill._id}
              >
                {skill?.skills?.map(
                  (
                    item:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | PromiseLikeOfReactNode
                      | null
                      | undefined,
                    index: Key | null | undefined
                  ) => (
                    <div
                      key={index}
                      style={{
                        padding: "5px 0",
                        display: "flex",
                        // justifyContent: "space-between",
                        flexWrap: "wrap",
                        width: "100%",
                      }}
                    >
                      <h4
                        style={{
                          width: "20%",
                        }}
                      >
                        {item}
                      </h4>
                      <Button onClick={() => deleteHandler(skill?._id)}>
                        <DeleteOutlined />
                      </Button>
                    </div>
                  )
                )}

                {/* <Flex wrap="wrap" gap="middle" justify="end" align="center">
                </Flex> */}
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
            <SkillModal />
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
  );
};

export default Skills;
