import React from "react";
import "./sales.css";
import SalesTable from "../SalesTable/SalesTable";
import Footer from "../Footer/footer";

const Sales = () => {
  return (
    <>
      <div className="sales-page">
        <div className="sales-header">
          <h4 className="sales-1">Sale 1</h4>
          <h4 className="patient-name">Patient Name</h4>
          <button className="addsale-button">+ Add Sales</button>
          <button className="insurance-button">
            Insurance Sale
            <label for="toggle-button" className="toggle-button">
              <input type="checkbox" id="toggle-button" />
              <span className="toggle-switch"></span>
            </label>
          </button>
        </div>
        <hr></hr>
        <div className="sale-title">
          <div>
            <h1>Product List</h1>
          </div>
          <div className="inputButton">
            <input
              type="text"
              placeholder="Search for Product| Enter Bar Code| Scan Barcode"
            />
            <button className="clear">clear</button>
          </div>
          <div>
            {" "}
            <button className="removeAll">Remove All</button>
          </div>
        </div>
        <div>
          <SalesTable />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Sales;
