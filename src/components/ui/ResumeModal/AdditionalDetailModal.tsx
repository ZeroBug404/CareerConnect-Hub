"use client";
import { Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";

interface AdditionalDetailModalProps {
  btnName: string;
}

const AdditionalDetailModal: React.FC<AdditionalDetailModalProps> = ({
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
        Additional details
      </p>
      <Form
        name="myForm"
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <p>
          Add your accomplishments such as rewards, recognitions, test scores,
          certifications, etc. here. You may also add information such as
          seminars/workshops you have attended or any interests/hobbies you have
          pursued.
        </p>
        <Form.Item style={{ width: "100%" }} label="" name="description">
          <TextArea
            // showCount
            placeholder="Description"
            size="large"
            style={{
              height: "100%",
              minHeight: "10rem",
              resize: "none",
              margin: "1rem 0",
            }}
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

export default AdditionalDetailModal;
