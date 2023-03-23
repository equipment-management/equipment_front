import styled from "styled-components";

export const Filter = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(249, 248, 252);
`;

export const ListContainer = styled.div`
  width: 418px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -11px;

  border-radius: 10px 0px 10px 10px;
  background-color: white;
`;

export const List = styled.div`
  width: 300px;
  height: 67px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
  }

  p {
    min-width: 70px;
    margin-left: 24px;
  }
`;

export const buttomSplit = styled.div`
  width: 300px;
  height: 2px;
  background-color: #ebebf0;
`;

export const Split = styled.div`
  width: 2px;
  height: 70px;

  background-color: #ebebf0;
`;

export const MainInfo = styled.div`
  width: 790px;
  height: 70px;

  display: flex;
  align-items: center;

  border-radius: 10px 0px 0px 10px;
  background-color: #fff;
`;

export const Category = styled.div`
  width: 427px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  p {
    margin-left: 24px;
    font-size: 15px;
    color: #000000;
  }
`;

export const CalendarRoot = styled.div`
  width: 178px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  position: relative;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const CalendarMain = styled.div`
  height: 30px;
  font-weight: 400;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);

  p {
    margin: 0;
  }
`;

export const CalendarContainer = styled.div`
  position: absolute;
  top: 0px;
  z-index: 1;
`;

export const ShowDate = styled.div``;
