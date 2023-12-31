/* eslint-disable react/no-unescaped-entities */
"use client";
import styles from "@/components/Login/login.module.css";

// import { storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";

import { useState } from "react";

import { useUserSignupMutation } from "@/redux/api/authApi";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  contactNo: string;
  password: string;
};

const RegisterPage = () => {
  const [userSignup] = useUserSignupMutation();
  const router = useRouter();

  const [scale, setScale] = useState(1);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const registerData = {
        email: data.email,
        password: data.password,
        name: {
          firstName: data.firstName,
          lastName: data.lastName,
        },
      };
      console.log(data);

      const res = await userSignup(registerData);

      // @ts-ignore
      if (res?.data?.success === true) {
        // router.push("/home");
        message.success("User registered successfully!");
      } else {
        return message.error("Wrong credential!");
      }

      //@ts-ignore
      // storeUserInfo({ accessToken: res?.data?.accessToken });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
        flexDirection: "column",
        margin: "2.4rem 0",
      }}
    >
      <h4 className={styles.heading}>Sign-up and apply for free</h4>
      <p className={styles.headingText}>
        create account and find your best job
      </p>
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
        <div>
          <Form submitHandler={onSubmit}>
            <div style={{ width: "100%" }}>
              <h3
                style={{ color: "gray", fontSize: "14px", marginBottom: "3px" }}
              >
                Email
              </h3>
              <FormInput name="email" type="text" size="large" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <h3
                style={{
                  color: "gray",
                  fontSize: "14px",
                  marginBottom: "3px",
                }}
              >
                Phone{" "}
              </h3>
              <FormInput name="contactNo" type="text" size="large" />
            </div>

            <div
              style={{
                margin: "15px 0px",
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <div style={{ width: "100%" }}>
                <h3
                  style={{
                    color: "gray",
                    fontSize: "14px",
                    marginBottom: "3px",
                  }}
                >
                  First Name
                </h3>
                <FormInput name="firstName" type="text" size="large" />
              </div>
              <div style={{ width: "100%" }}>
                <h3
                  style={{
                    color: "gray",
                    fontSize: "14px",
                    marginBottom: "3px",
                  }}
                >
                  Last Name
                </h3>
                <FormInput name="lastName" type="text" size="large" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "1rem 0",
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={{
                  backgroundColor: "#00A6E5",

                  width: "100%",
                  transition: "transform 0.3s ease-in-out",
                  transform: `scale(${scale})`,
                }}
                onMouseEnter={() => setScale(1.03)}
                onMouseLeave={() => setScale(1)}
              >
                Register
              </Button>
            </div>
            <div
              style={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: ".8rem 0",
              }}
            >
              <p>
                Already have an account!{" "}
                <Link href={"/login"}>
                  <span>login</span>
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default RegisterPage;
