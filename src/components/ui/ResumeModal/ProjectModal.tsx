"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { useAddProjectMutation } from "@/redux/api/projectApi";
import { Button, message } from "antd";
import { getUserInfo } from "@/services/auth.service";

const ProjectModal = () => {
  const [addProject] = useAddProjectMutation();

  const { email } = getUserInfo() as any;

  const onSubmit = async (projectData: any) => {
    message.loading("Adding...");
    try {
      const projectDataWithEmail = {
        ...projectData,
        userEmail: email,
      };
      await addProject(projectDataWithEmail);
      message.success("Project added successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
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
      <Form submitHandler={onSubmit}>
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

export default ProjectModal;
