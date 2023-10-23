import React, { useEffect, useState } from "react";
import logo from "../../Assets/logo/logo.png";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      if (window.scrollY > 500) {
        // Change 100 to the scroll position where you want to add the class
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="Header_cont">
      <div className="logo">
        <NavLink to="/" className="Link">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className={`menu ${scrolling ? "scrolled" : ""}`}>
        {/* Add your navigation menu items here */}

        <NavLink to="/about" className="Link">
          WHO WE ARE
        </NavLink>
        <NavLink to="/what-we-do" className="Link">
          WHAT WE DO
        </NavLink>
        <NavLink to="/contact" className="Link">
          CONTACT US
        </NavLink>
        <NavLink to="/careers" className="Link">
          CAREERS
        </NavLink>
        <span className=" drawer-btn">
          Capability Statement
          <div className="link_drawer">
            <div className="link_drawer_item">PROCUREMENT</div>
            <div className="link_drawer_item">SUB-CONTRACT</div>
          </div>
        </span>
        {/* Add more menu items as needed */}
      </div>
    </div>
  );
}

export default Header;
