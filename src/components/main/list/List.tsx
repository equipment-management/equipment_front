import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { LendDate, Rent, equipmentList } from "../../../store/main/main";
import * as L from "./List.style";
import Iphone from "../../../assets/main/iphone.svg";
import Cube from "../../../assets/main/cube.svg";
import { headerPath } from "../../../store/header/headerState";

const List = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const [date, setDate] = useRecoilState(LendDate);
  const [path, setPath] = useRecoilState(headerPath);
  const [List, setList] = useRecoilState(
    // @ts-ignore
    path == "requestDetail" ? Rent : equipmentList
  );

  const BtnContent = (data: any) => {
    if (data.state == "standby") {
      return "승인 대기중";
    } else if (data.state == "borrowing") {
      return "반납하기";
    } else {
      return "신청하기";
    }
  };

  const RentBox = () => {
    return <L.RentBox></L.RentBox>;
  };

  const makeList = List.map((i, idx) => {
    return (
      <L.BoxContainer key={idx}>
        <L.Box>
          <div id="brandInfo">
            <p id="name">{i.equipmentName}</p>
            <p id="brand">{i.brand}</p>
          </div>
          <img src={Iphone} alt="제품 사진" />
          <div id="info">
            <div id="category">{i.type}</div>
            <div id="cnt">
              <img src={Cube} alt="큐브사진" />
              <p>{i.size}</p>
            </div>
          </div>
          <div id="date">
            <div id="start">
              대여 시작일<p>{date.start}</p>
            </div>
            <div id="eq" />
            <div id="end">
              대여 종료일<p>{date.end}</p>
            </div>
          </div>
          <button id={i.state}>{BtnContent(i)}</button>
        </L.Box>
      </L.BoxContainer>
    );
  });

  return (
    <L.List>
      <h2>
        총 {count}개 {path == "requestDetail" && "대여중"}
      </h2>
      <L.ListContainer>{makeList}</L.ListContainer>
      {flag && <RentBox />}
    </L.List>
  );
};

export default List;
