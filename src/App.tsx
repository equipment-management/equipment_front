import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { RecoilRoot, useRecoilState } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Header from "./components/header";
import { userInfo } from "./store/user/atom";
import { API } from "./lib/axios/customAxios";
import axios from "axios";
import { useQuery } from "react-query";

const MainContainer = styled.div`
  margin-top: 100px;
`;

const AllContainer = styled.div`
  position: relative;
  width: 100%;
  /* height: 100vh; */
`;

const App = () => {
  const [user, setUser] = useRecoilState(userInfo);

  // const fetchtempData = async () => {
  //   const res = await API.get("/equipment/list?type=PHONE");

  //   return res.data;
  // };

  // const queryfetch = useQuery(["phoneList"], fetchtempData, {
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  //   staleTime: 10000,
  // });

  useLayoutEffect(() => {
    // console.log(queryfetch.data);
    if (
      localStorage.getItem("equipment_token") &&
      localStorage.getItem("user_id")
    ) {
      setUser();
    }
  }, []);

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
