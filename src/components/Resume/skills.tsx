import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

const Skills = () => {
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
        <p>Skills</p>
      </div>
      <div>
        <Flex wrap="wrap" gap="middle" justify="end" align="start">
          <div>
            <h4>Skills Name</h4>
            <p>Intermediate</p>
          </div>
          <Flex wrap="wrap" gap="middle" justify="center" align="center">
            <EditOutlined />
            <DeleteOutlined />
          </Flex>
        </Flex>
        <Button type="link">
          <PlusOutlined />
          Add skill
        </Button>
      </div>
      <Flex wrap="wrap" gap="middle" justify="end" align="start">
        <EditOutlined />
        <DeleteOutlined />
      </Flex>
    </Flex>
  );
};

export default Skills;
