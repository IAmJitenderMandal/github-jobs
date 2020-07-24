import React from "react";
import "./contentWrapper.styles.scss";

export default function ContentWrapper({ children }) {
  return <div className="contentWrapper">{children}</div>;
}
