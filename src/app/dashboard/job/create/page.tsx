/* eslint-disable react/no-unescaped-entities */
"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { Button, Col, Flex, Row } from "antd";

const CreateJob = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px 40px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        width: "100%",
      }}
    >
      <Form submitHandler={onSubmit}>
        <h2
          style={{
            textAlign: "center",
            margin: "20px 0",
            color: "#1677FF",
            padding: "20px 0",
          }}
        >
          Create a job
        </h2>

        <div style={{ width: "100%" }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormInput name="title" type="text" size="large" label="Title" />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormInput
                name="company"
                type="text"
                size="large"
                label="Company"
              />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormInput
                name="location"
                type="text"
                size="large"
                label="Location"
              />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormInput
                name="category"
                type="text"
                size="large"
                label="Category"
              />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormInput
                name="experienceLevel"
                type="text"
                size="large"
                label="Experience Level"
              />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormInput
                name="skills"
                type="text"
                size="large"
                label="Skills"
              />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormInput
                name="benefits"
                type="text"
                size="large"
                label="Benefits"
              />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormInput
                name="jobType"
                type="text"
                size="large"
                label="Job Type"
              />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormInput
                name="salary"
                type="number"
                size="large"
                label="Salary"
              />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormInput
                name="contactEmail"
                type="email"
                size="large"
                label="Contact Email"
              />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormDatePicker name="joiningDate" label="Joining Date" />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormDatePicker name="deadline" label="Deadline" />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormInput
                name="numberOfOpenings"
                type="number"
                size="large"
                label="Number Of Openings"
              />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormTextArea
                name="companyDescription"
                label="companyDescription"
                rows={4}
              />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormTextArea
                name="jobDescription"
                label="Job Description"
                rows={4}
              />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormTextArea name="requirements" label="requirements" rows={4} />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={8}>
              <FormTextArea
                name="keyResponsibilities"
                label="Key Responsibilities"
                rows={4}
              />
            </Col>
          </Row>
        </div>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <Button
            style={{ width: "100%" }}
            type="primary"
            htmlType="submit"
            size="large"
          >
            Add Job
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateJob;
