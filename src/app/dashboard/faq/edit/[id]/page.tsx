/* eslint-disable react/no-unescaped-entities */
"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { useFAQQuery } from "@/redux/api/faqApi";




import { Button, Col, Row, message } from "antd";

const UpdateFAQ = ({ params }: any) => {
  const { id } = params;
  const { data, isLoading } = useFAQQuery(id);

  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    try {
      message.success("FAQ updated successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues = {
    name: data?.data?.name || "",
    description: data?.data?.description || "",
  };

  return (
    <div>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Update FAQ
        </h2>

        <div style={{ width: "100%" }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={8}
              style={{
                margin: "10px 0",
              }}
            >
              <FormInput name="name" type="text" label="Name" />
            </Col>
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={8}
              style={{
                margin: "10px 0",
              }}
            >
              <FormTextArea name="description" label="Description" rows={3} />
            </Col>
          </Row>
        </div>
        <div style={{ textAlign: "center", paddingBottom: "1.5rem" }}>
          <Button style={{ float: "right" }} type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateFAQ;
