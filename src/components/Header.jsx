import React from 'react'
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./header.css";
function Header() {
  return (
    <div><nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Nestofix
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              About
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle active"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Contact us
            </a>
            <ul className="dropdown-menu">
              <li>
                < a className="dropdown-item" href="#"  style={{display:"flex",justifyContent:"space-evenly"}}>
                <MailIcon style={{color:"#efa423"}}/>  Email  
                </a>
              </li>
              <li>
                < a className="dropdown-item" href="#"  style={{display:"flex",justifyContent:"space-evenly"}}>
              <LocalPhoneIcon style={{color:"#198754"}}/>      Phone
                </a>
              </li>
               
            </ul>
          </li>
           
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control mei-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            /> 
          <button className="btn btn-outline-success" type="submit">
           <ZoomInIcon/>
          </button>
        </form>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Header