import styled from "styled-components";
import approve from "../../../assets/Admin/List/approve.svg";
import refuse from "../../../assets/Admin/List/refuse.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
`;

export const Option = styled.div`
  width: 553px;
  height: 98px;
  display: flex;
  align-items: end;
  justify-content: space-evenly;

  cursor: pointer;

  div {
    width: 160px;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .selected {
    background: #e4e4e4;
  }
`;

export const MainList = styled.div`
  width: 90%;
`;

export const List = styled.div`
  height: 100px;

  background: #f9f9fb;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */

  margin-top: 30px;

  p,
  .name,
  .reason,
  .equipment,
  .state,
  .date {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  img {
    width: 80px;
    height: 80px;
  }

  p {
    font-family: "Noto Rashi Hebrew";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    color: #000000;
  }

  .name {
    padding-left: 30px;
    width: 15vw;
  }

  .reason {
    width: 25vw;
  }

  .equipment {
    width: 13vw;
  }

  .state {
    width: 7vw;
  }

  .date {
    width: 19vw;
    display: flex;
    justify-content: flex-end;
  }

  /* & + & {
    margin-top: 30px;
  } */
`;

export const ApproveRefuse = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 20px;
  width: 10vw;

  button {
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #f9f9fb;
    border: none;
    cursor: pointer;
  }

  #X {
    background-image: url(${refuse});
  }

  #O {
    background-image: url(${approve});
  }
`;
