import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons/faCreditCard";
import {
  faMobile,
  faPause,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
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
                Net Amount: <span style={{ fontWeight: "400" }}> AED 0.00</span>
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
    </>
  );
};
export default Footer;
