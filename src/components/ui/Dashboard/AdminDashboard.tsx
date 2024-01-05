"use client";
import styles from "@/Styles/AdminDashboard.module.css";
import {
  dataAreaChart,
  dataBar,
  dataBarChart2,
  dataGeoChart,
  dataLineChart,
  dataLineChart1,
  dataPieChart,
  dataPieChart2,
  optionsAreaChart,
  optionsBar,
  optionsBarChart2,
  optionsLineChart,
  optionsLineChart1,
  optionsPieChart,
  optionsPieChart2,
} from "@/assets/data/dashboardData";
import { Chart } from "react-google-charts";

const AdminDashboard = () => {
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
        Admin Dashboard
      </p>
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

export default AdminDashboard;
