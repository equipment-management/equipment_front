import styled from "styled-components";

export const RentBox = styled.div`
  display: flex;
  justify-content: center;

  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 1300px;
  height: 800px;

  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.04);
  border-radius: 30px;
`;

export const RentContainer = styled.div`
  width: 1120px;
  height: 560px;

  display: flex;
  flex-direction: column;
  margin-top: 70px;

  div[id="brandInfo"] {
    height: 47px;
    width: 100%;
    display: flex;

    align-items: center;
    justify-content: space-between;

    font-weight: 400;
    font-size: 40px;

    p {
      /* margin-top: 40px; */
    }

    p[id="name"] {
      /* padding-left: 30px; */
    }

    p[id="brand"] {
      /* padding-right: 30px; */
    }
  }

  div[id="main"] {
    display: flex;

    img[id="itme"] {
      width: 500px;
      height: 500px;
    }
  }

  textarea {
    width: 550px;
    height: 200px;
    margin-top: 105px;

    box-shadow: inset 0.5px 0.5px 5px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    border-radius: 20px;
    border: none;
    outline: none;

    padding-left: 18px;
    padding-top: 14px;

    font-weight: 400;
    font-size: 20px;
    color: black;
    resize: none;
  }
`;

export const CalendarContainer = styled.div`
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 39px;

  div {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      margin-right: 5px;
    }

    div {
      display: flex;
      flex-direction: column;

      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: rgba(0, 0, 0, 0.5);
      p {
        margin: 0;
      }
    }
  }
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 60px;

  button {
    width: 200px;
    height: 50px;

    background: #0f2d81;
    border-radius: 10px;
    border: none;

    font-weight: 700;
    font-size: 25px;
    color: #ffffff;

    cursor: pointer;
  }
`;
