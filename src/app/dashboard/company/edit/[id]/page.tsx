/* eslint-disable react/no-unescaped-entities */
"use client";

import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import { status } from "@/constants/global";
import { useUpdateCompanyMutation } from "@/redux/api/companyApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/router";

const UpdateCompany = ({ params }: any) => {
  const [updateCompany] = useUpdateCompanyMutation();
  console.log(params.id);
  const companyId = params.id;
  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    try {
      console.log("data", data);
      fetch(`http://localhost:5000/api/v1/company/${companyId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.statusCode === 200) {
            message.success(res.message);
          }
        });
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <div>
      <Form submitHandler={onSubmit}>
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Update Company
        </h2>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            margin: "10px 0",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Update Status
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={8}
              style={{
                margin: "5px 0",
              }}
            >
              <FormSelectField
                name="status"
                label=""
                size="small"
                options={status}
              />
            </Col>
          </Row>
        </div>
        <div style={{ margin: "10px 0" }}>
          <Button type="primary" htmlType="submit" size="large">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateCompany;
