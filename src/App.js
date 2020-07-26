import React from "react";
import "./App.css";

import Layout from "./components/layout/Layout.component";
import Logo from "./components/logo/Logo.component";
import Search from "./components/search/Search.component";
import ContentWrapper from "./components/contentWrapper/ContentWrapper.component";
import Filters from "./components/filters/Filters.component";
import ListItem from "./components/list-item/ListItem.component";
import ViewJob from "./components/view-job/ViewJob.component";

function App() {
  return (
    <div className="app">
      <Layout>
        <Logo />
        <Search />
        <ContentWrapper>
          <Filters />
          <div className="listings">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
        </ContentWrapper>
      </Layout>
    </div>
  );
}

export default App;

{
  /* <Layout>
        <Logo />
        <Search />
        <ContentWrapper>
          <Filters />
          <div className="listings">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
        </ContentWrapper>
      </Layout>
    </div> */
}
