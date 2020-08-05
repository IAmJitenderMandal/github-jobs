import React from "react";
import logoOne from "../../assets/companylogo.jpeg";

import MaterialIcon from "material-icons-react";

import "./listItem.styles.scss";
import { useRouteMatch, Link } from "react-router-dom";

export default function ListItem({ eachJob }) {
  return (
    <div className="list-item">
      <img src={eachJob.company_logo} className="logoImage" alt="companylogo" />
      <div className="item-details">
        <div className="company-name">{eachJob.company}</div>
        <Link to={`/${eachJob.id}`}>
          <div className="position">{eachJob.title}</div>
        </Link>
        <div className="position-type">
          <button>{eachJob.type}</button>
        </div>
      </div>
      <div className="time-and-place">
        <div className="placeName">
          <span className="icon">
            <MaterialIcon icon="public" color="#b9bdcf" size={15} />
          </span>{" "}
          {eachJob.location}
        </div>
        <div className="time">
          {" "}
          <span className="icon">
            {" "}
            <MaterialIcon icon="watch_later" color="#b9bdcf" size={15} />{" "}
          </span>{" "}
          {eachJob.created_at}
        </div>
      </div>
    </div>
  );
}
