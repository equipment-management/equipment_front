import styled from "styled-components";

export const ListContainer = styled.div`
  width: 427px;
  /* height: 300px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -11px;

  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px 0px 10px 10px;
`;

export const Lists = styled.div`
  & + & {
    border-top: 2px solid #ebebf0;
  }
`;

export const List = styled.div`
  width: 300px;
  height: 67px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30px;
    height: 30px;
  }

  p {
    min-width: 70px;
    margin-left: 24px;
  }
`;

export const Split = styled.div`
  width: 2px;
  height: 70px;

  background-color: #ebebf0;
`;

export const UserMainInfo = styled.div`
  width: 790px;
  height: 70px;

  display: flex;
  align-items: center;

  border-radius: 10px 0px 0px 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background-color: white;
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

  img {
    width: 30px;
    height: 30px;
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
  top: 70px;
  z-index: 1;
`;

export const ShowDate = styled.div`
  width: 362px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0px 10px 10px 0px;
  margin-left: 10px;

  font-weight: 600;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.5);
`;

export const AdminMainContainer = styled.div`
  position: relative;
`;

export const AdminMain = styled.div`
  width: 790px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  p {
    margin-left: 24px;
    font-size: 15px;
    color: #000000;
  }
`;

export const AdminListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0px;

  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const AdminList = styled.div`
  width: 550px;
  height: 67px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30px;
    height: 30px;
  }

  p {
    min-width: 70px;
    margin-left: 24px;
  }
`;
