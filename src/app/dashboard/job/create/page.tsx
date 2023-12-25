/* eslint-disable react/no-unescaped-entities */
"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import {
  experienceLevelOptions,
  jobTypeOptions,
} from "@/components/contants/global";
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
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        width: "100%",
      }}
    >
      <Form submitHandler={onSubmit}>
        <h2>Create a job</h2>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Company Information
          </p>
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
              <FormInput
                name="company"
                type="text"
                size="small"
                label="Company"
              />
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
              <FormInput
                name="location"
                type="text"
                size="small"
                label="Location"
              />
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
              <FormInput
                name="contactEmail"
                type="email"
                size="small"
                label="Contact Email"
              />
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
              <FormInput
                name="category"
                type="text"
                size="small"
                label="Category"
              />
            </Col>
          </Row>
        </div>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Job Information
          </p>
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
              <FormInput name="title" type="text" size="small" label="Title" />
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
              <FormSelectField
                name="jobType"
                label="Job Type"
                options={jobTypeOptions}
                size="small"
              />
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
              <FormSelectField
                name="experienceLevel"
                label="Experience Level"
                options={experienceLevelOptions}
                size="small"
              />
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
              <FormInput
                name="salary"
                type="number"
                size="small"
                label="Salary"
              />
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
              <FormInput
                name="numberOfOpenings"
                type="number"
                size="small"
                label="Number Of Openings"
              />
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
              <FormInput
                name="skills"
                type="text"
                size="small"
                label="Skills"
              />
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
              <FormInput
                name="benefits"
                type="text"
                size="small"
                label="Benefits"
              />
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
              <FormInput
                name="keyResponsibilities"
                type="text"
                size="small"
                label="Key Responsibilities"
              />
            </Col>
          </Row>
        </div>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Others
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              style={{
                margin: "10px 0",
              }}
            >
              <FormTextArea
                name="companyDescription"
                label="Company Description"
                rows={4}
              />
            </Col>
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              style={{
                margin: "10px 0",
              }}
            >
              <FormTextArea
                name="jobDescription"
                label="Job Description"
                rows={4}
              />
            </Col>
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              style={{
                margin: "10px 0",
              }}
            >
              <FormTextArea name="requirements" label="Requirements" rows={4} />
            </Col>
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              style={{
                margin: "10px 0",
              }}
            >
              <FormTextArea
                name="keyResponsibilities"
                label="Key Responsibilities"
                rows={4}
              />
            </Col>
          </Row>
        </div>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
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
              <FormDatePicker name="joiningDate" label="Joining Date" />
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
              <FormDatePicker name="deadline" label="Deadline" />
            </Col>
          </Row>
        </div>

        <div style={{ margin: "10px 0" }}>
          <Button type="primary" htmlType="submit" size="small">
            Add Job
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateJob;
