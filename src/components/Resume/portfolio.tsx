import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

const Portfolio = () => {
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
      <div>
        <h4>GitHub profile</h4>
        <p>Link</p>
        <Button type="link">
          <PlusOutlined />
          Add portfolio/ work sample
        </Button>
      </div>
      <Flex wrap="wrap" gap="middle" justify="end" align="start">
        <EditOutlined />
        <DeleteOutlined />
      </Flex>
    </Flex>
  );
};

export default Portfolio;
