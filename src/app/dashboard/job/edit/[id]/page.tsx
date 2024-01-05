"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import CareerBreadCrumb from "@/components/ui/CareerBreadCrumb";
import { experienceLevelOptions, jobTypeOptions } from "@/constants/global";
import { useJobQuery, useUpdateJobMutation } from "@/redux/api/jobApi";
import { IJobData } from "@/types";
import { Button, Col, Row, message } from "antd";

const EditJobPage = ({ params }: any) => {
  const { id } = params;
  const { data, isLoading } = useJobQuery(id);
  const [updateJob] = useUpdateJobMutation();

  const onSubmit = async (data: IJobData) => {
    message.loading("Updating...");
    try {
      console.log(data);
      const res = await updateJob({ body: data }).unwrap();

      if (res) {
        message.success("Jobs updated successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues = {
    company: data?.data?.company || "",
    location: data?.data?.location || "",
    contactEmail: data?.data?.contactEmail || "",
    category: data?.data?.category || "",
    title: data?.data?.title || "",
    jobType: data?.data?.jobType || "",
    experienceLevel: data?.data?.experienceLevel || "",
    salary: data?.data?.salary || "",
    numberOfOpenings: data?.data?.numberOfOpenings || "",
    skills: data?.data?.skills || "",
    benefits: data?.data?.benefits || "",
    keyResponsibilities: data?.data?.keyResponsibilities || "",
    companyDescription: data?.data?.companyDescription || "",
    jobDescription: data?.data?.jobDescription || "",
    requirements: data?.data?.requirements || "",
    joiningDate: data?.data?.joiningDate || "",
    deadline: data?.data?.deadline || "",
  };

  return (
    <>
      <CareerBreadCrumb
        items={[
          {
            label: "Publish Job",
            link: "/dashboard/job/create",
          },
          {
            label: "View Jobs",
            link: "/dashboard/job",
          },
        ]}
      />
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          width: "100%",
        }}
      >
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <h2>Update a job</h2>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 0",
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
                  margin: "5px 0",
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
                  margin: "5px 0",
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
                  margin: "5px 0",
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
                  margin: "5px 0",
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
                margin: "10px 0",
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
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="title"
                  type="text"
                  size="small"
                  label="Title"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
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
                  margin: "5px 0",
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
                  margin: "5px 0",
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
                  margin: "5px 0",
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
                  margin: "5px 0",
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
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="benefits"
                  type="text"
                  size="small"
                  label="Benefits"
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
                  margin: "5px 0",
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
                  margin: "5px 0",
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
                  margin: "5px 0",
                }}
              >
                <FormTextArea
                  name="requirements"
                  label="Requirements"
                  rows={4}
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={6}
                style={{
                  margin: "5px 0",
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
                  margin: "5px 0",
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
                  margin: "5px 0",
                }}
              >
                <FormDatePicker name="deadline" label="Deadline" />
              </Col>
            </Row>
          </div>

          <div style={{ margin: "10px 0" }}>
            <Button type="primary" htmlType="submit" size="large">
              Update Job
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default EditJobPage;
