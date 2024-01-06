/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-async-client-component */
"use client";

import styles from "@/Styles/JobList.module.css";
import JobDetailView from "@/components/ui/JobDetailView";
import JobLists from "@/components/ui/JobLists";
import { useJobQuery, useJobSearchQuery } from "@/redux/api/jobApi";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Input, Space, Typography } from "antd"; // Import Spin from Ant Design
import { useEffect, useState } from "react";

const JobListMain = () => {
  const [selectedID, setSelectedID] = useState("");
  const [jobTypeValue, setJobTypeValue] = useState("");
  const [experienceLevelValue, setExperienceLevelValue] = useState("");
  const [sortSalaryValue, setSortSalaryValue] = useState("");
  const [searchSortData, setSearchSortData] = useState({
    search: "",
    jobType: "",
    experienceLevelValue: "",
    sortSalaryValue: "",
  });

  let search = "";

  const { data, isLoading } = useJobSearchQuery(searchSortData);
  const { data: singleJobData, isLoading: singleJobDataLoading } =
    useJobQuery(selectedID);

  const handleSearch = () => {
    setSearchSortData({
      search: search,
      jobType: "",
      experienceLevelValue: "",
      sortSalaryValue: "",
    });
  };

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    search = e.target.value;
  };

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
      label: "Select Experience",
      key: "",
    },
  ];

  const handleSortSalaryFilter = (e: any) => {
    setSearchSortData({
      search: search,
      jobType: jobTypeValue,
      experienceLevelValue: experienceLevelValue,
      sortSalaryValue: e.key,
    });
    setSelectedID(selectedID);

    setSortSalaryValue(e.key);
  };

  const handleJobTypeFilter = (e: any) => {
    setSearchSortData({
      search: search,
      jobType: e.key,
      experienceLevelValue: experienceLevelValue,
      sortSalaryValue: sortSalaryValue,
    });
    setSelectedID(selectedID);

    setJobTypeValue(e.key);
  };

  const handleExperienceLevelFilter = (e: any) => {
    setSearchSortData({
      search: search,
      jobType: jobTypeValue,
      experienceLevelValue: e.key,
      sortSalaryValue: sortSalaryValue,
    });
    setSelectedID(selectedID);

    setExperienceLevelValue(e.key);
  };
  return (
    <div
      style={{
        marginBottom: "2vw",
      }}
    >
      <div className={styles.JobList_search_filter_main}>
        <div>
          <Dropdown
            menu={{
              onClick: handleSortSalaryFilter,
              items: sortSalaryItems,
              selectable: true,
              defaultSelectedKeys: [""],
            }}
          >
            <Typography.Link style={{ marginLeft: "0px" }}>
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
            <Typography.Link style={{ marginLeft: "10px" }}>
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
            <Typography.Link style={{ marginLeft: "10px" }}>
              <Space>
                {experienceLevelValue
                  ? experienceLevelValue
                  : "Select Experience"}

                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
        </div>
        <Space.Compact className={styles.JobList_search_box_main}>
          <Input placeholder="Search for jobs" onChange={onChangeHandler} />
          <Button type="primary" onClick={handleSearch}>
            Search
          </Button>
        </Space.Compact>
      </div>
      {data && data?.data?.data?.length > 0 ? (
        <div className={styles.JobList_div_main}>
          <div className={styles.JobList_div_left}>
            <JobLists setSelectedID={setSelectedID} allData={data.data.data} />
          </div>
          <div className={styles.JobList_div_right}>
            <JobDetailView singleData={singleJobData?.data} />
          </div>
        </div>
      ) : (
        <div className={styles.JobList_div_main}>No Data found.</div>
      )}
    </div>
  );
};

export default JobListMain;
