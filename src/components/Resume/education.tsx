import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

const Education = () => {
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
      <p>EDUCATION</p>
      <div>
        <div>
        <h4>Department</h4>
        <p>Institute</p>
        <p>year</p>
        <Button type="link">
          <PlusOutlined />
          Add Education
        </Button>
        </div>
      </div>
      <Flex wrap="wrap" gap="middle" justify="end" align="start">
        <EditOutlined />
        <DeleteOutlined />
      </Flex>
    </Flex>
  );
};

export default Education;
