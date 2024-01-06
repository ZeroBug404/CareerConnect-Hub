//
"use client";
import styles from "@/Styles/AdminDashboard.module.css";
import {
  dataAreaChart,
  dataBarChart2,
  dataGeoChart,
  dataLineChart,
  dataPieChart2,
  dataScatterChart,
  optionsAreaChart,
  optionsBarChart2,
  optionsLineChart,
  optionsPieChart2,
  optionsScatterChart,
} from "@/assets/data/dashboardData";
import { Chart } from "react-google-charts";

const ApplicantDashboard = () => {
  return (
    <div>
      <p
        style={{
          padding: "10px 5px",
          fontSize: "18px",
          fontWeight: 700,
          color: "#1f5da0",
          textAlign: "center",
        }}
      >
        Applicant Dashboard
      </p>
      <div className={styles.dashboard_container}>
        <div style={{ width: "100%", margin: "5px" }}>
          <Chart
            chartType="PieChart"
            data={dataPieChart2}
            options={optionsPieChart2}
            // width={"100%"}
            height={"400px"}
          />
        </div>
        <div style={{ width: "100%", margin: "5px" }}>
          <Chart
            chartType="AreaChart"
            // width="100%"
            height="400px"
            data={dataAreaChart}
            options={optionsAreaChart}
          />
        </div>
      </div>
      <div className={styles.dashboard_container}>
        <div style={{ width: "100%", margin: "5px" }}>
          <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={dataBarChart2}
            options={optionsBarChart2}
            chartPackages={["corechart", "controls"]}
            controls={[
              {
                controlType: "NumberRangeFilter",
                options: {
                  filterColumnIndex: 1,
                  minValue: 0,
                  maxValue: 60,
                },
              },
            ]}
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
            chartType="ScatterChart"
            width="100%"
            height="400px"
            data={dataScatterChart}
            options={optionsScatterChart}
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
    </div>
  );
};

export default ApplicantDashboard;

