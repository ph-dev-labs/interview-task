import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdHomeRepairService } from "react-icons/md";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <div>
          <MdHomeRepairService />
        </div>
        <p>switch organisation</p>
        <div></div>
      </div>
      <br />
      <br />
      <div>
        <div>
          {" "}
          <IoHomeOutline />{" "}
        </div>
        <p>Dashboard</p>
      </div>
      <br />
      <br />
      <p>customers</p>
    </div>
  );
};

export default Sidebar;
