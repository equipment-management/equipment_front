import React, { useEffect } from "react";
import styled from "styled-components";
import { RecoilRoot, useRecoilState } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Header from "./components/header";
import { userInfo } from "./store/user/atom";
import axios from "axios";

const MainContainer = styled.div`
  margin-top: 100px;
`;

const AllContainer = styled.div`
  position: relative;
  width: 100%;
  /* height: 100vh; */
`;

const App = () => {
  const [isLogin, setLogin] = useRecoilState(userInfo);

  useEffect(() => {
    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("user_id")
    ) {
      setLogin({ ...isLogin });
    }
  }, [setLogin]);

  return (
    <AllContainer>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="*" element={<div>404</div>}></Route>
        </Routes>
      </MainContainer>
    </AllContainer>
  );
};

export default App;
