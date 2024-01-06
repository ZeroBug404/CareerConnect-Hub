// import Footer from "@/components/ui/Footer";
// import JobListMain from "@/components/ui/JobListMain";
// import NavBar from "@/components/ui/NavBar";

import React, { lazy } from "react";

const JobListMain = lazy(() => import("@/components/ui/JobListMain"));

const JobList = () => {
  return (
    <>
      {/* <NavBar /> */}
      <JobListMain />
      {/* <Footer /> */}
    </>
  );
};

export default JobList;
