import React from "react";
import "./layout.styles.scss";

import Logo from "../logo/Logo.component";
import Search from "../search/Search.component";
import ContentWrapper from "../contentWrapper/ContentWrapper.component";
import Filters from "../filters/Filters.component";
import ListItem from "../list-item/ListItem.component";

export default function Layout() {
  return (
    <div className="layout">
      <Logo />
      <Search />
      <ContentWrapper>
        <Filters />
        <div className="listings">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </ContentWrapper>
    </div>
  );
}
