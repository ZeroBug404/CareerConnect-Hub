/* eslint-disable react/no-unescaped-entities */
"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import { sizes } from "@/components/contants/global";
import CareerBreadCrumb from "@/components/ui/CareerBreadCrumb";
import { useAddFAQMutation } from "@/redux/api/faqApi";
import { Button, Col, Row, message } from "antd";

const AddFAQ = () => {
  const [addFAQ] = useAddFAQMutation();

  const onSubmit = async (FAQData: any) => {
    const options = {
      data: {
        name: FAQData.name,
        description: FAQData.description,
      },
    };
    message.loading("Publishing...");
    try {
      // console.log(options);
      await addFAQ(options);
      message.success("addFAQ published successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <>
      <CareerBreadCrumb
        items={[
          {
            label: "View FAQ",
            link: "/dashboard/faq",
          },
        ]}
      />
      <div>
        <Form submitHandler={onSubmit}>
          <h2
            style={{
              margin: "20px 0",
            }}
          >
            Create FAQ
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
    </>
  );
};

export default AddFAQ;
