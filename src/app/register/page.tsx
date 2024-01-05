"use client";

import RegisterPage from "@/components/Login/Register";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";

const Register = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundColor: "#f3f2f1",
        }}
      ></div>
      <div style={{}}>
        <RegisterPage />
      </div>
      <Footer />
    </>
  );
};

export default Register;
