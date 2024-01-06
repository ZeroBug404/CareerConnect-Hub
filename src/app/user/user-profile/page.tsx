/* eslint-disable react/no-unescaped-entities */
"use client";
import styles from "@/Styles/UserProfile.module.css";
import { useEducationQuery } from "@/redux/api/educationApi";
import { usePortfolioQuery } from "@/redux/api/portfolioApi";
import { useProjectQuery } from "@/redux/api/projectApi";
import { useSkillQuery } from "@/redux/api/skillApi";
import { useTrainingQuery } from "@/redux/api/trainingApi";
import { useUserProfileQuery } from "@/redux/api/userApi";
import { useWorkExperienceQuery } from "@/redux/api/workExperienceApi";
import { getUserInfo, getUserToken } from "@/services/auth.service";
import { Progress } from "antd";
import Image from "next/image";

const UserProfile = () => {
  const { email } = getUserInfo() as any;
  const authToken = getUserToken() as any;

  const { data: UserProfileData, isLoading: UserProfileIsLoading } =
    useUserProfileQuery(authToken);

  const { data: EducationData, isLoading: EducationIsLoading } =
    useEducationQuery(email);
  const { data: ProjectData, isLoading: ProjectIsLoading } =
    useProjectQuery(email);
  const { data: PortfolioData, isLoading: PortfolioIsLoading } =
    usePortfolioQuery(email);
  const { data: TrainingData, isLoading: TrainingIsLoading } =
    useTrainingQuery(email);
  const { data: SkillData, isLoading: SkillIsLoading } = useSkillQuery(email);
  const { data: ExperienceData, isLoading: ExperienceIsLoading } =
    useWorkExperienceQuery(email);

  return (
    <div className={styles.main_body}>
      <div className={styles.top_section}>
        <p className={styles.top_section_head}>View Profile</p>
        <div className={styles.top_section_body}>
          <p className={styles.top_section_body_title}>
            Here you will get a detailed view of your resume and you can
            download your resume from Download Resume option.
          </p>
          <div className={styles.top_section_body_complete}>
            <div>
              <Progress size="small" type="circle" percent={100} />
            </div>
            <div>
              <p className={styles.top_section_body_complete_text1}>
                Completeness of Career Connect Hub Profile (8/8)
              </p>
              <p className={styles.top_section_body_complete_text2}>
                Last updated on: 29 Oct 2023
              </p>
            </div>
          </div>
          <div className={styles.top_section_body_complete_download}>
            <span>Download</span>
          </div>
        </div>
      </div>
      <div className={styles.profile_section}>
        <div className={styles.profile_section_container}>
          <div className={styles.profile_section_info_pic}>
            <div>
              <p className={styles.profile_section_info_Name}>
                {UserProfileData?.data?.name?.firstName}{" "}
                {UserProfileData?.data?.name?.lastName}
              </p>
              <p className={styles.profile_section_info_address}>
                Detail Address
              </p>
              {UserProfileData?.data?.phoneNumber && (
                <p className={styles.profile_section_info_contact}>
                  {UserProfileData?.data?.phoneNumber}
                </p>
              )}
              {UserProfileData?.data?.email && (
                <p className={styles.profile_section_info_email}>
                  {UserProfileData?.data?.email}
                </p>
              )}
              {/* <p className={styles.profile_section_info_fb}>Facebook Links</p> */}
              {/* <p className={styles.profile_section_info_linkedin}>
                Linkedin Links
              </p> */}
              <p className={styles.profile_section_info_github}>{PortfolioData?.data[0]?.gitHub}</p>
            </div>
            <div>
              {UserProfileData?.data?.profileImg && (
                <Image
                  src={UserProfileData?.data?.profileImg}
                  alt={"User Image"}
                  className=""
                  width={124}
                  height={135}
                />
              )}
            </div>
          </div>
          <div className={styles.profile_section_objective}>
            <h3 className={styles.profile_section_title_header}>
              Career Objective:
            </h3>
            <p className={styles.profile_section_objective_body}>
              As a dedicated Front-End Developer, I bring a high level of
              motivation, a deep passion for technology, and an unwavering
              commitment to personal and professional growth. With a strong
              proficiency in JavaScript, React, Next.js, HTML5, CSS3, Bootstrap,{" "}
            </p>
          </div>
          <div className={styles.profile_section_summary}>
            <h3 className={styles.profile_section_title_header}>
              Career Summary:
            </h3>
            <p className={styles.profile_section_summary_body}>
              As a dedicated Front-End Developer, I bring a high level of
              motivation, a deep passion for technology, and an unwavering
              commitment to personal and professional growth. With a strong
              proficiency in JavaScript, React, Next.js, HTML5, CSS3, Bootstrap,
              Material UI, Tailwind CSS, and Node.js, My experience has honed my
              problem-solving abilities, critical thinking, and an acute
              attention to detail, positioning me as a versatile and
              accomplished web developer.
            </p>
          </div>
          <div className={styles.profile_section_Employment_History}>
            <h3 className={styles.profile_section_title_header}>
              Employment History:
            </h3>
            {ExperienceData?.data?.map((data: any, key: any) => (
              <>
                <p className={styles.profile_section_Employment_History_body}>
                  <p className={styles.profile_section_head}>
                    Total Year of Experience:{" "}
                    <span className={styles.profile_section_head_value}>
                      2.1 yrs{" "}
                    </span>
                  </p>
                </p>
                <div>
                  <p className={styles.profile_section_Employment_History_body}>
                    <p className={styles.profile_section_head}>
                      {key + 1}. {data?.profile} (2.1 yrs)
                    </p>
                    <p className={styles.profile_section_head_value}>
                      ({data?.startDate} - {data?.endDate})
                    </p>
                    <p
                      className={styles.profile_section_head}
                      style={{ marginTop: "20px" }}
                    >
                      {data?.organization}
                    </p>
                    <p className={styles.profile_section_head_value}>
                      Area of Expertise:
                    </p>
                    <p className={styles.profile_section_head_value}>
                      {data?.description}{" "}
                    </p>
                    <p
                      className={styles.profile_section_head_value}
                      style={{ marginTop: "20px" }}
                    >
                      Duties/Responsibilities:{" "}
                    </p>
                    <p className={styles.profile_section_head_value}>
                      {data?.responsibility}{" "}
                    </p>
                  </p>
                </div>
              </>
            ))}
          </div>
          <div className={styles.profile_section_Academic_Qualification}>
            <h3 className={styles.profile_section_title_header}>
              Academic Qualification:
            </h3>
            <div
              className={
                styles.profile_section_Academic_Qualification_table_container
              }
            >
              <table
                className={styles.profile_section_Academic_Qualification_table}
              >
                <tr>
                  <th style={{ width: "15%" }}>Exam Title</th>
                  <th style={{ width: "15%" }}>Concentration/Major</th>
                  <th style={{ width: "20%" }}>Institute</th>
                  <th style={{ width: "13%" }}>Result</th>
                  <th style={{ width: "12%" }}>Pass.Year</th>
                </tr>
                {EducationData?.data.map((data: any, key: any) => (
                  <>
                    <tr>
                      <td>{data?.degree}</td>
                      <td>Computer Science</td>
                      <td>{data?.college}</td>
                      <td>
                        {data?.performanceScale}:{data?.cgpa}{" "}
                      </td>
                      <td>{data?.endYear}</td>
                    </tr>
                  </>
                ))}
              </table>
            </div>
          </div>
          <div className={styles.profile_section_Training_Summary}>
            <h3 className={styles.profile_section_title_header}>
              Training Summary:
            </h3>
            <div
              className={
                styles.profile_section_Training_Summary_table_container
              }
            >
              <table className={styles.profile_section_Training_Summary_table}>
                <tr>
                  <th style={{ width: "20%" }}>Training Title</th>
                  <th style={{ width: "15%" }}>Topic</th>
                  <th style={{ width: "15%" }}>Institute</th>
                  <th style={{ width: "15%" }}>Country</th>
                  <th style={{ width: "15%" }}>Location</th>
                  <th style={{ width: "10%" }}>Year</th>
                  <th style={{ width: "10%" }}>Duration</th>
                </tr>

                {TrainingData?.data.map((data: any, key: any) => (
                  <>
                    <tr>
                      <td>{data?.title} </td>
                      <td></td>
                      <td>{data?.organization}</td>
                      <td>Bangladesh</td>
                      <td>{data?.location}</td>
                      <td>{data?.endDate}</td>
                      <td>
                        {data?.startDate}-{data?.endDate}
                      </td>
                    </tr>
                  </>
                ))}
              </table>
            </div>
          </div>
          <div className={styles.profile_section_Career_Application}>
            <h3 className={styles.profile_section_title_header}>
              Career and Application Information:
            </h3>
            <div
              className={
                styles.profile_section_Career_Application_table_container
              }
            >
              <table
                className={styles.profile_section_Career_Application_table}
              >
                <tr>
                  <td style={{ width: "32%" }}>Looking For</td>
                  <td style={{ width: "2%" }}>:</td>
                  <td style={{ width: "66%" }}>Mid Level Job </td>
                </tr>
                <tr>
                  <td style={{ width: "32%" }}>Available For</td>
                  <td style={{ width: "2%" }}>:</td>
                  <td style={{ width: "66%" }}>Full Time </td>
                </tr>
                <tr>
                  <td style={{ width: "32%" }}>Present Salary</td>
                  <td style={{ width: "2%" }}>:</td>
                  <td style={{ width: "66%" }}>Tk. 35000 </td>
                </tr>
                <tr>
                  <td style={{ width: "32%" }}>Expected Salary</td>
                  <td style={{ width: "2%" }}>:</td>
                  <td style={{ width: "66%" }}>Tk. 50000 </td>
                </tr>
                <tr>
                  <td style={{ width: "32%" }}>Preferred Job Category</td>
                  <td style={{ width: "2%" }}>:</td>
                  <td style={{ width: "66%" }}>
                    Education/Training,IT/Telecommunication{" "}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "32%" }}>Preferred District</td>
                  <td style={{ width: "2%" }}>:</td>
                  <td style={{ width: "66%" }}>Barishal, Dhaka</td>
                </tr>
                <tr>
                  <td style={{ width: "32%" }}>Preferred Country </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td style={{ width: "66%" }}>
                    Australia, Canada, United States{" "}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "32%" }}>Preferred Organization Types</td>
                  <td style={{ width: "2%" }}>:</td>
                  <td style={{ width: "66%" }}>
                    Software Company,IT Enabled Service
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className={styles.profile_section_Skills}>
            <h3 className={styles.profile_section_title_header}>Skill:</h3>
            <div className={styles.profile_section_Skills_table_container}>
              <table className={styles.profile_section_Skills_table}>
                <tr>
                  <th style={{ width: "40%" }}>Fields of Skill</th>
                  <th style={{ width: "60%" }}>Description </th>
                </tr>
                <tr>
                  <td>
                    <ul style={{ paddingLeft: "1vw" }}>
                      {SkillData?.data[0]?.skills?.map(
                        (data: any, key: any) => (
                          <>
                            {console.log("dt", data)}
                            <li>{data}</li>
                          </>
                        )
                      )}
                    </ul>
                  </td>
                  <td>
                    As a dedicated Front-End Developer, I embody a profound
                    sense of motivation, a profound passion for technology, and
                    an unwavering dedication to personal and professional
                    advancement. My robust expertise in JavaScript, React,
                    Next.js, HTML5, CSS3, Bootstrap, Material UI, Tailwind CSS,
                    and Node.js has finely honed my problem-solving acumen,
                    critical thinking capabilities, and a keen eye for detail.
                    These qualities have established me as a versatile and
                    accomplished web developer.
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className={styles.profile_section_Extra_Curricular}>
            <h3 className={styles.profile_section_title_header}>
              Extra Curricular Activities:
            </h3>
            <h3 className={styles.profile_section_Extra_Curricular_body}>
              <p>
                Participated in NCPC organized by the University of Asia Pacific
                in 2016 and also participated in ICPC organized by North South
                University in 2015.
              </p>
              <p>
                Participated in Wikipedia contributors meet organized by
                Wikimedia Foundation & Grameenphone in 2014.
              </p>
              <p>
                Participated in the Mathematical Olympiad organized by Prothom
                Alo & Dutch Bangla Bank in 2011.
              </p>
            </h3>
          </div>
          <div className={styles.profile_section_Language}>
            <h3 className={styles.profile_section_title_header}>
              Language Proficiency:
            </h3>
            <div className={styles.profile_section_Language_table_container}>
              <table className={styles.profile_section_Language_table}>
                <tr>
                  <th style={{ width: "25%" }}>Language</th>
                  <th style={{ width: "25%" }}>Reading</th>
                  <th style={{ width: "25%" }}>Writing</th>
                  <th style={{ width: "25%" }}>Speaking</th>
                </tr>
                <tr>
                  <td>Bangla</td>
                  <td>High</td>
                  <td>High</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>English</td>
                  <td>High</td>
                  <td>High</td>
                  <td>High</td>
                </tr>
              </table>
            </div>
          </div>
          <div className={styles.profile_section_Personal_Details}>
            <h3 className={styles.profile_section_title_header}>
              Personal Details :
            </h3>
            <div
              className={
                styles.profile_section_Personal_Details_table_container
              }
            >
              <table className={styles.profile_section_Personal_Details_table}>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Father's Name
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    Mr. Father{" "}
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Mother's Name{" "}
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    Mrs. Mother
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Date of Birth
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    1 Jan 1996
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Gender
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    Male
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Height (Meter)
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    1.75
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Weight (Kg)
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    78
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Marital Status{" "}
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    Married
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Nationality
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    Bangladeshi
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Religion
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    Islam
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Permanent Address
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    Kuchiamora, Bheramara, Bheramara, Kushtia 7040{" "}
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Current Location
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    Dhaka
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Blood Group
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    B+
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className={styles.profile_section_Reference}>
            <h3 className={styles.profile_section_title_header}>
              Reference (s):
            </h3>
            <div className={styles.profile_section_Reference_table_container}>
              <table className={styles.profile_section_Reference_table}>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Name
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    Mr. Reference{" "}
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Organization
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    University Of Barisal{" "}
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Designation
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    Lecturer
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Address
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}></td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Phone (Off.){" "}
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}></td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Phone (Res.){" "}
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}></td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Primary Mobile No
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    +880123456789
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Primary Email
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    user@gmail.com
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Relation
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    Academic
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Current Location
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    Dhaka
                  </td>
                </tr>
                <tr>
                  <td className={styles.profile_section_table_name_width}>
                    Blood Group
                  </td>
                  <td style={{ width: "2%" }}>:</td>
                  <td className={styles.profile_section_table_value_width}>
                    B+
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
