import React, { useState, useContext, useEffect } from "react";
import { SET_DATA, SEARCH_SPINNER } from "../../context/action.types";

//importing  material icon package
import MaterialIcon from "material-icons-react";
import { JobsContext } from "../../context/context";
import axios from "axios";

import "./search.styles.scss";

export default function Search() {
  const [inputText, setInputText] = useState("");
  const { appState, dispatch } = useContext(JobsContext);

  function fetchData(Search_keyword) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${Search_keyword}`
      )
      .then((searchData) => {
        dispatch({
          type: SEARCH_SPINNER,
          payload: false,
        });
        dispatch({ type: SET_DATA, payload: searchData.data });
        setInputText("");
      });
  }

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function handleSearch() {
    fetchData(inputText);
  }

  useEffect(() => {
    if (inputText) {
      handleSearch();
    }
  }, [appState.search_spinner]);

  return (
    <div className="search">
      <div className="input-and-button">
        <MaterialIcon icon="work_outline" size={19} color="#b9bdcf" />
        <input
          type="text"
          placeholder="Title, Compnies, expertise or benefits"
          className="search-input"
          onChange={handleChange}
          value={inputText}
        />
        <button
          className="search-btn"
          onClick={() => {
            dispatch({
              type: SEARCH_SPINNER,
              payload: true,
            });
          }}
        >
          {appState.search_spinner === true ? (
            <span className="spinner"></span>
          ) : (
            "Search"
          )}
        </button>
      </div>
    </div>
  );
}
