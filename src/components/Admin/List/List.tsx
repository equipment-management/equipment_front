import React, { useState } from "react";
import * as L from "./List.style";
import category from "../../../assets/category/category.svg";
import person from "../../../assets/Admin/List/person.svg";
import Register from "./Register";
import { headerPath, registerFlag } from "../../../store/header";
import { useRecoilState } from "recoil";

const List = () => {
  const [option, setOption] = useState<string>("대여");
  const [flag, setFlag] = useRecoilState<boolean>(registerFlag);
  const [path, setPath] = useRecoilState<string>(headerPath);

  const ListJson = [
    {
      name: "3학년 3반 3번 고용빈이",
      reason: "대고소 기자재 대여 서비스",
      equipment: "아이폰 14",
      state: "대여 중",
      date: "2023.03.01 ~ 2023.04.01",
    },
    {
      name: "3학년 3반 3번 고용빈",
      reason: "대고소 기자재 대여 서비스",
      equipment: "아이폰 14",
      state: "대여 중",
      date: "2023.03.01 ~ 2023.04.01",
    },
    {
      name: "3학년 3반 3번 고용빈",
      reason: "대고소 기자재 대여 서비스",
      equipment: "아이폰 14",
      state: "대여 중",
      date: "2023.03.01 ~ 2023.04.01",
    },
    {
      name: "3학년 3반 3번 고용빈",
      reason: "대고소 기자재 대여 서비스를 위해 사용합니다.",
      equipment: "아이폰 14",
      state: "대여 중",
      date: "2023.03.01 ~ 2023.04.01",
    },
    {
      name: "3학년 3반 3번 고용빈",
      reason: "대고소 기자재 대여 서비스를 위해 사용합니다.",
      equipment: "아이폰 14",
      state: "대여 중",
      date: "2023.03.01 ~ 2023.04.01",
    },
    {
      name: "3학년 3반 3번 고용빈",
      reason: "대고소 기자재 대여 서비스를 위해 사용합니다.",
      equipment: "아이폰 14",
      state: "대여 중",
      date: "2023.03.01 ~ 2023.04.01",
    },
    {
      name: "3학년 3반 3번 고용빈",
      reason: "대고소 기자재 대여 서비스를 위해 사용합니다.",
      equipment: "아이폰 14",
      state: "대여 중",
      date: "2023.03.01 ~ 2023.04.01",
    },
    {
      name: "3학년 3반 3번 고용빈",
      reason: "대고소 기자재 대여 서비스를 위해 사용합니다.",
      equipment: "아이폰 14",
      state: "대여 중",
      date: "2023.03.01 ~ 2023.04.01",
    },
    {
      name: "3학년 3반 3번 고용빈",
      reason: "대고소 기자재 대여 서비스를 위해 사용합니다.",
      equipment: "아이폰 14",
      state: "대여 중",
      date: "2023.03.01 ~ 2023.04.01",
    },
    {
      name: "3학년 3반 3번 고용빈",
      reason: "대고소 기자재 대여 서비스를 위해 사용합니다.",
      equipment: "아이폰 14",
      state: "대여 중",
      date: "2023.03.01 ~ 2023.04.01",
    },
  ];

  return (
    <L.Container>
      {path === "inquiry" && (
        <L.Option>
          {["대여", "반납", "대기"].map((d, i) => {
            return (
              <div
                key={i}
                className={option === d ? "selected" : ""}
                onClick={() => setOption(d)}
              >
                <img src={category} alt="OptionImg" />
                {d}
              </div>
            );
          })}
        </L.Option>
      )}
      <L.MainList>
        {ListJson.map((d, i) => {
          return (
            <L.List key={i}>
              <img src={person} alt="person" />
              <p className="name">{d.name}</p>
              <p className="reason">{d.reason}</p>
              <p className="equipment">{d.equipment}</p>
              {path === "inquiry" && <p className="state">{d.state}</p>}
              <p className="date">{d.date}</p>
              {path === "approve" && (
                <L.ApproveRefuse>
                  <button id="O" />
                  <button id="X" />
                </L.ApproveRefuse>
              )}
            </L.List>
          );
        })}
      </L.MainList>
      {flag && <Register />}
    </L.Container>
  );
};

export default List;
