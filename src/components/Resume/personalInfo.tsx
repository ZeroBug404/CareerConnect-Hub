import { Button, Flex } from "antd";

const PersonalInfo = () => {
  return (
    <Flex
      wrap="wrap"
      gap="small"
      justify="space-between"
      style={{
        borderBottom: "1px solid black",
        paddingBottom: "10px",
      }}
    >
      <div>
        <h2>Name</h2>
        <p>email</p>
        <p>contact</p>
        <p>location</p>
      </div>
      <Button type="primary">Download</Button>
    </Flex>
  );
};

export default PersonalInfo;
