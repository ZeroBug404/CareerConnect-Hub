import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

const Training = () => {
  return (
    <Flex
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid black",
        padding: "10px 0",
      }}
    >
      <div>
        <p>TRAININGS/ COURSES</p>
      </div>
      <div>
        <h4>Web dev</h4>
        <p>Dec 2022 - Dec 2023</p>
        <Button type="link">
          <PlusOutlined />
          Add training/ course
        </Button>
      </div>
      <Flex wrap="wrap" gap="middle" justify="end" align="start">
        <EditOutlined />
        <DeleteOutlined />
      </Flex>
    </Flex>
  );
};

export default Training;
