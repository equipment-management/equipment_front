import styled from "styled-components";

export const Register = styled.div`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 700px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.04);
  border-radius: 30px;

  font-family: "Noto Rashi Hebrew";
  font-style: normal;
  font-weight: 300;

  p {
    font-size: 25px;
    color: #000000;
  }

  & > button {
    border: none;
    background-color: white;
    position: absolute;
    top: 30px;
    right: 40px;
    cursor: pointer;
  }
`;

export const Margin = styled.div`
  width: 601px;
  height: 343px;

  & > p {
    margin-top: 40px;
  }
  #name {
    margin-top: 45px;
    margin-bottom: 45px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 585px;
  height: 189px;
`;

export const BrandImage = styled.div`
  width: 351px;
  height: 189px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  #inputFile {
    display: none;
  }

  label {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 350px;
    height: 40px;

    background: #ffffff;
    border: 1px solid #c9c5c5;
    border-radius: 10px;
    box-sizing: border-box;

    p {
      font-size: 13px;
      padding-left: 22px;

      overflow: hidden;
    }

    img {
      width: 25px;
      height: 25px;
      padding-right: 22px;
    }
  }

  button {
    width: 350px;
    height: 40px;

    background: #ffffff;
    border: 1px solid #c9c5c5;
    border-radius: 10px;

    font-size: 15px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`;

export const Input = styled.input`
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
  outline: none;

  font-size: 20px;
  color: black;

  width: ${(props) => props.width};
`;

export const SelectContainer = styled.div`
  border-width: 1px;
  border-color: black;
  border-radius: 10px;

  width: 200px;
  height: 180px;
  display: flex;
  flex-direction: column;

  justify-content: center;

  background: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-color: #c9c5c5;
  border-radius: 10px;

  button {
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: white;
  }
  button[class="selected"] {
    color: #0f2d81;
    font-weight: bolder;
    font-size: 20px;
  }
`;

export const Btn = styled.div`
  & + & {
    border-top: 1px solid #c9c5c5;
  }
`;
