import React from "react";
import styled from "styled-components";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Header from "./components/header";

function App() {
  const Root = styled.div`
    height: 100vh;
    width: 100%;
  `;

  return (
    <RecoilRoot>
      <Root>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="*" element={<div>404</div>}></Route>
          </Routes>
        </BrowserRouter>
      </Root>
    </RecoilRoot>
  );
}

export default App;
