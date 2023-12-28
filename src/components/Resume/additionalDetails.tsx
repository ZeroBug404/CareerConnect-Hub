"use client";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import AdditionalDetailModal from "../ui/ResumeModal/AdditionalDetailModal";
import UpdateAdditionalDetails from "./UpdateAdditionalDetails";

const AdditionalDetails = () => {
  const [open, setOpen] = useState(false);
  return (
    <Flex
      wrap="wrap"
      gap="small"
      justify="space-between"
      style={{
        padding: "10px 0",
      }}
    >
      <div>
        <p>
          ACCOMPLISHMENTS /<br /> ADDITIONAL DETAILS
        </p>
      </div>
      <div style={{ width: "50%" }}>
        <div>
          <Flex wrap="wrap" gap="middle" justify="space-between" align="start">
            <div>
              <p>Design</p>
            </div>
            <Flex wrap="wrap" gap="middle" justify="end" align="start">
              <UpdateAdditionalDetails />
              <DeleteOutlined />
            </Flex>
          </Flex>
        </div>
        <div>
          <Button type="link" onClick={() => setOpen(true)}>
            <PlusOutlined />
            Add accomplishment/ additional detail
          </Button>
        </div>
        <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
          <AdditionalDetailModal btnName={"Save"}></AdditionalDetailModal>
        </GlobalModal>
      </div>
    </Flex>
  );
};

export default AdditionalDetails;
