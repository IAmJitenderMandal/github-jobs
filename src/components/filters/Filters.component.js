import React, { useContext, useState } from "react";
import "./filters.styles.scss";
import MaterialIcon from "material-icons-react";

import axios from "axios";

import { JobsContext } from "../../context/context";
import { SET_SEARCH_DATA } from "../../context/action.types";

export default function Filters() {
  const [inputText, setInputText] = useState("");
  const { dispatch } = useContext(JobsContext);

  function fetchData(Search_keyword) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=${Search_keyword}`
      )
      .then((searchData) => {
        dispatch({ type: SET_SEARCH_DATA, payload: searchData.data });
        setInputText("");
      });
  }

  function handleChange(e) {
    setInputText(e.target.value);
    handleSearch();
  }

  function handleSearch() {
    fetchData(inputText);
  }

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
            onChange={handleChange}
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
