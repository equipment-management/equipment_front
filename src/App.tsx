import styled from "styled-components";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Callback from "./Callback.jsx";
import Header from "./components/common/Header/Header";
import { useEffect } from "react";
import UserMain from "./components/User/Main";
import AdminMain from "./components/Admin/Main";

const AllContainer = styled.div`
  position: relative;
  width: 100vw;
  margin: 0px;
  box-sizing: border-box;

  font-family: "Noto Rashi Hebrew";
  font-style: normal;
`;

const MainContainer = styled.div`
  /* margin-top: 100px; */
`;

const App = () => {
  return (
    <AllContainer>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<UserMain />}></Route>
          <Route path="/admin" element={<AdminMain />}></Route>
          <Route path="*" element={<div>404</div>}></Route>
          <Route path="/callback" element={<Callback />}></Route>
        </Routes>
      </MainContainer>
    </AllContainer>
  );
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
