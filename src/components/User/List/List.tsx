import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import * as L from "./List.style";
import Iphone from "../../../assets/list/iphone.svg";
import { useQuery } from "react-query";
import Float from "../Float/Float";
import { lendDate, selectCategory } from "../../../store/category";
import { headerPath } from "../../../store/header";
import { equipmentList } from "../../../store/list/list";

import API from "../../../lib/axios/BaseAxios";
import APIToken from "../../../lib/axios/TokenAxios";

interface Item {
  userEquipmentId: string;
  equipmentId: number;
  equipmentName: string;
  brand: string;
  type: string;
  status: string;
  size: number;
}

const List = () => {
  const [date, setDate] = useRecoilState(lendDate);
  const [path, setPath] = useRecoilState<string>(headerPath);
  const [selectList, setSelectList] = useRecoilState<string>(selectCategory);
  const [List, setList] = useRecoilState(equipmentList);

  const [propsData, setPropsData] = useState<Item>();
  const [count, setCount] = useState<number>(0);
  const [flag, setFlag] = useState<boolean>(false);
  const [Item, setItem] = useState<Item>();

  const BtnContent = (data: any) => {
    switch (data.status) {
      case "PENDING":
        return "승인 대기중";

      case "APPROVE":
        return "반납하기";

      case "DENY":
        return "거절 되었습니다.";

      case "RETURN":
        return "반납 완료되었습니다.";

      default:
        return "신청하기";
    }
  };

  const EquipmentCategory = () => {
    switch (selectList) {
      case "스마트폰":
        return "PHONE";

      case "데스크탑":
        return "DESKTOP";

      case "모니터":
        return "MONITOR";

      case "노트북":
        return "LAPTOP";

      case "태블릿":
        return "TABLET";
    }
  };

  const SetEquipmentList = (data: any) => {
    setCount(data.count);
    setList(data.list);
  };

  const BtnClick = (data: Item) => {
    setPropsData(data);
    if (path !== "requestDetail") {
      setFlag(true);
    } else if (path === "requestDetail") {
      APIToken.delete(`equipment/${data.userEquipmentId}`).then((res) =>
        console.log(res)
      );
    }
  };

  const { isLoading, error, data, refetch } = useQuery(
    "GetEquipmentList",
    async () =>
      path === "request"
        ? await API.get(`equipment/list?type=${EquipmentCategory()}`).then(
            (res) => SetEquipmentList(res.data)
          )
        : await APIToken.get(`equipment/user/list`).then((res) => {
            SetEquipmentList(res.data);
            console.log(res);
          })
  );

  useEffect(() => {
    refetch();
  }, [path, selectList]);

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
              <p>{i.size} 개</p>
            </div>
          </div>
          <div id="date">
            <div id="start">
              대여 시작일<p>{path == "request" ? date.start : i.rentaledAt}</p>
            </div>
            <div id="eq" />
            <div id="end">
              대여 종료일
              <p>{path == "request" ? date.end : i.terminateRental}</p>
            </div>
          </div>
          <button id={i.status} onClick={() => BtnClick(i)}>
            {BtnContent(i)}
          </button>
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
      {flag && <Float Item={propsData} setFlag={setFlag} />}
    </L.List>
  );
};

export default List;
