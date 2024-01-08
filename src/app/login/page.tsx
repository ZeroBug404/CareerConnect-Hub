"use client"

import LoginPage from "@/components/Login/Login";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";


const Login = () => {
  return (
    <>
    <NavBar />
      <div
        style={{
          backgroundColor: "#f3f2f1",
        }}
      >
        <LoginPage />
      </div>
      <Footer />
    </>
  );
};

export default Login;
