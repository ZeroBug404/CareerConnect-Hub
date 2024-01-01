"use client";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import AdditionalDetailModal from "../ui/ResumeModal/AdditionalDetailModal";

const UpdateAdditionalDetails = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <EditOutlined onClick={() => setOpen(true)} />
      <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
        <AdditionalDetailModal btnName={"Update"}></AdditionalDetailModal>
      </GlobalModal>
    </div>
  );
};

export default UpdateAdditionalDetails;
