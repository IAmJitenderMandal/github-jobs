import React, { Children } from "react";
import MaterialIcon from "material-icons-react";
import "./layout.styles.scss";

export default function Layout({ children }) {
  return <div className="layout">{children}</div>;
}
