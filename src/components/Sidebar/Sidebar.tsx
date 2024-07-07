import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTags, FaChartBar, FaFileInvoice, FaUtensils } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import { MdStarBorderPurple500 } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { LuLayoutDashboard } from "react-icons/lu";
import "./Sidebar.scss";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "" : "collapsed"}`}>
      <div className="header">
        <div className="logo-area">
          <div onClick={toggleSidebar}>
            <DiGoogleCloudPlatform />
          </div>
          <h1>DineDash</h1>
        </div>
        <div className="menu-icon" onClick={toggleSidebar}>
          <CgMenu />
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <LuLayoutDashboard />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order-list"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <MdStarBorderPurple500 />
              <span>Order List</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-promo"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaTags />
              <span>Promo</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-store"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <IoStorefrontSharp />
              <span>Store</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chart"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaChartBar />
              <span>Chart</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bills"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaFileInvoice />
              <span>Bills</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaUtensils />
              <span>Menu</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
