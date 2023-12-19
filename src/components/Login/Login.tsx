/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
// import { useUserLoginMutation } from "@/redux/api/authApi";
// import { storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";

import { useUserLoginMutation } from "@/redux/api/authApi";
import logo from "../../assets/1-removebg-preview.png";
import { storeUserInfo } from "@/services/auth.service";

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

      const res = await userLogin(loginData);

      //@ts-ignore
      if (res?.data?.accessToken) {
        // router.push("/home");
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
        sm={12}
        md={8}
        lg={8}
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
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "gray", fontSize: "14px" }}>Email</h3>
              <FormInput name="email" type="email" size="large" />
            </div>
            <div
              style={{
                margin: "15px 0px",
                width: "100%",
              }}
            >
              <h3 style={{ color: "gray", fontSize: "14px" }}>Password</h3>
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
                backgroundColor: "#f68c29",
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
    </Row>
  );
};

export default LoginPage;
