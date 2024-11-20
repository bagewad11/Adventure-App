import React from "react";

import FamouseCitys from "./FamouseCitys";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  nav-color "
        style={{ height: "70px" }}
      >
        <div className="container-fluid  ">
         <Link to={'/'} className="navbar-brand" href="#">
         Adventure App</Link>  
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/hotelbooking'} className="nav-link active" aria-current="page" href="#">
                Your Bookings</Link>  
                
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Friends and Family
                </a>
              </li> */}

              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <button class="btn btn navbtn" type="submit">User</button>
                </a>
                <ul className="dropdown-menu dropdownlen">
                  <li>
                  
                  <Link to="/signIn"  className="dropdown-item" href="#">
                  Sign In
                     </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                  <Link to="/register"  className="dropdown-item" href="#">
                  Sign Up
                     </Link>
                  </li>
                  
                  
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <FamouseCitys /> */}
    </>
  );
};

export default Navigation;
