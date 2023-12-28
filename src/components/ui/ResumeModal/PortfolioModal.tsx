"use client";
import { Button, Form, Input } from "antd";

interface PortfolioModalProps {
  btnName: string;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ btnName }) => {
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
        Work samples
      </p>
      <Form
        name="myForm"
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item label="Blog link" name="Blog link">
          <Input style={{ width: "100%", marginTop: "-.5rem" }} size="large" />
        </Form.Item>
        <Form.Item label="GitHub profile" name="gitHubProfile">
          <Input style={{ width: "100%", marginTop: "-.5rem" }} size="large" />
        </Form.Item>
        <Form.Item
          label="Play store developer A/c (public link)"
          name="PlayStoreDeveloper"
        >
          <Input style={{ width: "100%", marginTop: "-.5rem" }} size="large" />
        </Form.Item>
        <Form.Item label="Behance portfolio link" name="BehancePortfolioLink">
          <Input style={{ width: "100%", marginTop: "-.5rem" }} size="large" />
        </Form.Item>
        <Form.Item label="Other work sample link" name="otherWorkSampleLink">
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

export default PortfolioModal;
