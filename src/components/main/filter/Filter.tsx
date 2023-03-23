import * as F from "./Filter.style";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { EqList } from "../../../store/main/atom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import CategoryImg from "../../../assets/main/category.svg";
import DalYuck from "../../../assets/main/calendar.svg";

const Filter = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [nowDate, setNowDate] = useState("");
  const [selectList, setSelectList] = useState("스마트폰");
  const [list, setList] = useRecoilState(EqList);

  const [startToggle, setStartToggle] = useState(false);
  const [endToggle, setEndToggle] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [maxEndDate, setMaxEndDate] = useState(new Date());
  const [minDate, setMinDate] = useState(new Date());

  function dateFormat(date: any) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;

    return date.getFullYear() + "-" + month + "-" + day;
  }

  const CountMaxDate = (e: any) => {
    setStartDate(e);
    const arr = dateFormat(e).split("-");
    let [year, month, day] = [arr[0], arr[1], arr[2]];
    let tmp = parseInt(arr[1]) + 1;
    tmp < 10 ? (month = `0${tmp}`) : (month = tmp.toString());
    setMaxEndDate(new Date(`${year}-${month}-${day}`));
    setMinDate(e);
  };

  useEffect(() => {
    setEndDate(startDate);
  }, [startDate]);

  return (
    <F.Filter>
      <F.MainInfo>
        <F.Category
          onClick={() => {
            setToggle(true);
          }}
        >
          <img src={CategoryImg} />
          <p>{selectList}</p>
          <F.ListContainer>
            {toggle &&
              list.map((i, idx) => (
                <div
                  key={idx}
                  onClick={(e) => {
                    setToggle(false);
                    setSelectList(i);
                    e.stopPropagation();
                  }}
                >
                  <F.List>
                    <img src={CategoryImg} />
                    <p>{i}</p>
                  </F.List>
                  <F.buttomSplit />
                </div>
              ))}
          </F.ListContainer>
        </F.Category>
        <F.Split />
        <F.CalendarRoot>
          <img
            src={DalYuck}
            onClick={() => {
              setStartToggle(!startToggle);
            }}
          />
          <F.CalendarMain>
            <p>대여 시작 날짜</p>
            {dateFormat(startDate)}
          </F.CalendarMain>
          <F.CalendarContainer>
            {startToggle && (
              <Calendar
                onChange={setStartDate}
                value={startDate}
                minDate={new Date()}
                onClickDay={(e) => {
                  CountMaxDate(e);
                  setStartToggle(!startToggle);
                }}
              />
            )}
          </F.CalendarContainer>
        </F.CalendarRoot>
        <F.Split style={{ height: "40px" }} />
        <F.CalendarRoot>
          <img
            src={DalYuck}
            onClick={() => {
              setEndToggle(!endToggle);
            }}
          />
          <F.CalendarMain>
            <p>대여 종료 날짜</p>
            {dateFormat(endDate)}
          </F.CalendarMain>
          <F.CalendarContainer>
            {endToggle && (
              <Calendar
                onChange={setEndDate}
                value={endDate}
                minDate={minDate}
                maxDate={maxEndDate}
                onClickDay={(e) => {
                  setEndDate(e);
                  setEndToggle(!endToggle);
                }}
              />
            )}
          </F.CalendarContainer>
        </F.CalendarRoot>
      </F.MainInfo>
      <F.ShowDate></F.ShowDate>
    </F.Filter>
  );
};

export default Filter;
