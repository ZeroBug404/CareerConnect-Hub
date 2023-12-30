"use client";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const ExperienceModal = () => {
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
        Job details
      </p>
      <Form
        name="myForm"
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item label="Designation" name="Designation">
          <Input style={{ width: "100%", marginTop: "-.5rem" }} size="large" />
        </Form.Item>
        <Form.Item label="Profile" name="Profile">
          <Input style={{ width: "100%", marginTop: "-.5rem" }} size="large" />
        </Form.Item>
        <Form.Item label="Organization" name="Organization">
          <Input style={{ width: "100%", marginTop: "-.5rem" }} size="large" />
        </Form.Item>
        <Form.Item label="Location" name="Locations">
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
            style={{ height: "100%", resize: "none" }}
            maxLength={250}
          />
        </Form.Item>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ExperienceModal;