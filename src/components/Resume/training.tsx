"use client";

import { useTrainingsQuery } from "@/redux/api/trainingApi";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import TrainingModal from "../ui/ResumeModal/TrainingModal";
import UpdateTraining from "./UpdateTraining";
import { ITraining } from "@/types";

const Training = () => {
  const [open, setOpen] = useState(false);
  const query: Record<string, any> = {};
  const { data, isLoading } = useTrainingsQuery({ ...query });
  const trainingData = data?.data;

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
          <Flex vertical gap="middle" justify="space-between" align="start">
            {trainingData?.map((training: ITraining) => (
              <Flex
                wrap="wrap"
                gap="middle"
                justify="space-between"
                align="start"
                key={training._id}
              >
                <div>
                  <h4>{training?.title}</h4>
                  <p>
                    {training?.startDate} - {training?.endDate}
                  </p>
                </div>
                <Flex wrap="wrap" gap="middle" justify="end" align="start">
                  <UpdateTraining />
                  <DeleteOutlined />
                </Flex>
              </Flex>
            ))}
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
