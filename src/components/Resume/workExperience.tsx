import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

const WorkExperience = () => {
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
        <p>Work Experience</p>
        <p>year</p>
      </div>
      <div>
        <h4>Frontend dev</h4>
        <p>NY, Remote</p>
        <p>Job <span>Dec 2022 - Dec 2023</span></p>
        <p><PlusOutlined />Add Job</p>
        <p><PlusOutlined />Add Internship</p>
      </div>
      <div>
        <EditOutlined />
        <DeleteOutlined />
      </div>
    </div>
  );
};

export default WorkExperience;
