/* eslint-disable @next/next/no-async-client-component */
"use client";

import styles from "@/Styles/JobList.module.css";
import JobDetailView from "@/components/ui/JobDetailView";
import JobLists from "@/components/ui/JobLists";
import { useState } from "react";
import Search from "antd/es/input/Search";

const JobListMain = async () => {
  const [selectedID, setSelectedID] = useState(null);
  const [searchData, setSearchData] = useState("");
  const handleSearch = (e: any) => {
    setSearchData(e.target.value);
  };
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
        <Search
          onClick={(e) => handleSearch(e)}
          placeholder="Search for jobs"
          enterButton="Search"
          size="large"
          style={{
            maxWidth: "500px",
            width: "100%",
          }}
        />
      </div>
      <div className={styles.JobList_div_main}>
        <JobLists searchData={searchData} setSelectedID={setSelectedID} />
        <JobDetailView selectedID={selectedID} />
      </div>
    </div>
  );
};

export default JobListMain;
