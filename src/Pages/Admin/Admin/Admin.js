import React from "react";
import { Link, Outlet } from "react-router-dom";
import plusIcon from "../../../Assets/logos/plus 1.png";
import userIcon from "../../../Assets/logos/users-alt 1.png";
import "./Admin.css";
const Admin = () => {
  return (
    <div className="admin-container flex-column flex-md-row">
      <div className="sidebar-container">
        <h3> Benevolent Network</h3>
        <div className="icon-container">
          <img src={userIcon} alt="" />
          <Link to="/admin/volunteerList">Volunteer register list</Link>
        </div>
        <div className="icon-container">
          <img src={plusIcon} alt="" />
          <Link to="/admin/addevent">Add event</Link>
        </div>
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
