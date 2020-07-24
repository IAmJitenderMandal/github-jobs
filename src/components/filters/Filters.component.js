import React from "react";
import "./filters.styles.scss";
import MaterialIcon from "material-icons-react";

export default function Filters() {
  return (
    <div className="filters">
      <div className="filter-jobType">
        <input type="checkbox" id="fullTime" />
        <label htmlFor="fullTime">Full Time</label>
      </div>
      <div className="location">
        <div className="title">Location</div>
        <div className="location-input">
          <MaterialIcon icon="search" color="#b9bdcf" size={21} />
          <input
            type="text"
            placeholder="City, state, Zip code or country"
            className="location-search"
          />
        </div>
      </div>
      <div className="top-cities">
        <div className="london common">
          <input type="checkbox" />
          <label>London</label>
        </div>
        <div className="amsterdom common">
          <input type="checkbox" />
          <label>Amsterdom</label>
        </div>
        <div className="new-york common">
          <input type="checkbox" />
          <label>New York</label>
        </div>
        <div className="berlin common">
          <input type="checkbox" />
          <label>Berlin</label>
        </div>
      </div>
    </div>
  );
}
