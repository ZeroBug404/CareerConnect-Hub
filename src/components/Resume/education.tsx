import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

const Education = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid black",
        padding: "10px 0",
      }}
    >
      <div>
        <p>Education</p>
      </div>
      <div>
        <h4>Department</h4>
        <p>Institute</p>
        <p>year</p>
        <p><PlusOutlined />Add Education</p>
      </div>
      <div>
        <EditOutlined />
        <DeleteOutlined />
      </div>
    </div>
  );
};

export default Education;
