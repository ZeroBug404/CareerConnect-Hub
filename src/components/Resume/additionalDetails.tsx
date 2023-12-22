import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

const AdditionalDetails = () => {
  return (
    <Flex
      wrap="wrap"
      gap="small"
      justify="space-between"
      style={{
        padding: "10px 0",
      }}
    >
      <div>
        <p>ACCOMPLISHMENTS /<br /> ADDITIONAL DETAILS</p>
      </div>
      <div>
        <p>Designing</p>
        <Button type="link">
          <PlusOutlined />
          Add accomplishment/ additional detail
        </Button>
      </div>
      <Flex wrap="wrap" gap="middle" justify="end" align="start">
        <EditOutlined />
        <DeleteOutlined />
      </Flex>
    </Flex>
  );
};

export default AdditionalDetails;
