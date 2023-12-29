import { useResponsibilityQuery } from "@/redux/api/jobResponsibilityApi";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

const JobResponsibilities = () => {
  const query: Record<string, any> = {};
  const { data, isLoading } = useResponsibilityQuery({ ...query });
  const responsibilityData = data?.data;
  console.log(data?.data);
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
          POSITIONS OF <br /> RESPONSIBILITY
        </p>
      </div>
      <div style={{ width: "50%" }}>
        <Flex wrap="wrap" gap="middle" justify="space-between" align="start">
          <div>
            <p>Designing</p>
          </div>
          <Flex wrap="wrap" gap="middle" justify="end" align="start">
            <EditOutlined />
            <DeleteOutlined />
          </Flex>
        </Flex>
        <Button type="link">
          <PlusOutlined />
          Add position of responsibility
        </Button>
      </div>
    </Flex>
  );
};

export default JobResponsibilities;
