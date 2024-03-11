import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ComposedChart,
  Line,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import {
  setDataRequest,
  setDataSuccess,
  setDataFailure,
} from "../redux/actions/dataAction";
import fakeData from "../data/data";
import { Link } from "react-router-dom";

const Chart = () => {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(setDataRequest());
    try {
      dispatch(setDataSuccess(fakeData));
    } catch (error) {
      dispatch(setDataFailure(error.message));
    }
  }, [dispatch]);

  useEffect(() => {
    console.log("dataState", dataState);
  }, [dataState]);

  return (
    <div>
      <h1>Chart</h1>
      <ComposedChart width={500} height={300} data={dataState.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        {dataState.meta.map((meta, index) => {
          if (meta.chartType === "line") {
            return (
              <Line
                yAxisId={meta.axis === 1 ? "left" : "right"}
                type="monotone"
                dataKey={meta.field}
                stroke={meta.color}
                key={index}
              />
            );
          } else if (meta.chartType === "bar") {
            return (
              <Bar
                yAxisId={meta.axis === 1 ? "left" : "right"}
                dataKey={meta.field}
                fill={meta.color}
                key={index}
              />
            );
          } else {
            return null;
          }
        })}
      </ComposedChart>
      <Link to="/table" target="_blank">
        <button>See Table</button>
      </Link>
    </div>
  );
};

export default Chart;
