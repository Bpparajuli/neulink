import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import SearchBox from "../Search/SearchBox.jsx";
import { Route, Routes } from "react-router-dom";
import "./navbar.css";
import Sales from "../Sales/Sales.jsx";
import Error from "../Error/Error.jsx";
import Inventory from "../Inventory/Inventory.jsx";
import Dashboard from "../Dashboard/Dashboard.jsx";
import Overview from "../Overview/Overview.jsx";
import Reports from "../Reports/Reports.jsx";
import Suppliers from "../Suppliers/Suppliers.jsx";
import Patients from "../Patients/Patients.jsx";
import Insurance from "../Insurance/Insurance.jsx";

const Menu = () => {
  const location = useLocation();

  return (
    <>
      <div className="menu">
        <Navbar className="navbar">
          <Navbar.Brand href="/">#</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="menu-item">
              <Nav.Link
                className={location.pathname === "/overview" ? "active" : ""}
              >
                <Link to="/overview">Overview</Link>
              </Nav.Link>
              <Nav.Link
                className={location.pathname === "/sales" ? "active" : ""}
              >
                <Link to="/sales">Sales</Link>
              </Nav.Link>
              <Nav.Link
                className={location.pathname === "/inventory" ? "active" : ""}
              >
                <Link to="/inventory">Inventory</Link>
              </Nav.Link>
              <Nav.Link
                className={location.pathname === "/reports" ? "active" : ""}
              >
                <Link to="/reports">Reports</Link>
              </Nav.Link>
              <Nav.Link
                className={location.pathname === "/suppliers" ? "active" : ""}
              >
                <Link to="/suppliers">Suppliers</Link>
              </Nav.Link>
              <Nav.Link
                className={location.pathname === "/patients" ? "active" : ""}
              >
                <Link to="/patients">Patients</Link>
              </Nav.Link>
              <Nav.Link
                className={location.pathname === "/insurance" ? "active" : ""}
              >
                <Link to="/insurance">Insurance</Link>
              </Nav.Link>
            </Nav>
            <Nav.Link>
              <SearchBox />
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/*" element={<Error />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
};

export default Menu;
