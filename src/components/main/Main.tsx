import React from "react";
import Filter from "./filter/Filter";
import List from "./list/List";
import * as M from "./Main.style";

const Main = () => {
  return (
    <M.Main>
      <Filter />
      <List />
    </M.Main>
  );
};

export default Main;
