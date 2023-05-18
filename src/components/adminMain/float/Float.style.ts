import styled from "styled-components";

export const Float = styled.div`
  display: flex;
  justify-content: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FristBox = styled.div`
  width: 1300px;
  height: 500px;
`;

export const SecondeBox = styled.div`
  width: 600px;
  height: 200px;

  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.04);
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-weight: 400;
  font-size: 30px;
  color: #000000;

  img {
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  div {
    width: 200px;

    margin-top: 26px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const RegisterBox = styled.div``;
