"use client";
import { Button, Form, Input, Select } from "antd";

const EducationModal = () => {
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
        Graduation details/ Post graduation details
      </p>
      <Form
        name="myForm"
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item label="Company" name="company">
          <Input style={{ width: "100%", marginTop: "-.5rem" }} size="large" />
        </Form.Item>
        <div style={{ display: "flex", width: "100%", gap: ".6rem" }}>
          <Form.Item
            style={{ width: "50%" }}
            label="Start year"
            name="startyear"
          >
            <Select
              defaultValue="2023"
              style={{ width: "100%", marginTop: "-.5rem" }}
              options={[
                { value: "2023", label: "2023" },
                { value: "2022", label: "2022" },
                { value: "2021", label: "2021" },
              ]}
              size="large"
            />
          </Form.Item>
          <Form.Item style={{ width: "50%" }} label="End year" name="endyear">
            <Select
              defaultValue="2023"
              style={{ width: "100%", marginTop: "-.5rem" }}
              options={[
                { value: "2023", label: "2023" },
                { value: "2022", label: "2022" },
                { value: "2021", label: "2021" },
              ]}
              size="large"
            />
          </Form.Item>
        </div>
        <div style={{ display: "flex", width: "100%", gap: ".6rem" }}>
          <Form.Item style={{ width: "50%" }} label="Degree" name="degree">
            <Input
              style={{ width: "100%", marginTop: "-.5rem" }}
              size="large"
            />
          </Form.Item>
          <Form.Item
            style={{ width: "50%" }}
            label="Stream(Optional)"
            name="stream"
          >
            <Input
              style={{ width: "100%", marginTop: "-.5rem" }}
              size="large"
            />
          </Form.Item>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: ".6rem",
          }}
        >
          <Form.Item
            style={{ width: "50%" }}
            label="Performance Scale (Optional)"
            name="performanceScale"
          >
            <Select
              defaultValue="2023"
              style={{ width: "100%", marginTop: "-.5rem" }}
              options={[
                { value: "2023", label: "2023" },
                { value: "2022", label: "2022" },
                { value: "2021", label: "2021" },
              ]}
              size="large"
            />
          </Form.Item>
          <Form.Item
            style={{ width: "50%" }}
            label="Performance (Optional)"
            name="performance"
          >
            <Input
              style={{ width: "100%", marginTop: "-.5rem" }}
              size="large"
            />
          </Form.Item>
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EducationModal;
