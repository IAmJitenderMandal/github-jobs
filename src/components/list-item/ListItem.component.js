import React from "react";
import logoOne from "../../assets/companylogo.jpeg";

import MaterialIcon from "material-icons-react";

import "./listItem.styles.scss";

export default function ListItem() {
  return (
    <div className="list-item">
      <img src={logoOne} className="logoImage" alt="companylogo" />
      <div className="item-details">
        <div className="company-name">Paddle</div>
        <div className="position">Front end developer (React)</div>
        <div className="position-type">
          <button>Full time</button>
        </div>
      </div>
      <div className="time-and-place">
        <div className="placeName">
          <span className="icon">
            <MaterialIcon icon="public" color="#b9bdcf" size={15} />
          </span>{" "}
          New York
        </div>
        <div className="time">
          {" "}
          <span className="icon">
            {" "}
            <MaterialIcon icon="watch_later" color="#b9bdcf" size={15} />{" "}
          </span>{" "}
          5 days ago
        </div>
      </div>
    </div>
  );
}
