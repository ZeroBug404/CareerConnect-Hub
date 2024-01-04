"use client";
import styles from "@/Styles/AdminDashboard.module.css";
import {
  dataBar,
  dataGeoChart,
  dataLineChart,
  dataLineChart1,
  dataPieChart,
  optionsBar,
  optionsLineChart,
  optionsLineChart1,
  optionsPieChart,
} from "@/assets/data/dashboardData";
import { Chart } from "react-google-charts";

const CompanyDashboard = () => {
  return (
    <div>
      <p
        style={{
          padding: "10px 5px",
          fontSize: "18px",
          fontWeight: 700,
          color: "#1f5da0",
          textAlign: 'center'
        }}
      >
        Company Dashboard
      </p>
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
      <div className={styles.dashboard_container}>
        <div style={{ width: "100%", margin: "5px" }}>
          <Chart
            chartEvents={[
              {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                  const chart = chartWrapper.getChart();
                  const selection = chart.getSelection();
                  if (selection.length === 0) return;
                  const region = dataGeoChart[selection[0].row + 1];
                  console.log("Selected : " + region);
                },
              },
            ]}
            chartType="GeoChart"
            width="100%"
            height="300px"
            data={dataGeoChart}
          />
        </div>
      </div>
      <div className={styles.dashboard_container}>
        <div style={{ width: "100%", margin: "5px" }}>
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={dataLineChart}
            options={optionsLineChart}
          />
        </div>
        <div style={{ width: "100%", margin: "5px" }}>
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={dataLineChart1}
            options={optionsLineChart1}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
