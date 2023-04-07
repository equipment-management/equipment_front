import React, { useEffect, useMemo, useState } from "react";
import * as H from "./Header.style";
import Game from "../../assets/header/game.svg";
import Profile from "../../assets/header/profile.png";
import { useRecoilState } from "recoil";
import { headerPath } from "../../store/header/headerState";

const Header = () => {
  const [path, setPath] = useRecoilState(headerPath);
  const changePath = (id: string) => {
    setPath(`${id}`);
    if (id == "admin") {
      setPath(`inquiry`);
      document.getElementById("admin")?.classList.add("selected");
    } else if (id == "inquiry" || id == "approve" || id == "register") {
      document.getElementById("admin")?.classList.add("selected");
    } else {
      document.getElementById("admin")?.classList.remove("selected");
    }
  };

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <H.Header>
      <H.Container>
        <H.Name>
          <img src={Game} alt="logo" />
          대소고 기자재
        </H.Name>
        <H.ListName
          id="request"
          className={path === "request" ? "selected" : ""}
          onClick={() => {
            changePath("request");
          }}
        >
          신청
        </H.ListName>
        <H.ListName
          id="requestDetail"
          className={path == "requestDetail" ? "selected" : ""}
          onClick={() => {
            changePath("requestDetail");
          }}
        >
          신청내역
        </H.ListName>
        {localStorage.getItem("equipment_admin") && (
          <H.Admin>
            <H.ListName id="admin" onClick={() => changePath("admin")}>
              관리자
            </H.ListName>
            <p
              className={path == "inquiry" ? "selected" : ""}
              onClick={() => changePath("inquiry")}
            >
              조회
            </p>
            <p
              className={path == "approve" ? "selected" : ""}
              onClick={() => changePath("approve")}
            >
              승인
            </p>
            <p
              className={path == "register" ? "selected" : ""}
              onClick={() => changePath("register")}
            >
              등록
            </p>
          </H.Admin>
        )}
        <H.Profile>
          <img src={Profile} alt="프로필" />
        </H.Profile>
      </H.Container>
    </H.Header>
  );
};

export default Header;
