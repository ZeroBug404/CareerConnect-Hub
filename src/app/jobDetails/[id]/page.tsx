import { Button, Card } from "antd";

const JobDetails = ({ params }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "0 20px", 
      }}
    >
      <Card
        title={`Details of the Job ${params.id}`}
        style={{
          width: "100%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p>
          Years of exp. – 2-4 Yrs. <br /> Work Location –
          Remote <br /> Number of Vacancies – 5 <br /> Key Skills – Technologies: HTML5, CSS3,
          JavaScript, JQuery, Angular JS, Node JS, Backbone JS, Bootstrap, GitHub <br /> Type: Full Time | Remote <br />
          Experience & Responsibilities – At least 18 months of web development
          experience using the tools mentioned above. Familiar with SDLC and Agile
          delivery process. Experienced in working in a team environment and
          ability to collaborate with multiple team members. Strong proponent of
          engineering best practices for Unit Testing, Coverage, Code Quality,
          Continuous Integration & Continuous Deployment. Hands-on in development,
          Self-starter with the ability to appropriately prioritize and plan
          complex work in a rapidly changing environment. Excellent communication
          skills with the ability to explain technical concepts in simple terms.
          Some retail or e-commerce domain project experience will be a plus.
          Qualifications – B.E. / B.Tech / MCA from a recognized university Job
          
        </p>
        <Button type="primary">Apply Here</Button>
      </Card>
    </div>
  );
};

export default JobDetails;
