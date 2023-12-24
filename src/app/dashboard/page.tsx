/* eslint-disable @next/next/no-async-client-component */
"use client";

import { getUserInfo } from "@/services/auth.service";
import { useEffect, useState } from "react";

const Dashboard = async () => {
  const [role, setRole] = useState("");
  
  useEffect(() => {
    const res = getUserInfo();
    setRole(res?.role);
  }, []);

  return (
    <div>
      {role == "user" ? (
        <>Job Seeker</>
      ) : role == "user" ? (
        <>Recruiter</>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dashboard;
