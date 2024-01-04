/* eslint-disable @next/next/no-async-client-component */
"use client";

import AdminDashboard from "@/components/ui/Dashboard/AdminDashboard";
import ApplicantDashboard from "@/components/ui/Dashboard/ApplicantDashboard";
import CompanyDashboard from "@/components/ui/Dashboard/CompanyDashboard";
import { getUserInfo } from "@/services/auth.service";

const Dashboard = () => {
  const { role } = getUserInfo() as any;

  console.log("data", role);
  return (
    <>
      {role == "applicant" ? (
        <ApplicantDashboard/>
      ) : role == "recruiter" ? (
        <CompanyDashboard />
      ) : (
        <AdminDashboard />
      )}
    </>
  );
};

export default Dashboard;
