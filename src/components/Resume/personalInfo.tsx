import { Button } from "antd";

const PersonalInfo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
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
    </div>
  );
};

export default PersonalInfo;
