import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import * as C from "./Category.style";
import { calculateDateFormat } from "../../../common/function/Dateformat";
import DalYuck from "../../../assets/category/calendar.png";
import CategoryImg from "../../../assets/category/category.png";
import { useRecoilState } from "recoil";
import { headerPath } from "../../../store/header";
import {
  categoryKind,
  lendDate,
  selectCategory,
} from "../../../store/category";

const UserCategory = () => {
  const nowDate = new Date();

  const [list, setList] = useRecoilState(categoryKind);
  const [path, setPath] = useRecoilState<string>(headerPath);
  const [selectList, setSelectList] = useRecoilState<string>(selectCategory);
  const [selectedCategory, setSelectedCategory] =
    useRecoilState<string>(selectCategory);
  const [rentalDate, setRentalDate] = useRecoilState<{
    start: string;
    end: string;
  }>(lendDate);

  const [toggle, setToggle] = useState<boolean>(false);
  const [startToggle, setStartToggle] = useState<boolean>(false);
  const [endToggle, setEndToggle] = useState<boolean>(false);

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [maxEndDate, setMaxEndDate] = useState<Date>(new Date());
  const [minDate, setMinDate] = useState<Date>(new Date());

  const CountMaxDate = (e: Date) => {
    setStartDate(e);
    const arr = calculateDateFormat(e).split("-");
    let [year, month, day] = [arr[0], arr[1], arr[2]];
    let tmp = parseInt(arr[1]) + 1;
    tmp < 10 ? (month = `0${tmp}`) : (month = tmp.toString());
    setMaxEndDate(new Date(`${year}-${month}-${day}`));
    setMinDate(e);
  };

  useEffect(() => {
    setEndDate(startDate);
    setRentalDate({ ...rentalDate, end: `${calculateDateFormat(startDate)}` });
  }, [startDate]);

  useEffect(() => {
    setRentalDate({
      start: `${calculateDateFormat(nowDate)}`,
      end: `${calculateDateFormat(nowDate)}`,
    });
  }, []);

  return (
    <>
      <C.UserMainInfo>
        <C.Category
          onClick={() => {
            path == "request" && setToggle(!toggle);
          }}
        >
          <img src={CategoryImg} alt="카테고리" />
          <p>{path == "requestDetail" ? "전체" : selectedCategory}</p>
          {toggle && (
            <C.ListContainer>
              {list.map((i, idx) => (
                <C.Lists
                  key={idx}
                  onClick={(e) => {
                    setToggle(!toggle);
                    setSelectedCategory(i);
                    e.stopPropagation();
                  }}
                >
                  <C.List>
                    <img src={CategoryImg} alt="카테고리" />
                    <p>{i}</p>
                  </C.List>
                </C.Lists>
              ))}
            </C.ListContainer>
          )}
        </C.Category>
        <C.Split />
        <C.CalendarRoot>
          <img
            src={DalYuck}
            alt="달력"
            onClick={() => {
              setStartToggle(!startToggle);
            }}
          />
          <C.CalendarMain>
            <p>대여 시작 날짜</p>
            {calculateDateFormat(startDate)}
          </C.CalendarMain>
          <C.CalendarContainer>
            {startToggle && (
              <Calendar
                onChange={setStartDate}
                value={startDate}
                minDate={new Date()}
                onClickDay={(e) => {
                  CountMaxDate(e);
                  setRentalDate({
                    ...rentalDate,
                    start: `${calculateDateFormat(e)}`,
                  });
                  setStartToggle(!startToggle);
                }}
              />
            )}
          </C.CalendarContainer>
        </C.CalendarRoot>
        <C.Split style={{ height: "40px" }} />
        <C.CalendarRoot>
          <img
            src={DalYuck}
            alt="달력"
            onClick={() => {
              setEndToggle(!endToggle);
            }}
          />
          <C.CalendarMain>
            <p>대여 종료 날짜</p>
            {calculateDateFormat(endDate)}
          </C.CalendarMain>
          <C.CalendarContainer>
            {endToggle && (
              <Calendar
                onChange={setEndDate}
                value={endDate}
                minDate={minDate}
                maxDate={maxEndDate}
                onClickDay={(e) => {
                  setEndDate(e);
                  setRentalDate({
                    ...rentalDate,
                    end: `${calculateDateFormat(e)}`,
                  });
                  setEndToggle(!endToggle);
                }}
              />
            )}
          </C.CalendarContainer>
        </C.CalendarRoot>
      </C.UserMainInfo>
      <C.ShowDate>
        {calculateDateFormat(startDate) + " ~ " + calculateDateFormat(endDate)}
      </C.ShowDate>
    </>
  );
};

export default UserCategory;
