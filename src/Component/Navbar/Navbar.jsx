import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
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
  return (
    <>
      <div className="menu">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">#</Navbar.Brand>
          <Navbar.Toggle bg="dark" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/overview">Overview</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/sales">Sales</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/inventory">Inventory</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/reports">Reports</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/suppliers">Suppliers</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/patients">Patients</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/insurance">Insurance</Link>
              </Nav.Link>
              <Nav.Link>
                <SearchBox />
              </Nav.Link>
            </Nav>
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
