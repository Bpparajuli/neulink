import React from "react";
import "./error.css";
const Error = () => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="text-center error">
          <h1>Opps!! Error 404 !!</h1>
          <p>Page Not Found</p>
        </div>
      </div>
    </>
  );
};
export default Error;
