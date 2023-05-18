import React, { useEffect } from "react";
import styled from "styled-components";
import Filter from "../common/filter/Filter";
import List from "./list/List";

const MainRoot = styled.div`
  width: 100%;
`;

const Main = () => {
  useEffect(() => {
    if (
      !localStorage.getItem("equipment_token") ||
      !localStorage.getItem("equipment_admin") ||
      !localStorage.getItem("equipment_refreshToken") ||
      !localStorage.getItem("equipment_user_id")
    ) {
      window.location.href =
        "http://dauth.b1nd.com/login?client_id=af3a177fb1d3425b8828c072feebe63d2122c01c191b42d9aab6748864c7de97&redirect_uri=http://localhost:3000/callback";
    }
  }, []);

  return (
    <MainRoot>
      <Filter />
      <List />
    </MainRoot>
  );
};

export default Main;
