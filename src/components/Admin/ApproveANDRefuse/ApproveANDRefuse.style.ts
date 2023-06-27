import styled from "styled-components";
import approve from "../../../assets/Admin/List/approve.svg";
import refuse from "../../../assets/Admin/List/refuse.svg";

export const ApproveANDRefuse = styled.div`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MiniBox = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.04);
  border-radius: 30px;

  font-size: 30px;
`;

type WidthProps = {
  width: string;
};

export const ApproveRefuse = styled.div<WidthProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width};

  #X {
    background-image: url(${refuse});
  }

  #O {
    background-image: url(${approve});
  }
`;

export const Btn = styled.button<WidthProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  background-size: ${(props) => props.width} ${(props) => props.width};
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  border: none;
  cursor: pointer;
`;

export const Approve = styled(MiniBox)`
  width: 1300px;
  height: 500px;
  display: flex;

  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 25px;
  color: #000000;

  & > div {
    width: 1200px;
    height: 390px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div[id="info"] {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    div[id="NFC"] {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 560px;

      button {
        width: 300px;
        height: 50px;
        background: #ffffff;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        border: none;
        cursor: pointer;
      }

      p {
        font-size: 15px;
      }
    }
  }
`;

export const ApproveRefuseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
