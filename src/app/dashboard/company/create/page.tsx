/* eslint-disable react/no-unescaped-entities */
"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import { sizes } from "@/components/contants/global";
import CareerBreadCrumb from "@/components/ui/CareerBreadCrumb";
import { useAddCompanyMutation } from "@/redux/api/companyApi";
import { Button, Col, Row, message } from "antd";

const AddCompany = () => {
  const [addCompany] = useAddCompanyMutation();

  const onSubmit = async (companyData: any) => {
    const options = {
      data: {
        name: companyData.name,
        description: companyData.description,
        industry: companyData.industry,
        location: companyData.location,
        website: companyData.website,
        logoUrl: companyData.logoUrl,
        size: companyData.size,
        socialMedia: {
          twitter: companyData.twitter,
          linkedin: companyData.linkedin,
          facebook: companyData.facebook,
        },
        contact: {
          email: companyData.email,
          phone: companyData.phone,
          address: companyData.address,
        },
      },
    };
    message.loading("Publishing...");
    try {
      // console.log(options);
      await addCompany(options);
      message.success("Company published successfully");
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
            label: "View Company",
            link: "/dashboard/company",
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
            Create Company
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
    </>
  );
};

export default AddCompany;
