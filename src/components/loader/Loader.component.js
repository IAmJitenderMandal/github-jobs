import React, { useContext } from "react";
import "./Loader.styles.scss";

import { JobsContext } from "../../context/context";

export default function Loader() {
  const { appState } = useContext(JobsContext);

  return (
    <div className="loader">
      <div className={`spinner ${appState.spinner}`}>
        {/* loading spinner for page loading */}
      </div>
    </div>
  );
}
