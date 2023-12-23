import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

const Projects = () => {
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
        <p>
          ACADEMICS / <br /> PERSONAL PROJECTS
        </p>
      </div>
      <div style={{ width: "50%" }}>
        <div>
          <Flex wrap="wrap" gap="middle" justify="space-between" align="start">
            <div>
              <h4>Web dev</h4>
              <p>Dec 2022 - Dec 2023</p>
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
            Add training/ course
          </Button>
        </div>
      </div>
    </Flex>
  );
};

export default Projects;
