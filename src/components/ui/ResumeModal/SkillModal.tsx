"use client";
import { useAddSkillMutation } from "@/redux/api/skillApi";
import type { SelectProps } from "antd";
import { Select, message } from "antd";

const SkillModal = () => {
  const [addSkill] = useAddSkillMutation();

  const options: SelectProps["options"] = [];

  const handleChange = async (value: string[]) => {
    const options = {
      skills: value,
    };
    await addSkill(options);
    message.success("Skills added successfully!");
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
        Skills
      </p>
      <Select
        mode="tags"
        style={{ width: "100%" }}
        onChange={handleChange}
        tokenSeparators={[","]}
        options={options}
      />
    </div>
  );
};

export default SkillModal;
