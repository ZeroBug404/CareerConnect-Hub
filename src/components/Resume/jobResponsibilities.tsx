import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

const JobResponsibilities = () => {
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
        <p>POSITIONS OF <br /> RESPONSIBILITY</p>
      </div>
      <div>
        <p>Designing</p>
        <Button type="link">
          <PlusOutlined />
          Add position of responsibility
        </Button>
      </div>
      <Flex wrap="wrap" gap="middle" justify="end" align="start">
        <EditOutlined />
        <DeleteOutlined />
      </Flex>
    </Flex>
  );
};

export default JobResponsibilities;
