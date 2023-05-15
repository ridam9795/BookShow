import React, { useEffect, useRef } from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SiteState } from "../Context/BookShowProvider";
import Login from "./Login";
import Registration from "./Registration";

function Header() {
  const { setMovies, setEvents, setSports, setActivities ,loggedInUser,setLoggedInUser} = SiteState();
   
  const [isOpen, setIsOpen] = React.useState(false);
  const search = useRef();
  const navigate = useNavigate();

  axios.defaults.baseURL = "http://localhost:8000";
  let activestyle = {
    color: "#fff",
    borderBottom: "1px solid white",
    paddingTop: "3px",
  };
  useEffect(()=>{
   verifyUser()
  },[])
  const verifyUser= async ()=>{
         let currUser=JSON.parse(localStorage.getItem("user"))
         if(currUser){
            console.log(currUser.username)
            setLoggedInUser(currUser.username)
         }else{
            setLoggedInUser("")
         }
  }
  const handleLogout=()=>{
    localStorage.removeItem("user")
    window.location.reload()


  }
  const handleSearch = async () => {
    let val = search.current.value;
    navigate(`/search/?name=${val}`);
    try {
      let searched = await axios.get(`/search/?name=${val}`);
      const { movies, events, activities, sports } = searched.data;
      setMovies(movies);
      setEvents(events);
      setActivities(activities);
      setSports(sports);
    } catch (err) {
      console.log(err);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
      handleSearch();
    }
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
              <form className="form-group my-2 mx-2 d-flex">
                <input
                  className="form-control mx-2 input-lg "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  name="name"
                  ref={search}
                  onKeyDown={handleKeyPress}
                />
                <button
                  className="btn btn-success my-2 my-sm-0"
                  type="button"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </form>
            </NavItem>
            {loggedInUser!=""?(<NavItem><div className="dropdown my-2">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <span className="avatar avatar-md avatar-primary">
    <span className="avatar-initials rounded-circle mx-2">{loggedInUser}</span>
  </span>

  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" onClick={handleLogout} href="#">Logout</a></li>
  </ul>
</div></NavItem>):(<> <NavItem>
              <button type="button"  className="btn btn-danger my-2 mx-2" data-bs-toggle="modal" data-bs-target="#loginModal">
                Sign in
              </button>

            </NavItem>
            <NavItem>
              <button type="button" className="btn btn-danger my-2" data-bs-toggle="modal" data-bs-target="#registrationModal">
                Sign up
              </button>
            </NavItem></>)}
           
          </Nav>
        </Collapse>
      </Navbar>

     
      <HomeCarousel />
      
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-center" id="loginModalLabel">Login</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Login/>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="registrationModal" tabIndex="-1" aria-labelledby="registrationModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="registrationModalLabel" >Register</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Registration />
            </div>
          
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default Header;
