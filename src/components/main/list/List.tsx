import React from "react";
import { useRecoilState } from "recoil";
import { Equipment } from "../../../store/main/atom";
import * as L from "./List.style";
import Iphone from "../../../assets/main/iphone.svg";
import Cube from "../../../assets/main/cube.svg";
import axios from "axios";
import { useQuery } from "react-query";

const List = () => {
  const [equipmentList, setEquipmentList] = useRecoilState(Equipment);

  const PHONE = [
    {
      equipmentId: 1,
      equipmentName: "아이폰",
      brand: "애플",
      type: "PHONE",
      size: 5,
    },
    {
      equipmentId: 1,
      equipmentName: "삼딱",
      brand: "삼성",
      type: "PHONE",
      size: 15,
    },
  ];

  const makeList = PHONE.map((i, idx) => {
    return (
      <L.BoxContainer key={idx}>
        <L.Box>
          <div id="brandInfo">
            <p>{i.equipmentName}</p>
            <p>{i.brand}</p>
          </div>
          <img src={Iphone} />
          <div id="info">
            <div id="category">{i.type}</div>
            <div id="cnt">
              <img src={Cube} />
              <p>{i.size}</p>
            </div>
          </div>
          <div id="date"></div>
        </L.Box>
      </L.BoxContainer>
    );
  });

  return (
    <L.List>
      <h2>총 50개</h2>
      <L.ListContainer>{makeList}</L.ListContainer>
    </L.List>
  );
};

export default List;
