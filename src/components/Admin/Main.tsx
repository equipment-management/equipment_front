import React from "react";
import styled from "styled-components";
import Category from "../common/Category";
import List from "./List";

const Root = styled.div``;

const AdminMain = () => {
  return (
    <Root>
      <Category />
      <List />
    </Root>
  );
};

export default AdminMain;
