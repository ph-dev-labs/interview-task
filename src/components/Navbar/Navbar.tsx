import React from "react";
import ReactComponent from "../../images/Group.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-holder">
        <div>
          <img src={ReactComponent} className="nav-logo" alt="LOGO" />
        </div>
        <div className="inpt-holder">
          <input
            type="text"
            placeholder="search for anything"
            className="search-inpt"
          />
          <div className="search-icon">
            <AiOutlineSearch className="search" />
          </div>
        </div>
      </div>

      <div className="docs-section">
        <p className="docs">Docs</p>
        <div className="notification">
          <IoIosNotificationsOutline />
        </div>
        <div className="profile-image-holder">
          <img src="" alt="Profile Images" className="profile-image" />
        </div>
        <div className="dropdown-holder">
          <h5 className="profile-name">Adedeji</h5>
          <div><IoMdArrowDropdown className="down-icon"/></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
