import styled from "styled-components";

export const List = styled.div`
  width: 100%;
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
  display: flex;
  flex-wrap: wrap;
`;

export const BoxContainer = styled.div`
  width: 290px;
  height: 357px;
  display: flex;
  align-items: center;
  justify-content: center;

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

  div[id="brandInfo"] {
    width: 263px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

    div[id="date"] {
      width: 184px;
      height: 21px;
    }
  }
`;
