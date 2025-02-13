import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './img/logo.png';
import { IoSearch } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showAddButton, setShowAddButton] = useState(false);
  const [showCrudDiv, setShowCrudDiv] = useState(false);

  const sb = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setShowSearchBar(!showSearchBar); // Toggle search bar visibility
  };

  const Togglebtn = (e) => {
    setShowAddButton(e.target.checked); // Update state based on checkbox state
  };

  const toggleCrudDiv = () => {
    setShowCrudDiv(!showCrudDiv); // Toggle visibility of cruddiv
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <img src={logo} alt="Logo" height="28px" width="105px" className='navlogo' />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className='nav-link' to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to={'/series'}>Series</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to={'/films'}>Films</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to={'/list'}>My List</Link>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className={`form-control me-2 sbar ${showSearchBar ? "show" : ""}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn searchbtn"
                onClick={sb}
                type="button"
              >
                <IoSearch />
              </button>
            </div>
            <div className="toggle-border">
              <input id="one" type="checkbox" onClick={Togglebtn} />
              <label htmlFor="one">
                <div className="handle"></div>
              </label>
            </div>
          </div>
        </div>
      </nav>
      {showAddButton && (
        <div className='addbtn'>
          <button className='adbtn' onClick={toggleCrudDiv}><IoAdd /></button>
          {showCrudDiv && (
            <div className='cruddiv'>
              <Link className='nav-link' to={'/create'}>Create</Link>
              <Link className='nav-link' to={'/delete'}>Delete</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
