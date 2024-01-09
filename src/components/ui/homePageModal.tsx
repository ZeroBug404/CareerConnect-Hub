/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { SubmitHandler } from "react-hook-form";

import { Button, message } from "antd";
import Link from "next/link";
import FormInput from "../Forms/FormInput";
import { useState } from "react";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import Form from "../Forms/Form";

type FormValues = {
  email: string;
  password: string;
};

const HomePageModal = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const [scale, setScale] = useState(1);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const loginData = {
        email: data.email,
        password: data.password,
      };
      const res = userLogin(loginData);
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
    <div>
      <p style={{ fontSize: "1rem", marginTop: "1rem", marginBottom: ".5rem" }}>
        Dont have an account?? <Link href="/company-sign-up">Sign up</Link>
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#666",
          marginBottom: "1rem",
        }}
      ></p>
      <Form submitHandler={onSubmit}>
        <div style={{ width: "100%" }}>
          <h3 style={{ color: "gray", fontSize: "14px", marginBottom: "3px" }}>
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
  );
};

export default HomePageModal;
