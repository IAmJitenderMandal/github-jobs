import React, { useContext, useState, useEffect } from "react";
import "./filters.styles.scss";
import MaterialIcon from "material-icons-react";

import axios from "axios";

import { JobsContext } from "../../context/context";
import {
  SET_SEARCH_DATA,
  TYPE,
  FILTERD_DATA,
  FILTER_LOCATION,
  TOP_COUNTRIES,
} from "../../context/action.types";

export default function Filters() {
  const [inputText, setInputText] = useState("");
  const { appState, dispatch } = useContext(JobsContext);

  useEffect(() => {
    // calling filterdata method when updating state regarding filter value
    filterData();
  }, [
    appState.type,
    appState.location,
    appState.london,
    appState.berlin,
    appState.new_york,
    appState.amsterdom,
  ]);

  let newData = [];

  function filterData() {
    if (appState.type === "all") {
      newData = [...appState.jobsData];
    }
    if (appState.type === "full time") {
      newData = appState.jobsData.filter(
        (eachJob) => eachJob.type.toLowerCase() == "full time"
      );
    }

    if (appState.location !== "all") {
      newData = newData.filter((eachjob) =>
        eachjob.location.toLowerCase().includes(appState.location.toLowerCase())
      );
    }

    newData =
      appState.london === true
        ? newData.filter((eachjob) => eachjob.location === "london")
        : [...newData];
    newData =
      appState.berlin === true
        ? newData.filter((eachjob) => eachjob.location === "berlin")
        : [...newData];
    newData =
      appState.amsterdom === true
        ? newData.filter((eachjob) => eachjob.location === "amsterdom")
        : [...newData];
    newData =
      appState.new_york === true
        ? newData.filter((eachjob) => eachjob.location === "new_york")
        : [...newData];

    dispatch({
      type: FILTERD_DATA,
      payload: newData,
    });
  }

  return (
    <div className="filters">
      <div className="filter-jobType">
        <input
          type="checkbox"
          id="fullTime"
          value="full time"
          onChange={(e) => {
            dispatch({
              type: TYPE,
              payload: e.target.checked === true ? e.target.value : "all",
            });
          }}
        />
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
            onChange={(e) => {
              dispatch({
                type: FILTER_LOCATION,
                payload: e.target.value !== "" ? e.target.value : "all",
              });
            }}
          />
        </div>
      </div>
      <div className="top-cities">
        <div className="london common">
          <input
            type="checkbox"
            value="london"
            onChange={(e) => {
              dispatch({
                type: TOP_COUNTRIES,
                payload: {
                  value: e.target.checked,
                  country: e.target.value,
                },
              });
            }}
          />
          <label>London</label>
        </div>
        <div className="amsterdom common">
          <input
            type="checkbox"
            value="amsterdom"
            onChange={(e) => {
              dispatch({
                type: TOP_COUNTRIES,
                payload: {
                  value: e.target.checked,
                  country: e.target.value,
                },
              });
            }}
          />
          <label>Amsterdom</label>
        </div>
        <div className="new-york common">
          <input
            type="checkbox"
            value="new-york"
            onChange={(e) => {
              dispatch({
                type: TOP_COUNTRIES,
                payload: {
                  value: e.target.checked,
                  country: e.target.value,
                },
              });
            }}
          />
          <label>New York</label>
        </div>
        <div className="berlin common">
          <input
            type="checkbox"
            value="berlin"
            onChange={(e) => {
              dispatch({
                type: TOP_COUNTRIES,
                payload: {
                  value: e.target.checked,
                  country: e.target.value,
                },
              });
            }}
          />
          <label>Berlin</label>
        </div>
      </div>
    </div>
  );
}

// function fetchData(Search_keyword) {
//   axios
//     .get(
//       `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=${Search_keyword}`
//     )
//     .then((searchData) => {
//       dispatch({ type: SET_SEARCH_DATA, payload: searchData.data });
//     });
// }

// function handleSearch() {
//   fetchData(inputText);
// }
