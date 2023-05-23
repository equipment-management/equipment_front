import React, { useEffect, useState } from "react";
import Iphone from "../../../assets/list/iphone.png";
import Calendar from "../../../assets/category/calendar.png";
import * as L from "./Float.style";
import { useRecoilState } from "recoil";
import APIToken from "../../../lib/axios/TokenAxios";
import { lendDate } from "../../../store/category";
import { calculateDateFormat } from "../../../common/function/Dateformat";

const Float = ({ Item, setFlag }: any) => {
  const [date, setDate] = useRecoilState(lendDate);
  const [reason, setReason] = useState<string>("");

  const RequestData = () => {
    if (reason === "" || reason.trim() === "") {
      alert("사유를 적어주세요.");
    } else if (date.end === calculateDateFormat(new Date())) {
      alert("종료 날짜가 오늘일 수 없습니다.");
    } else {
      APIToken.post(`equipment/request/${Item.equipmentId}`, {
        rentaledAt: `${date.start}`,
        terminateRental: `${date.end}`,
      }).then((res) => console.log(res.data));
      setFlag(false);
    }
  };

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
                  setFlag(false);
                }}
              >
                신청 취소
              </button>
              <button
                onClick={() => {
                  RequestData();
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
