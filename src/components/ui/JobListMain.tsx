/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-async-client-component */
"use client";

import styles from "@/Styles/JobList.module.css";
import JobDetailView from "@/components/ui/JobDetailView";
import JobLists from "@/components/ui/JobLists";
import { Button, Input, Space } from "antd"; // Import Spin from Ant Design
import { useEffect, useState } from "react";

const JobListMain = async () => {
  const [selectedID, setSelectedID] = useState(null);
  const [allData, setAllData] = useState([]);
  const [singleData, setSingleData] = useState([]);

  let search = "";

  const handleSearch = () => {
    fetch(
      `https://career-connect-hub-api-five.vercel.app/api/v1/jobs?searchTerm=${search}`
    )
      .then((res) => res.json())
      .then((res) => {
        setAllData(res?.data?.data);
      })
      .finally(() => {});
  };

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    search = e.target.value;
  };

  useEffect(() => {
    fetch(
      `https://career-connect-hub-api-five.vercel.app/api/v1/api/v1/jobs/${selectedID}`
    )
      .then((res) => res.json())
      .then((res) => {
        setSingleData(res.data);
      });
  }, [selectedID]);

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div
      style={{
        marginBottom: "2vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "16px",
        }}
      >
        <Space.Compact style={{ width: "40%" }}>
          <Input placeholder="Search for jobs" onChange={onChangeHandler} />
          <Button type="primary" onClick={handleSearch}>
            Search
          </Button>
        </Space.Compact>
      </div>
      {allData.length > 0 ? (
        <div className={styles.JobList_div_main}>
          <JobLists setSelectedID={setSelectedID} allData={allData} />
          <JobDetailView singleData={singleData} />
        </div>
      ) : (
        <div className={styles.JobList_div_main}>No Data found.</div>
      )}
    </div>
  );
};

export default JobListMain;
