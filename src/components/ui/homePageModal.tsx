"use client";

import { Button, Form, Input } from "antd";
import Link from "next/link";

const HomePageModal = () => {
  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <div>
      <p style={{ fontSize: "1rem", marginTop: "1rem", marginBottom: ".5rem" }}>
        Already have an account? <Link href="">Sign in</Link>
      </p>
      <Form
        name="myForm"
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item
          label="Company name"
          name="companyName"
          rules={[{ required: true, message: "Please input Company name!" }]}
        >
          <Input style={{ width: "100%", marginTop: "-.5rem" }} size="large" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input Email!" }]}
        >
          <Input style={{ width: "100%", marginTop: "-.5rem" }} size="large" />
        </Form.Item>

        <Button style={{ marginTop: ".7rem" }} type="primary" htmlType="submit">
          Continue
        </Button>
      </Form>
    </div>
  );
};

export default HomePageModal;
