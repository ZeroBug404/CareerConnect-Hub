"use client";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import ProjectModal from "../ui/ResumeModal/ProjectModal";

const UpdateProjects = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <EditOutlined onClick={() => setOpen(true)} />
      <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
        <ProjectModal btnName={"Update"}></ProjectModal>
      </GlobalModal>
    </div>
  );
};

export default UpdateProjects;
