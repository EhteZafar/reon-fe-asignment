const fakeData = {
  data: [
    { date: "11-08-2023", name: "name-1", avg: 5, total: 10 },
    { date: "12-08-2023", name: "name-2", avg: 8, total: 15 },
    { date: "13-08-2023", name: "name-3", avg: 12, total: 12 },
    { date: "14-08-2023", name: "name-4", avg: 9, total: 9 },
    { date: "15-08-2023", name: "name-5", avg: 3, total: 17 },
    { date: "16-08-2023", name: "name-6", avg: 10, total: 14 },
  ],
  meta: [
    { field: "avg", axis: 1, color: "red", chartType: "line" },
    { field: "total", axis: 3, color: "green", chartType: "bar" },
  ],
};

export default fakeData;
