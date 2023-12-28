"use client";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import PortfolioModal from "../ui/ResumeModal/PortfolioModal";
import UpdatePortfolio from "./UpdatePortfolio";

const Portfolio = () => {
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
        <p>PORTFOLIO/ WORK SAMPLES</p>
      </div>
      <div style={{ width: "50%" }}>
        <div>
          <Flex wrap="wrap" gap="middle" justify="space-between" align="start">
            <div>
              <h4>Github</h4>
              <p>link</p>
            </div>
            <Flex wrap="wrap" gap="middle" justify="end" align="start">
              <UpdatePortfolio />
              <DeleteOutlined />
            </Flex>
          </Flex>
        </div>
        <div>
          <Button type="link" onClick={() => setOpen(true)}>
            <PlusOutlined />
            Add Portfolio
          </Button>
        </div>
        <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
          <PortfolioModal btnName={"Save"}></PortfolioModal>
        </GlobalModal>
      </div>
    </Flex>
  );
};

export default Portfolio;
