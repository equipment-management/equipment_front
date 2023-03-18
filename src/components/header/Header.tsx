import React from "react";
import * as H from "./Header.style";
import Game from "../../assets/header/Game.svg";

const Header = () => {
  return (
    <H.Header>
      <H.Name>
        <img src={Game} />
        대소고 기자재
      </H.Name>
      <h3 id="request">신청</h3>
      <h3 id="requestDetail">신청내역</h3>
      <H.Profile />
    </H.Header>
  );
};

export default Header;
