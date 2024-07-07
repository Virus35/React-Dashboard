// src/components/Dashboard.tsx
import React from "react";
import "./Dashbaord.scss";
import { dummyOrders } from "../../constants";
import { LuClock } from "react-icons/lu";
import { FaRegSquare } from "react-icons/fa";
import { Order } from "../../interface";
import { FcSearch } from "react-icons/fc";

const Dashboard: React.FC = () => {
  const date = new Date();

  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <div className="dashboard">
      <div className="search-container">
        <div className="search-box">
          <input type="search" placeholder="Search" />
          <FcSearch />
        </div>
        <div className="order-list-format">
          <span>Order List</span>
          <span>{formattedDate}</span>
        </div>
      </div>
      <div className="filter-list">
        <button>All</button>
      </div>
      <div className="order-list">
        {dummyOrders.map((order: Order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <div className="left-section">
                <h3>{order.customerName}</h3>
                <span>{order.customerPhone}</span>
              </div>
              <span
                className={`order-status ${order.status
                  .replace(" ", "-")
                  .toLowerCase()}`}
              >
                {order.status}
              </span>
            </div>
            <div className="order-details">
              <div className="order-container">
                <div className="order-time">
                  <LuClock />
                  <p>{order.orderTime}</p>
                </div>
                <div className="order-time square">
                  <FaRegSquare />
                  <p>Table {order.tableNumber}</p>
                </div>
              </div>

              <ul>
                <div className="order-list-container">
                  <li>{order?.items?.length || 0} Items</li>
                  <span className="strong">
                    ${order.totalAmount.toFixed(2)}
                  </span>
                </div>
                {order.items.map((item, index) => (
                  <div className="order-list-container">
                    <li key={index}>{item.name}</li>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
