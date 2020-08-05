import React, { useEffect, useState, Fragment, useReducer } from "react";
import "./App.css";

import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { JobsContext } from "../src/context/context";
import {
  FILTER_FULLTIME,
  FILTERD_DATA,
  SET_DATA,
  SEARCHED_DATA,
} from "./context/action.types";
import reducer from "./context/reducer";

import Layout from "./components/layout/Layout.component";
import Logo from "./components/logo/Logo.component";
import Search from "./components/search/Search.component";
import ContentWrapper from "./components/contentWrapper/ContentWrapper.component";
import Filters from "./components/filters/Filters.component";
import ListItem from "./components/list-item/ListItem.component";
import ViewJob from "./components/view-job/ViewJob.component";
import LoadMore from "./components/loadMore/LoadMore.component";

function App() {
  let jobsData = [];

  let initAppState = {
    jobsData: [],
    filterdData: [],
    page: 0,
    type: "all",
    location: "all",
    london: false,
    amsterdom: false,
    new_york: false,
    berlin: false,
    loadMoreData: 1,
    no_data: false,
    search_spinner: false,
    data_loading_spinner: true,
  };

  const [appState, dispatch] = useReducer(reducer, initAppState);

  function fetchData(page = 0) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${page}`
      )
      .then((response) => {
        if (response.data.length > 0) {
          dispatch({
            type: SEARCHED_DATA,
            payload: {
              data: response.data,
              data_loading_spinner: false,
            },
          });
        }
        if (response.data.length === 0) {
          console.log("soorrry no data");
        }
      })
      .catch((err) => {
        console.log("error fetching", err);
      });
  }

  useEffect(() => {
    fetchData(appState.page);
  }, [appState.page]);

  return (
    <JobsContext.Provider value={{ appState, dispatch }}>
      <div className="app">
        <Layout>
          <Switch>
            <Route exact path="/">
              <Fragment>
                <Logo />
                <Search />
                <ContentWrapper>
                  <Filters />
                  {console.log(appState)}
                  <div className="listings">
                    {appState.filterdData.map((eachJob) => (
                      <ListItem eachJob={eachJob} key={eachJob.id} />
                    ))}
                  </div>
                </ContentWrapper>
                {/* {appState.jobsData.length > 0 ? <LoadMore /> : ""} */}
                <LoadMore />
              </Fragment>
            </Route>
            <Route exact path="/:job_id">
              <ViewJob />
            </Route>
          </Switch>
        </Layout>
      </div>
    </JobsContext.Provider>
  );
}

export default App;
