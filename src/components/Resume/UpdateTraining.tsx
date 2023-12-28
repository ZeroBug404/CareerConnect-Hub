"use client";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import TrainingModal from "../ui/ResumeModal/TrainingModal";

const UpdateTraining = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <EditOutlined onClick={() => setOpen(true)} />
      <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
        <TrainingModal btnName={"Update"}></TrainingModal>
      </GlobalModal>
    </div>
  );
};

export default UpdateTraining;
