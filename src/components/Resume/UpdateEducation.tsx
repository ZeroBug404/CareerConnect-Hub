"use client";
import { useEducationQuery } from "@/redux/api/educationApi";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import UpdateEducationModal from "../ui/ResumeModal/UpdateEducationModal";

const UpdateEducation = ({ id }: any) => {
  const [open, setOpen] = useState(false);
  const { data } = useEducationQuery(id);

  return (
    <div>
      <EditOutlined onClick={() => setOpen(true)} />
      <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
        <UpdateEducationModal modalData={data?.data}></UpdateEducationModal>
      </GlobalModal>
    </div>
  );
};

export default UpdateEducation;
