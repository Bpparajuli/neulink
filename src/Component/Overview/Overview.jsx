import React from "react";
import SalesGraph from "../salegraph/saleOverview";
import "./overview.css";
const Overview = () => {
  return (
    <>
      <div className="overview">
        <h1 className="center"> Sales Overview -2023</h1>
        <div className="graph-box">
          <SalesGraph />
        </div>
      </div>
    </>
  );
};

export default Overview;
