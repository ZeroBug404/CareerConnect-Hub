"use client";

import { useCompaniesQuery } from "@/redux/api/companyApi";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CompanyChartPage = () => {
  const query: Record<string, any> = {};
  const { data, isLoading } = useCompaniesQuery({ ...query });
  const companyData = data?.data

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Company Chart</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : companyData && companyData.length ? (
        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            <AreaChart
              data={companyData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="numberOfEmployees"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default CompanyChartPage;
