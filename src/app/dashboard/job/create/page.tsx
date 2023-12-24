/* eslint-disable react/no-unescaped-entities */
"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { Button, Flex } from "antd";

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
        <h2 style={{ textAlign: "center", margin: "20px 0", color: "#1677FF", padding: "20px 0" }}>Create a job</h2>
        <div style={{ width: "100%" }}>
          <Flex
            gap="small"
            justify="center"
            wrap="wrap"
            style={{ margin: "10px 0" }}
          >
            <div>
              <FormInput name="title" type="text" size="large" label="Title" />
            </div>
            <div>
              <FormInput
                name="company"
                type="text"
                size="large"
                label="Company"
              />
            </div>
            <div>
              <FormInput
                name="location"
                type="text"
                size="large"
                label="Location"
              />
            </div>
          </Flex>
          <Flex
            gap="small"
            justify="center"
            wrap="wrap"
            style={{ margin: "10px 0" }}
          >
            <div>
              <FormInput
                name="category"
                type="text"
                size="large"
                label="Category"
              />
            </div>
            <div>
              <FormInput
                name="jobType"
                type="text"
                size="large"
                label="Job Type"
              />
            </div>
            <div>
              <FormInput
                name="salary"
                type="number"
                size="large"
                label="Salary"
              />
            </div>
          </Flex>
          <Flex
            gap="small"
            justify="center"
            wrap="wrap"
            style={{ margin: "10px 0" }}
          >
            <div>
              <FormInput
                name="experienceLevel"
                type="text"
                size="large"
                label="Experience Level"
              />
            </div>
            <div>
              <FormInput
                name="skills"
                type="text"
                size="large"
                label="Skills"
              />
            </div>
            <div>
              <FormInput
                name="benefits"
                type="text"
                size="large"
                label="Benefits"
              />
            </div>
          </Flex>
          <Flex
            gap="small"
            justify="center"
            wrap="wrap"
            style={{ margin: "10px 0" }}
          >
            <div>
              <FormInput
                name="contactEmail"
                type="email"
                size="large"
                label="Contact Email"
              />
            </div>
            <div>
              <FormInput
                name="numberOfOpenings"
                type="number"
                size="large"
                label="Number Of Openings"
              />
            </div>
          </Flex>
          <Flex
            gap="small"
            justify="center"
            wrap="wrap"
            style={{ margin: "10px 0" }}
          >
            <FormDatePicker name="joiningDate" label="Joining Date" />
            <FormDatePicker name="deadline" label="Deadline" />
          </Flex>
          <Flex
            gap="small"
            justify="center"
            wrap="wrap"
            style={{ margin: "10px 0" }}
          >
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
          </Flex>
          <Flex
            gap="small"
            justify="center"
            wrap="wrap"
            style={{ margin: "10px 0" }}
          >
            <FormTextArea name="requirements" label="requirements" rows={4} />
            <FormTextArea
              name="keyResponsibilities"
              label="Key Responsibilities"
              rows={4}
            />
          </Flex>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button
            style={{ width: "50%" }}
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
