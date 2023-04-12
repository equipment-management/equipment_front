import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { LendDate, PHONE } from "../../../store/main/main";
import * as L from "./List.style";
import Iphone from "../../../assets/main/iphone.svg";
import Cube from "../../../assets/main/cube.svg";
import { headerPath } from "../../../store/header/headerState";

const List = () => {
  const [PhoneList, setPhoneList] = useRecoilState(PHONE);
  const [count, setCount] = useState(0);
  const [date, setDate] = useRecoilState(LendDate);
  const [path, setPath] = useRecoilState(headerPath);

  const makeList = PhoneList.map((i, idx) => {
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
          <button>신청하기</button>
        </L.Box>
      </L.BoxContainer>
    );
  });

  return (
    <L.List>
      <h2>총 {count}개</h2>
      <L.ListContainer>{makeList}</L.ListContainer>
    </L.List>
  );
};

export default List;
