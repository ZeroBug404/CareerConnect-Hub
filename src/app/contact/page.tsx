"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { Button, Col, Image, Row } from "antd";
import contactImg from '@/assets/contact.avif';

const Contact = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src='' width={500} alt="contact image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <div style={{
              margin: "15px 0px",
              textAlign: "center",
            }}>
          <h1 style={{
              fontSize: "30px"
            }}>
            Get In 
            <span
              style={{
                color: "#FC9028",
              }}
            >
              Touch
            </span>
          </h1>
          <p>Fill in the form to start a conversation</p>
        </div>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="name"
                type="text"
                size="large"
                label="Full Name"
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput name="name" type="email" size="large" label="Email" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormTextArea name="name" label="Message" />
            </div>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Contact;
