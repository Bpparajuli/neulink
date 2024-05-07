import React from "react";
import "./sales.css";
import SalesTable from "../SalesTable/SalesTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons/faCreditCard";
import {
  faMobile,
  faPause,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

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
            <label for="toggle-button" class="toggle-button">
              <input type="checkbox" id="toggle-button" />
              <span class="toggle-switch"></span>
            </label>
          </button>
        </div>
        <div className="sale-title">
          <div>
            {" "}
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
        </div>
        <div className="footer">
          <div className="footer-left">
            <div className="footer-up">
              <div>
                <h6>
                  Co pay: <span style={{ fontWeight: "400" }}> AED 0.00</span>
                </h6>
              </div>
              <div>
                <h6>
                  Discount: <span style={{ fontWeight: "400" }}> AED 0.00</span>
                </h6>
              </div>
              <div>
                <h6>
                  Net Amount:{" "}
                  <span style={{ fontWeight: "400" }}> AED 0.00</span>
                </h6>
              </div>
            </div>
            <div className="footer-down" style={{ fontWeight: "600" }}>
              <div>Total Amount:</div>
              <div>AED 0.00</div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-up">
              <button>
                <FontAwesomeIcon icon={faCreditCard} /> Continue with Card
              </button>
              <button>
                <FontAwesomeIcon icon={faSackDollar} />
                Continue with Cash
              </button>
            </div>
            <div className="footer-down">
              <button>
                {" "}
                <FontAwesomeIcon icon={faMobile} /> Online Pay
              </button>
              <button>
                <FontAwesomeIcon icon={faPause} /> Hold Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
