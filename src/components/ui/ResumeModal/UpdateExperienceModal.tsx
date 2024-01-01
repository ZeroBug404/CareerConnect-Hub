"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import {
  useUpdateWorkExperienceMutation,
  useWorkExperienceQuery,
} from "@/redux/api/workExperienceApi";
import { Button, message } from "antd";

const UpdateExperienceModal = ({ id }: any) => {
  const { data } = useWorkExperienceQuery(id);
  
  const [updateWorkExperience] = useUpdateWorkExperienceMutation();

  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    try {
      const res = await updateWorkExperience({ body: data }).unwrap();
      if (res) {
        message.success("Work Experience updated successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error("Please try again");
    }
  };

  const defaultValues = {
    profile: data?.data?.profile || "",
    description: data?.data?.description || "",
    startDate: data?.data?.startDate || "",
    endDate: data?.data?.endDate || "",
    location: data?.data?.location || "",
    organization: data?.data?.organization || "",
    responsibility: data?.data?.responsibility || "",
  };

  return (
    <div>
      <p
        style={{
          fontSize: "1.1rem",
          marginTop: "1rem",
          marginBottom: ".5rem",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Graduation details/ Post graduation details
      </p>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
      <div style={{ width: "100%", marginTop: "-.5rem" }}>
          <FormInput name="profile" type="text" label="Profile" />
        </div>
        <div style={{ width: "100%", marginTop: "-.5rem" }}>
          <FormInput name="organization" type="text" label="Organization" />
        </div>
        <div style={{ width: "100%", marginTop: "-.5rem" }}>
          <FormInput name="location" type="text" label="Locations" />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: ".6rem",
          }}
        >
          <div style={{ width: "50%", marginTop: "-.5rem" }}>
            <FormInput name="startDate" type="date" label="Start Date" />
          </div>
          <div style={{ width: "50%", marginTop: "-.5rem" }}>
            <FormInput name="endDate" type="date" label="End Date" />
          </div>
        </div>
        <div style={{ width: "100%", marginTop: "-.5rem" }}>
          <FormInput name="responsibility" type="text" label="responsibility" />
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            minHeight: "10rem",
            resize: "none",
          }}
        >
          <FormTextArea name="description" label="Description (Optional)" />
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateExperienceModal;
