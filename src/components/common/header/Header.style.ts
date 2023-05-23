import styled from "styled-components";

export const Header = styled.div`
  height: 100px;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  /* position: fixed; */
  top: 0;
  z-index: 999;

  background-color: white;

  .selected {
    color: #000000;
  }
`;

export const Container = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  position: relative;

  #request {
    width: 10%;
  }

  #requestDetail {
    width: 13%;
  }
`;

export const Name = styled.div`
  width: 17%;
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 20px;
  color: #000000;

  img {
    width: 40px;
    height: 40px;
  }
`;

export const ListName = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.4);

  cursor: pointer;
`;

export const Admin = styled.div`
  width: 300px;
  display: flex;
  align-items: center;

  cursor: pointer;
  p {
    color: rgba(0, 0, 0, 0.4);
    font-weight: 600;
    font-size: 18px;
    margin-left: 25px;
  }
`;

export const Profile = styled.div`
  position: absolute;
  right: 0px;

  img {
    width: 55px;
    height: 55px;
    border-radius: 15px;

    background-color: blanchedalmond;
  }
`;
