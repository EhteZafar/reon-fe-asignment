import React from "react";
import { Route, Routes } from "react-router-dom";
import Chart from "../pages/Chart";
import Table from "../pages/Table";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chart" element={<Chart />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  );
};

export default Router;
