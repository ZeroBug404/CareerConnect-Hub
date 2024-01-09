/* eslint-disable react/no-unescaped-entities */
"use client";
import styles from "@/components/Login/login.module.css";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const [scale, setScale] = useState(1);
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const loginData = {
        email: data.email,
        password: data.password,
      };
      console.log(loginData);
      const res = await userLogin(loginData);
      console.log(res);

      //@ts-ignore
      if (res?.data?.data?.accessToken) {
        message.success("User logged in successfully!");
        //@ts-ignore
        if (res?.data?.data?.role === "admin") {
          router.push("/dashboard/company-chart");
        } //@ts-ignore
        else if (res?.data?.data?.role === "recruiter") {
          router.push("/dashboard/job");
        } //@ts-ignore
        else {
          router.push("/user/user-profile");
        }
      } else {
        return message.error("Wrong credential!");
      }

      //@ts-ignore
      storeUserInfo({ accessToken: res?.data?.data?.accessToken });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Row justify="center" align="middle" className={styles.container}>
      <Col
        sm={22}
        md={14}
        lg={8}
        style={{
          backgroundColor: "white",
          padding: "30px 40px",
          borderRadius: "10px",
          width: "100%",
        }}
        className={styles.colDesign}
      >
        <h2
          style={{
            margin: "12px 0px",
          }}
        >
          Ready to take the next step?
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#666",
            marginBottom: "1rem",
          }}
        >
          Create an account or sign in.
        </p>
        <div>
          <Form submitHandler={onSubmit}>
            <div style={{ width: "100%" }}>
              <h3
                style={{ color: "gray", fontSize: "14px", marginBottom: "3px" }}
              >
                Email
              </h3>
              <FormInput name="email" type="email" size="large" />
            </div>
            <div
              style={{
                margin: "15px 0px",
                width: "100%",
              }}
            >
              <h3
                style={{
                  color: "gray",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                Password
              </h3>
              <FormInput name="password" type="password" size="large" />
            </div>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00A6E5",
                fontSize: "1.2rem",
                width: "100%",
                transition: "transform 0.3s ease-in-out",
                transform: `scale(${scale})`,
              }}
              onMouseEnter={() => setScale(1.03)}
              onMouseLeave={() => setScale(1)}
            >
              Login
            </Button>
          </Form>
        </div>
        <div
          style={{
            marginTop: "1rem",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          <p>
            Don't have an account!{" "}
            <Link href={"/register"}>
              <span>Register</span>
            </Link>
          </p>
        </div>
      </Col>
      <Col
        sm={22}
        md={14}
        lg={8}
        style={{
          backgroundColor: "white",
          padding: "30px 40px",
          borderRadius: "10px",
          width: "100%",
        }}
        className={styles.colDesign}
      >
        <h2
          style={{
            margin: "12px 0px",
            textAlign: "center",
          }}
        >
          All User Login Info.
        </h2>
        <div style={{ marginTop: "1rem" }}>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              margin: ".5rem 0",
              fontWeight: "bold",
            }}
          >
            Admin
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              margin: ".2rem 0",
            }}
          >
            Email: admin@careerconnect.com
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
            }}
          >
            password: admin124
          </p>
        </div>
        <div style={{ marginTop: "1.2rem" }}>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              margin: ".5rem 0",
              fontWeight: "bold",
            }}
          >
            Applicant
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              margin: ".2rem 0",
            }}
          >
            Email: applicant@gmail.com
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
            }}
          >
            password: applicant98765
          </p>
        </div>
        <div style={{ marginTop: "1.2rem" }}>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              margin: ".5rem 0",
              fontWeight: "bold",
            }}
          >
            Company
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              margin: ".2rem 0",
            }}
          >
            Email: contact@abccompany.com
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
            }}
          >
            password: 0987Api
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
