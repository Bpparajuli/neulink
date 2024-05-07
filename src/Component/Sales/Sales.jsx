import React from "react";
import "./sales.css";
const Sales = () => {
  return (
    <div className="sales-header">
      <h4 className="sales-1">Sale 1</h4>
      <h4 className="patient-name">Patient Name</h4>
      <button className="addsale-button">+ Add Sales</button>
      <button className="insurance-button">
        Insurance Sale
        <label for="toggle-button" class="toggle-button">
          <input type="checkbox" id="toggle-button" />
          <span class="toggle-switch"></span>
        </label>
      </button>
    </div>
  );
};

export default Sales;
