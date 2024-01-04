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
    },
    {
      name: "Company B",
      numberOfEmployees: 868,
      createdAt: 967,
      size: 1506,
    },
    {
      name: "Company C",
      numberOfEmployees: 1397,
      createdAt: 1098,
      size: 989,
    },
    {
      name: "Company D",
      numberOfEmployees: 1480,
      createdAt: 1200,
      size: 1228,
    },
    {
      name: "Company E",
      numberOfEmployees: 1520,
      createdAt: 1108,
      size: 1100,
    },
    {
      name: "Company F",
      numberOfEmployees: 1400,
      createdAt: 680,
      size: 1700,
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
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompanyChartCompany;
