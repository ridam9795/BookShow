import React from "react";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarBrand,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import HomeCarousel from "./HomeCarousel";
import Filter from "./Base";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  let activestyle = {
    color: "#fff",
    borderBottom: "1px solid white",
    paddingTop: "3px",
  };

  return (
    <div
      style={{
        display: "block",
      }}
    >
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/" className="text-white">
          BOOK<span className="text-danger">SHOW</span>
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                style={({ isActive }) => (isActive ? activestyle : undefined)}
                to="/"
                className="navitem mx-2 text-decoration-none inactivelink"
              >
                Movies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={({ isActive }) => (isActive ? activestyle : undefined)}
                to="/events"
                className="navitem mx-2 text-decoration-none inactivelink"
              >
                Events
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={({ isActive }) => (isActive ? activestyle : undefined)}
                to="/sports"
                className="navitem mx-2 text-decoration-none inactivelink"
              >
                Sports
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={({ isActive }) => (isActive ? activestyle : undefined)}
                to="/activities"
                className="navitem mx-2 text-decoration-none inactivelink"
              >
                Activities
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="mr-3" navbar style={{ marginLeft: "auto" }}>
            <NavItem>
              <form className="form-group my-2 mx-5 d-flex">
                <input
                  className="form-control mx-2 input-lg "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-success my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
            </NavItem>
            <NavItem>
              <button type="button" className="btn btn-danger mx-2 my-2">
                Sign In
              </button>
            </NavItem>
            <NavItem>
              <button type="button" className="btn btn-danger my-2">
                Sign Up
              </button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <HomeCarousel />
    </div>
  );
}

export default Header;
