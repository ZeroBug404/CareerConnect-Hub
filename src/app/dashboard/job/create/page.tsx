/* eslint-disable react/no-unescaped-entities */
"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { Button, Col, Row } from "antd";

const CreateJob = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <Row>
      <Col
        sm={22}
        md={8}
        lg={12}
        style={{
          backgroundColor: "white",
          padding: "20px 40px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          width: "100%",
        }}
      >
        <div>
          <Form submitHandler={onSubmit}>
            <h2 style={{ textAlign: "center", margin: "10px 0" }}>
              Create a job
            </h2>
            <div style={{ width: "100%" }}>
              <FormInput name="title" type="text" size="large" label="Title" />
              <FormInput
                name="company"
                type="text"
                size="large"
                label="Company"
              />
              <FormInput
                name="location"
                type="text"
                size="large"
                label="Location"
              />
              <FormInput
                name="category"
                type="text"
                size="large"
                label="Category"
              />
              <FormInput
                name="jobType"
                type="text"
                size="large"
                label="Job Type"
              />
              <FormInput
                name="salary"
                type="number"
                size="large"
                label="Salary"
              />
              <FormInput
                name="experienceLevel"
                type="text"
                size="large"
                label="Experience Level"
              />
              <FormInput
                name="skills"
                type="text"
                size="large"
                label="Skills"
              />
              <FormInput
                name="benefits"
                type="text"
                size="large"
                label="Benefits"
              />
              <FormInput
                name="contactEmail"
                type="text"
                size="large"
                label="Contact Email"
              />
              <FormInput
                name="numberOfOpenings"
                type="text"
                size="large"
                label="Number Of Openings"
              />
              <FormTextArea
                name="companyDescription"
                label="companyDescription"
                rows={4}
              />
              <FormTextArea
                name="jobDescription"
                label="Job Description"
                rows={4}
              />
              <FormTextArea name="requirements" label="requirements" rows={4} />
              <FormTextArea name="keyResponsibilities" label="Key Responsibilities" rows={4} />
              <FormDatePicker name="joiningDate" label="Joining Date" />
              <FormDatePicker name="deadline" label="Deadline" />
            </div>
            <Button
              style={{ width: "100%", margin: "10px 0" }}
              type="primary"
              htmlType="submit"
              size="large"
            >
              Add Job
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default CreateJob;
