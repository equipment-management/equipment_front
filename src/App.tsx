import React, { memo, useCallback, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Main from "./components/main";
import Header from "./components/header";
import { API } from "./lib/axios/customAxios";
import { loginState } from "./store/user/userState";

const MainContainer = styled.div`
  margin-top: 100px;
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
          <Route path="/admin" element={<Main />}></Route>
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
  const [userLogin, setUserLogin] = useRecoilState(loginState);

  const serverRequest = useCallback(
    () => async () => {
      await API.post("/auth/dauth/login", {
        code: `${search.slice(6, -11)}`,
      }).then((data) => {
        localStorage.setItem("equipment_token", data.data.accessToken);
        localStorage.setItem("equipment_refreshToken", data.data.accessToken);
        localStorage.setItem("equipment_user_id", data.data.user.name);
        localStorage.setItem(
          "equipment_admin",
          data.data.user.role == "ROLE_STUDENT" ? "false" : "true"
        );

        setUserLogin(true);
        navigate("/");
      });
    },
    [search]
  );

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
