"use client";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import JobResponsibilitieModal from "../ui/ResumeModal/JobResponsibilitieModal";
import UpdateJobResponsibilitie from "./UpdateJobResponsibilitie";

const JobResponsibilities = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <Flex
        wrap="wrap"
        gap="small"
        justify="space-between"
        style={{
          borderBottom: "1px solid black",
          padding: "10px 0",
        }}
      >
        <div>
          <p>
            POSITIONS OF <br /> RESPONSIBILITY
          </p>
        </div>
        <div style={{ width: "50%" }}>
          <Flex wrap="wrap" gap="middle" justify="space-between" align="start">
            <div>
              <p>Designing</p>
            </div>
            <Flex wrap="wrap" gap="middle" justify="end" align="start">
              <UpdateJobResponsibilitie />
              <DeleteOutlined />
            </Flex>
          </Flex>
          <Button type="link" onClick={() => setOpen(true)}>
            <PlusOutlined />
            Add position of responsibility
          </Button>
        </div>
      </Flex>
      <div className="">
        <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
          <JobResponsibilitieModal btnName={"Save"}></JobResponsibilitieModal>
        </GlobalModal>
      </div>
    </div>
  );
};

export default JobResponsibilities;
