import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

const WorkExperience = () => {
  return (
    <>
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
          <p>WORK EXPERIENCE</p>
          <p>year</p>
        </div>
        <div>
          <h4>Frontend dev</h4>
          <p>NY, Remote</p>
          <p>
            Job <span>Dec 2022 - Dec 2023</span>
          </p>
          <Button type="link">
            <PlusOutlined />
            Add Job
          </Button>
          <Button type="link">
            <PlusOutlined />
            Add Internship
          </Button>
        </div>
        <Flex wrap="wrap" gap="middle" justify="end" align="start">
          <EditOutlined />
          <DeleteOutlined />
        </Flex>
      </Flex>
    </>
  );
};

export default WorkExperience;
