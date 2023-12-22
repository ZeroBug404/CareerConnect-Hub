import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

const Portfolio = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 0",
      }}
    >
      <div>
        <p>portfolio/ work sample</p>
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

export default Portfolio;
