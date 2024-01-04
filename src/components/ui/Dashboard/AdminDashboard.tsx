"use client";
import styles from "@/Styles/AdminDashboard.module.css";
import {
  dataBar,
  dataPieChart,
  optionsBar,
  optionsPieChart,
} from "@/assets/data/dashboardData";
import { Chart } from "react-google-charts";

const AdminDashboard = () => {
  return (
    <div className={styles.dashboard_container}>
      <div style={{ width: "100%", margin: "5px" }}>
        <Chart
          chartType="Bar"
          // width="100%"
          height="400px"
          data={dataBar}
          options={optionsBar}
        />
      </div>
      <div style={{ width: "100%", margin: "5px" }}>
        <Chart
          chartType="PieChart"
          data={dataPieChart}
          options={optionsPieChart}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
