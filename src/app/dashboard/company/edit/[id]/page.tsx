/* eslint-disable react/no-unescaped-entities */
"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import { sizes } from "@/components/contants/global";
import { useCompanyQuery } from "@/redux/api/companyApi";
import { Button, Col, Row, message } from "antd";

const UpdateCompany = ({ params }: any) => {
  const { id } = params;
  const { data, isLoading } = useCompanyQuery(id);
  console.log(data);

  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    try {
      console.log(data);
      message.success("Company updated successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues = {
    name: data?.data?.name || "",
    industry: data?.data?.industry || "",
    location: data?.data?.location || "",
    email: data?.data?.contact?.email || "",
    phone: data?.data?.contact?.phone || "",
    address: data?.data?.contact?.address || "",
    website: data?.data?.website || "",
    logoUrl: data?.data?.logoUrl || "",
    size: data?.data?.size || "",
    twitter: data?.data?.socialMedia?.twitter || "",
    linkedin: data?.data?.socialMedia?.linkedin || "",
    facebook: data?.data?.socialMedia?.facebook || "",
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
          Update Company
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
              <FormInput name="industry" type="text" label="Industry" />
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
              <FormInput name="location" type="text" label="Location" />
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
              <FormInput name="email" type="text" label="Email" />
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
              <FormInput name="phone" type="text" label="Phone" />
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
              <FormInput name="address" type="text" label="Address" />
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
              <FormInput name="website" type="text" label="Website" />
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
              <FormInput name="logoUrl" type="text" label="LogoUrl" />
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
              <FormSelectField name="size" label="size" options={sizes} />
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
              <FormInput name="twitter" type="text" label="Twitter" />
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
              <FormInput name="linkedin" type="text" label="Linkedin" />
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
              <FormInput name="facebook" type="text" label="Facebook" />
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

export default UpdateCompany;
