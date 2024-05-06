import React from "react";
import { Line } from "react-chartjs-2";
import { SaleData } from "./SaleData.jsx";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesGraph = () => {
  const options = {};
  return (
    <>
      <Line options={options} data={SaleData} />
    </>
  );
};

export default SalesGraph;
