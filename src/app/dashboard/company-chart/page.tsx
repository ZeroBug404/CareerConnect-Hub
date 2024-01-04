"use client";

import { useCompaniesQuery } from "@/redux/api/companyApi";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

const CompanyChartCompany = () => {
  const query: Record<string, any> = {};
  const { data, isLoading } = useCompaniesQuery({ ...query });
  const companyData = data?.data;
  console.log(companyData);

  const MockData = [
    {
      name: "Company A",
      numberOfEmployees: 590,
      createdAt: 800,
      size: 1400,
      location: "Dhaka"
    },
    {
      name: "Company B",
      numberOfEmployees: 868,
      createdAt: 967,
      size: 1506,
      location: "Chittagong"
    },
    {
      name: "Company C",
      numberOfEmployees: 1397,
      createdAt: 1098,
      size: 989,
      location: "Khulna"
    },
    {
      name: "Company D",
      numberOfEmployees: 1480,
      createdAt: 1200,
      size: 1228,
      location: "Barishal"
    },
    {
      name: "Company E",
      numberOfEmployees: 1520,
      createdAt: 1108,
      size: 1100,
      location: "Rangpur"
    },
    {
      name: "Company F",
      numberOfEmployees: 1400,
      createdAt: 680,
      size: 1700,
      location: "Jessore"
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: 300,
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Company Chart</h1>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={MockData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="size"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="createdAt" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="numberOfEmployees" stroke="#ff7300" />
          <Scatter dataKey="location" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompanyChartCompany;
