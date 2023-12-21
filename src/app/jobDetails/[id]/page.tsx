import { RiseOutlined } from "@ant-design/icons";
import { Button, Card, Flex, List } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";

const JobDetails = ({ params }: any) => {
  return (
    <Flex>
      <div
        style={{
          width: "100%",
          height: "100%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          border: "1px solid blue",
          margin: " 20px"
        }}
      >
        <div
          style={{
            padding: "10px",
            color: "blue",
          }}
        >
          <RiseOutlined />
        </div>
        <Card title={<Title level={4}>Developer</Title>} bordered={false}>
          <p>Company Name: </p>
          <br />
          <Flex wrap="wrap" gap="small">
            <p>Location: </p>
            <p>Type: </p>
            <p>Start Date: </p>
          </Flex>
          <br />
          <h4>About company name</h4>
          <p>
            Brilliance Academy has been founded by Amandeep. Amandeeps mission
            is to empower experts, coaches, speakers, and trainers to
            communicate their skills effectively. He is a speaker, an
            international trainer, an author, and a public speaking coach.
            A-Man-Deep manifests that Humans are born with Brilliance. In light
            of this, he has created a unique system with his charm and proven
            ability to train people to discover their brilliance and live their
            lives to the fullest. He has touched more than 1,00,000+ lives by
            designing the life of their dream.
          </p>
          <h4>About Job</h4>
          <p>
            The ideal candidate possesses a passion for social media management
            & growth and an innovative ability to create successful marketing
            campaigns and aid in creating company growth. You will be
            responsible for generating exciting and compelling stories on
            digital sources of media. <br /> <br /> Key responsibilities:
          </p>

          <List>Bachelors degree in marketing or relevant work experience</List>
          <List>Bachelors degree in marketing or relevant work experience</List>
          <List>Bachelors degree in marketing or relevant work experience</List>
          <List>Bachelors degree in marketing or relevant work experience</List>

          <h4>Skill(s) required</h4>
          <h4>Salary</h4>
          <h4>Additional Information</h4>
          <h4>Number of openings</h4>

          <Flex
            wrap="wrap"
            gap="small"
            justify="center"
            align="center"
            style={{
              padding: "20px 0",
            }}
          >
            <Link href="/login">
              <Button type="primary">Apply Here</Button>
            </Link>
          </Flex>
        </Card>
      </div>
    </Flex>
  );
};

export default JobDetails;
