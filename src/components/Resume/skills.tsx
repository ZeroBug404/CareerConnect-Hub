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
      <div style={{ width: "50%" }}>
        <div>
          <Flex wrap="wrap" gap="middle" justify="space-between" align="start">
            <div>
              <h4>React</h4>
              <p>Intermediate</p>
            </div>
            <Flex wrap="wrap" gap="middle" justify="end" align="start">
              <EditOutlined />
              <DeleteOutlined />
            </Flex>
          </Flex>
        </div>
        <div>
          <Button type="link">
            <PlusOutlined />
            Add skill
          </Button>
        </div>
      </div>
    </Flex>
  );
};

export default Skills;
