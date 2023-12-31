"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import {
  educationYearOptions,
  performanceScale,
} from "@/components/contants/global";
import { Button } from "antd";

interface JobResponsibilityModalProps {
  modalData?: {
    college: string;
    startYear: string;
    endYear: string;
    degree: string;
    description: string;
    performanceScale: string;
    cgpa: string;
  };
}

const UpdateEducationModal: React.FC<JobResponsibilityModalProps> = ({
  modalData,
}) => {
  const onSubmit = async (educationData: any) => {
    console.log(educationData);
  };

  const defaultValues = {
    college: modalData?.college || "",
    startYear: modalData?.startYear || "",
    endYear: modalData?.endYear || "",
    degree: modalData?.degree || "",
    description: modalData?.description || "",
    performanceScale: modalData?.performanceScale || "",
    cgpa: modalData?.cgpa || "",
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
          <FormInput name="college" type="text" label="College" />
        </div>
        <div style={{ display: "flex", width: "100%", gap: ".6rem" }}>
          <div style={{ width: "50%" }}>
            <FormSelectField
              name="startYear"
              label="Start year"
              options={educationYearOptions}
            />
          </div>
          <div style={{ width: "50%" }}>
            <FormSelectField
              name="endYear"
              label="End year"
              options={educationYearOptions}
            />
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", gap: ".6rem" }}>
          <div style={{ width: "50%" }}>
            <FormInput name="degree" type="text" label="Degree" />
          </div>
          <div style={{ width: "50%" }}>
            <FormInput
              name="description"
              type="text"
              label="Stream(Optional)"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: ".6rem",
          }}
        >
          <div style={{ width: "50%" }}>
            <FormSelectField
              name="performanceScale"
              label="Performance Scale (Optional)"
              options={performanceScale}
            />
          </div>
          <div style={{ width: "50%" }}>
            <FormInput name="cgpa" type="text" label="Performance (Optional)" />
          </div>
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

export default UpdateEducationModal;
