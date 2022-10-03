import React from "react";
import './Navbar.css'

const Navbar = ({isScrolling}) => {
  const toTheTop =()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }

  return (
    <nav className={`navbar navbar-dark navbar-expand-md nav-- ${isScrolling > 30 ? 'scrolling' : null}`}>
      <div className="container">
        <a className="navbar-brand" onClick={toTheTop}>
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="#home--">
              Home
            </a>
            <a className="nav-link" href="#about--">
              About
            </a>
            <a className="nav-link" href="#">
              Projects
            </a>
            <a className="nav-link">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
