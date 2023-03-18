import styled from "styled-components";

export const Header = styled.div`
  height: 110px;
  width: 100vw;

  display: flex;
  align-items: center;
  position: absolute;

  font-family: "Noto Rashi Hebrew";

  h3 {
    margin: 0;
  }
`;

export const Name = styled.div`
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

export const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;

  background-color: blanchedalmond;
`;
