"use client";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import ExperienceModal from "../ui/ResumeModal/ExperienceModal";

const UpdateWorkExperience = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <EditOutlined onClick={() => setOpen(true)} />
      <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
        <ExperienceModal btnName={"Update"}></ExperienceModal>
      </GlobalModal>
    </div>
  );
};

export default UpdateWorkExperience;
