import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

const Projects = () => {
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
        <p>academic / personal projects</p>
      </div>
      <div>
        <h4>Project Name</h4>
        <p>Link</p>
        <p>
          <PlusOutlined />
          Add academic / personal projects
        </p>
      </div>
      <div>
        <EditOutlined />
        <DeleteOutlined />
      </div>
    </div>
  );
};

export default Projects;
