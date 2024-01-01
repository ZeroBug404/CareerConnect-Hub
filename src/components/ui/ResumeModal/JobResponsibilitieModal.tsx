"use client";
import { Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";

interface JobResponsibilitieModalProps {
  btnName: string;
}

const JobResponsibilitieModal: React.FC<JobResponsibilitieModalProps> = ({
  btnName,
}) => {
  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <div>
      <p
        style={{
          fontSize: "1.1rem",
          marginTop: "1rem",
          marginBottom: ".5rem",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Position of responsibility
      </p>
      <Form
        name="myForm"
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item
          style={{ width: "100%" }}
          label="Description (Optional)"
          name="description"
        >
          <TextArea
            // showCount
            placeholder="Description"
            size="large"
            style={{ height: "100%", minHeight: "10rem", resize: "none" }}
            maxLength={250}
          />
        </Form.Item>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button type="primary" htmlType="submit">
            {btnName}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default JobResponsibilitieModal;
