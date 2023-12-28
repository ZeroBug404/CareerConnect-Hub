"use client";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import PortfolioModal from "../ui/ResumeModal/PortfolioModal";

const UpdatePortfolio = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <EditOutlined onClick={() => setOpen(true)} />
      <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
        <PortfolioModal btnName={"Update"}></PortfolioModal>
      </GlobalModal>
    </div>
  );
};

export default UpdatePortfolio;
