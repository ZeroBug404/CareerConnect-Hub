"use client";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import SkillModal from "../ui/ResumeModal/SkillModal";

const UpdateSkills = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <EditOutlined onClick={() => setOpen(true)} />
      <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
        <SkillModal btnName={"Update"}></SkillModal>
      </GlobalModal>
    </div>
  );
};

export default UpdateSkills;
