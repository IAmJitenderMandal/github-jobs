import React from "react";

import "./search.styles.scss";

export default function Search() {
  return (
    <div className="search">
      <div className="input-and-button">
        <input
          type="text"
          placeholder="Title, Compnies, expertise or benefits"
          className="search-input"
        />
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
}
