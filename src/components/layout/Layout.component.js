import React from "react";
import Logo from "../logo/Logo.component";
import "./layout.styles.scss";
import Search from "../search/Search.component";

export default function Layout() {
  return (
    <div className="layout">
      <Logo />
      <Search />
    </div>
  );
}
