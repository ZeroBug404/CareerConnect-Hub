"use client";

import { useTrainingsQuery } from "@/redux/api/trainingApi";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row } from "antd";
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
    <>
      <Row
        style={{
          borderBottom: "1px solid black",
          padding: "10px 0",
        }}
      >
        <Col span={8}>
          <p>TRAININGS/ COURSES</p>
        </Col>
        <Col span={16}>
          <Col>
            {trainingData?.map((training: ITraining) => (
              <Flex
                wrap="wrap"
                gap="middle"
                justify="space-between"
                align="start"
                key={training._id}
              >
                <div style={{padding: "5px 0"}}>
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
          </Col>
          <div>
            <Button type="link" onClick={() => setOpen(true)}>
              <PlusOutlined />
              Add training/ course
            </Button>
          </div>
          <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
            <TrainingModal btnName={"Save"}></TrainingModal>
          </GlobalModal>
        </Col>
      </Row>
    </>
  );
};

export default Training;
