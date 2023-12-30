"use client";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import TrainingModal from "../ui/ResumeModal/TrainingModal";
import UpdateTraining from "./UpdateTraining";

const Training = () => {
  const [open, setOpen] = useState(false);
  return (
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
        <p>TRAININGS/ COURSES</p>
      </div>
      <div style={{ width: "50%" }}>
        <div>
          <Flex wrap="wrap" gap="middle" justify="space-between" align="start">
            <div>
              <h4>Web dev</h4>
              <p>Dec 2022 - Dec 2023</p>
            </div>
            <Flex wrap="wrap" gap="middle" justify="end" align="start">
              <UpdateTraining />
              <DeleteOutlined />
            </Flex>
          </Flex>
        </div>
        <div>
          <Button type="link" onClick={() => setOpen(true)}>
            <PlusOutlined />
            Add training/ course
          </Button>
        </div>
        <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
          <TrainingModal btnName={"Save"}></TrainingModal>
        </GlobalModal>
      </div>
    </Flex>
  );
};

export default Training;
