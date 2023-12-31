"use client";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import EducationModal from "../ui/ResumeModal/EducationModal";

const UpdateEducation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <EditOutlined onClick={() => setOpen(true)} />
      <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
        <EducationModal btnName={"Update"}></EducationModal>
      </GlobalModal>
    </div>
  );
};

export default UpdateEducation;
