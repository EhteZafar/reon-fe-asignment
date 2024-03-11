import React from "react";
import { useSelector } from "react-redux";
import { CSVLink } from "react-csv";
import { useEffect } from "react";

const Table = () => {
  const dataState = useSelector((state) => state.data);

  useEffect(() => {
    console.log("dataState", dataState);
  }, [dataState]);

  if (dataState.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Avg</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {dataState.data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.avg}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CSVLink data={dataState.data} filename={"my-data.csv"}>
        Download Data
      </CSVLink>
    </div>
  );
};

export default Table;
