import * as F from "./Filter.style";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { LendDate, EqList } from "../../../store/main/atom";
import { userInfo } from "../../../store/user/atom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import CategoryImg from "../../../assets/main/category.svg";
import DalYuck from "../../../assets/main/calendar.svg";

const Filter = () => {
  const [date, setDate] = useRecoilState(LendDate);
  const [list, setList] = useRecoilState(EqList);
  const [user, setUser] = useRecoilState(userInfo);
  const [toggle, setToggle] = useState(false);
  const [selectList, setSelectList] = useState("스마트폰");
  const [startToggle, setStartToggle] = useState(false);
  const [endToggle, setEndToggle] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [maxEndDate, setMaxEndDate] = useState(new Date());
  const [minDate, setMinDate] = useState(new Date());

  const dateFormat = (date: any) => {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;
    return date.getFullYear() + "-" + month + "-" + day;
  };

  const CountMaxDate = (e: Date) => {
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
    setDate({ ...date, end: `${dateFormat(startDate)}` });
  }, [startDate]);

  useEffect(() => {
    console.log(date);
  }, [date]);

  const UserMain = () => {
    return (
      <>
        <F.UserMainInfo>
          <F.Category
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <img src={CategoryImg} />
            <p>{selectList}</p>
            {toggle && (
              <F.ListContainer>
                {list.map((i, idx) => (
                  <F.Lists
                    key={idx}
                    onClick={(e) => {
                      setToggle(!toggle);
                      setSelectList(i);
                      e.stopPropagation();
                    }}
                  >
                    <F.List>
                      <img src={CategoryImg} />
                      <p>{i}</p>
                    </F.List>
                  </F.Lists>
                ))}
              </F.ListContainer>
            )}
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
                    setDate({ ...date, start: `${dateFormat(e)}` });
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
                    setDate({ ...date, end: `${dateFormat(e)}` });
                    setEndToggle(!endToggle);
                  }}
                />
              )}
            </F.CalendarContainer>
          </F.CalendarRoot>
        </F.UserMainInfo>
        <F.ShowDate>
          {dateFormat(startDate) + " ~ " + dateFormat(endDate)}
        </F.ShowDate>
      </>
    );
  };

  const AdminMain = () => {
    return (
      <F.AdminMainContainer>
        <F.AdminMain
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <img src={CategoryImg} />
          <p>{selectList}</p>
          {toggle && (
            <F.AdminListContainer>
              {list.map((i, idx) => (
                <F.Lists
                  key={idx}
                  onClick={(e) => {
                    setToggle(!toggle);
                    setSelectList(i);
                    e.stopPropagation();
                  }}
                >
                  <F.AdminList>
                    <img src={CategoryImg} />
                    <p>{i}</p>
                  </F.AdminList>
                </F.Lists>
              ))}
            </F.AdminListContainer>
          )}
        </F.AdminMain>
      </F.AdminMainContainer>
    );
  };

  return (
    <F.Filter>
      {user.admin ? <AdminMain /> : <UserMain />}
      <F.SearchBtn />
    </F.Filter>
  );
};

export default Filter;
