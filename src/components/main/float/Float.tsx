import React, { useEffect, useState } from "react";
import Iphone from "../../../assets/main/iphone.svg";
import Calendar from "../../../assets/main/Calendar.svg";
import * as L from "./Float.style";
import { useRecoilState } from "recoil";
import { LendDate } from "../../../store/main/main";
import { useQuery } from "react-query";
import { API } from "../../../lib/axios/customAxios";

const Float = ({ Item, setFlag }: any) => {
  const [date, setDate] = useRecoilState(LendDate);
  const [reason, setReason] = useState("");

  API.post(`equipment/request/${Item.equipmentId}`).then((res) =>
    console.log(res.data)
  );

  const CloseFloat = () => {
    console.log(Item);
    console.log(reason);
    setFlag(false);
  };

  useEffect(() => {
    console.log(Item);
  }, []);

  return (
    <L.RentBox>
      <L.RentContainer>
        <div id="brandInfo">
          <p id="name">{Item?.equipmentName}</p>
          <p id="brand">{Item?.brand}</p>
        </div>
        <div id="main">
          <img src={Iphone} id="itme" alt="제품 사진" />
          <div>
            <textarea
              placeholder="사유를 입력하세요."
              onChange={(e) => {
                setReason(e.target.value);
              }}
            />
            <L.CalendarContainer>
              <div>
                <img src={Calendar} alt="달력 사진" />
                <div>
                  <p>대여시작 날짜</p>
                  {date.start}
                </div>
              </div>
              <div>
                <img src={Calendar} alt="달력 사진" />
                <div>
                  <p>대여종료 날짜</p>
                  {date.end}
                </div>
              </div>
            </L.CalendarContainer>
            <L.Button>
              <button
                onClick={() => {
                  CloseFloat();
                }}
              >
                신청하기
              </button>
            </L.Button>
          </div>
        </div>
      </L.RentContainer>
    </L.RentBox>
  );
};

export default Float;
