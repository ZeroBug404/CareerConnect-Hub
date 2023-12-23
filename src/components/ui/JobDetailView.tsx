import styles from "@/Styles/JobList.module.css";
import { RiseOutlined } from "@ant-design/icons";
import { Button, Card, Flex, List } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";

const JobDetailView = async (props: any) => {
  const { selectedID } = props;
  const res = await fetch(
    `https://career-connect-hub-api.vercel.app/api/v1/jobs/${selectedID}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <Flex className={styles.JobDetailView_div_main}>
      <div
        style={{
          width: "100%",
          height: "100%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          border: "1px solid #104278",
          margin: " 20px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            padding: "10px",
            color: "#104278",
          }}
        >
          <Flex wrap="wrap" gap="small">
            <RiseOutlined /> <p>Active Hiring</p>
          </Flex>
        </div>
        <Card
          title={<Title level={4}>{data?.data?.title}</Title>}
          bordered={false}
        >
          <h3>{data?.data?.company}</h3>
          <br />
          <Flex wrap="wrap" gap="small">
            <p>Location: {data?.data?.location},</p>
            <p>JobType: {data?.data?.jobType},</p>
            <p>Joining Date: {data?.data?.joiningDate},</p>
            <p>CTC: {data?.data?.salary},</p>
            <p>Experience: {data?.data?.experienceLevel}</p>
          </Flex>
          <br />
          <div>
            <h4>About {data?.data?.company}</h4>
            <p>{data?.data?.companyDescription}</p>
          </div>
          <div>
            <h4>About Job</h4>
            <p>{data?.data?.jobDescription}</p>
          </div>
          <div>
            <h4>Key responsibilities:</h4>
            <List>{data?.data?.keyResponsibilities}</List>
          </div>
          <div>
            <h4>Skill(s) required</h4>
            <p>{data?.data?.skills}</p>
          </div>
          <div>
            <h4>Salary</h4>
            <p>{data?.data?.salary}</p>
          </div>
          <div>
            <h4>Additional Information</h4>
            <p>{data?.data?.benefits}</p>
          </div>
          <div>
            <h4>Number of openings</h4>
            <p>{data?.data?.numberOfOpenings}</p>
          </div>

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
              <Button type="primary">Apply Now</Button>
            </Link>
          </Flex>
        </Card>
      </div>
    </Flex>
  );
};

export default JobDetailView;
