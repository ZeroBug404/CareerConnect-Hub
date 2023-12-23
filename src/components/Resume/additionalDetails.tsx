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
        <p>
          ACCOMPLISHMENTS /<br /> ADDITIONAL DETAILS
        </p>
      </div>
      <div style={{ width: "50%" }}>
        <div>
          <Flex wrap="wrap" gap="middle" justify="space-between" align="start">
            <div>
              <p>Design</p>
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
            Add accomplishment/ additional detail
          </Button>
        </div>
      </div>
    </Flex>
  );
};

export default AdditionalDetails;
