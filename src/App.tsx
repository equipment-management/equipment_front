import React from "react";
import styled from "styled-components";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Header from "./components/header";

const MainContainer = styled.div`
  margin-top: 100px;
`;

const AllContainer = styled.div`
  position: relative;
  width: 100%;
  /* height: 100vh; */
`;

function App() {
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
}

export default App;
