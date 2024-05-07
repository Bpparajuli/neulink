import React from "react";
import "./inventory.css";
const Inventory = () => {
  return (
    <>
      <div class="invt-cnt">
        <h1 className="invt-title">Inventory Overview</h1>
        <input type="date" className="date-input" />
        <button class="addStock-btn">Add Stock</button>
      </div>
      <div className="invt-crd">
        <div className="crd">
          <h4>Total Inventory </h4>
          <h5>15987</h5>
        </div>
        <div className="crd">
          <h4>Expiring Soon</h4>
          <h5>25</h5>
        </div>
        <div className="crd">
          <h4>Out Of Stock</h4>
          <h5>22</h5>
        </div>
      </div>
      <h5>Inventory Updates</h5>
      <p style={{ fontSize: "12px" }}>Last Updated on 12th jan 2023</p>
      <div className="invt-ttl">
        <div>
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Pricing Changes by the Ministry
          </h2>
        </div>
        <div className="invt-btn">
          <button>Ignore</button>
          <button>Review & Confirm</button>
          <button>Update All</button>
        </div>
      </div>
      <div className="invt-table">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>
                <h5>Medicine Names</h5>
                <p>Ingredients</p>
              </th>
              <th>Previous Price </th>
              <th></th>
              <th>Updated Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h6>PANTOP</h6>
                <p>MIDODRINE PANTOPARAZOLE</p>{" "}
              </td>
              <td>AED 130.00</td>
              <td>&gt;</td>
              <td>AED 134.00</td>
              <td>
                {" "}
                <button className="updt-btn">UpdatePrice</button>
              </td>
            </tr>
            <tr>
              <td>
                <h6>MIDOTAB</h6>
                <p>MIDODRINE HYDROCHLORIDE</p>{" "}
              </td>
              <td>AED 120.00</td>
              <td>&gt;</td>
              <td>AED 135.00</td>
              <td>
                {" "}
                <button className="updt-btn">UpdatePrice</button>
              </td>
            </tr>
            <tr>
              <td>
                <h6>CAMDOL</h6>
                <p>MIDODRINE HYDROCHLORIDE</p>{" "}
              </td>
              <td>AED 135.00</td>
              <td>&gt;</td>
              <td>AED 150.00</td>
              <td>
                <button className="updt-btn">UpdatePrice</button>
              </td>
            </tr>
            <tr>
              <td>
                <h6>PARACETAMOL</h6>
                <p>MIDODRINE HYDROCHLORIDE</p>{" "}
              </td>
              <td>AED 145.00</td>
              <td>&gt;</td>
              <td>AED 160.00</td>
              <td>
                {" "}
                <button className="updt-btn">UpdatePrice</button>
              </td>
            </tr>
            <tr>
              <td>
                <h6>ICANZETOL</h6>
                <p>MIDODRINE HYDROCHLORIDE</p>{" "}
              </td>
              <td>AED 115.00</td>
              <td>&gt;</td>
              <td>AED 135.00</td>
              <td>
                {" "}
                <button className="updt-btn">UpdatePrice</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h4>Quick Links </h4>
        <button className="qck-btn">View All inventory &gt;</button>
        <button className="qck-btn">Expiring Soon &gt;</button>
        <button className="qck-btn">Expired &gt;</button>
        <button className="qck-btn">Viw the latest Minisrty List &gt;</button>
      </div>
    </>
  );
};

export default Inventory;
