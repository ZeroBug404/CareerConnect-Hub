/* eslint-disable react/no-unescaped-entities */
"use client";

// import { useUserLoginMutation } from "@/redux/api/authApi";
// import { storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";

import logo from "../../assets/1-removebg-preview.png";
import { useState } from "react";

type FormValues = {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  contactNo: string;
  password: string;
};

const RegisterPage = () => {
  const router = useRouter();

  const [scale, setScale] = useState(1);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const loginData = {
        email: data.email,
        password: data.password,
      };

      //   const res = await userLogin(loginData);

      //@ts-ignore
      if (res?.data?.accessToken) {
        router.push("/home");
        message.success("User logged in successfully!");
      } else {
        return message.error("Wrong credential!");
      }

      //@ts-ignore
      storeUserInfo({ accessToken: res?.data?.accessToken });
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
      }}
    >
      {/* <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col> */}
      <Image src={logo} width={260} height={120} alt="login image" />
      <Col
        sm={22}
        md={8}
        lg={12}
        style={{
          backgroundColor: "white",
          padding: "20px 40px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          width: "100%",
        }}
      >
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          Ready to take the next step?
        </h1>
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <div style={{ width: "100%" }}>
                <h3 style={{ color: "gray", fontSize: "14px" }}>First Name</h3>
                <FormInput name="firstName" type="text" size="large" />
              </div>
              <div style={{ width: "100%" }}>
                <h3 style={{ color: "gray", fontSize: "14px" }}>Last Name</h3>
                <FormInput name="lastName" type="text" size="large" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                margin: "15px 0px",
              }}
            >
              <div style={{ width: "100%" }}>
                <h3 style={{ color: "gray", fontSize: "14px" }}>Email</h3>
                <FormInput name="email" type="text" size="large" />
              </div>
              <div style={{ width: "100%" }}>
                <h3 style={{ color: "gray", fontSize: "14px" }}>Contact No</h3>
                <FormInput name="contactNo" type="text" size="large" />
              </div>
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <h3 style={{ color: "gray", fontSize: "14px" }}>Password</h3>
              <FormInput name="password" type="password" size="large" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  // marginTop: "1rem",
                  fontSize: "18px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p>
                  Already have an account!{" "}
                  <Link href={"/login"}>
                    <span>login</span>
                  </Link>
                </p>
              </div>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#f68c29",
                  fontSize: "1.2rem",
                  width: "50%",
                  transition: "transform 0.3s ease-in-out",
                  transform: `scale(${scale})`,
                }}
                onMouseEnter={() => setScale(1.03)}
                onMouseLeave={() => setScale(1)}
              >
                Register
              </Button>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default RegisterPage;
