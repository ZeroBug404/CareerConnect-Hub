import { Button, Form, Input } from "antd";

const HomePageModal = () => {
  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <div>
      <p style={{ fontSize: "1rem" }}>Already have an account? Sign in</p>
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
          <Input style={{ width: "100%" }} size="large" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input Email!" }]}
        >
          <Input style={{ width: "100%" }} size="large" />
        </Form.Item>

        <Form.Item>
          <Button size="large" type="primary" htmlType="submit">
            Continue
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default HomePageModal;
