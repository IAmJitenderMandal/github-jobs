import React, { useContext } from "react";
import "./loadMore.styles.scss";
import { JobsContext } from "../../context/context";
import { PAGE } from "../../context/action.types";

export default function LoadMore() {
  const { appState, dispatch } = useContext(JobsContext);
  return (
    <div
      className="loadMoreBtn"
      onClick={() => {
        dispatch({
          type: PAGE,
          payload: {
            page: appState.page + 1,
            spinner: true,
          },
        });
      }}
    >
      {appState.data_loading_spinner === true ? (
        <span className="spinner"></span>
      ) : (
        "Load More"
      )}
    </div>
  );
}
