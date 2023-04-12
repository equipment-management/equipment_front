import styled from "styled-components";

export const List = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: "Noto Rashi Hebrew";
    font-weight: 700;
    font-size: 40px;
    color: #000000;

    margin-top: 70px;
    margin-bottom: 70px;
  }
`;

export const ListContainer = styled.div`
  width: 1460px;
  height: auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 50px;
`;

export const BoxContainer = styled.div`
  width: 290px;
  height: 357px;
  display: flex;
  align-items: center;
  justify-content: center;

  justify-self: center;

  background: #f9f9fb;
  border-radius: 10px;
`;

export const Box = styled.div`
  width: 263px;
  height: 327px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 190px;
    height: 160px;
  }

  div[id="brandInfo"] {
    width: 263px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      margin-top: 40px;
    }

    p[id="name"] {
      padding-left: 30px;
    }

    p[id="brand"] {
      padding-right: 30px;
    }
  }

  div[id="info"] {
    width: 263px;
    display: flex;
    align-items: center;
    justify-content: center;

    div[id="category"] {
      width: 100px;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 700;
      font-size: 10px;
      color: #000000;

      background-color: #f8d387;
      border-radius: 20px;
    }

    div[id="cnt"] {
      width: 40px;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;

      margin-left: 10px;
      background: #ffffff;
      box-shadow: 0.5px 0.5px 5px 0.5px rgba(0, 0, 0, 0.1);
      border-radius: 20px;

      img {
        width: 10px;
        height: 10px;
      }

      p {
        margin-left: 7px;
        font-weight: 700;
        font-size: 10px;
        color: #000000;
      }
    }
  }

  div[id="date"] {
    width: 184px;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 29px;

    font-style: normal;
    font-weight: 700;
    font-size: 10px;

    p {
      margin: 0;
      font-size: 8px;
    }

    div[id="start"] {
    }

    div[id="eq"] {
      width: 20px;
      height: 2px;
      background: black;
      border-radius: 2px;
    }

    div[id="end"] {
    }
  }

  button {
    width: 262px;
    height: 36px;
    background: #0f2d81;
    border-radius: 10px;
    border: none;
    margin-top: 29px;

    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #ffffff;

    cursor: pointer;
    :hover {
      transition: 0.5s;
      background-color: skyblue;
    }
  }

  #standby {
    background-color: rgba(15, 45, 129, 0.4);
    color: #000000;
  }
`;

export const RentBox = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 1300px;
  height: 800px;

  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.04);
  border-radius: 30px;
`;
