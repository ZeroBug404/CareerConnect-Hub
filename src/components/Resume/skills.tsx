"use client";
import { useGetSkillsQuery } from "@/redux/api/skillApi";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import SkillModal from "../ui/ResumeModal/SkillModal";
import UpdateSkills from "./UpdateSkills";

const Skills = () => {
  const [open, setOpen] = useState(false);

  const { data } = useGetSkillsQuery({});

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
      <div>
        <p>Skills</p>
      </div>
      <div style={{ width: "50%" }}>
        <div>
          <Flex wrap="wrap" gap="middle" justify="space-between" align="start">
            <div>
              <h4>React</h4>
              <p>Intermediate</p>
            </div>
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
  );
};

export default Skills;
