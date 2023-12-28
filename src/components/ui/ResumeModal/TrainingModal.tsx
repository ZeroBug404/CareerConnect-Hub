"use client";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

interface TrainingModalProps {
  btnName: string;
}

const TrainingModal: React.FC<TrainingModalProps> = ({ btnName }) => {
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
        Training details
      </p>
      <Form
        name="myForm"
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item label="Training program" name="trainingprogram">
          <Input style={{ width: "100%", marginTop: "-.5rem" }} size="large" />
        </Form.Item>
        <Form.Item label="Organization" name="organization">
          <Input style={{ width: "100%", marginTop: "-.5rem" }} size="large" />
        </Form.Item>
        <Form.Item label="Location" name="location">
          <Input style={{ width: "100%", marginTop: "-.5rem" }} size="large" />
        </Form.Item>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: ".6rem",
          }}
        >
          <Form.Item
            style={{ width: "50%" }}
            label="Start date"
            name="startdate"
          >
            <Input
              style={{ width: "100%", marginTop: "-.5rem" }}
              size="large"
              type="date"
            />
          </Form.Item>
          <Form.Item style={{ width: "50%" }} label="End date" name="end date">
            <Input
              style={{ width: "100%", marginTop: "-.5rem" }}
              size="large"
              type="date"
            />
          </Form.Item>
        </div>
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

export default TrainingModal;
