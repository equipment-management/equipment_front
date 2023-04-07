import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "../../store/user/userState";
import Filter from "./filter/Filter";
import List from "./list/List";
import * as M from "./Main.style";

const Main = () => {
  const [userLogin, setUserLogin] = useRecoilState(loginState);
  useEffect(() => {
    if (!localStorage.getItem("equipment_token") && !userLogin) {
      window.location.href =
        "http://dauth.b1nd.com/login?client_id=af3a177fb1d3425b8828c072feebe63d2122c01c191b42d9aab6748864c7de97&redirect_uri=http://localhost:3000/callback";
    }
  }, []);

  return (
    <M.Main>
      <Filter />
      <List />
    </M.Main>
  );
};

export default Main;
