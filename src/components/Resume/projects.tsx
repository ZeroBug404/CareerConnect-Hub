"use client";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { useGetProjectsQuery } from "../../redux/api/projectApi";
import GlobalModal from "../Shared/GlobalModal";
import ProjectModal from "../ui/ResumeModal/ProjectModal";
import UpdateProjects from "./UpdateProjects";

const Projects = () => {
  const [open, setOpen] = useState(false);

  const { data } = useGetProjectsQuery({});

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
            {data?.data?.map(
              (project: {
                projectLink: ReactNode;
                id: Key | null | undefined;
                title:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | PromiseLikeOfReactNode
                  | null
                  | undefined;
              }) => (
                <div key={project.id}>
                  <h4>{project.title}</h4>
                  <p>{project.projectLink}</p>
                </div>
              )
            )}
            <Flex wrap="wrap" gap="middle" justify="end" align="start">
              <UpdateProjects />
              <DeleteOutlined />
            </Flex>
          </Flex>
        </div>
        <div>
          <Button type="link" onClick={() => setOpen(true)}>
            <PlusOutlined />
            Add porjects
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
