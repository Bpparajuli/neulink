import React, { useState } from "react";
import "./patients.css";
import SalesTable from "../SalesTable/SalesTable";
import Footer from "../Footer/footer";

const Patients = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleCheckboxChange = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div>
      <div className="sales-page">
        <div className="sales-header">
          <h4 className="sales-1">Sale 1</h4>
          <h4 className="patient-name">Patient Name</h4>
          <button className="addsale-button">+ Add Sales</button>
          <button className="insurance-button">
            Insurance Sale
            <label htmlFor="toggle-button" className="toggle-button">
              <input
                type="checkbox"
                id="toggle-button"
                checked={isContentVisible}
                onChange={handleCheckboxChange}
              />
              <span className="toggle-switch" />
            </label>
          </button>
        </div>
        <hr />
        <div className="sale-title updt">
          <div className="check-clmn">
            <div>
              <h1>Product List</h1>
            </div>
            <div className="inputButton">
              <input
                type="text"
                placeholder="Search for Product| Enter Bar Code| Scan Barcode"
              />
              <button className="clear">Clear</button>
            </div>
            <div>
              <button className="removeAll">Remove All</button>
            </div>
            <div className="clmn">
              <SalesTable />
              <Footer />
            </div>
          </div>
          {isContentVisible && (
            <div className="toggleable-content">
              <form>
                <div className="form-group">
                  <label htmlFor="emirates-id">
                    Emirates ID<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="emirates-id"
                    name="emirates-id"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="erx-number">
                    ERX Number<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="erx-number"
                    name="erx-number"
                    required
                  />
                </div>
                <button type="submit" class="insrc-btn">
                  Submit & Retrive items
                </button>
                <button
                  className="print-btn"
                  type="button"
                  onClick={() => window.print()}
                >
                  Print Prescription
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Patients;
