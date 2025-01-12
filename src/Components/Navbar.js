// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
 // To use React Router for navigation

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* Logo or Brand Name */}
        <Navbar.Brand as={Link} to="/">AgriHub</Navbar.Brand>

        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* Home Link */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {/* Features Dropdown */}
            <NavDropdown title="Features" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/crop-management">Crop Management</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/weather-updates">Weather Updates</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/market-insights">Market Insights</NavDropdown.Item>
            </NavDropdown>

            {/* Services Link */}
            <Nav.Link as={Link} to="/services">Services</Nav.Link>

            {/* About Link */}
            <Nav.Link as={Link} to="/about">About</Nav.Link>

            {/* Contact Link */}
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

            {/* User Dropdown (for login or profile options) */}
            <NavDropdown title="User" id="user-nav-dropdown">
              <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
