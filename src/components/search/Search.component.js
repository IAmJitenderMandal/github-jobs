import React from "react";

//importing  material icon package
import MaterialIcon from "material-icons-react";
import "./search.styles.scss";

export default function Search() {
  return (
    <div className="search">
      <div className="input-and-button">
        <MaterialIcon icon="work_outline" size={19} color="#b9bdcf" />
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
