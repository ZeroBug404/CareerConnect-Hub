"use client";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import ProjectModal from "../ui/ResumeModal/ProjectModal";
import UpdateProjects from "./UpdateProjects";

const Projects = () => {
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
        <p>
          ACADEMICS / <br /> PERSONAL PROJECTS
        </p>
      </div>
      <div style={{ width: "50%" }}>
        <div>
          <Flex wrap="wrap" gap="middle" justify="space-between" align="start">
            <div>
              <h4>Project name</h4>
              <p>Link</p>
            </div>
            <Flex wrap="wrap" gap="middle" justify="end" align="start">
              <UpdateProjects />
              <DeleteOutlined />
            </Flex>
          </Flex>
        </div>
        <div>
          <Button type="link" onClick={() => setOpen(true)}>
            <PlusOutlined />
            Add training/ course
          </Button>
        </div>
        <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
          <ProjectModal btnName={"Save"}></ProjectModal>
        </GlobalModal>
      </div>
    </Flex>
  );
};

export default Projects;
