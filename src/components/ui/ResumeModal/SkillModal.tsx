"use client";
import { useAddSkillMutation, useGetSkillsQuery } from "@/redux/api/skillApi";
import type { SelectProps } from "antd";
import { Select, message } from "antd";

interface SkillModalProps {
  btnName: string;
}

const SkillModal: React.FC<SkillModalProps> = ({ btnName }) => {
  const [addSkill] = useAddSkillMutation();

  const { data } = useGetSkillsQuery({});

  // console.log(data?.data);

  const skills = data?.data?.map((skill: any) => {
    return skill.skills;
  });

  // console.log(skills[0]);

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
      {/* <Form
        name="myForm"
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item label="Add skills" name="skills"> */}
      {/* <Input style={{ width: "100%", marginTop: "-.5rem" }} size="large" /> */}

      <Select
        mode="tags"
        style={{ width: "100%" }}
        placeholder="Write your skills here..."
        value={skills[0]}
        onChange={handleChange}
        tokenSeparators={[","]}
        options={options}
      />
      {/* <Button type="primary">
            {btnName}
          </Button> */}
      {/* </Form.Item>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button type="primary" htmlType="submit">
            {btnName}
          </Button>
        </div>
      </Form> */}
    </div>
  );
};

export default SkillModal;
