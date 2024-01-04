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
