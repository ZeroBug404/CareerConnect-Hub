"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import {
  usePortfolioQuery,
  useUpdatePortfolioMutation,
} from "@/redux/api/portfolioApi";
import { Button, message } from "antd";

const UpdatePortfolioModal = ({ id }: any) => {
  const { data } = usePortfolioQuery(id);
  const [updatePortfolio] = useUpdatePortfolioMutation();

  const onSubmit = async (trainingData: any) => {
    message.loading("Adding...");
    try {
      await updatePortfolio(trainingData);
      message.success("Portfolio updated successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const defaultValues = {
    gitHub: data?.data?.gitHub || "",
    other: data?.data?.other || "",
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
        Work samples
      </p>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <div style={{ width: "100%", marginTop: "-.5rem" }}>
          <FormInput label="GitHub profile" name="gitHub" size="large" />
        </div>
        <div style={{ width: "100%", marginTop: "-.5rem" }}>
          <FormInput label="Other work sample link" name="other" size="large" />
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

export default UpdatePortfolioModal;
