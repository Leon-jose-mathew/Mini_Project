import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <h2 className="navtitle">People''s  Ration</h2>
      <div className="nav-links">
        <h3 className="navcontent">About</h3>
        <h3 className="navcontent">Complaint</h3>
        <h3 className="navcontent">Contact</h3>
      </div>

      <button className="button type1">
        <span className="btn-txt">Log In</span>
      </button>

      
    </div>
  );
}

export default NavBar;
