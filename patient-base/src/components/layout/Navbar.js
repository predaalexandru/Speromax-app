import React from 'react'
import {Link} from 'react-router-dom'
import { useFirebase } from "react-redux-firebase";

/**
* @author
* @function Navbar
**/

const Navbar = () => {
  const firebase = useFirebase();
  return(
    <nav className="navbar navbar-expand-sm navbar-light bg-white">
  <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={require("../../assets/sigla.svg")} height="50px" alt="Logo"/>
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="dropdownContent">
          <span className="navbar-toggler-icon"></span>
      </button>

    <div className="collapse navbar-collapse" id="dropdownContent">
      <ul className="navbar-nav mr-auto"></ul>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item">
          <Link to="/patientForm" className="btn btn-primary mr-3">
            Add Patient
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-a dropdown-toggle"
            href="#"
            id="navbarDropdown"
            data-toggle="dropdown"
          >
            <img src={ require("../../assets/admin.svg")} className="rounded-circle" height="30px" alt="admin" />
            <span className="ml-2 navbar-text">Admin</span>
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Profile
            </a>
            <a className="dropdown-item" href="#" onClick={() => firebase.logout()}>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
   )

 }

export default Navbar