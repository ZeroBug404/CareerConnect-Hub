"use client";
import AdditionalDetails from "@/components/Resume/additionalDetails";
import Education from "@/components/Resume/education";
import JobResponsibilities from "@/components/Resume/jobResponsibilities";
import PersonalInfo from "@/components/Resume/personalInfo";
import Portfolio from "@/components/Resume/portfolio";
import Projects from "@/components/Resume/projects";
import Skills from "@/components/Resume/skills";
import Training from "@/components/Resume/training";
import WorkExperience from "@/components/Resume/workExperience";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";
import {
  ArrowLeftOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const ResumePage = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          margin: "32px",
        }}
      >
        <Link
          href="/"
          style={{
            color: "blue",
          }}
        >
          <ArrowLeftOutlined /> Back
        </Link>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <h1>Resume</h1>
        <p
          style={{
            padding: "20px 0",
            backgroundColor: "#FFFAEB",
            margin: "16px 32px",
            color: "#975E12",
          }}
        >
          <ExclamationCircleOutlined />
          Whenever you apply to an internship or fresher job, this is the resume
          that the employer will see. Always make sure it is up to date.
        </p>
      </div>
      <div
        style={{
          border: "1px solid black",
          margin: "32px",
          padding: "32px",
        }}
      >
        <PersonalInfo />
        <Education />
        <WorkExperience />
        <JobResponsibilities />
        <Training />
        <Projects />
        <Skills />
        <Portfolio />
        <AdditionalDetails />
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;
