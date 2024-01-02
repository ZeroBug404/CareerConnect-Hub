"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { useProjectQuery, useUpdateProjectMutation } from "@/redux/api/projectApi";
import { Button, message } from "antd";

const UpdateProjectModal = ({ id }: any) => {
  const { data } = useProjectQuery(id);
  const [updateProject] = useUpdateProjectMutation();

  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    try {
      const res = await updateProject({ body: data }).unwrap();
      if (res) {
        message.success("Project updated successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error("Please try again");
    }
  };

  const defaultValues = {
    title: data?.data?.title || "",
    startYear: data?.data?.startYear || "",
    endYear: data?.data?.endYear || "",
    description: data?.data?.description || "",
    projectLink: data?.data?.projectLink || ""
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
        Project details
      </p>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <div style={{ width: "100%", marginTop: "-.5rem" }}>
          <FormInput label="Title" name="title" size="large" />
        </div>
        <div style={{ display: "flex", width: "100%", gap: ".6rem" }}>
          <div style={{ width: "50%" }}>
            <FormInput name="startYear" label="Start year" type="date" />
          </div>
          <div style={{ width: "50%" }}>
            <FormInput name="endYear" label="End year" type="date" />
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
          <FormTextArea
            label="Description (Optional)"
            name="description"
            placeholder="Description"
          />
        </div>
        <div style={{ width: "100%", marginTop: "-.5rem" }}>
          <FormInput
            label="Project link (Optional)"
            name="projectLink"
            size="large"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "end", marginTop: "10px" }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateProjectModal;
