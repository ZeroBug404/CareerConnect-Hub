/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-async-client-component */
"use client";

import styles from "@/Styles/JobList.module.css";
import JobDetailView from "@/components/ui/JobDetailView";
import JobLists from "@/components/ui/JobLists";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Input, Space, Typography } from "antd"; // Import Spin from Ant Design
import { useEffect, useState } from "react";

const JobListMain = async () => {
  const [selectedID, setSelectedID] = useState(null);
  const [allData, setAllData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [jobTypeValue, setJobTypeValue] = useState("");
  const [experienceLevelValue, setExperienceLevelValue] = useState("");
  const [sortSalaryValue, setSortSalaryValue] = useState("");

  let search = "";

  const handleSearch = () => {
    fetch(
      `https://career-connect-hub-api.vercel.app/api/v1/jobs?searchTerm=${search}&jobType=${jobTypeValue}&experienceLevel=${experienceLevelValue}&salary=${sortSalaryValue}`
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
    fetch(`https://career-connect-hub-api.vercel.app/api/v1/jobs/${selectedID}`)
      .then((res) => res.json())
      .then((res) => {
        setSingleData(res.data);
      });
  }, [selectedID]);

  useEffect(() => {
    handleSearch();
  }, []);

  const sortSalaryItems: MenuProps["items"] = [
    {
      label: "Low to High",
      key: "asc",
    },
    {
      label: "High to Low",
      key: "desc",
    },
    {
      label: "Select Sort Salary",
      key: "",
    },
  ];

  const JobTypeItems: MenuProps["items"] = [
    {
      label: "Full-Time",
      key: "Full-time",
    },
    {
      label: "Part-Time",
      key: "Part-time",
    },
    {
      label: "Contract",
      key: "Contract",
    },
    {
      label: "Freelance",
      key: "Freelance",
    },
    {
      label: "Select Job Type",
      key: "",
    },
  ];

  const experienceLevelItems: MenuProps["items"] = [
    {
      label: "Entry",
      key: "Entry",
    },
    {
      label: "Intermediate",
      key: "Intermediate",
    },
    {
      label: "Senior",
      key: "Senior",
    },
    {
      label: "Select Experience Level",
      key: "",
    },
  ];

  const handleSortSalaryFilter = (e: any) => {
    setSortSalaryValue(e.key);
  };

  const handleJobTypeFilter = (e: any) => {
    setJobTypeValue(e.key);
  };

  const handleExperienceLevelFilter = (e: any) => {
    setExperienceLevelValue(e.key);
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
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "16px",
        }}
      >
        <Dropdown
          menu={{
            onClick: handleSortSalaryFilter,
            items: sortSalaryItems,
            selectable: true,
            defaultSelectedKeys: [""],
          }}
        >
          <Typography.Link style={{ marginLeft: '0px'}}>
            <Space>
              {sortSalaryValue ? sortSalaryValue : "Sort Salary"}

              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
        <Dropdown
          menu={{
            onClick: handleJobTypeFilter,
            items: JobTypeItems,
            selectable: true,
            defaultSelectedKeys: [""],
          }}
        >
          <Typography.Link style={{ marginLeft: '10px'}}>
            <Space>
              {jobTypeValue ? jobTypeValue : "Select Job Type"}

              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
        <Dropdown
          menu={{
            onClick: handleExperienceLevelFilter,
            items: experienceLevelItems,
            selectable: true,
            defaultSelectedKeys: [""],
          }}
        >
          <Typography.Link style={{ marginLeft: '10px'}}>
            <Space>
              {experienceLevelValue
                ? experienceLevelValue
                : "Select Experience Level"}

              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
        <Space.Compact style={{ width: "20%", marginLeft: '10px' }}>
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
