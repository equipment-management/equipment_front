import React, { useEffect, useState } from "react";
import * as S from "./Calender.style";
import { useRecoilState } from "recoil";
import * as C from "./Calender.style";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import

const Calender = () => {
  const [startToggle, setStartToggle] = useState(false);
  const [endToggle, setEndToggle] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [maxEndDate, setMaxEndDate] = useState(new Date());

  return (
    <>
      <C.Cal
        onClick={() => {
          setStartToggle(!startToggle);
        }}
      >
        {startToggle && (
          <Calendar
            onChange={setStartDate}
            value={startDate}
            minDate={new Date()}
            onClickDay={(e) => {
              setStartToggle(!startToggle);
            }}
          />
        )}
      </C.Cal>
      <C.Split />
      <C.Cal
        onClick={() => {
          setEndToggle(!endToggle);
        }}
      >
        {startToggle && (
          <Calendar
            onChange={setEndDate}
            value={endDate}
            minDate={new Date()}
            onClickDay={(e) => {
              setEndToggle(!endToggle);
            }}
          />
        )}
      </C.Cal>
    </>
  );
};

export default Calender;
