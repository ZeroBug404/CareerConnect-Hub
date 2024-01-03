"use client";
import { useAddSkillMutation, useSkillsQuery } from "@/redux/api/skillApi";
import { getUserInfo } from "@/services/auth.service";
import type { SelectProps } from "antd";
import { Select, message } from "antd";

const SkillModal = () => {
  const [addSkill] = useAddSkillMutation();

  const { data } = useSkillsQuery({});

  // console.log(data?.data);

  const skills = data?.data?.map((skill: any) => {
    return skill.skills;
  });

  // console.log(skills[0]);

  const { email } = getUserInfo() as any;

  const options: SelectProps["options"] = [];

  const handleChange = async (value: string[]) => {
    const options = {
      skills: value,
      userEmail: email,
    };
    console.log(options);
    
    // await addSkill(options);
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
        placeholder="Write your skills here..."
        value={skills[0]}
        onChange={handleChange}
        tokenSeparators={[","]}
        options={options}
      />
    </div>
  );
};

export default SkillModal;
