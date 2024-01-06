"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";

import CareerBreadCrumb from "@/components/ui/CareerBreadCrumb";
import { experienceLevelOptions, jobTypeOptions } from "@/constants/global";
import { useAddJobMutation } from "@/redux/api/jobApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateJob = () => {
  const [addJob] = useAddJobMutation();
  const router = useRouter();

  const onSubmit = async (jobData: any) => {
    const mRequirements = jobData.requirements;
    const mSkills = jobData.skills;
    const mBenefits = jobData.benefits;
    const mSalary = parseInt(jobData.salary);
    const mOpeningsData = jobData.numberOfOpenings.toString();
    const options = {
      ...jobData,
      requirements: [mRequirements],
      salary: mSalary,
      skills: [mSkills],
      benefits: [mBenefits],
      numberOfOpenings: mOpeningsData,
      companyId: "6587f647a3d02b0cf0caa3aa",
    };
    message.loading("Publishing...");

    try {
      await addJob(options);
      message.success("Job published successfully");
      router.push("/dashboard/job");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <>
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          width: "100%",
        }}
      >
        <CareerBreadCrumb
          items={[
            {
              label: "View Jobs",
              link: "/dashboard/job",
            },
          ]}
        />
        <Form submitHandler={onSubmit}>
          <h2
            style={{
              color: "#1F2B6C",
              textAlign: "center",
            }}
          >
            Publish a job
          </h2>
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
                <FormInput
                  name="joiningDate"
                  type="date"
                  label="Joining Date"
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
                  name="deadline"
                  type="date"
                  label="Deadline"
                  size="small"
                />
              </Col>
            </Row>
          </div>

          <div style={{ margin: "10px 0" }}>
            <Button type="primary" htmlType="submit" size="large">
              Add Job
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CreateJob;
