"use client";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import JobResponsibilitieModal from "../ui/ResumeModal/JobResponsibilitieModal";

const UpdateJobResponsibilitie = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <EditOutlined onClick={() => setOpen(true)} />
      <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
        <JobResponsibilitieModal btnName={"Update"}></JobResponsibilitieModal>
      </GlobalModal>
    </div>
  );
};

export default UpdateJobResponsibilitie;
