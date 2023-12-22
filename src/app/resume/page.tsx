
import Education from "@/components/Resume/education";
import JobResponsibilities from "@/components/Resume/jobResponsibilities";
import PersonalInfo from "@/components/Resume/personalInfo";
import Portfolio from "@/components/Resume/portfolio";
import Projects from "@/components/Resume/projects";
import Training from "@/components/Resume/training";
import WorkExperience from "@/components/Resume/workExperience";

const ResumePage = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        Resume
      </h1>
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
        <Training/>
        <Projects/>
        <Portfolio/>
      </div>
    </div>
  );
};

export default ResumePage;
