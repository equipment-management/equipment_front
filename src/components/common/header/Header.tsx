import React, { useEffect } from "react";
import * as H from "./Header.style";
import { useRecoilState } from "recoil";
import { headerPath } from "../../../store/header";
import { useNavigate } from "react-router-dom";
import Game from "../../../assets/header/game.svg";
import Profile from "../../../assets/header/profile.png";

const Header = () => {
  const navigate = useNavigate();

  const [path, setPath] = useRecoilState(headerPath);

  const changePathStyle = (id: string) => {
    setPath(`${id}`);
    if (id === "admin") {
      setPath(`inquiry`);
      navigate("admin");
      document.getElementById("admin")?.classList.add("selected");
    } else if (id === "inquiry" || id === "approve" || id === "register") {
      document.getElementById("admin")?.classList.add("selected");
      navigate("admin");
    } else {
      document.getElementById("admin")?.classList.remove("selected");
      navigate("");
    }
  };

  useEffect(() => {
    if (path === "inquiry") {
      document.getElementById("admin")?.classList.add("selected");
    }
  }, []);

  return (
    <H.Header>
      <H.Container>
        <H.Name>
          <img src={Game} alt="logo" />
          대소고 기자재
        </H.Name>
        {localStorage.getItem("equipment_admin") === "false" && (
          <>
            <H.ListName
              id="request"
              className={path === "request" ? "selected" : ""}
              onClick={() => {
                changePathStyle("request");
              }}
            >
              신청
            </H.ListName>
            <H.ListName
              id="requestDetail"
              className={path === "requestDetail" ? "selected" : ""}
              onClick={() => {
                changePathStyle("requestDetail");
              }}
            >
              신청내역
            </H.ListName>
          </>
        )}
        {localStorage.getItem("equipment_admin") === "true" && (
          <H.Admin>
            <H.ListName id="admin" onClick={() => changePathStyle("admin")}>
              관리자
            </H.ListName>
            {[
              ["inquiry", "조회"],
              ["approve", "승인"],
              ["register", "등록"],
            ].map((i, idx) => {
              console.log(i);
              return (
                <p
                  key={idx}
                  className={path === `${i[0]}` ? "selected" : ""}
                  onClick={() => changePathStyle(`${i[0]}`)}
                >
                  {i[1]}
                </p>
              );
            })}
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
