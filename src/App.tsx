import React, { memo, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Main from "./components/main/Main";
import Header from "./components/common/header";
import { API } from "./lib/axios/customAxios.js";
import AdminMain from "./components/adminMain/Admin";

const MainContainer = styled.div`
  margin-top: 100px;

  font-family: "Noto Rashi Hebrew";
  font-style: normal;
`;

const AllContainer = styled.div`
  position: relative;
  width: 100%;
  /* height: 100vh; */
`;

const App = memo(() => {
  return (
    <AllContainer>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/admin" element={<AdminMain />}></Route>
          <Route path="*" element={<div>404</div>}></Route>
          <Route path="/callback" element={<Callback />}></Route>
        </Routes>
      </MainContainer>
    </AllContainer>
  );
});

const Callback = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const serverRequest = async () => {
    await API.post("/auth/dauth/login", {
      code: `${search.slice(6, -11)}`,
    }).then((data) => {
      console.log(data);
      localStorage.setItem("equipment_token", data.data.accessToken);
      localStorage.setItem("equipment_refreshToken", data.data.accessToken);
      localStorage.setItem("equipment_user_id", data.data.user.name);
      localStorage.setItem(
        "equipment_admin",
        data.data.user.role == "ROLE_STUDENT" ? "false" : "true"
      );

      navigate("/");
    });
  };

  useEffect(() => {
    serverRequest();
  }, []);

  return <div>...loading</div>;
};

export default App;

// localStorage.removeItem("equipment_token");
// localStorage.removeItem("equipment_admin");
// localStorage.removeItem("equipment_refreshToken");
// localStorage.removeItem("equipment_user_id");

// localStorage.getItem("equipment_token");
// localStorage.getItem("equipment_admin");
// localStorage.getItem("equipment_refreshToken");
// localStorage.getItem("equipment_user_id");
