import JobListMain from "@/components/ui/JobListMain";
import NavBar from "@/components/ui/NavBar";
import { Footer } from "antd/es/layout/layout";
import React from "react";

const JobList = () => {
  return (
    <>
      <NavBar />
      <JobListMain />
      <Footer />
    </>
  );
};

export default JobList;
