import React, { useEffect } from "react";
import styled from "styled-components";
import List from "./List/List";
import Category from "../common/Category";
import { useNavigate } from "react-router-dom";

const Root = styled.div``;

const UserMain = () => {
  const navigate = useNavigate();

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

    localStorage.getItem("equipment_admin") === "true" && navigate("/admin");
  }, []);

  return (
    <Root>
      <Category />
      <List />
    </Root>
  );
};

export default UserMain;
