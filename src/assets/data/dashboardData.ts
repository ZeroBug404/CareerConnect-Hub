export const dataBar = [
  ["Company", "Active Hiring", "Total Hired"],
  ["Company A", 39, 50],
  ["Company B", 17, 17],
  ["Company C", 8, 46],
  ["Company D", 10, 19],
  ["Company E", 13, 10],
  ["Company F", 13, 25],
];

export const optionsBar = {
  chart: {
    title: "Company Review",
    subtitle: "Name, Job Hiring, and Total Hired",
  },
};

export const dataPieChart = [
  ["Company", "Number Of Employees"],
  ["Company A", 100],
  ["Company B", 170],
  ["Company C", 460],
  ["Company D", 190],
  ["Company E", 100],
  ["Company F", 250],
];

export const optionsPieChart = {
  title: "Number of Employees of Companies",
  is3D: true,
  animation: {
    duration: 1000,
    easing: "out",
  },
};

export const dataGeoChart = [
  ["Companies", "Job Applied"],
  ["Bangladesh", 80],
  ["Germany", 50],
  ["United States", 75],
  ["Brazil", 50],
  ["Canada", 65],
  ["France", 60],
  ["RU", 70],
];

export const dataLineChart = [
  ["x", "Company A", "Company B", "Company C"],
  [0, 0, 0, 0],
  [1, 10, 5, 7],
  [2, 23, 8, 15],
  [3, 17, 5, 9],
  [4, 18, 13, 10],
  [5, 9, 6, 5],
  [6, 11, 5, 3],
  [7, 27, 21, 19],
];

export const optionsLineChart = {
  hAxis: {
    title: "Time",
  },
  vAxis: {
    title: "Popularity",
  },
  series: {
    1: { curveType: "function" },
  },
};

export const dataLineChart1 = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const optionsLineChart1 = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

//------ Applicant

export const dataAreaChart = [
  ["Year", "Front-end developer", "Data scientist", "UX designer"],
  ["2019", 1000, 400, 100],
  ["2020", 1170, 460, 540],
  ["2021", 660, 1120, 320],
  ["2022", 1030, 540, 400],
  ["2023", 1000, 700, 250],
];

export const optionsAreaChart = {
  isStacked: true,
  height: 300,
  legend: { position: "top", maxLines: 3 },
  vAxis: { minValue: 0 },
};

export const dataPieChart2 = [
  ["Status", "Number Of Candidates"],
  ["Pending", 100],
  ["Rejected", 170],
  ["Hired", 460],
];

export const optionsPieChart2 = {
  title: "Number of Candidates Success Rate",
  // is3D: true,
  animation: {
    duration: 1000,
    easing: "out",
    startup: true,
  },
};

export const dataScatterChart = [
  ["Applied", "Response"],
  [100, 50],
  [80, 33],
  [20, 10],
  [250, 100],
  [130, 90],
  [300, 213],
];

export const optionsScatterChart = {
  title: "Applied vs. Response comparison",
  crosshair: { trigger: "both", orientation: "both" },
  trendlines: {
    0: {
      type: "polynomial",
      degree: 3,
      visibleInLegend: true,
      labelInLegend: "Trend",
    },
  },
};

export const dataBarChart2 = [
  ["Title", "Active Hiring"],
  ["Web Developer", 12],
  ["Software Engineer", 20],
  ["Full Stack Developer", 7],
  ["UI/UX Developer", 34],
  ["Data Science", 22],
  ["Cloud Engineer", 3],
  ["Mobile Developer", 42],
  ["DevOps Engineer", 33],
];

export const optionsBarChart2 = {
  hAxis: { minValue: 0, maxValue: 60 },
  chartArea: { top: 0, right: 0, bottom: 0 },
};