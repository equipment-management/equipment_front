/** @format */

import React, { useEffect, useState } from "react";
import * as H from "./Header.style";
import Game from "../../assets/header/game.svg";
import Profile from "../../assets/header/profile.png";
import { useRecoilState } from "recoil";
import { headerPath } from "../../store/header/atom";
import { userInfo } from "../../store/user/atom";

const Header = () => {
  const [path, setPath] = useRecoilState(headerPath);
  const [info, setInfo] = useRecoilState(userInfo);

  let adminDom = document.getElementById("admin");

  useEffect(() => {
    document.getElementById(path.now)?.classList.add("selected");
    document.getElementById(path.before)?.classList.remove("selected");

    path.now == "inquiry" || path.now == "edit" || path.now == "register"
      ? adminDom?.classList.add("selected")
      : adminDom?.classList.remove("selected");
  }, [path]);

  const changePath = (id: string) => {
    path.now == id ? undefined : setPath({ now: id, before: path.now });
  };

  return (
    <H.Header>
      <H.Container>
        <H.Name>
          <img src={Game} />
          대소고 기자재
        </H.Name>
        <H.ListName id="request" onClick={() => changePath("request")}>
          신청
        </H.ListName>
        <H.ListName
          id="requestDetail"
          onClick={() => changePath("requestDetail")}
        >
          신청내역
        </H.ListName>
        {info.admin ? (
          <H.Admin>
            <H.ListName id="admin" onClick={() => changePath("inquiry")}>
              관리자
            </H.ListName>
            <p id="inquiry" onClick={() => changePath("inquiry")}>
              조회
            </p>
            <p id="edit" onClick={() => changePath("edit")}>
              수정
            </p>
            <p id="register" onClick={() => changePath("register")}>
              등록
            </p>
          </H.Admin>
        ) : null}
        <H.Profile>
          <img src={Profile} />
        </H.Profile>
      </H.Container>
    </H.Header>
  );
};

export default Header;
