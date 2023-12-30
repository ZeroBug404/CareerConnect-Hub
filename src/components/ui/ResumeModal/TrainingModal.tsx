"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { useAddTrainingMutation } from "@/redux/api/trainingApi";
import { Button, message } from "antd";

interface TrainingModalProps {
  btnName: string;
}

const TrainingModal: React.FC<TrainingModalProps> = ({ btnName }) => {
  const [addTraining] = useAddTrainingMutation();

  const onSubmit = async (trainingData: any) => {
    message.loading("Adding...");
    try {
      await addTraining(trainingData);
      message.success("Training added successfully");
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
        Training details
      </p>
      <Form submitHandler={onSubmit}>
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
          }}
        >
          <FormTextArea name="description" label="Description (Optional)" style={{ height: "100%", minHeight: "10rem", resize: "none" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "end", marginTop: "10px"  }}>
          <Button type="primary" htmlType="submit">
            {btnName}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default TrainingModal;