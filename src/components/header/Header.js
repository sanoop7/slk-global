import React from "react";
import logo from "../../Assets/logo/logo.png";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  //   const [activeSlide, setactiveSlide] = useState(2);
  return (
    <div className="Header_cont">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        {/* Add your navigation menu items here */}
        <NavLink to="/" className="Link">
          Home
        </NavLink>
        <NavLink to="/about" className="Link">
          Who We Are
        </NavLink>
        <NavLink to="/what-we-do" className="Link">
          What we do
        </NavLink>
        <NavLink to="/contact" className="Link">
          Contact Us
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
