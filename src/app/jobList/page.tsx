/* eslint-disable @next/next/no-async-client-component */
"use client";

import styles from "@/Styles/JobList.module.css";
import JobDetailView from "@/components/ui/JobDetailView";
import JobLists from "@/components/ui/JobLists";
import { useState } from "react";
import Search from "antd/es/input/Search";

const JobList = () => {
  const [selectedID, setSelectedID] = useState(0);
  return (
    <div style={{
        marginBottom: "2vw",
      }}>
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
        <JobLists setSelectedID={setSelectedID} />
        <JobDetailView selectedID={selectedID} />
      </div>
    </div>
  );
};

export default JobList;
