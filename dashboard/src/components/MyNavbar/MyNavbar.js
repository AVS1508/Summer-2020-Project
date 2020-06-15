import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import styles from "./MyNavbar.module.css";

export default () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="mr-auto">
          <NavDropdown title="Account Management System">
            <NavDropdown.Item href="#AM/1.1">AM Action 1</NavDropdown.Item>
            <NavDropdown.Item href="#AM/1.2">AM Action 2</NavDropdown.Item>
            <NavDropdown.Item href="#AM/1.3">AM Action 3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Sales/Transactions Register">
            <NavDropdown.Item href="#AM/1.1">SR Action 1</NavDropdown.Item>
            <NavDropdown.Item href="#AM/1.2">SR Action 2</NavDropdown.Item>
            <NavDropdown.Item href="#AM/1.3">SR Action 3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Predictive Analytics/Trends">
            <NavDropdown.Item href="#AM/1.1">PA Action 1</NavDropdown.Item>
            <NavDropdown.Item href="#AM/1.2">PA Action 2</NavDropdown.Item>
            <NavDropdown.Item href="#AM/1.3">PA Action 3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Payroll System & Financial Ledger">
            <NavDropdown.Item href="#AM/1.1">PF Action 1</NavDropdown.Item>
            <NavDropdown.Item href="#AM/1.2">PF Action 2</NavDropdown.Item>
            <NavDropdown.Item href="#AM/1.3">PF Action 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <NavDropdown
        alignRight
        title={
          <img
            className={styles.userImage}
            src={require("../../assets/professional-me.jpg")}
            alt="User Account"
          />
        }
      >
        <NavDropdown.Item href="#AM/1.1">User Action 1</NavDropdown.Item>
        <NavDropdown.Item href="#AM/1.2">User Action 2</NavDropdown.Item>
        <NavDropdown.Item href="#AM/1.3">User Action 3</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
};
