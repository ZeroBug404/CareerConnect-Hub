/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-async-client-component */
"use client";

import styles from "@/Styles/JobList.module.css";
import JobDetailView from "@/components/ui/JobDetailView";
import JobLists from "@/components/ui/JobLists";
import { Button, Input, Space } from "antd";
import { useEffect, useState } from "react";

const JobListMain = async () => {
  const [selectedID, setSelectedID] = useState(null);
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = () => {
    fetch(
      `https://career-connect-hub-api.vercel.app/api/v1/jobs?searchTerm=${searchData}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res?.data?.data);
        setData(res?.data?.data);
      });
  };

  useEffect(() => {
    handleSearch()
  }, [])
  
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
          <Input
            placeholder="Search for jobs"
            onChange={(e) => setSearchData(e.target.value)}
          />
          <Button type="primary" onClick={handleSearch}>
            Search
          </Button>
        </Space.Compact>
      </div>
      {data.length > 0 ? (
        <div className={styles.JobList_div_main}>
          <JobLists setSelectedID={setSelectedID} data={data} />
          <JobDetailView selectedID={selectedID} />
        </div>
      ) : (
        <div className={styles.JobList_div_main}>No Data found.</div>
      )}
    </div>
  );
};

export default JobListMain;
