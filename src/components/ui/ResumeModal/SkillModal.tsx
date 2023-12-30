"use client";
import { Button, Form, Input } from "antd";

interface SkillModalProps {
  btnName: string;
}

const SkillModal: React.FC<SkillModalProps> = ({ btnName }) => {
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
        Skills
      </p>
      <Form
        name="myForm"
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item label="Add skills" name="addSkills">
          <Input style={{ width: "100%", marginTop: "-.5rem" }} size="large" />
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

export default SkillModal;
