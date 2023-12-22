import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

const Training = () => {
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
        <p>Training/Courses</p>
      </div>
      <div>
        <h4>Web dev</h4>
        <p>Dec 2022 - Dec 2023</p>
        <p>
          <PlusOutlined />
          Add training / courses
        </p>
      </div>
      <div>
        <EditOutlined />
        <DeleteOutlined />
      </div>
    </div>
  );
};

export default Training;
