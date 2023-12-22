import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";

const JobResponsibilities = () => {
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
        <p>position of responsibility</p>
      </div>
      <div>
        <p>Designing</p>
        <p>
          <PlusOutlined />
          Add position of responsibility
        </p>
      </div>
      <div>
        <EditOutlined />
        <DeleteOutlined />
      </div>
    </div>
  );
};

export default JobResponsibilities;
