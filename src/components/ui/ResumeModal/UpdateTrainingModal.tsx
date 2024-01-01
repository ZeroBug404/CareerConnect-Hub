"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import {
  useTrainingQuery,
  useUpdateTrainingMutation,
} from "@/redux/api/trainingApi";
import { Button, message } from "antd";

const UpdateTrainingModal = ({ id }: any) => {
  const { data } = useTrainingQuery(id);

  const [updateWorkExperience] = useUpdateTrainingMutation();

  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    try {
      const res = await updateWorkExperience({ body: data }).unwrap();

      if (res) {
        message.success("Training updated successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues = {
    title: data?.data?.title || "",
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
          <FormInput name="title" type="text" label="Training program" />
        </div>
        <div style={{ width: "100%", marginTop: "-.5rem" }}>
          <FormInput name="organization" type="text" label="Organization" />
        </div>
        <div style={{ width: "100%", marginTop: "-.5rem" }}>
          <FormInput name="location" type="text" label="Location" />
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
        <div
          style={{ display: "flex", justifyContent: "end", marginTop: "10px" }}
        >
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateTrainingModal;
